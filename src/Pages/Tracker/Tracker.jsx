import { Box, Button } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./Tracker.css";
import AddNewItem from "../../Components/AddNewItem/AddNewItem";
import {
  fetchLeetcodeItems,
  deleteLeetcodeItem,
  resetLeetcodeItems,
} from "../../redux/actions/trackerActions";
import { connect } from "react-redux";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const styles = {
  padding: "50px",
};

const Tracker = ({
  items,
  fetchLeetcodeItems,
  deleteLeetcodeItem,
  resetLeetcodeItems,
}) => {
  const [currentItems, setCurrentItems] = React.useState([]);

  React.useEffect(() => {
    setCurrentItems(localStorage.getItem("items"));
    fetchLeetcodeItems(items);
  }, [currentItems, items, fetchLeetcodeItems]);

  console.log(items);

  const handleDelete = (question) => {
    deleteLeetcodeItem(question);
  };

  return (
    <Box sx={styles}>
      <div className="tracker-performance"></div>
      <div className="tracker-table-section">
        <AddNewItem />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Question</StyledTableCell>
                <StyledTableCell align="center">Level</StyledTableCell>
                <StyledTableCell align="center">Type</StyledTableCell>
                <StyledTableCell align="center">
                  Guided Solution
                </StyledTableCell>
                <StyledTableCell align="center">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items &&
                items.map((row) => (
                  <StyledTableRow key={row.question}>
                    <StyledTableCell component="th" scope="row">
                      {row.question}
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        background:
                          row.level === "easy"
                            ? "green"
                            : row.level === "medium"
                            ? "orange"
                            : "red",
                      }}
                      align="center"
                    >
                      {row.level}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.type}</StyledTableCell>
                    <StyledTableCell align="center">
                      {row.guidedSolution}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Button>View</Button>
                      <Button>Edit</Button>
                      <Button
                        onClick={() => handleDelete(row.question)}
                        sx={{ color: "red" }}
                      >
                        Delete
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  items: state.tracker.items,
});

export default connect(mapStateToProps, {
  fetchLeetcodeItems,
  deleteLeetcodeItem,
  resetLeetcodeItems,
})(Tracker);
