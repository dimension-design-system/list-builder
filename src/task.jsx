import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${(props) =>
    props.isDragDisabled
      ? "lightgrey"
      : props.isDragging
      ? "lightgreen"
      : "white"};

  display: flex;
  justify-content: space-between;
`;

const Handle = styled.div`
  width: 24px;
  height: 24px;
  background-color: orange;
  background-image: url('data:image/svg+xml,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(%23clip0_436_2877)"><path d="M11 18C11 19.1 10.1 20 9 20C7.9 20 7 19.1 7 18C7 16.9 7.9 16 9 16C10.1 16 11 16.9 11 18ZM9 10C7.9 10 7 10.9 7 12C7 13.1 7.9 14 9 14C10.1 14 11 13.1 11 12C11 10.9 10.1 10 9 10ZM9 4C7.9 4 7 4.9 7 6C7 7.1 7.9 8 9 8C10.1 8 11 7.1 11 6C11 4.9 10.1 4 9 4ZM15 8C16.1 8 17 7.1 17 6C17 4.9 16.1 4 15 4C13.9 4 13 4.9 13 6C13 7.1 13.9 8 15 8ZM15 10C13.9 10 13 10.9 13 12C13 13.1 13.9 14 15 14C16.1 14 17 13.1 17 12C17 10.9 16.1 10 15 10ZM15 16C13.9 16 13 16.9 13 18C13 19.1 13.9 20 15 20C16.1 20 17 19.1 17 18C17 16.9 16.1 16 15 16Z" fill="%23323232"/></g><defs><clipPath id="clip0_436_2877"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>');
  border-radius: 4px;
  margin-right: 8px;
`;

const RowSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  padding: 8px 24px 8px 8px;
`;

export default class Task extends React.Component {
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
            <input type="checkbox" />
            <RowSection>
              <h3>{this.props.task.accountName}</h3>
              <p>{this.props.task.accountNumber}</p>
            </RowSection>
            <RowSection>
              <p>{this.props.task.companyName}</p>
            </RowSection>
            <RowSection>
              <p>{this.props.task.currency}</p>
            </RowSection>
            <RowSection>
              <p>{this.props.task.accountType}</p>
              <p>{this.props.task.accountNumber}</p>
            </RowSection>
            <Handle {...provided.dragHandleProps} />
          </Container>
        )}
      </Draggable>
    );
  }
}
