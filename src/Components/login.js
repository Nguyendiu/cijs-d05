import React, { useState } from "react";
import firebase from 'firebase/app'
import 'firebase/firestore'
import { firebaseConfig } from '../firebase/firebaseConfig'



try {
    firebase.initializeApp(firebaseConfig);
} catch (e) {
    console.log(e.message)
}

const db = firebase.firestore();
let checkName = [];
let checkPassword =[];
export function Formlogin({Login,error,Loginn}) {
    const [details,setDetails] = useState({name:"",email:"", password: ''});
    
    // const submitHanler = (e)=>{
    //     e.preventDefault();
    //     // Login(details);
    //     // db.collection("acount").add({
    //     //     name: details.name,
    //     //     password:  details.password,
    //     //     email : details.email
    //     // })
    //   console.log(details)
    // }
    const SignUp = (e) =>{
        e.preventDefault();
        // Login(details);
        // db.collection("acount").get().then(function (querySnapshot) {
        //     querySnapshot.forEach(function (doc) {
        //         let user = doc.data()
        //     })
        // })
        db.collection("acount").add({
            name: details.name,
            password:  details.password,
            email : details.email
            
        })
        console.log(details.name)
        console.log(details.password)
        console.log('dang ki thanh cong')
        db.collection("acount").get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              // doc.data() is never undefined for query doc snapshots
              let user = doc.data()
            //   checkName.push(user.name);
            //   checkPassword.push(user.password);
              console.log(doc.id, " => ", doc.data());
              console.log(user.name)
              console.log(user.password) 
              if(details.name === user.name){
                  alert('ten dang ki da dc su dung')
              } else {
                  alert('error')
              }
            })
        })   
        // if(details.name === checkName.name){
        //     console.log('ten da dc dang ki')
            
        // } else {
        //     console.log ('fail')
        // }
        
    }
    const checkUser = ()=>{
        db.collection("acount").get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              // doc.data() is never undefined for query doc snapshots
              let user = doc.data()
              checkName.push(user.name);
              checkPassword.push(user.password);
              console.log(doc.id, " => ", doc.data());
              console.log(user.name)
              console.log(user.password)    
              console.log(details.name);
              
            
              console.log('check user')
              if(details.name === user.name && details.password === user.password){
                  alert('dang nhap thanh cong')
                  
              }else{
                  console.log('kiem tra lai user')
              }
            });
            
          })
          console.log('checkPassword');
    }
    const inputHanler= (e) =>{
        

        setDetails({...details,name:e.target.value})
    }
    const emailHanler = (e) =>{
        setDetails({...details,email:e.target.value})
    }
    const passwordHanler = e =>{
        setDetails({...details,password:e.target.value})
    }
    return (
        <form className="Login" >
           <p>Login</p>
           {/*ERROR!*/}
           <input type='text' name='name' id='name' onChange={inputHanler} value={details.name} placeholder="User...."></input>
           <input type= 'email'name='email' id='email'onChange={emailHanler} value={details.email} placeholder='Email....'></input>
           <input type='password' onChange={passwordHanler} placeholder='Pass....'></input> <br></br>
           <button onClick={SignUp}>SignUp</button>
           <button onClick={checkUser}>Login</button>
           
        </form>
    );  
}
export default Formlogin;