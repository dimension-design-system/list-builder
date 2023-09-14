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
    });
    this.setState(() => {
      return newState;
    });
  };

  handleDeleteButtonClick = (id) => {
    const indexToRemove =
      this.state.columns["column-2"].taskIds.indexOf(id);
      const newState = this.state;
      if (indexToRemove !== -1) {
        newState.columns["column-2"].taskIds.splice(indexToRemove, 1);
        newState.columns["column-1"].taskIds.push(id);
      }
    this.setState(() => {
      return newState;
    });
  }

  onDragStart = (start) => {
    // document.body.style.color = "orange";
    // document.body.style.transition = "background-color 0.2s ease";

    const homeIndex = this.state.columnOrder.indexOf(start.source.droppableId);

    this.setState({
      homeIndex,
    });
  };

  onDragUpdate = (update) => {
    // const { destination } = update;
    // const opacity = destination
    //   ? destination.index / Object.keys(this.state.tasks).length
    //   : 0;
    // document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
  };

  onDragEnd = (result) => {
    this.setState({
      homeIndex: null,
    });
    // document.body.style.color = "inherit";
    // document.body.style.backgroundColor = "inherit";

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
        } 
      }
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
            tasks={this.state.columns["column-1"].taskIds.map(
              (taskId) => this.state.tasks[taskId]
            )}
            onCheckboxChange={this.handleCheckboxChange}
            onSelectAllChange={this.handleSelectAllChange}
            onAddToGroupClick={this.handleAddToGroupClick}
          />
          <ColumnGroups
            id={this.state.columns["column-2"].id}
            column={this.state.columns["column-2"]}
            tasks={this.state.columns["column-2"].taskIds.map(
              (taskId) => this.state.tasks[taskId]
            )}
            onCheckboxChange={this.handleCheckboxChange}
            onDeleteButtonClick={this.handleDeleteButtonClick}
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
