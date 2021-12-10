import React, { useContext } from "react";
import { tableContext } from "./Mine";
import Td from "./Td";

const Tr = ({ rowIndex }) => {
  const { tableData } = useContext(tableContext);
  return (
    <>
      <tr>
        {tableData[0] &&
          Array(tableData[0].length)
            .fill()
            .map((td, i) => {
              return <Td rowIndex={rowIndex} cellIndex={i} />;
            })}
      </tr>
    </>
  );
};

export default Tr;
