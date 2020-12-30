import React, { useState, useEffect } from 'react'
import '../asset/Question.css'
const Game = (items, setItems) => {
    const [question1, setQuestion1] = useState('');
    console.log(items)
    const data = items.items

    console.log('Data in Game component', data[0]?.question)
    console.log(data)
    let click1 = 0;
    let click2 = 0;
    let tongdiem = 0;
    let diemso1 = 0;
    let diemso2 = 0
    let click = 0;
    const mark = () => {

        click1 += 1
        let diemso2 = (10 * click1);
        click = click1 + click2;

        console.log(diemso1)
        console.log(' tong lan click : ' + click)
        console.log('tong lan click1 :' + click1)
        alert('đáp án chính xác : +10 điểm')
        // if (click1 === 5) {
        //     alert(" Tổng điểm đạt được là :" + diemso2)

        // }
        if (click % 5 === 0 && click != 0) {
            alert('Tổng điểm của bạn là : ' + diemso2)
            window.location = ''
        }
    }
    const check = () => {
        alert('sai')
        click2 = (click2 + 1)
        click = click1 + click2
        console.log('click2:' + click2)
        console.log(' tong click' + click)
        let diemso2 = (click1 * 10)
        if (click % 5 === 0 && click != 0) {

            alert('Tổng điểm của bạn là : ' + diemso2)
            window.location = ''
        }
    }

    return (
        <div>
            <div className='answer-section'>
                {data.map((item, index) =>
                    <div>
                        <h3 key={index}><p>Question {index + 1}.{item.question}</p></h3>
                        {/* <p>{item.incorrect_answers[0]}</p> */}
                        {item.incorrect_answers.map(answer => <button id='btn' onClick={check}>{answer}</button>)}
                        <button id='btn' onClick={mark}>{item.correct_answer}</button>
                    </div>
                )}
            </div>
        </div >
    )

}
export default Game;