import React from 'react';
import '../asset/Header.css'
export function Header() {

    return (
        <div>
            <div className='header'>
                <h1>Quiz Game</h1>
            </div>
            <div className="content">
                <h2>Luật Chơi</h2>
                <p> 1️⃣ bạn chỉ có 5 lần chọn đáp án tương ứng với 5 câu hỏi</p>
                <p> 2️⃣ chọn 1 trong 4 đáp án dưới câu hỏi, nếu 1 câu chọn nhiều đáp án sẽ trừ vào số lần chọn</p>
                <p>3️⃣ Mỗi câu trả lời đúng được 10 diểm</p>
                <h2>GoodLuck</h2>
            </div>
        </div>
    )
}
export default Header;
