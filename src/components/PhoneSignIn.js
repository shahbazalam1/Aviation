import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Alert } from "react-bootstrap";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import Form from "react-bootstrap/Form";

const PhoneSignIn = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };

  const txtStyle = { margin: "8px 0" };
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const { setUpRecaptcha } = useUserAuth();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [flag, setFlag] = useState(false);
  const [confirmObj, setConfirmObj] = useState("");

  const getOTP = async (e) => {
    e.preventDefault();
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid Phone number!");
    try {
      const response = await setUpRecaptcha(number);
      console.log(response);
      setConfirmObj(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
    console.log(number);
  };

  const verifyOTP = async (e) => {
    e.preventDefault();
    console.log(otp);
    if (otp === "" || otp === null) return setError("Wrong OTP!");
    try {
      setError("");
      await confirmObj.confirm(otp);
      navigate("/home");
    } catch (er) {
      setError(er.message);
    }
  };

  return (
    <>
      <div className="p-4 box" style={paperStyle}>
        <h2 className="mb-3">Phone Authentication</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={getOTP} style={{ display: !flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
            <div className="row">
              <PhoneInput
                placeholder="Mobile Number"
                defaultCountry="IN"
                value={number}
                onChange={setNumber}
                style={txtStyle}
              />
            </div>
            <div id="recaptcha-container"></div>
          </Form.Group>
          <div className="button-right">
            <Link to="/">
              <Button variant="text">Cancel</Button>
            </Link>
            &nbsp;
            <Button variant="text" type="Submit">
              Send OTP
            </Button>
          </div>
        </Form>

        <Form onSubmit={verifyOTP} style={{ display: flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicotp">
            <Form.Control
              type="text"
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
            ></Form.Control>
            <div id="recaptcha-container"></div>
          </Form.Group>
          <div className="button-right">
            <Link to="/">
              <Button variant="secondary">Cancel</Button>
            </Link>
            &nbsp;
            <Button variant="primary" type="Submit">
              Verify OTP
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
  // return (
  //   <>
  //     {/* LOGIN SCREEN */}
  //     <h1>Phone Authentication</h1>
  //     {error && <Alert variant="danger">{error}</Alert>}
  //     <div style={{ display: !flag ? "block" : "none" }}>
  //       <PhoneInput
  //         placeholder="Mobile Number"
  //         defaultCountry="IN"
  //         value={number}
  //         onChange={setNumber}
  //       />

  //       <div className="App">
  //         <Link to="/">
  //           <Button
  //             type="cancel"
  //             style={txtStyle}
  //             color="primary"
  //             variant="contained"
  //             fullWidth
  //           >
  //             Cancel
  //           </Button>{" "}
  //         </Link>
  //         <Button
  //           type="submit"
  //           color="primary"
  //           variant="contained"
  //           onClick={getOTP}
  //           fullWidth
  //         >
  //           Send OTP
  //         </Button>
  //       </div>
  //     </div>
  //     &nbsp;
  //     {/* OTP SCREEN */}
  //     <div style={{ display: flag ? "block" : "none" }}>
  //       <div>
  //         <input
  //           type="otp"
  //           placeholder="Enter OTP"
  //           onChange={(e) => setOtp(e.target.value)}
  //         ></input>
  //         <Link to="/">
  //           <Button
  //             className="App"
  //             type="submit"
  //             color="primary"
  //             variant="contained"
  //             fullWidth
  //           >
  //             Cancel
  //           </Button>
  //         </Link>
  //         &nbsp;
  //         <Button
  //           className="App"
  //           color="primary"
  //           variant="contained"
  //           onClick={verifyOTP}
  //           fullWidth
  //         >
  //           Send OTP
  //         </Button>
  //       </div>
  //     </div>
  //   </>
};

export default PhoneSignIn;
