import React, { useState, useContext } from "react";
import { tableContext } from "./Mine";
import Tr from "./Tr";

const Table = () => {
  const { tableData } = useContext(tableContext);
  return (
    <>
      <table>
        {Array(tableData.length)
          .fill()
          .map((tr, i) => {
            return <Tr rowIndex={i} />;
          })}
      </table>
    </>
  );
};

export default Table;
