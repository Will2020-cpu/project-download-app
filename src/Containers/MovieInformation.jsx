import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'

const MovieInformation = () => {
    let {id} = useParams()
    console.log(id)
    return (
        <Fragment>
            <div>
                TESTING
            </div>
        </Fragment>
    )
}

export default MovieInformation
