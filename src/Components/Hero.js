import React from 'react'
import Button from '@material-ui/core/Button'

const Hero = ({handleLogOut}) =>{
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