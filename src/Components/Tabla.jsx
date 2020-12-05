import React, { Fragment } from 'react'
import { Button } from '@material-ui/core'
import ButtonHover from './Botones/Boton'
import GetAppIcon from '@material-ui/icons/GetApp';

const Table = ({idioma,formato, size, servidor}) => {
  const ButtonStyles = ButtonHover()
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
                        <td><Button classes={ButtonStyles}><GetAppIcon/> Descargar</Button></td>
                    </tr>
                    <tr>
                        <td>{idioma}</td>
                        <td>{formato}</td>
                        <td>{size}</td>
                        <td>{servidor}</td>
                        <td><Button classes={ButtonStyles}><GetAppIcon/> Descargar</Button></td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    )
}

export default Table
