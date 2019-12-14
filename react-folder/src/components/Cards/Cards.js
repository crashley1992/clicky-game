import React from 'react';
import './cards.css';

const Cards = (props) => {
    return(
<div className="d-inline-flex p-2 bd-highlight">
    <div className="card">
        <div className="img-container">
                <span><strong>Name: {props.name}</strong></span>
            <img alt={props.name} src={props.image} id={props.id} onClick={ () => props.handleImageClick(props.id)} />
        </div>
    </div>
</div>
    )
}

export default Cards;