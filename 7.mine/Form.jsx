import React, { useState, useCallback, useContext } from "react";
import { tableContext } from "./Mine";
import { START_GAME } from "./Mine";

const Form = () => {
  const [row, setRow] = useState(10);
  const [cell, setCell] = useState(10);
  const [mine, setMine] = useState(20);
  const value = useContext(tableContext);

  const onChangeRow = useCallback((e) => {
    setRow(e.target.value);
  }, []);
  const onChangeCell = useCallback((e) => {
    setCell(e.target.value);
  }, []);
  const onChangeMine = useCallback((e) => {
    setMine(e.target.value);
  }, []);
  const onClickBtn = useCallback(() => {
    dispath({ type: START_GAME, row, cell, mine });
  }, [row, cell, mine]);

  return (
    <>
      <form>
        <input placeholder="세로" value={row} onChange={onChangeRow} />
        <input placeholder="가로" value={cell} onChange={onChangeCell} />
        <input placeholder="지뢰" value={mine} onChange={onChangeMine} />
        <button onClick={onClickBtn}>시작</button>
      </form>
    </>
  );
};

export default Form;
