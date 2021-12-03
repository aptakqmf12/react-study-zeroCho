import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components';

const VALUE = ['가위', '바위', '보'];
const SCORE = [-1, 0, 1];
const ComputerValue = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:300px;
    height:300px;
    margin-bottom:10px;
    border:1px black solid;
    background-color : ${props => props.bgc};
    font-size:20px;
`;

const RSP = () => {
    const [computer, setComputer] = useState({ value : VALUE[0], score : SCORE[0]});
    const intervalTime = useRef();

    useEffect( () => {
        //componentDidMount, componentDidUpdate
        intervalTime.current = setInterval( () => {
            setComputer( { value : VALUE[1], score: SCORE[1]} )
        },1000)
        return () => {
            //componentWillUnmount
        } 
    }, [computer])

    return (
        <>
            <ComputerValue bgc={'red'}>{computer.value} {computer.score}</ComputerValue>
            <button>가위</button>
            <button>바위</button>
            <button>보22</button>
        </>
    )
}

export default RSP;
