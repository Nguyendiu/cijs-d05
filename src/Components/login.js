import '../asset/Login.css'
export function Login () { 
    return(
        <div>
            <input type='text' placeholder='User...'/> <br/>
            <input type='password' /> <br/>
            <button>Login</button>
            <div className='clear'></div>
        </div>
        
    )
}