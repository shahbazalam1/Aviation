import "./App.css";
import { React, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login";
import PhoneSignIn from "./components/PhoneSignIn";
import { Container, Row, Col } from "react-bootstrap";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import api from "./api/baseapi";
import { async } from "@firebase/util";
import { SettingsInputCompositeTwoTone } from "@mui/icons-material";
import axios from "axios";
import Upcoming from "./pages/Upcoming";
import Completed from "./pages/Completed";

function App() {
  const [posts, setPosts] = useState([]);
  const formData = {
    MRNO: "MR/08/001233"
  };
  const fetchPosts = async () => {
    try {
       await api.post("/api/getBookingData", formData).then((res) => {
         setPosts(res.data);
       });
    } catch (err) {
      if (err.res) {
        console.log(err.res.data);
        console.log(err.res.status);
        console.log(err.res.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  useEffect(() => {
    async function fetchData() {
      fetchPosts();
    }
    fetchData();
  }, []);

  //  const contacts = [
  //    {
  //      id: "1",
  //      name: "Shahbaz",
  //      email: "shah@gmail.com",
  //    },
  //    { id: "2", name: "Karan", email: "karan@gmail.com" },
  //  ];

  return (
    <Container>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/" element={<Upcoming upcoming={posts} />} />
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Completed />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

// // import "./App.css";
// // import { useState } from "react";

// // function App() {
// //   const [showText, setShowHide] = useState(true);

// //   return (
// //     <div className="App">
// //       <button
// //         onClick={() => {
// //           setShowHide(!showText);
// //         }}
// //       >
// //         Show/ Hide
// //       </button>
// //       {showText && <h1>HI MY NAME IS SHAHBAZ</h1>}
// //     </div>
// //   );
// //   // const [inputValue, setInputValue] = useState("");

// //   // const handleInputValue = (event) => {
// //   //   setInputValue(event.target.value);
// //   // };

// //   // return (
// //   //   <div className="App">
// //   //     <input type="text" onChange={handleInputValue} /> : {inputValue}
// //   //   </div>
// //   // );

// //   // const [age, setAge] = useState(0);

// //   // const IncreaseAge = () => {
// //   //   setAge(age + 1);
// //   // };

// //   // return (
// //   //   <div>
// //   //     {age} :
// //   //     <button onClick={IncreaseAge}>Increase Age</button>
// //   //   </div>
// //   // );
// // }

// // export default App;

////WORKING SOLUTION

// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [passwordError, setpasswordError] = useState("");
//   const [emailError, setemailError] = useState("");

//   const handleValidation = (event) => {
//     let formIsValid = true;

//     if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
//       formIsValid = false;
//       setemailError("Email Not Valid");
//       return false;
//     } else {
//       setemailError("");
//       formIsValid = true;
//     }

//     if (!password.match(/^[a-zA-Z]{8,22}$/)) {
//       formIsValid = false;
//       setpasswordError(
//         "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
//       );
//       return false;
//     } else {
//       setpasswordError("");
//       formIsValid = true;
//     }

//     return formIsValid;
//   };

//   const loginSubmit = (e) => {
//     e.preventDefault();
//     handleValidation();
//   };

//   return (
//     <div className="App">
//       <div className="container">
//         <div className="row d-flex justify-content-center">
//           <div className="col-md-4">
//             <form id="loginform" onSubmit={loginSubmit}>
//               <div className="form-group">
//                 <label>Email address</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="EmailInput"
//                   name="EmailInput"
//                   aria-describedby="emailHelp"
//                   placeholder="Enter email"
//                   onChange={(event) => setEmail(event.target.value)}
//                 />
//                 <small id="emailHelp" className="text-danger form-text">
//                   {emailError}
//                 </small>
//               </div>
//               <div className="form-group">
//                 <label>Password</label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="exampleInputPassword1"
//                   placeholder="Password"
//                   onChange={(event) => setPassword(event.target.value)}
//                 />
//                 <small id="passworderror" className="text-danger form-text">
//                   {passwordError}
//                 </small>
//               </div>
//               <div className="form-group form-check">
//                 <input
//                   type="checkbox"
//                   className="form-check-input"
//                   id="exampleCheck1"
//                 />
//                 <label className="form-check-label">Check me out</label>
//               </div>
//               <button type="submit" className="btn btn-primary">
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default App;
