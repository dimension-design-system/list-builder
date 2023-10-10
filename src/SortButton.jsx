import React, { useState } from "react";
import styled from "styled-components";

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
  margin-left: 12px;
`;
const SortButtonIcon = `data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_124_1697)'%3e%3cpath d='M4.99996 6.3335L8.33329 9.66683L11.6666 6.3335H4.99996Z' fill='%23007DB8'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_124_1697'%3e%3crect width='16' height='16' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e`;
const SortToolTip = styled.div`
  position: absolute;
  display: flex;
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
const SortSelectionButton = styled.button`
  cursor: pointer;
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-bottom: 1px solid var(--neutrals-grey-300, #e0e0e0);
  background: var(--neutrals-grey-00, #fff);
  align-self: stretch;
  color: var(--neutrals-grey-900, #212121);

  /* Desktop + Tablet (MD)/Body/Body 2 */
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  border: none;
  &:first-child {
    border-bottom: 1px solid var(--neutrals-grey-300, #e0e0e0);
    background: var(--neutrals-grey-00, #fff);
  }
`;

const SortButton = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  // const [sortDirection, setSortDirection] = useState(null);

  const toggleTooltip = () => {
    setTooltipVisible((prev) => !prev);
  };

  const handleSortDirectionClick = (direction) => {
    // setSortDirection(direction);
    onSortDirectionChange(direction);
    setTooltipVisible(false);
  };

  return (
    <div className="tooltip">
      <ActionBarButton onClick={toggleTooltip}>
        Sort
        <img src={SortButtonIcon} />
      </ActionBarButton>
      {tooltipVisible && (
        <SortToolTip>
          <SortSelectionButton onClick={() => handleSortDirectionClick("asc")}>
            Alphabetical (A-Z)
          </SortSelectionButton>
          <SortSelectionButton onClick={() => handleSortDirectionClick("desc")}>
            Alphabetical (Z-A)
          </SortSelectionButton>
        </SortToolTip>
      )}
      {sortDirection && <div>Selected Direction: {sortDirection}</div>}
    </div>
  );
};

export default SortButton;
