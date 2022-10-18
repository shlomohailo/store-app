import { useContext } from "react";
import { usersContext } from "../../../contexts/user";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Container from "@mui/material/Container";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CardMedia from "@mui/material/CardMedia";

function TableInfo() {
  const { data } = useContext(usersContext);
  console.log(data);
  return (
    <div className="Table">
      <h1>Table</h1>
      <Container>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">quantity</TableCell>
                <TableCell align="right">description</TableCell>
                <TableCell align="right">dateAdded</TableCell>
                <TableCell align="right">price</TableCell>
                <TableCell align="right">color</TableCell>
                <TableCell align="right">size</TableCell>
                <TableCell align="right">condition</TableCell>
                <TableCell align="right">pic</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{item.quantity}</TableCell>
                  <TableCell align="right">{item.description}</TableCell>
                  <TableCell align="right">{item.dateAdded}</TableCell>
                  <TableCell align="right">{item.price}</TableCell>
                  <TableCell align="right">{item.color}</TableCell>
                  <TableCell align="right">{item.size}</TableCell>
                  <TableCell align="right">{item.condition}</TableCell>
                  <TableCell align="right">
                    <CardMedia
                      component="img"
                      height="194"
                      image={item.pic}
                      alt="Paella dish"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}

export default TableInfo;

