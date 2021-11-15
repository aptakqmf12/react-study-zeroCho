import React, {useState} from 'react';

const NumberBaseball = () =>{
    const [values, setValue] = useState(0);

    return(
        <React.Fragment>
            <ul>
                {
                    [
                        {name : '김태3완', old : 29},
                        {name : '이도경', old : 28},
                        {name : '장재형', old : 28}
                    ].map( (e,i) => {
                        return <li key={e.name + e.old}> <b>{e.name}</b> - {e.old}</li>
                    })  
                }
            </ul>
        </React.Fragment>
    )
}

export default NumberBaseball;