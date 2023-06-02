import * as React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { FixedSizeList as List } from "react-window";
import Cards from "./Components/Cards";
import { Skeleton } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function VirtualList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api();
  }, []);

  const api = () => {
    axios
      .get("https://dummyjson.com/products?limit=100")
      .then((res) => setData(res.data.products))
      .catch((err) => console.error(err));
  };

  const renderData = ({ index, style }) => {
    const item = data[index];

    return (
      <TableRow
        key={item.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        style={style}
      >
        {item.title ? (
          <TableCell align="left">{item.title}</TableCell>
        ) : (
          <Skeleton />
        )}
      </TableRow>
    );
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", paddingTop: "4rem" }}
    >
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {renderData ? (
                <List
                  height={600}
                  width={900}
                  itemSize={70}
                  itemCount={data.length}
                >
                  {renderData}
                </List>
              ) : (
                <Skeleton />
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
