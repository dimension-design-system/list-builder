import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Account from "./account";

const DebugContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const TopHalf = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 24px 0 24px;
  border-radius: 10px 10px 0 0;
  border: 1px solid var(--neutrals-grey-300, #e0e0e0);
  padding: 24px 24px 0 24px;
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
  padding: 8px 0;
`;
const SelectAllCheckbox = styled.input`
  margin: 0 4px;
`;
const SelectAllText = styled.span`
  color: var(--neutrals-grey-900, #212121);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-left: 8px;
`;
const BottomHalf = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 0 10px 10px;
  padding: 16px 0;
  border: 1px solid var(--neutrals-grey-300, #e0e0e0);
  border-top: none;
  margin: 0 24px 24px 24px;
  padding: 16px 24px;
`;
const TotalAccountsSelected = styled.h3`
  color: #000;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`;
const AddToGroupButton = styled.button`
  border-radius: 4px;
  border: 2px solid var(--primary-primary-500, #007db8);
  display: flex;
  height: 30px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background-color: #fff;
  color: var(--primary-primary-500, #007db8);
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
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
      <DebugContainer>
        <Container>
          <TopHalf>
            <Title>{this.props.column.title}</Title>
            <ActionBar>
              <input type="text"></input>
              <button>filter</button>
              <button>sort</button>
            </ActionBar>
            <SelectAll>
              <SelectAllCheckbox
                type="checkbox"
                id="select-all"
                name="select-all"
                onChange={this.handleSelectAllChange}
                checked={this.state.selectAll}
              />
              <SelectAllText>Select All Accounts</SelectAllText>
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
          </TopHalf>
          <BottomHalf>
            <TotalAccountsSelected>0 Accounts Selected</TotalAccountsSelected>
            <AddToGroupButton>Add to Group</AddToGroupButton>
          </BottomHalf>
        </Container>
        <pre>{"selectAll: " + this.state.selectAll}</pre>
      </DebugContainer>
    );
  }
}
