import React from "react";
import ReactDOM from "react-dom";
import "@atlaskit/css-reset";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";

import initialData from "./initial-data";
import Column from "./column";
import ColumnGroups from "./column-groups";

const Container = styled.div`
  display: flex;
  font-family: "Roboto", sans-serif;
`;
const propertyToSort = "accountName";

class App extends React.Component {
  state = initialData;

  handleCheckboxChange = (id, selected) => {
    this.setState((prevState) => {
      const updatedCheckboxItems = { ...prevState.tasks };
      for (const taskId in updatedCheckboxItems) {
        if (taskId === id) {
          updatedCheckboxItems[id].selected = selected;
        }
      }

      return { tasks: updatedCheckboxItems };
    });
  };

  handleSelectAllChange = (selectAllBoolean) => {
    this.setState((prevState) => {
      const updatedCheckboxItems = { ...prevState.tasks };
      for (const task in updatedCheckboxItems) {
        if (selectAllBoolean) {
          updatedCheckboxItems[task].selected = true;
        } else {
          updatedCheckboxItems[task].selected = false;
        }
      }
      return { tasks: updatedCheckboxItems };
    });
  };

  columnsTasks() {
    return this.state.columns["column-1"].taskIds.map(
      (taskId) => this.state.tasks[taskId]
    );
  }

  handleSortTasks(order) {
    // Create a copy of the columns object
    const sortedColumns = { ...this.state.columns };
    // Sort the taskIds array of the specified column
    let columnId = "column-1";
    sortedColumns[columnId].taskIds.sort((a, b) => {
      const taskA = this.state.tasks[a];
      const taskB = this.state.tasks[b];

      // Adjust the property you want to sort by (e.g., accountName)
      const comparisonValue = taskA.accountName.localeCompare(
        taskB.accountName
      );

      if (order === "ascending") {
        return comparisonValue;
      } else if (order === "descending") {
        return comparisonValue * -1; // Reverse the order for descending
      } else {
        return 0; // No change if `order` is invalid
      }
    });

    // Update the state with the sorted columns
    this.setState({ columns: sortedColumns });
  }

  handleAddToGroupClick = () => {
    const previousStateTasks = this.state.tasks;
    let keysToMove = [];
    for (const taskId in previousStateTasks) {
      if (previousStateTasks[taskId].selected) {
        keysToMove.push(taskId);
      }
    }
    const newState = this.state;
    keysToMove.forEach((item) => {
      const indexToRemove =
        this.state.columns["column-1"].taskIds.indexOf(item);
      if (indexToRemove !== -1) {
        newState.columns["column-1"].taskIds.splice(indexToRemove, 1);
        newState.columns["column-2"].taskIds.push(item);
      }
      newState.tasks[item].selected = false;
    });
    this.setState(() => {
      return newState;
    });
  };

  handleDeleteButtonClick = (id) => {
    const indexToRemove = this.state.columns["column-2"].taskIds.indexOf(id);
    const newState = this.state;
    if (indexToRemove !== -1) {
      newState.columns["column-2"].taskIds.splice(indexToRemove, 1);
      newState.columns["column-1"].taskIds.push(id);
    }
    this.setState(() => {
      return newState;
    });
  };

  handleRemoveAllAccountsClick = () => {
    const newState = this.state;
    newState.columns["column-2"].taskIds.forEach((item) => {
      newState.columns["column-1"].taskIds.push(item);
    });
    newState.columns["column-2"].taskIds = [];
    this.setState(() => {
      return newState;
    });
  };

  onDragStart = (start) => {
    const homeIndex = this.state.columnOrder.indexOf(start.source.droppableId);

    this.setState({
      homeIndex,
      isDragging: true,
    });
  };

  onDragUpdate = (update) => {
    const { destination } = update;
  };

  onDragEnd = (result) => {
    this.setState({
      homeIndex: null,
      isDragging: false,
    });

    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...this.state,
        isDragging: false,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };

      this.setState(newState);
      return;
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...this.state,
      isDragging: false,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
      tasks: {
        ...this.state.tasks,
        [draggableId]: {
          ...this.state.tasks[draggableId],
          selected: false,
        },
      },
    };
    this.setState(newState);
  };

  render() {
    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragUpdate={this.onDragUpdate}
        onDragEnd={this.onDragEnd}
      >
        <Container>
          <Column
            id={this.state.columns["column-1"].id}
            column={this.state.columns["column-1"]}
            tasks={this.columnsTasks()}
            onCheckboxChange={this.handleCheckboxChange}
            onSelectAllChange={this.handleSelectAllChange}
            onAddToGroupClick={this.handleAddToGroupClick}
            onSort={(order) => {
              this.handleSortTasks(order);
            }}
          />
          <ColumnGroups
            id={this.state.columns["column-2"].id}
            column={this.state.columns["column-2"]}
            tasks={this.state.columns["column-2"].taskIds.map(
              (taskId) => this.state.tasks[taskId]
            )}
            onCheckboxChange={this.handleCheckboxChange}
            onDeleteButtonClick={this.handleDeleteButtonClick}
            onRemoveAllAccountsClick={this.handleRemoveAllAccountsClick}
            search={false}
            isDragging={this.state.isDragging}
          />
        </Container>
      </DragDropContext>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
