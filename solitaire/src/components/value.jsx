import React, {useContext} from 'react';
import CardContext from '../contexts/cardContext';

const Value = props => {

    const {cardVal, setCardVal, bool, setBool} = useContext(CardContext);

    return (
        <div>
            <h3>{props.val}</h3>
        </div>
    );
}


export default Value;