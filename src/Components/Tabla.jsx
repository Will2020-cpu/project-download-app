import React, { Fragment } from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { Button } from '@material-ui/core'


const useStyles = makeStyles((theme)=>({
  

}))

const Table = ({idioma,formato, size, servidor}) => {
    const classes = useStyles()
    return (
        <Fragment>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Idioma</th>
                        <th scope="col">Formato</th>
                        <th scope="col">Tamano</th>
                        <th scope="col">Servidor</th>
                        <th scope="col">Descargar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{idioma}</td>
                        <td>{formato}</td>
                        <td>{size}</td>
                        <td>{servidor}</td>
                        <td><Button variant="contained">Descargar</Button></td>
                    </tr>
                    <tr>
                        <td>{idioma}</td>
                        <td>{formato}</td>
                        <td>{size}</td>
                        <td>{servidor}</td>
                        <td><Button variant="contained">Descargar</Button></td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    )
}

export default Table
