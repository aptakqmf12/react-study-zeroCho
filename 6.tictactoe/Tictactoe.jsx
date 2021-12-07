import React, { useState, useEffect, useReducer, useCallback } from "react";
import Table from "./Table";

const initialState = {
  winner: "",
  turn: "O",
  tableData: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  recentCell: [-1, -1],
};

export const SET_WINNER = "SET_WINNER";
export const CLICK_CELL = "CLICK_CELL";
export const CHANGE_TURN = "SET_TURN";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER:
      console.log("setWinner" + state.winner);
      return {
        ...state,
        winer: action.winner,
      };
    case CLICK_CELL:
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]];
      tableData[action.row][action.cell] = state.turn;
      return {
        ...state,
        tableData,
        recentCell: [action.row, action.cell],
      };
    case CHANGE_TURN:
      return {
        ...state,
        turn: state.turn === "O" ? "X" : "O",
      };
  }
};

const Tictactoe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { tableData, turn, winner, recentCell } = state;

  const onClickTable = useCallback(() => {
    dispatch({ type: SET_WINNER, winner: "O" });
  }, []);

  useEffect =
    (() => {
      const [row, cell] = recentCell;
      if (row < 0) {
        return;
      }
      let win = false;
      if (
        tableData[row][0] === turn &&
        tableData[row][1] === turn &&
        tableData[row][2] === turn
      ) {
        win = true;
      }
      if (
        tableData[0][cell] === turn &&
        tableData[1][cell] === turn &&
        tableData[2][cell] === turn
      ) {
        win = true;
      }
      if (
        tableData[0][0] === turn &&
        tableData[1][1] === turn &&
        tableData[2][2] === turn
      ) {
        win = true;
      }
      if (
        tableData[0][2] === turn &&
        tableData[1][1] === turn &&
        tableData[2][0] === turn
      ) {
        win = true;
      }
      console.log(win, row, cell, tableData);
      if (win) {
        //승리시
      } else {
        //무승부
        dispatch({ type: SET_WINNER, winner: turn });
      }
    },
    [recentCell]);
  return (
    <>
      <Table onClick={onClickTable} tableData={tableData} dispatch={dispatch}>
        {" "}
      </Table>
      {winner && <div>{winner}님의 승리!</div>}
    </>
  );
};

export default Tictactoe;
