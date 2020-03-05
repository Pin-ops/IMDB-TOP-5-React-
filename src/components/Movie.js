import React, {Fragment} from 'react'

function Movie({movieList}) {
    // const {movieList}=props
    return (
        <Fragment>
           { movieList.map( item =>{
                return (
                    <tr  key={item[0]}>
                        <td> {item[0]} </td>
                        <td> {item[1]} </td>
                        <td> {item[2]} </td>
                        <td> {item[3]} </td>
                        <td> {item[4]} </td>
                    </tr>
                )
            } )}

        </Fragment>
    )
}

export default Movie
