import React from 'react';  
import './KeyData_card.css';

function keydata_card(props) {
    return (
        <div className='card_container'>
        <img src={props.icon} alt={ 'icon' + props.name } />
        <div className='cardInfo'>
        <p className='cardInfo_count'>{props.data}{props.unit}</p>
        <p className='cardInfo_name'>{props.name}</p>
        </div> 
        </div>
    );
}

export default keydata_card;
