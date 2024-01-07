import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { connect } from "react-redux";
import { addLeetcodeItems } from "../../redux/actions/trackerActions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const buttonStyle = {
  bgcolor: "#149714",
  padding: "5px 20px",
  margin: "10px",
  display: "flex",
  justifyContent: "flex-end",
  color: "white",
  "&:hover": {
    bgcolor: "#107910",
  },
};

const AddNewItem = ({ items, addLeetcodeItems }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = React.useState({
    question: "",
    level: "",
    type: "",
    guidedSolution: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked ? "Add guided solution here..." : "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with form data, e.g., submit to a backend, etc.
    addLeetcodeItems(formData);
    // Reset form fields after submission
    setFormData({
      question: "",
      level: "",
      type: "",
      guidedSolution: "",
    });
    setOpen(false);
    localStorage.setItem("items", items);
  };

  return (
    <Box>
      <Button sx={buttonStyle} className="create-button" onClick={handleOpen}>
        Create
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth margin="normal">
              <TextField
                label="Question"
                name="question"
                value={formData.question}
                onChange={handleInputChange}
              />
            </FormControl>

            <FormControl fullWidth margin="normal">
              <InputLabel>Level</InputLabel>
              <Select
                label="Level"
                name="level"
                value={formData.level}
                onChange={handleInputChange}
              >
                <MenuItem value="easy">Easy</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="hard">Hard</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth margin="normal">
              <TextField
                label="Type"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
              ></TextField>
            </FormControl>

            <FormControlLabel
              control={
                <Checkbox
                  checked={!!formData.guidedSolution}
                  onChange={handleCheckboxChange}
                  name="guidedSolution"
                  color="primary"
                />
              }
              label="Guided Solution"
            />

            {formData.guidedSolution && (
              <FormControl fullWidth margin="normal">
                <TextField
                  label="Guided Solution"
                  name="guidedSolution"
                  value={formData.guidedSolution}
                  onChange={handleInputChange}
                  multiline
                  rows={4}
                />
              </FormControl>
            )}

            <Box mt={2}>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  items: state.tracker.items,
});

export default connect(mapStateToProps, { addLeetcodeItems })(AddNewItem);
