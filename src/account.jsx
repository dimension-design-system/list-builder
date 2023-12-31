import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  padding: 8px 0;
  border-top: 1px solid var(--neutrals-grey-300, #e0e0e0);
  background: var(--neutrals-grey-00, #fff);
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background: var(--neutrals-grey-100, #f5f5f5);
    cursor: pointer;
  }
`;
const CheckBox = styled.input`
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
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z' fill='%23007DB8'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 22px 22px;
  }
`;
const Heading = styled.h3`
  color: var(--neutrals-grey-900, #212121);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  line-clamp: 1;
  -webkit-box-orient: vertical;
`;
const SubText = styled.p`
  color: var(--neutrals-dark-grey, #757575);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  margin-top: 4px;
`;
const RegularText = styled.p`
  color: var(--neutrals-grey-900, #212121);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Handle = styled.div`
  width: 24px;
  height: 24px;
  align-self: center;
  background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='drag_indicator' clip-path='url(%23clip0_271_5107)'%3E%3Cpath id='Vector' d='M11 18C11 19.1 10.1 20 9 20C7.9 20 7 19.1 7 18C7 16.9 7.9 16 9 16C10.1 16 11 16.9 11 18ZM9 10C7.9 10 7 10.9 7 12C7 13.1 7.9 14 9 14C10.1 14 11 13.1 11 12C11 10.9 10.1 10 9 10ZM9 4C7.9 4 7 4.9 7 6C7 7.1 7.9 8 9 8C10.1 8 11 7.1 11 6C11 4.9 10.1 4 9 4ZM15 8C16.1 8 17 7.1 17 6C17 4.9 16.1 4 15 4C13.9 4 13 4.9 13 6C13 7.1 13.9 8 15 8ZM15 10C13.9 10 13 10.9 13 12C13 13.1 13.9 14 15 14C16.1 14 17 13.1 17 12C17 10.9 16.1 10 15 10ZM15 16C13.9 16 13 16.9 13 18C13 19.1 13.9 20 15 20C16.1 20 17 19.1 17 18C17 16.9 16.1 16 15 16Z' fill='%23757575'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_271_5107'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
`;

const RowSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  padding: 0 8px;
  margin-right: 18px;
`;
const AccountInformation = styled(RowSection)`
  flex: 1;
`;
const CompanyInformation = styled(RowSection)`
  flex: 1;
`;
const CurrencyInformation = styled(RowSection)`
  flex: 0;
`;
const SVBInformation = styled(RowSection)`
  flex: 0;
`;
const DeleteButton = styled.button`
  width: 20px;
  height: 20px;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9.99984 1.6665C5.3915 1.6665 1.6665 5.3915 1.6665 9.99984C1.6665 14.6082 5.3915 18.3332 9.99984 18.3332C14.6082 18.3332 18.3332 14.6082 18.3332 9.99984C18.3332 5.3915 14.6082 1.6665 9.99984 1.6665ZM12.1582 6.66649L9.99989 8.82483L7.84156 6.66649L6.66655 7.84149L8.82489 9.99983L6.66655 12.1582L7.84156 13.3332L9.99989 11.1748L12.1582 13.3332L13.3332 12.1582L11.1749 9.99983L13.3332 7.84149L12.1582 6.66649ZM3.3334 9.99981C3.3334 13.6748 6.32507 16.6665 10.0001 16.6665C13.6751 16.6665 16.6667 13.6748 16.6667 9.99981C16.6667 6.32481 13.6751 3.33315 10.0001 3.33315C6.32507 3.33315 3.3334 6.32481 3.3334 9.99981Z' fill='%23007DB8'/%3E%3C/svg%3E%0A");
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
`;

export default class Account extends React.Component {
  handleCheckboxChange = () => {
    const { id, onCheckboxChange, selected } = this.props;
    onCheckboxChange(id, !selected);
  };

  handleDeleteButtonClick = () => {
    const { id, onDeleteButtonClick } = this.props;
    onDeleteButtonClick(id);
  };

  render() {
    // const isDragDisabled = this.props.task.id === "task-1";
    return (
      <Draggable
        draggableId={this.props.task.id}
        index={this.props.index}
        // isDragDisabled={isDragDisabled}
      >
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            {...provided.dragHandleProps}
          >
            {!this.props.grouped && (
              <CheckBox
                type="checkbox"
                checked={this.props.selected}
                onChange={this.handleCheckboxChange}
              />
            )}
            {this.props.grouped && (
              <DeleteButton onClick={this.handleDeleteButtonClick} />
            )}
            <AccountInformation className="account-information">
              <Heading>{this.props.task.accountName}</Heading>
              <SubText>{this.props.task.accountNumber}</SubText>
            </AccountInformation>
            <CompanyInformation className="company-information">
              <RegularText>{this.props.task.companyName}</RegularText>
            </CompanyInformation>
            <CurrencyInformation>
              <RegularText>{this.props.task.currency}</RegularText>
            </CurrencyInformation>
            <SVBInformation>
              <RegularText>{this.props.task.accountType}</RegularText>
              <SubText>{this.props.task.accountNumber}</SubText>
            </SVBInformation>
            <Handle />
          </Container>
        )}
      </Draggable>
    );
  }
}
