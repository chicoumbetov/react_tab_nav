import { Remove, SendOutlined } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { Button, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    "& .MuiFilledInput-root": {
      marginLeft: "10px",
      marginTop: "10px",
    },
  },
  button: {
    marginTop: "10px",
    marginLeft: "10px",
  },
});

export interface InputFieldsType {
  firstName: string;
  lastName: string;
}

const WorkUnitForm2 = () => {
  const classes = useStyles();

  const [inputFields, setInputFields] = useState([
    { firstName: "", lastName: "" },
    { firstName: "", lastName: "" },
  ]);

  const handleChange = (
    index: keyof InputFieldsType | number,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const values = [...inputFields];
    values[index as number][event.target.name as keyof InputFieldsType] =
      event.target.value;
    setInputFields(values);
  };

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
              onChange={(event) => handleChange(index, event)}
            />
            <TextField
              name="lastName"
              label="First Name"
              variant="filled"
              value={inputField.lastName}
              onChange={(event) => handleChange(index, event)}
            />
            <IconButton>
              <Remove />
            </IconButton>
            <IconButton>
              <AddIcon />
            </IconButton>
          </div>
        ))}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          endIcon={<SendOutlined />}
          className={classes.button}
        >
          Send
        </Button>
      </form>
    </Container>
  );
};

export default WorkUnitForm2;
