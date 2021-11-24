import React, {useState, useRef} from 'react';

const ReseponseTime = () => {
    const [state, setState] = useState('waiting');
    const [msg, setMsg] = useState('클릭해서 시작하세요');
    const [result, setResult] = useState([]); 

    const timeOut = useRef(null);
    const startTime = useRef();
    const endTime = useRef();

    const boxStyle={
        width:500,
        height:500,
        border:"1px black solid",
    }
    

    const onClickScreen = () => {

        if(state === 'waiting'){ //시작할때
            setState('ready')
            setMsg('준비하세요');

            timeOut.current = setTimeout(() => {
                setState('now')
                setMsg('클릭하세요!!!!!!!!');
                startTime.current = new Date();
            }, Math.floor(Math.random()* 1000) + 2000);
        }
        else if (state === 'ready'){ //성급하게 클릭
            setMsg('너무 성급합니다  다시 클릭하세요');
            setState('waiting')
            clearTimeout(timeOut.current);
        }
        else if (state === 'now'){ //제대로 클릭
            setState('waiting');
            setMsg('클릭해서 시작하세요');
            endTime.current = new Date();
            setResult([...result, endTime.current - startTime.current])
        }
    }
    return(
        <>  
            <div id="screen" style={boxStyle} className={state} onClick={onClickScreen}>{msg}</div>
            <div>{`소요시간은 
            ${ 
                result.length === 0
                ? null
                : result.reduce( (a,c) => a + c)  / result.length
            }
            ms입니다`}</div>
        </>
    );
}

export default ReseponseTime;