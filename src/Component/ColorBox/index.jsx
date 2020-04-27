import React, { useState } from 'react';

ColorBox.propTypes = {

};

function getRandomColor() {
    const listColor = ['pink', 'lightblue', 'green', 'red', 'blue', 'orange'];
    const randomIndex = Math.floor(Math.random() * 6);
    return listColor[randomIndex];
}

function ColorBox() {

    const [color, setColor] = useState(() => {
        const initialColor = localStorage.getItem('box_color') || 'black';
        return initialColor;
    });

    function handleBoxClick() {
        const randomColor = getRandomColor();
        setColor(randomColor);
        localStorage.setItem('box_color', randomColor);
    }
    return (
        <div className="color-box" style={{ backgroundColor: color }} onClick={handleBoxClick}>
            Click to change background color!!!!
        </div>
    );
}

export default ColorBox;