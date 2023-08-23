import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Account from "./account";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px;
  border: 1px solid var(--neutrals-grey-300, #e0e0e0);
  border-radius: 10px;
  padding: 24px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const AccountList = styled.div`
  border-top: 1px solid var(--neutrals-grey-300, #e0e0e0);
  flex-grow: 1;
  height: 500px;
  overflow: scroll;
  overflow-x: hidden;
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
            <AccountList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.tasks.map((task, index) => (
                <Account key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </AccountList>
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
