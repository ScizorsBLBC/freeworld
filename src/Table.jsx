import React, { Component, useState, useContext } from "react";

export const numberFormat = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
};

export class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { name: "Jane", hours_needed: 3, earnings_potential: 1000 },
        { name: "Bob", hours_needed: 5, earnings_potential: 3000 },
        { name: "Mark", hours_needed: 4, earnings_potential: 2700 },
        { name: "Jill", hours_needed: 8, earnings_potential: 5000 },
        { name: "Don", hours_needed: 5, earnings_potential: 3600 },
      ],
    };
  }

  renderTableData() {
    return this.state.students.map((student, index) => {
      const { name, hours_needed, earnings_potential } = student;
      return (
        <tr key={name}>
          <td>{name}</td>
          <td>{hours_needed}</td>
          <td>{earnings_potential}</td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    let header = Object.keys(this.state.students[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  render() {
    return (
      <div>
        <h1 id="title">Candidate Potential Calculator</h1>
        <table id="students">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}
