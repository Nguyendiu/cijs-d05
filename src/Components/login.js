import React, { useState } from "react";
import firebase from 'firebase'
import { firebaseConfig } from '../firebase/firebaseConfig'
try {
    firebase.initializeApp(firebaseConfig);
} catch (e) {
    console.log(e.message)
}


const db = firebase.firestore();
export function Formlogin({ Login, error }) {
    const [details, setDetails] = useState({ name: "", email: "", password: '' });
    // db.collection("listTodos").add({
    //     email:details.name,
    //     passWord:details.password,
    //     email: details.email
    // })
    const submitHanler = (e) => {
        e.preventDefault();
        Login(details);

    }
    const inputHanler = (e) => {

        setDetails({ ...details, name: e.target.value })
    }
    const emailHanler = (e) => {

        setDetails({ ...details, email: e.target.value })
    }
    const passwordHanler = e => {

        setDetails({ ...details, password: e.target.value })
    }
    console.log(details.name)
    
    return (
        <div>
            <form className="Login" onSubmit={submitHanler}>
                <p>Login</p>
                {/*ERROR!*/}
                <input type='text' name='name' id='name' onChange={inputHanler} value={details.name} placeholder="User...."></input>
                <input type='email' name='email' id='email' onChange={emailHanler} value={details.email} placeholder='Email....'></input>
                <input type='password' onClick={passwordHanler} placeholder='Pass....'></input> <br></br>
                <button>Login</button>


            </form>
            <div>
                <button>Register</button>
            </div>
        </div>
    );
}
export default Formlogin;