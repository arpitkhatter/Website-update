import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MuiPhoneNumber from "material-ui-phone-number";
import TextField from '@material-ui/core/TextField';
import Validate from "../Utility/FormValidation";
import FormErrors from "../Errors/FormErrors";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import React, {useState} from 'react';
import { Auth } from 'aws-amplify'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://dexterio.in/">
        Dexterio
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url("./signup.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  error: {
    alignItems: 'right',
    color: 'red'
  }
}));

export default function SignUp(props) {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [authenticationCode, setAuthenticationCode] = useState("");
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState({cognito: null,blankfield: false,passwordmatch: false});
  const [phone_number, setPhone] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [cognitoUser, setCognitoUser] = useState();


  function clearErrorState () {
    setErrors({
        cognito: null,
        blankfield: false,
        passwordmatch: false
      }
    );
  }
  
  async function confirmSignup(event){
    event.preventDefault();

    clearErrorState();
    const error = Validate(event, username, email);
    if (error) {
      setErrors({
        cognito: error.cognito,
        blankfield: error.blankfield,
        passwordmatch: error.passwordmatch
      });
    }
    const user = await Auth.sendCustomChallengeAnswer(cognitoUser, authenticationCode);
    try {
        await Auth.currentSession();
        let forward = props.forward;
        props.auth.setAuthStatus(true);
        props.auth.setUser(user);
        props.history.push(forward);
    } catch(err) {
      if (err === 'No current user') {
        setErrors({
          cognito: 'Wrong OTP, Please enter correct OTP',
          blankfield: error.blankfield,
          passwordmatch: error.passwordmatch
          }
        );  
      }
        console.log(err);
        props.auth.setAuthStatus(false);
        props.auth.setUser(null);
        props.history.push("/hello");
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    let userType = props.userType;

    try {
      const params = {
        username,
        password: getRandomString(7),
        attributes: {
          email: email,
          phone_number: phone_number,
          'custom:usertype': userType
        }
      }
      await Auth.signUp(params);
      
      let temp = await Auth.signIn(username);
      setCognitoUser(temp);
      setStep(1);
  } catch (error) {
      if (error.message === 'User already exists') {
          setErrors({
          cognito: 'Username is not available. Consider using a different username',
          blankfield: error.blankfield,
          passwordmatch: error.passwordmatch
          }
        );
      }
    }
  }
  
  function getRandomString(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const handleOnBlur = e => {
    let temp = e.target.value.replace("-","");
    temp = temp.replace(" ","");
    if (temp.length === 13) {
      setPhone(temp);
      setError(false);
      setErrorMessage("");
    } else {
      setError(true);
      setErrorMessage("Enter a valid phone number");
    }
  };

  const handleOnChange = value => {
    if (value.length === 13) {
      setError(false);
      setErrorMessage("");
    }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            {props.user} Sign in
          </Typography>
          <FormErrors formerrors={errors} />

          { step === 0 && 
            (
                <form className={classes.form} onSubmit={handleSubmit} noValidate>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="User Name"
                    name="username"
                    autoComplete="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <MuiPhoneNumber
                    variant="outlined"
                    margin="normal"
                    value={phone_number}
                    defaultCountry={"in"}
                    onBlur={handleOnBlur}
                    onChange={handleOnChange}
                    label="Phone Number"
                    fullWidth
                    error={error}
                    helperText={errorMessage}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Sign In
                  </Button>
                  <Box mt={5}>
                    <Copyright />
                  </Box>
                </form>
            )
          }

          { step === 1 && 
            (
                <form className={classes.form} onSubmit={confirmSignup} noValidate>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="User Name"
                    name="username"
                    autoComplete="username"
                    onChange={(event) => setUsername(event.target.value)}
                    value={username}
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="authenticationCode"
                    label="Please check your email for authetication Code"
                    name="authenticationCode"
                    onChange={(event) => setAuthenticationCode(event.target.value)}
                    autoFocus
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Sign In
                  </Button>
                  <Box mt={5}>
                    <Copyright />
                  </Box>
                </form>
            )
          }
        </div>
      </Grid>
    </Grid>
  );
}