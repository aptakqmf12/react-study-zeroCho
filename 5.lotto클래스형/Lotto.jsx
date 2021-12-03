import React, {Component} from 'react'
import Ball from './Ball'

function getWinNumbers(){
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

class Lotto extends Component{
    state = {
        winNumbers : getWinNumbers(),
        winBalls : [],
        bonus : null,
        reDo : false,
    }
    timeouts = [];

    lottoStart = () => {
        const {winNumbers} = this.state;
        for(let i=0; i<this.state.winNumbers.length - 1 ; i++){
            this.timeouts[i] = setTimeout(() => {
                this.setState((prevState) => {
                    return{
                        winBalls : [...prevState.winBalls, winNumbers[i]],
                    }
                })
            }, (i+1)*200);
            
        }
        
        this.timeouts[6] = setTimeout(()=>{
            this.setState({
                bonus : winNumbers[6],
                reDo : true,
            })
        },1400)
    }

    componentDidMount(){
        console.log("마운트시작")
        this.lottoStart()
    }

    componentDidUpdate(prevProps, prevState){
        console.log("컴포넌트 업데이트")
        if(this.state.winBalls.length === 0 ){
            this.lottoStart()
        }
    }

    componentWillUnmount(){ // 미래에 생길 언마운트에 대비해서 기존 setTimeout이나 setTimeinterval이 남는걸 방지
        console.log("마운트종료 언마운트")
        this.timeouts.forEach( (v) => {
            clearTimeout(v);
        })
    }

    onClickRedo = () =>{
        this.setState({
            winNumbers : getWinNumbers(),
            winBalls:[],
            bonus:null,
            redo:false,
        })
        this.timeouts = [];
    }

    render(){
        const {winBalls, bonus, reDo} = this.state;
        return (    
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
                {reDo && <button onClick={this.onClickRedo}>한번더</button>}
            </>
        )
    }
}

export default Lotto;
