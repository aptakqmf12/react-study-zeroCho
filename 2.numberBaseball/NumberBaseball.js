import React, {useState, useRef} from 'react';
import Trys from './component/Trys'

const NumberBaseball = () =>{
    const getNumbers = () => {
        const candidate = [1,2,3,4,5,6,7,8,9];
        const answerArr = [];
        for(let i=0; i<4; i++){
            const chooseArr =  candidate.splice( Math.floor(Math.random() * (9-i) ) , 1)[0];
            answerArr.push(chooseArr);
        }  
        return answerArr;
    }
    const [result, setResult] = useState('');
    const [answer, setAnswer] = useState(getNumbers);
    const [value, setValue] = useState('');
    const [trys, setTrys] = useState([]);
    const inputRef = useRef();


    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(answer.join('') === value){ //정답을 맞췄으면
            setAnswer(getNumbers);
            setValue('');
            setTrys([]);
            alert('홈런!');
        }
        else{ //틀리면
            let strike = 0;
            let ball = 0;

            if(trys.length >= 9){ // 10번이상 시도했다면?
                setAnswer(getNumbers);
                setValue('');
                setTrys([]);
                alert('10번이상 실패! 초기화합니다');
            }
            else{ // 10번 시도를 채우기전이면?
                for(let i=0; i<answer.length; i++){
                    if(answer[i] === parseInt(value[i])){
                        strike += 1;
                    }
                    else if(answer.includes(parseInt(value[i]))){
                        ball += 1;
                    }
                }
                
                console.log(`${strike}스트라이크, ${ball}볼`);
                setValue('');
                setTrys( [...trys, {value : parseInt(value), msg : `${strike}스트라이크, ${ball}볼 입니다` }] );
                alert('다시시도!');
                console.log(trys)
            }            
        }
        inputRef.current.focus();
    }

    return(
        <>
            <div>{`정답은 ${answer}`}</div>
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}>
                <input type="number" ref={inputRef} maxLength={4} value={value} onChange={onChangeInput}></input>
            </form>
            <div>시도 : {trys.length}</div>
            <Trys trys={trys} />
        </>
    )
}

export default NumberBaseball;