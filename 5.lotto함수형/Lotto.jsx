import React, {useState, useEffect, useRef, useMemo, useCallback} from 'react'
import Ball from './Ball'

function getWinNumbers(){
    console.log("getWinNumbers");
    const candidate = Array(45).fill().map( (v,i) => i+1);
    const shuffle = [];
    while( candidate.length > 0){
        shuffle.push(
            candidate.splice(Math.floor(Math.random() * candidate.length),1)[0]
        );
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort( (p,c) => p-c);
    return [...winNumbers, bonusNumber];
}
const Lotto = () => {
    const lottoNumbers = useMemo(() => getWinNumbers(), []);
    const [winNumbers, setWinNumbers] = useState(lottoNumbers);
    const [winBalls, setWinBalls] = useState([]);
    const [bonus, setBonus] = useState(null);
    const [reDo, setRedo] = useState(false);
    const timeouts = useRef([]);

    useEffect(()=>{
        for(let i=0; i<winNumbers.length - 1 ; i++){
            timeouts.current[i] = setTimeout(() => {
                setWinBalls((prevBalls) => [...prevBalls, winNumbers[i]])
            }, (i+1)*200);
        }
        timeouts.current[6] = setTimeout(()=>{
            setBonus(winNumbers[6]);
            setRedo(true);
        },1400)
    },[timeouts.current])

    const lottoStart = () => {
        for(let i=0; i<winNumbers.length - 1 ; i++){
            timeouts.current[i] = setTimeout(() => {
                setWinBalls((prevState) => [...prevState.winBalls, winNumbers[i]])
            }, (i+1)*200);
        }
        timeouts.current[6] = setTimeout(()=>{
            setBonus(winNumbers[6]);
            setRedo(true);
        },1400)
    }
    const onClickRedo = useCallback(() =>{
        setWinNumbers(getWinNumbers());
        setWinBalls([]);
        setBonus(null);
        setRedo(false)
        timeouts.current = [winNumbers];
        console.log(winNumbers)
    },[winNumbers])

    return(
        <>
            <div>당첨숫자</div>
            <div>
                {
                    winBalls.map( e => {
                        return(
                            <Ball key={e} number={e}></Ball>
                        )
                    })
                }
            </div>
            <div>보너스!</div>
            {bonus && <Ball number={bonus} />}
            {reDo && <button onClick={onClickRedo}>한번더</button>}
        </>
    );
}
// useEffect에서 의존성배열이 빈배열이면 componentDidMount와 같은 의미다.
// 의존성배열에 값이 들어가면 componentDidMount와 를 시행한뒤, 해당 변수의 변화에따른 componentDidUpdate가 실행된다.
// 또 class형componentDidUpdate에서 되는조건이 useEffect의 의존성배열안에서 안될수도있다.


// 1. 복잡한 값은 useMemo로 감싸주어 기억시킨다 useMemo값에
// 2. 한번 선언후 계속 기억할 함수는 useCallback으로 감싸준다, 의존배열에 넣은 값이 바뀔때만 렌더링
// hooks는 기본적으로 전체코드가 재렌더링 되기떄문에  자식 컴포넌트에게 함수를 props로 보낼땐 해당 함수를 꼭 useCallback으로 감싸줘야한다 (함수를 기억하지않으면 매번 자식컴포넌트가 재 렌더링됨)




// useMemo는 의존배열안의 내용이 바뀌기 전까지 값을 저장한다. 
// useEffect는 의존배열안의 내용이 바뀔때 실행한다
// useCallback은 의존배열안의 내용이 바뀌기 전까지 함수자체를 기억한다

// useEffect에서 componentDidmount는 실행X componentDidUpdate만 실행O 하려면 패턴식으로 외워라

// const mounted = useRef(false);
// useEffect(()=>{ //componentDidmount는 실행하지말고 componentDidUpdate만 실행
//     if(!mounted.current){
//         mounted.current = true;
//     }
//     else{
//         //componentDidUpdate작업
//     }
// })

export default Lotto;
