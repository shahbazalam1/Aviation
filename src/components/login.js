import { LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { React, useState } from "react";

const Login = () => {
  const [showText, setShowHide] = useState(false);
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundcolor: "green" };
  const txtStyle = { margin: "8px 0" };
  const btnStyle = { margin: "8px 0" };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlined />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          style={txtStyle}
          label="Mobile No"
          placeholder="Enter Mobile Number"
          fullWidth
          required
        />
        {showText && (
          <TextField
            label="OTP"
            placeholder="Enter OTP"
            type="password"
            fullWidth
            required
          />
        )}

        <FormControlLabel
          control={<Checkbox name="checkdb" color="primary" />}
          label="Remember Me"
        />

        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnStyle}
          onClick={() => {
            setShowHide(!showText);
          }}
          fullWidth
        >
          Send OTP
        </Button>
        <Typography>
          <Link href="#">Forget password?</Link>
        </Typography>
        {/* <Typography>
          Do you have an account ?<Link href="#">Sign Up </Link>
        </Typography> */}
      </Paper>
    </Grid>
  );
};

export default Login;
