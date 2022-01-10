import React from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import useHistory from "use-history";

import { useEffect } from "react";
import { useState } from "react";

const Login = () => {
  const initialValues = {
    firstname: "",
    phonenumber: "",
    email: "",
    salary: "",
    employed: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const history = useHistory();
  const handleChange = (e) => {
    formValues[e.target.id] = e.target.value;
    setFormValues(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    history.push("/");
    localStorage.setItem("auth", true);
  };

  useEffect(() => {
    // if (Object.keys(formErrors).length === 0 && isSubmit) {
    //   console.log(formValues);
    if (localStorage.getItem("auth")) history.push("/");
  }, []);

  const validate = (values) => {
    console.log(values);
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const r = /([0-9]{1,9})[,]*([0-9]{3,3})*[,]*([0-9]{1,3})*[.]*([0-9]{2,2})*/;
    if (
      values.firstname === "" ||
      !values.firstname ||
      values.firstname === undefined
    ) {
      errors.firstname = "FirstName is required!";
    } else {
      errors.firstname = "";
    }

    if (!values.phonenumber) {
      errors.phonenumber = "phonenumber is required!";
    } else {
      errors.phonenumber = "";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.salary) {
      errors.salary = "Salary is required!";
    } else if (!r.test(values.salary)) {
      errors.salary = "not valid data";
    }

    if (!values.employed) {
      errors.employed = "employed is required!";
    }

    return errors;
  };

  const paperStyle = {
    padding: 20,
    height: 800,
    width: 400,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "blue" };
  const btnstyle = { margin: "8px 0" };

  return (
    <Grid>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre></pre>
      )}

      <Paper elevation={10} style={paperStyle}>
        <form>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <TextField
            id="firstname"
            label="firstname"
            placeholder="Enter Name"
            type="text"
            fullWidth
            required
            onChange={handleChange}
          />
          <p>{formErrors.firstname}</p>
          <TextField
            id="phonenumber"
            label="phonenumber"
            placeholder="Enter Phonenumber"
            fullWidth
            required
            onChange={handleChange}
          />
          <p>{formErrors.phonenumber}</p>
          <TextField
            id="email"
            label="email"
            placeholder="Enter Email"
            type="email"
            fullWidth
            required
            onChange={handleChange}
          />
          <p>{formErrors.email}</p>
          <TextField
            id="salary"
            label="salary"
            placeholder="Enter salary"
            fullWidth
            required
            onChange={handleChange}
          />
          <p>{formErrors.salary}</p>
          select:
          <select onChange={handleChange} id="employed">
            <option value="STUDENT">STUDENT</option>
            <option value="EMPLOYED">EMPLOYED</option>
          </select>
          <p>{formErrors.employed}</p>
          {/* <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        /> */}
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
            onClick={handleSubmit}
          >
            Sign in
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Login;
