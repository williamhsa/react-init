import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        border: '2px solid red'
    };

    return <input 
        type="text" 
        style={inputStyle}
        onChange={props.changed} 
        value={props.currentName} />;
};

export default userInput;


/* 
 onChange={props.changed} 
    - no momento em que esse evento ocorre, ele passará automaticamente o objeto de evento
    para nosso handler de eventos.


*/