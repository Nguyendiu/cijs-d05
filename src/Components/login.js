import React from 'react'
import '../asset/Login.css'
export function Login() {
    const data = [
        {
            email: "duy",
            password: '123456',
        },
        {
            email: "phat",
            password: '654321',
        },
    ];
    console.log(data[0].email)
    //    const userInputHanler =(e) => {
    //       setEmail(e.target.value)

    //     }
    // const passwordInputHandler = (e) =>{
    //     setPassword(e.target.value)

    // } 
    // const check = () =>{

    //         alert('dang nhap thanh cong')
    // }
    return (
        <div className="Login">
            <form>
                <input
                    type="text"

                ></input>
                <input
                    type="text"


                />
                <button type="submit" >Login</button>
            </form>
        </div>
    );
}
