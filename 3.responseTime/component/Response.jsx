import React, {useState} from 'react';
import styled from 'styled-components'


const ResBox= styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    transform : translate(50px, 10px);
    width:500px;
    height:500px;
    border:1px solid;
    cursor:pointer;
`;
const ResTxt = styled.span`
    font-weight:bold;
`;


const onClickScreen = () => {
    if(state === waiting){ //시작할때
        setMsg('준비하세요')
    }
}

const Reseponse = (props) => { 
    return(
        <>
            <ResBox id="screen" className={props.state} onClick={onClickScreen}>
                <ResTxt>{props.msg}</ResTxt>
            </ResBox>
        </>
    );
}

export default Reseponse;