import React, { Component } from 'react';
import backgroundImage from '../images/weight.jpg';
import styled from 'styled-components';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Loginform = styled.form`
display:flex;
flex-direction:column;
align-items:center;
border-radius:30px;
margin-right:32%;
margin-left:32%;
margin-top: 10%;
width:35%;
background-color: #00A35E;
padding-bottom:5%;
padding-top: 2%;
`;

const Title = styled.h2`
color: #C4DFE6;
padding-bottom:20%;
`;

const Topnav = styled.nav`
display:flex;
justify-content:flex-end;
justify-content:space-between;
padding-bottom:10px;
padding-top:10px;
width 100%;
align-items:center;
background-color: #00A35E
`
const Anchorstyle = styled.a`
display:flex;
flex-direction:column;
`

const Login = (props) => {
  const [credentials, setCredentials] = React.useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.history.push('/dashboard')
    console.log(credentials);

    axiosWithAuth()
      .post(`/api/auth/login`, credentials)
      .then(response => {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('userId', response.data.id)
        
        console.log(response.data);
      })
      .catch(error => console.log(error));
  };

  const Validation = () => {
    return credentials.username.length > 0 && credentials.password.length > 0;
  };
  return (
    <div>
      {/* <Topnav >
            <h1> Weightlifting Journal</h1>
             <Anchorstyle>Dashboard</Anchorstyle>
             <Anchorstyle>Register</Anchorstyle>
             <Anchorstyle>Add Excercise</Anchorstyle>
             <Anchorstyle>Saved Excercises</Anchorstyle>
          </Topnav> */}
      <h3 style={{ color: 'black', }}></h3>
      <Loginform onSubmit={handleSubmit}>
        <div>
          <Title>Login</Title>
        </div>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
          value={credentials.username}
        ></input>
        <br></br>
        <input
          required
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          value={credentials.password}
        ></input>
        <br></br>
        <button disabled={!Validation()} type="submit"  >Log in</button>
      </Loginform>
    </div>


  )
};
export default Login;

// import React from "react";
// import Avatar from "@material-ui/core/Avatar";
// import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import TextField from "@material-ui/core/TextField";
// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
// import Link from "@material-ui/core/Link";
// import Typography from "@material-ui/core/Typography";
// import Container from "@material-ui/core/Container";
// import AccountBoxIcon from "@material-ui/icons/AccountBox";
// import Copyright from "./Reusable-Components/Copyright";
// import Styling from "./Reusable-Components/Styling";


// export default function Login() {
//   const classes = Styling();
//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <AccountBoxIcon fontSize="Large" />
//         <Typography component="h2" variant="h5">
//           Sign in
//         </Typography>
//         <form className={classes.form} Validate>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="username"
//             label="Username"
//             name="username"
//             autoComplete="username"
//             autoFocus
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Login
//           </Button>
//           <Grid container>
//             <Grid item>
//               <Link href="/register" variant="body2">
//                 {"Don't have an account? Sign Up"}
//               </Link>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//       <Box mt={8}>
//         <Copyright />
//       </Box>
//     </Container>
//   );
// }