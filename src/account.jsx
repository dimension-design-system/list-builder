import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  padding: 8px 0;
  border-bottom: 1px solid var(--neutrals-grey-300, #e0e0e0);
  background: var(--neutrals-grey-00, #fff);
  display: flex;
  justify-content: space-between;
  &:hover {
    background: var(--neutrals-grey-100, #f5f5f5);
    cursor: pointer;
  }
`;
const CheckBox = styled.input`
  margin: 0 4px;
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
  background-image: url('data:image/svg+xml,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(%23clip0_436_2877)"><path d="M11 18C11 19.1 10.1 20 9 20C7.9 20 7 19.1 7 18C7 16.9 7.9 16 9 16C10.1 16 11 16.9 11 18ZM9 10C7.9 10 7 10.9 7 12C7 13.1 7.9 14 9 14C10.1 14 11 13.1 11 12C11 10.9 10.1 10 9 10ZM9 4C7.9 4 7 4.9 7 6C7 7.1 7.9 8 9 8C10.1 8 11 7.1 11 6C11 4.9 10.1 4 9 4ZM15 8C16.1 8 17 7.1 17 6C17 4.9 16.1 4 15 4C13.9 4 13 4.9 13 6C13 7.1 13.9 8 15 8ZM15 10C13.9 10 13 10.9 13 12C13 13.1 13.9 14 15 14C16.1 14 17 13.1 17 12C17 10.9 16.1 10 15 10ZM15 16C13.9 16 13 16.9 13 18C13 19.1 13.9 20 15 20C16.1 20 17 19.1 17 18C17 16.9 16.1 16 15 16Z" fill="%23323232"/></g><defs><clipPath id="clip0_436_2877"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>');
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

export default class Account extends React.Component {
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
          >
            <CheckBox type="checkbox" checked={this.props.task.selected} />
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
            <Handle {...provided.dragHandleProps} />
          </Container>
        )}
      </Draggable>
    );
  }
}
