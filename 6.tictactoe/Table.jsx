import React, {useState, useReducer} from 'react'
import Tr from './Tr'

const Table = ({onClick, tableData,dispatch}) => {

    return (
        <>
            <table onClick={onClick}>
                {
                    Array(tableData.length).fill().map((tr, i) => (<Tr rowIndex={i} rowData={tableData[i]} dispatch={dispatch}></Tr> ))
                }
            </table>
        </>
    )
}

export default Table;
