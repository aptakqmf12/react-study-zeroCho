import React,{memo} from 'react';

const Trys = memo((props) => {
    return (
        <>
            <ul>
                {props.trys.map( (v,i) => {
                    return(
                        <>
                            <li key={i}>
                                <div>{v.value}</div>
                                <div>{v.msg}</div>
                            </li>
                        </>
                    )
                })}
            </ul>
        </>
    );
});
export default Trys;