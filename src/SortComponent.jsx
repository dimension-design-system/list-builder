import React, { Component } from "react";

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
        <button onClick={this.togglePopup}>Sort</button>
        {this.state.showPopup && (
          <div className="popup">
            <button onClick={() => this.handleSort("ascending")}>
              Sort Ascending
            </button>
            <button onClick={() => this.handleSort("descending")}>
              Sort Descending
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default SortComponent;
