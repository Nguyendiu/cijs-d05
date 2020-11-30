import React from 'react'
import '../asset/Search.css'
export function SearchBar(props) {
        return (
            <>
                <input className='Search' onKeyDown={props.Search}></input>
                {/* <image src=''/> */}
            </>
        )

    }