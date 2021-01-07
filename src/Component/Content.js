import React from 'react'
import '../asset/Content.css'
import data from '../data/data'
console.log(data)
export default function Contents(props) {
    return (
        <table>
            <thead>
                <tr>

                    <th>Name</th>
                    <th>Point</th>
                    <th>GD</th>
                    <th><button onClick={() => { props.sortBy('point') }}>Xep Hang</button></th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((rank) =>
                        <tr>

                            <td>{rank.name}</td>
                            <td>{rank.point}</td>
                            <td>{rank.GD}</td>
                        </tr>

                    )
                }
            </tbody>
        </table>
    )
}

//
