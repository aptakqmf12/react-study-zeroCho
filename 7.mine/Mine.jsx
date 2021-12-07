import React, { useReducer, createContext, useMemo } from "react";
import Form from "./Form";
import Table from "./Table";

export const CODE = {
  MINE: -7,
  NORMAL: -1,
  QUESTION: -2,
  FLAG: -3,
  QUESTION_MINE: -4,
  FLAG_MINE: -5,
  CLICKED_MINE: -6,
  OPEND: 0,
};

export const tableContext = createContext({
  tableData: [],
  dispatch: () => {},
});

const initialState = {
  tableData: [],
  timer: 0,
  result: "",
};

const plantMine = (row, cell, mine) => {
  console.log(row, cell, mine);
};

export const START_GAME = "START_GAME";

const reducer = (state, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        tableData: plantMine(action.row, action.cell, action.mine),
      };
    default:
      return state;
  }
};

const Mine = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => {
    tableData: state.tableData, dispatch;
  }, [state.tableData]);

  return (
    <>
      <tableContext.Provider value={value}>
        <Form />
        <div>{state.timer}</div>
        <Table />
        <div>{state.result}</div>
      </tableContext.Provider>
    </>
  );
};

export default Mine;
