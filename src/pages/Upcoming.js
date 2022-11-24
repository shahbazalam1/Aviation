import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const Upcoming = (props) => {
  console.log(props);
  const renderBookingData = props.upcoming.map((upc) => {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                20:45 | Fri 25 Nov
              </Typography>
              <Typography variant="h6" component="div">
                {upc.ARH_MR_NUM} <ArrowForwardIcon /> Pune
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Indigo - 6e 672
              </Typography>
              <Typography variant="body2">A V RAM PRASAD </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Get Boarding Pass</Button>
            </CardActions>
          </Card>
          <br />
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                08:45 | WED 06 DEC
              </Typography>
              <Typography variant="h5" component="div">
                Pune <ArrowForwardIcon /> Kolkatta
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Air Asia - 5l-558
              </Typography>
              <Typography variant="body2">Shahbaz + 1 more</Typography>
            </CardContent>
            <CardActions>
              <Link to="/Boarding">
                <Button size="small">Get Boarding Pass</Button>
              </Link>
            </CardActions>
          </Card>
        </Paper>
      </Container>
    );
  });
  return <div className="ui celled list">{renderBookingData}</div>;
};

export default Upcoming;

// import * as React from "react";
// import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import MuiDrawer from "@mui/material/Drawer";
// import Box from "@mui/material/Box";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import Badge from "@mui/material/Badge";
// import Container from "@mui/material/Container";
// //import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// //import Link from "@mui/material/Link";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// //import { mainListItems  } from "../listitem";
// //import Orders from "./Orders";
// import Card from "@mui/material/Card";
// import Button from "@mui/material/Button";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import { Link } from "react-router-dom";

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// // }

// const drawerWidth = 240;

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(["width", "margin"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   "& .MuiDrawer-paper": {
//     position: "relative",
//     whiteSpace: "nowrap",
//     width: drawerWidth,
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     boxSizing: "border-box",
//     ...(!open && {
//       overflowX: "hidden",
//       transition: theme.transitions.create("width", {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//       }),
//       width: theme.spacing(7),
//       [theme.breakpoints.up("sm")]: {
//         width: theme.spacing(9),
//       },
//     }),
//   },
// }));

// const mdTheme = createTheme();

// function UpcomingContent(props) {
//   debugger;
//   console.log(props);

//   <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//     {/* <Grid container spacing={3}> */}
//     {/* <Grid item xs={8}> */}
//     <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
//       <Card sx={{ minWidth: 275 }}>
//         <CardContent>
//           <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//             20:45 | Fri 25 Nov
//           </Typography>
//           <Typography variant="h5" component="div">
//             Ranchi <ArrowForwardIcon /> Pune
//           </Typography>
//           <Typography sx={{ mb: 1.5 }} color="text.secondary">
//             Indigo - 6e 672
//           </Typography>
//           <Typography variant="body2">A V RAM PRASAD + 1 more</Typography>
//         </CardContent>
//         <CardActions>
//           <Button size="small">Get Boarding Pass</Button>
//         </CardActions>
//       </Card>
//       <br />
//       <Card sx={{ minWidth: 275 }}>
//         <CardContent>
//           <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//             08:45 | WED 06 DEC
//           </Typography>
//           <Typography variant="h5" component="div">
//             Pune <ArrowForwardIcon /> Kolkatta
//           </Typography>
//           <Typography sx={{ mb: 1.5 }} color="text.secondary">
//             Air Asia - 5l-558
//           </Typography>
//           <Typography variant="body2">Shahbaz + 1 more</Typography>
//         </CardContent>
//         <CardActions>
//           <Link to="/Boarding">
//             <Button size="small">Get Boarding Pass</Button>
//           </Link>
//         </CardActions>
//       </Card>
//       {/* <Orders /> */}
//     </Paper>
//     {/* </Grid> */}
//     {/* </Grid> */}
//     {/* <Copyright sx={{ pt: 4 }} /> */}
//   </Container>

//   //   const [open, setOpen] = React.useState(false);
//   //   const toggleDrawer = () => {
//   //     setOpen(!open);
//   //   };

//   //   const bull = (
//   //     <Box
//   //       component="span"
//   //       sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   //     >
//   //       •
//   //     </Box>
//   //   );

//   //   return (
//   //     <ThemeProvider theme={mdTheme}>
//   //       <Box sx={{ display: "flex" }}>
//   //         <CssBaseline />
//   //         <AppBar position="absolute" open={open}>
//   //           <Toolbar
//   //             sx={{
//   //               pr: "24px", // keep right padding when drawer closed
//   //             }}
//   //           >
//   //             <IconButton
//   //               edge="start"
//   //               color="inherit"
//   //               aria-label="open drawer"
//   //               onClick={toggleDrawer}
//   //               sx={{
//   //                 marginRight: "36px",
//   //                 ...(open && { display: "none" }),
//   //               }}
//   //             >
//   //               <MenuIcon />
//   //             </IconButton>
//   //             <Typography
//   //               component="h1"
//   //               variant="h6"
//   //               color="inherit"
//   //               noWrap
//   //               sx={{ flexGrow: 1 }}
//   //             >
//   //               Flight Details
//   //             </Typography>
//   //             <IconButton color="inherit">
//   //               <Badge badgeContent={4} color="secondary">
//   //                 <NotificationsIcon />
//   //               </Badge>
//   //             </IconButton>
//   //           </Toolbar>
//   //         </AppBar>
//   //         <Drawer variant="permanent" open={open}>
//   //           <Toolbar
//   //             sx={{
//   //               display: "flex",
//   //               alignItems: "center",
//   //               justifyContent: "flex-end",
//   //               px: [1],
//   //             }}
//   //           >
//   //             <IconButton onClick={toggleDrawer}>
//   //               <ChevronLeftIcon />
//   //             </IconButton>
//   //           </Toolbar>
//   //           <Divider />
//   //           {/* <List component="nav">{mainListItems}</List> */}
//   //         </Drawer>
//   //         <Box
//   //           component="main"
//   //           sx={{
//   //             backgroundColor: (theme) =>
//   //               theme.palette.mode === "light"
//   //                 ? theme.palette.grey[100]
//   //                 : theme.palette.grey[900],
//   //             flexGrow: 1,
//   //             height: "100vh",
//   //             overflow: "auto",
//   //           }}
//   //         >
//   //           <Toolbar />

//   //         </Box>
//   //       </Box>
//   //     </ThemeProvider>
//   // );
// }

// export default function Upcoming(props) {
//   return <UpcomingContent element={props} />;
// }
