import React from 'react'
import Button from '@material-ui/core/Button'
import userEvent from '@testing-library/user-event';
import fire from '../FirebaseConfig';

const Hero = ({handleLogOut,todos,setTodo}) =>{
    
    return(
        <section className = 'hero'>
            <nav>
                <h2>Wellcome</h2>
                
                <button onClick={handleLogOut}>Logout</button>
            </nav>

        </section>
    )
}
export default Hero ;