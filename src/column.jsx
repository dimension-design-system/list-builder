import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Task from "./task";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 588px;
  margin: 12px;
  border: 1px solid var(--neutrals-grey-300, #e0e0e0);
  border-radius: 10px;
  padding: 24px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) => (props.isDraggingOver ? "skyblue" : "white")};
  flex-grow: 1;
  min-height: 500px;
`;
const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;
  width: 540px;
  height: 32px;
  padding: 4px 8px 4px 4px;
  border-radius: 4px;
  background: var(--neutrals-grey-100, #f5f5f5);
`;
const SelectAll = styled.div`
  width: 100%;
  padding: 4px 8px 4px 4px;
`;
const AddToGroupBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default class Column extends React.Component {
  state = {
    selectAll: false,
  };

  handleSelectAllChange = () => {
    this.setState(
      (prevState) => ({
        selectAll: !prevState.selectAll,
      }),
      () => {}
    );
  };

  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <ActionBar>
          <input type="text"></input>
          <button>filter</button>
          <button>sort</button>
        </ActionBar>
        <pre>{"select all state " + this.state.selectAll}</pre>
        <SelectAll>
          <input
            type="checkbox"
            id="select-all"
            name="select-all"
            onChange={this.handleSelectAllChange}
            checked={this.state.selectAll}
          />
          <label for="select-all">Select All Accounts</label>
        </SelectAll>
        <Droppable
          droppableId={this.props.column.id}
          isDropDisabled={this.props.isDropDisabled}
          // type={this.props.column.id === "column-3" ? "done" : "active"}
        >
          {(provided, snapshot) => (
            <TaskList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
        <AddToGroupBar>
          <h3>0 Accounts Selected</h3>
          <button>Add to Group</button>
        </AddToGroupBar>
      </Container>
    );
  }
}
