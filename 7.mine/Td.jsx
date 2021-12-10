import React, { useContext } from "react";
import { tableContext, CODE } from "./Mine";

const paintCell = (code) => {
  switch (code) {
    case CODE.NORMAL:
      return {
        background: "#444",
      };
    case CODE.MINE:
      return {
        background: "#444",
      };
    case CODE.OPEND:
      return {
        background: "white",
      };
    default:
      return {
        background: "white",
      };
  }
};
const drawCelll = (code) => {
  switch (code) {
    case CODE.MINE:
      return "X";
    default:
      "";
  }
};

const Td = ({ rowIndex, cellIndex }) => {
  const { tableData } = useContext(tableContext);
  return (
    <>
      <td style={paintCell(tableData[rowIndex][cellIndex])}>
        {drawCelll(tableData[rowIndex][cellIndex])}
      </td>
    </>
  );
};

export default Td;
