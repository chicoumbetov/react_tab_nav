import { Remove } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { IconButton, TextField } from "@mui/material";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    "& .MuiFilledInput-root": {
      marginLeft: "10px",
    },
  },
});

const WorkUnitForm2 = () => {
  const classes = useStyles();

  const [inputFields, setInputFields] = useState([
    { firstName: "", lastName: "" },
  ]);

  return (
    <Container className="m-2">
      <h1>Add New Member</h1>
      <form className={classes.root}>
        {inputFields.map((inputField, index) => (
          <div key={index}>
            <TextField
              name="firstName"
              label="First Name"
              variant="filled"
              value={inputField.firstName}
            />
            <TextField
              name="lastName"
              label="First Name"
              variant="filled"
              value={inputField.firstName}
            />
            <IconButton>
              <Remove />
            </IconButton>
            <IconButton>
              <AddIcon />
            </IconButton>
          </div>
        ))}
      </form>
    </Container>
  );
};

export default WorkUnitForm2;
