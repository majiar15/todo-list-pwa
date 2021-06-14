import { Table, TableContainer, TableHead, TableRow, TableBody, TableCell, Paper  } from '@material-ui/core';
import Delete from '@material-ui/icons/DeleteOutline';

import React from 'react'

export const TableEventCalendar = ({rows, HandleDeleteEvent}) => {



    return (
        <TableContainer component={Paper}>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>

                <TableCell component="th" scope="row">
                    <div className="btn btn-danger" onClick={()=>{ HandleDeleteEvent(row.id)}}>
                        <Delete />
                    </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}
