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
  height: 577px;
  flex-direction: column;
  margin: 24px 24px 0 24px;
  border-radius: 10px 10px 0 0;
  border: 1px solid var(--neutrals-grey-300, #e0e0e0);
  padding: 24px 24px 0 24px;
  width: 600px;
`;
const AccountList = styled.div`
  flex-grow: 1;
  height: 500px;
  overflow: scroll;
  overflow-x: hidden;
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
const GroupActionButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const GroupActionButton = styled.button`
  border-radius: 4px;
  display: flex;
  height: 30px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;
  justify-self: end;
`;
const CancelGroupButton = styled(GroupActionButton)`
  color: var(--primary-primary-500, #007db8);
  border: 2px solid var(--primary-primary-500, #007db8);
  background-color: #fff;
`;
const SaveGroupButton = styled(GroupActionButton)`
  color: var(--neutrals-grey-00, #fff);
  border: none;
  background: var(--primary-primary-500, #007db8);
  margin-left: 16px;
`;

export default class ColumnGroups extends React.Component {
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
            <label for="group-name">Group Name</label>
            <input id="group-name" name="group-name" type="text" />
            <label for="group-name">Ex. My Operating Accounts</label>
            <label for="group-name">Group Description</label>
            <input id="group-name" name="group-name" type="text" />
            <label for="group-name">Ex. My Operating Accounts</label>
            <input type="text" placeholder="Search" />
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
            <TotalAccountsSelected>0 Accounts in Group</TotalAccountsSelected>
            <GroupActionButtonsContainer>
              <CancelGroupButton>Cancel</CancelGroupButton>
              <SaveGroupButton>Save</SaveGroupButton>
            </GroupActionButtonsContainer>
          </BottomHalf>
        </Container>
        <pre>{"selectAll: " + this.state.selectAll}</pre>
      </DebugContainer>
    );
  }
}
