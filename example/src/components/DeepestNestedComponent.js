import React from 'react';
import funks from '../funks';

const DeepestNestedComponent = (props) => {
    let anyValue = 8
    console.log(funks.greeting())
    return(
        <div>
            <br/>
            <span style={funks.textColor()}>Feel free to reuse any of your funks!<br/></span>
            <span style={funks.textColor()}>{JSON.stringify(funks.backgroundColor())}<br/></span>
            <span style={funks.textColor()}>{JSON.stringify(funks.textColor())}<br/></span>
            <span style={funks.textColor()}>{funks.nightModeLabel()}<br/></span>
            <span style={funks.textColor()}>{funks.greeting()}<br/></span>
            <span style={funks.textColor()}>{funks.randomCalc(anyValue)}</span>
        </div>
    )
}

export default DeepestNestedComponent;