import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Account from "./account";
import containerBackgroundImage from "./container-background-image";

const DebugContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) =>
    Object.keys(props.tasks).length < 1 ? containerBackgroundImage : "none"};
  background-repeat: no-repeat;
  background-position: center 60%;
`;
const TopHalf = styled.div`
  display: flex;
  height: 616px;
  flex-direction: column;
  margin: 24px 24px 0 0;
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
  margin: 0 24px 24px 0;
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
const GroupInput = styled.input`
  border-radius: 4px;
  border: 1px solid var(--neutrals-grey-500, #9e9e9e);
  background: var(--neutrals-grey-00, #fff);
  display: flex;
  height: 48px;
  padding: 13px 16px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  color: var(--neutrals-grey-600, #757575);

  /* Desktop + Tablet (MD)/Body/Body 1 */
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
  flex: 1 0 0;
  margin-bottom: 4px;
`;
const GroupInputLabel = styled.label`
  flex: 1 0 0;
  color: var(--neutrals-grey-600, #757575);

  /* Desktop + Tablet (MD)/Body/Body 2 */
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  margin-bottom: 24px;
  margin-left: 16px;
`;
const GroupSearchInput = styled.input`
  background: transparent
    url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.71 14H15.5L20.49 19L19 20.49L14 15.5V14.71L13.73 14.43C12.59 15.41 11.11 16 9.5 16C5.91 16 3 13.09 3 9.5C3 5.91 5.91 3 9.5 3C13.09 3 16 5.91 16 9.5C16 11.11 15.41 12.59 14.43 13.73L14.71 14ZM5 9.5C5 11.99 7.01 14 9.5 14C11.99 14 14 11.99 14 9.5C14 7.01 11.99 5 9.5 5C7.01 5 5 7.01 5 9.5Z' fill='%23757575'/%3E%3C/svg%3E%0A")
    no-repeat 8px center;
  display: flex;
  padding: 12px 36px;
  align-items: flex-start;
  gap: 4px;
  border-radius: 4px;
  border: 1px solid var(--neutrals-grey-500, #9e9e9e);
  color: var(--neutrals-grey-500, #9e9e9e);

  /* Desktop + Tablet (MD)/Body/Body 1 */
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
  margin-bottom: 30px;
`;

const RemoveAllAccounts = styled.div`
  display: flex;
  flex-direction: row;
  color: var(--neutrals-grey-900, #212121);
  /* Desktop + Tablet (MD)/Body/Body 2 Medium */
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  margin-bottom: 8px;
`;

const DeleteButton = styled.button`
  width: 20px;
  height: 20px;
  background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.99996 0.666504C4.39163 0.666504 0.666626 4.3915 0.666626 8.99984C0.666626 13.6082 4.39163 17.3332 8.99996 17.3332C13.6083 17.3332 17.3333 13.6082 17.3333 8.99984C17.3333 4.3915 13.6083 0.666504 8.99996 0.666504ZM11.1583 5.66649L9.00001 7.82483L6.84168 5.66649L5.66668 6.84149L7.82501 8.99983L5.66668 11.1582L6.84168 12.3332L9.00001 10.1748L11.1583 12.3332L12.3333 11.1582L10.175 8.99983L12.3333 6.84149L11.1583 5.66649ZM2.33352 8.99981C2.33352 12.6748 5.32519 15.6665 9.00019 15.6665C12.6752 15.6665 15.6669 12.6748 15.6669 8.99981C15.6669 5.32481 12.6752 2.33315 9.00019 2.33315C5.32519 2.33315 2.33352 5.32481 2.33352 8.99981Z' fill='%23757575'/%3E%3C/svg%3E%0A");
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  margin-right: 8px;
`;

export default class ColumnGroups extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterValue: "",
    };
  }
  state = {
    selectAll: false,
  };

  handleCheckboxChange = (id, selected) => {
    this.props.onCheckboxChange(id, selected);
  };

  handleDeleteButtonClick = (id) => {
    this.props.onDeleteButtonClick(id);
  };

  handleSelectAllChange = () => {
    this.setState(
      (prevState) => ({
        selectAll: !prevState.selectAll,
      }),
      () => {}
    );
  };

  handleRemoveAllAccountsClick = () => {
    this.props.onRemoveAllAccountsClick();
  };

  handleInputChange = (e) => {
    this.setState({
      filterValue: e.target.value,
    });
  };

  render() {
    const { filterValue } = this.state;
    const filteredTasks = Object.values(this.props.tasks).filter((task) =>
      Object.values(task).some(
        (val) =>
          typeof val === "string" &&
          val.toLowerCase().includes(filterValue.toLowerCase())
      )
    );
    return (
      <DebugContainer>
        <Container tasks={this.props.tasks}>
          <TopHalf>
            <GroupInput placeholder="Group Name"></GroupInput>
            <GroupInputLabel for="group-name">Group Name</GroupInputLabel>
            <GroupInput placeholder="Group Description"></GroupInput>
            <GroupInputLabel for="group-name">
              Ex. My Operating Accounts
            </GroupInputLabel>
            {this.props.search && (
              <GroupSearchInput
                placeholder="Search"
                value={filterValue}
                onChange={this.handleInputChange}
              ></GroupSearchInput>
            )}
            {this.props.tasks.length > 0 && (
              <RemoveAllAccounts onClick={this.handleRemoveAllAccountsClick}>
                <DeleteButton />
                <span>Remove All Accounts</span>
              </RemoveAllAccounts>
            )}

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
                  {/* {this.props.tasks.map((task, index) => ( */}
                  {filteredTasks.map((task, index) => (
                    <Account
                      key={task.id}
                      id={task.id}
                      task={task}
                      index={index}
                      onCheckboxChange={this.handleCheckboxChange}
                      onDeleteButtonClick={this.handleDeleteButtonClick}
                      selected={task.selected}
                      grouped={true}
                    />
                  ))}
                  {provided.placeholder}
                </AccountList>
              )}
            </Droppable>
          </TopHalf>
          <BottomHalf>
            <TotalAccountsSelected>
              {this.props.tasks.length} Accounts in Group
            </TotalAccountsSelected>
            <GroupActionButtonsContainer>
              <CancelGroupButton>Cancel</CancelGroupButton>
              <SaveGroupButton>Save</SaveGroupButton>
            </GroupActionButtonsContainer>
          </BottomHalf>
        </Container>
        <pre></pre>
      </DebugContainer>
    );
  }
}
