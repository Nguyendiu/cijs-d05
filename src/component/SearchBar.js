import React from 'react'
import {data} from '../Data/data'
export function SearchBar(props) {


    return (
        <>
        <input onChange={props.onChange} className="full"/>
        <div className='result'>
        <img src = {data.projects.project.[0].imageLink} id='img'/>
        <h3> {data.projects.project.[0].contactName}</h3>
        <a href={data.projects.project.[0].projectLink}> {data.projects.project.[0].projectLink} </a>
       </div> 
       </>
    )

}