import React from 'react';
import DeeperNestedComponent from './DeeperNestedComponent';
import funks from '../funks';

const NestedComponent = (props) => {
    return(
        <div>
            {funks.greeting()}
            <DeeperNestedComponent />
        </div>
    )
}

export default NestedComponent;