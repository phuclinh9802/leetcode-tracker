import { Box } from "@mui/material";
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
import { fetchLeetcodeItems } from "../../redux/actions/trackerActions";
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Tracker = ({ items, fetchLeetcodeItems }) => {
  const [currentItems, setCurrentItems] = React.useState([]);

  React.useEffect(() => {
    setCurrentItems(localStorage.getItem("items"));
    // fetchLeetcodeItems(items);
  }, [currentItems, items]);

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
                <StyledTableCell align="right">Level</StyledTableCell>
                <StyledTableCell align="right">Type</StyledTableCell>
                <StyledTableCell align="right">Guided Solution</StyledTableCell>
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
                      align="right"
                    >
                      {row.level}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.type}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.guidedSolution}
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

export default connect(mapStateToProps, { fetchLeetcodeItems })(Tracker);
