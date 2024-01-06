import React from "react";
import { Table } from "reactstrap";

function CustomTable({ data, columnsToShow }) {
  return (
    <div>
      <Table hover responsive size="">
        <thead>
          <tr>
            {columnsToShow.map((column) => (
              <th key={column.key}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {columnsToShow.map((column) => (
                <td key={column.key}>{item[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default CustomTable;
