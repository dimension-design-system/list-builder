import React, { Component } from "react";
import styled from "styled-components";

const SortSummon = styled.button`
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
  margin-left: 12px;
`;
const SortPopup = styled.div`
  position: absolute;
  display: flex;
  width: 140px;
  padding: 8px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 4px;
  background: var(--neutrals-grey-00, #fff);

  /* dropdown shadow */
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05),
    0px 1px 10px 0px rgba(0, 0, 0, 0.05), 0px 4px 5px 0px rgba(0, 0, 0, 0.05);
`;
const SortButton = styled.button`
  cursor: pointer;
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border: none;
  &:first-child {
    border-bottom: 1px solid var(--neutrals-grey-300, #e0e0e0);
  }
  background: var(--neutrals-grey-00, #fff);
  align-self: stretch;
  color: var(--neutrals-grey-900, #212121);

  /* Desktop + Tablet (MD)/Body/Body 2 */
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */

  &:hover {
    background: var(--neutrals-grey-100, #f5f5f5);
  }
`;
const SortIcon =
  "data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_124_1697)'%3e%3cpath d='M4.99996 6.3335L8.33329 9.66683L11.6666 6.3335H4.99996Z' fill='%23007DB8'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_124_1697'%3e%3crect width='16' height='16' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";

class SortComponent extends Component {
  state = {
    showPopup: false,
  };

  togglePopup = () => {
    this.setState({ showPopup: !this.state.showPopup });
  };

  handleSort = (order) => {
    this.props.onSort(order);
    this.togglePopup();
  };

  render() {
    return (
      <div>
        <SortSummon onClick={this.togglePopup}>
          Sort
          <img src={SortIcon} />
        </SortSummon>
        {this.state.showPopup && (
          <SortPopup className="popup">
            <SortButton onClick={() => this.handleSort("ascending")}>
              Alphabetical (A-Z)
            </SortButton>
            <SortButton onClick={() => this.handleSort("descending")}>
              Alphabetical (Z-A)
            </SortButton>
          </SortPopup>
        )}
      </div>
    );
  }
}

export default SortComponent;
