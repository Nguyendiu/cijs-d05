import React from 'react'
import { data } from '../Data/data'
export function SearchBar(props) {
    // handleKeyPress(e){
    //     if (e.key === 'Enter') {
    //         this.Search();

    //     }

        return (
            <>
                <input onChange={props.onChange} className="full" />
                <button>Search</button>
                <div className='result' key="">
                    <img src={data.projects.project.[0].imageLink} id='img' />
                    <h3> {data.projects.project.[0].contactName}</h3>
                    <a href={data.projects.project.[0].projectLink}> {data.projects.project.[0].projectLink} </a>
                </div>
            </>
        )

    }