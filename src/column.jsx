import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Account from "./account";
import SortComponent from "./SortComponent";

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
  width: 600px;
`;
const AccountList = styled.div`
  flex-grow: 1;
  height: 500px;
  overflow: scroll;
  overflow-x: hidden;
  padding-bottom: 40px;
  padding-right: 24px;
  margin-right: -24px;
`;
const ActionBar = styled.div`
  width: -webkit-calc(100% - 12px);
  width: -moz-calc(100% - 12px);
  width: calc(100% - 12px);
  display: flex;
  justify-content: space-between;
  align-self: center;
  height: 32px;
  padding: 4px 8px 4px 4px;
  border-radius: 4px;
  background: var(--neutrals-grey-100, #f5f5f5);
  margin-bottom: 24px;
`;
const ActionBarSearch = styled.input`
  display: flex;
  flex: 1;
  padding: 4px 8px 4px 36px;
  border: none;
  border-radius: 2px;
  background: #fff
    url("data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.71 14H15.5L20.49 19L19 20.49L14 15.5V14.71L13.73 14.43C12.59 15.41 11.11 16 9.5 16C5.91 16 3 13.09 3 9.5C3 5.91 5.91 3 9.5 3C13.09 3 16 5.91 16 9.5C16 11.11 15.41 12.59 14.43 13.73L14.71 14ZM5 9.5C5 11.99 7.01 14 9.5 14C11.99 14 14 11.99 14 9.5C14 7.01 11.99 5 9.5 5C7.01 5 5 7.01 5 9.5Z' fill='%23757575'/%3e%3c/svg%3e")
    no-repeat 8px center;
  &::placeholder {
    color: var(--neutrals-grey-500, #9e9e9e);
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
`;
const ActionBarButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0;
  padding: 8px;
  height: 32px;
  color: var(--primary-primary-500, #007db8);
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  border: none;
  cursor: pointer;
  background-color: inherit;
  img {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`;
const ActionBarFilter = styled(ActionBarButton)`
  margin-left: 34px;
`;
const SelectAll = styled.div`
  padding: 8px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const SelectAllCheckbox = styled.input`
  margin: 0 4px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 2px solid #9e9e9e;
  border-radius: 2px;
  width: 18px;
  height: 18px;
  transition: all 150ms;
  &:checked {
    border: none;
    ${(props) =>
      props.selectAllValue === true
        ? `background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z' fill='%23007DB8'/%3E%3C/svg%3E");`
        : `background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3Z' fill='%23007DB8'/%3E%3Crect x='5' y='11' width='14' height='2' fill='white'/%3E%3C/svg%3E")`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: 22px 22px;
  }
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
  cursor: pointer;
  border-radius: 4px;
  border: 2px solid var(--primary-primary-500, #007db8);
  display: flex;
  height: 32px;
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
  constructor(props) {
    super(props);

    this.state = {
      filterValue: "",
      tasks: props.tasks,
      sort: null,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.tasks !== this.props.tasks) {
      this.setState({
        tasks: this.props.tasks,
      });
    }
  }

  handleInputChange = (e) => {
    this.setState({
      filterValue: e.target.value,
    });
  };

  handleAddToGroup = () => {
    this.props.onAddToGroupClick();
  };

  handleCheckboxChange = (id, selected) => {
    this.props.onCheckboxChange(id, selected);
  };

  get selectAllValue() {
    let selectedCount = 0;
    const currentTasks = { ...this.props.tasks };
    for (const task in currentTasks) {
      if (currentTasks[task].selected === true) {
        selectedCount++;
      }
    }
    if (selectedCount === 0) {
      return false;
    } else if (selectedCount === this.props.tasks.length) {
      return true;
    } else {
      return null;
    }
  }

  handleSelectAllChange = () => {
    if (this.selectAllValue) {
      this.props.onSelectAllChange(false);
    } else {
      this.props.onSelectAllChange(true);
    }
  };

  handleSortTasks = (order) => {
    this.props.onSort(order);
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
        <Container>
          <TopHalf>
            <ActionBar>
              <ActionBarSearch
                type="text"
                placeholder="Search"
                value={filterValue}
                onChange={this.handleInputChange}
              ></ActionBarSearch>
              {/* <ActionBarFilter>
                <img src="data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_124_1537)'%3e%3cpath d='M2.83333 3.73984C4.18 5.4665 6.66666 8.6665 6.66666 8.6665V12.6665C6.66666 13.0332 6.96666 13.3332 7.33333 13.3332H8.66666C9.03333 13.3332 9.33333 13.0332 9.33333 12.6665V8.6665C9.33333 8.6665 11.8133 5.4665 13.16 3.73984C13.5 3.29984 13.1867 2.6665 12.6333 2.6665H3.36C2.80666 2.6665 2.49333 3.29984 2.83333 3.73984Z' fill='%23007DB8'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_124_1537'%3e%3crect width='16' height='16' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" />
                Filter
              </ActionBarFilter> */}
              <SortComponent
                onSort={(order) => {
                  this.handleSortTasks(order);
                }}
              />
            </ActionBar>
            <SelectAll>
              <SelectAllCheckbox
                selectAllValue={this.selectAllValue}
                type="checkbox"
                id="select-all"
                name="select-all"
                onChange={this.handleSelectAllChange}
                checked={
                  this.selectAllValue === true || this.selectAllValue === null
                    ? true
                    : false
                }
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
                  {filteredTasks.map((task, index) => (
                    // {this.props.tasks.map((task, index) => (
                    <Account
                      key={task.id}
                      id={task.id}
                      task={task}
                      index={index}
                      onCheckboxChange={this.handleCheckboxChange}
                      selected={task.selected}
                      grouped={false}
                    />
                  ))}
                  {provided.placeholder}
                </AccountList>
              )}
            </Droppable>
          </TopHalf>
          <BottomHalf>
            <TotalAccountsSelected>
              {
                this.props.tasks.filter((task) => {
                  return !!task.selected;
                }).length
              }{" "}
              Accounts Selected
            </TotalAccountsSelected>
            <AddToGroupButton onClick={this.handleAddToGroup}>
              Add to Group
            </AddToGroupButton>
          </BottomHalf>
        </Container>
      </DebugContainer>
    );
  }
}
