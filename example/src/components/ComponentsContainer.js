import React from 'react';
import NestedComponent from './NestedComponent';
import funks from '../funks';

const ComponentsContainer = (props) => {
    return(
        <div style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, ...funks.backgroundColor()}}>
            {props.children}
            <NestedComponent />
        </div>
    )
}

export default ComponentsContainer;