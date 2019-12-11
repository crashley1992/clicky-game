import React from 'react';
import './cards.css';

const Cards = (props) => {
    return(
 <div className="card">
    <div className="img-container">
      <strong>Name:{props.name}</strong> 
        <img alt={props.name} src={props.image} />
    </div>
</div>
    )
}

export default Cards;