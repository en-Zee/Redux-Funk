import React from 'react';
import DeepestNestedComponent from './DeepestNestedComponent'
import funks from '../funks';

const DeeperNestedComponent = (props) => {
    let anyValue = 32

    return(
        <div>
            {funks.randomCalc(anyValue)}
            <DeepestNestedComponent />
        </div>
    )
}

export default DeeperNestedComponent;