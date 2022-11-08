import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ReadMore from './readmore';
function PetTable(props) {
    const { row } = props;    

    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Tags</TableCell>
              <TableCell align="right">Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {row && row.length > 0 && row?.map((row) => {
                return(
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">{row.id}</TableCell>
                <TableCell align="right">{row.tags}</TableCell>
                <TableCell align="right"><ReadMore content={row.description} /></TableCell>
              </TableRow>
            )})}
          </TableBody>
        </Table>
      </TableContainer>
    );
}

export default PetTable;