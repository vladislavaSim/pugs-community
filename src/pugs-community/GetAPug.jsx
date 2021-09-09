import React, {useState} from "react";
import pug1 from './img/getAPug/1.jpg'
import pug2 from './img/getAPug/2.jpg'
import pug3 from './img/getAPug/3.jpg'
import pug4 from './img/getAPug/4.jpg'
import pug5 from './img/getAPug/5.jpg'
import pug6 from './img/getAPug/6.jpg'
import pug7 from './img/getAPug/7.jpg'
import pug8 from './img/getAPug/8.jpg'
import pug9 from './img/getAPug/9.jpg'
import pug10 from './img/getAPug/10.jpg'
import pug11 from './img/getAPug/11.jpg'
import pug12 from './img/getAPug/12.jpg'
import pug13 from './img/getAPug/13.jpg'

export function GetAPug() {
    const pugsArr = [pug1, pug2, pug3, pug4, pug5, pug6, pug7, pug8, pug9, pug10, pug11, pug12, pug13];
    const getRandomIndex = () =>  Math.round(Math.random() * (pugsArr.length - 1));
    const [currentPicIndex, setCurrentPicIndex] = useState(getRandomIndex());

    const updateIndex = () => {
        setCurrentPicIndex(getRandomIndex());
    }
    function randomPug() {
        return <img src={pugsArr[currentPicIndex]} alt='pug' className='random-pug'/>
    }

    return (
        <>
            {randomPug()}
            <button className='edit_save_btn' onClick={updateIndex}>one more pug!</button>
        </>
    );
}
