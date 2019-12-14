import React from 'react';
import './jumbotron.css';

const Jumbotron = () => {
    return(
    <div className="jumbotron">
        <h1 className="display-4">Untitled Goose Memory</h1>
        <div className="text-container">
        <h2>Rules:</h2>
        <p>You can only click on an image once. </p>
        <p>It's Game Over if you click on an image twice</p>
        <p>Current Score and High Score are tracked in the upper right corner</p>
    </div>
</div>
    )
}

export default Jumbotron;