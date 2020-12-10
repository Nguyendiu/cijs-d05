import React, { useState } from "react";
export function Formlogin({Login,error}) {
    const [details,setDetails] = useState({name:"",email:"", password: ''});
    const submitHanler = (e)=>{
        e.preventDefault();
        Login(details);
      
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
        <form className="Login" onSubmit={submitHanler}>
           <p>login</p>
           {/*ERROR!*/}
           <input type='text' name='name' id='name' onChange={inputHanler} value={details.name}></input>
           <input type= 'email'name='email' id='email'onChange={emailHanler} value={details.email}></input>
           <input type='password' onChange={passwordHanler}></input> <br></br>
           <button>Login</button>
           
        </form>
    );  
}
export default Formlogin;