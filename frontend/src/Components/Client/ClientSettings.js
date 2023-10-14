import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import React, {useState, useCallback, useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import axios from "axios";


const config = require('../../config.json');


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function ClientSettings(props) {
  console.log(props.auth);
  const classes = useStyles();

  const [name, setName] = useState("");
  const [username, setUsername] = useState(props.auth.user.username);
  const [email, setEmail] = useState(props.auth.user.attributes.email);
  const [street, setStreet] = useState("");
  const [housenumber, setHousenumber] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");


  const handleUpdateCustSettings = useCallback((event) => {
    submit(event);
  }, []);

  const submit = async(props, event) => {
    try {
      const params = {
        "username" : props.username,
        "name" : props.name,
        "street" : props.street,
        "housenumber" : props.housenumber,
        "city" : props.city,
        "postalCode" : props.postalCode
      }
      await axios.post(`${config.api.invokeUrl}/customer/${props.username}`,params);

    } catch(error){
      console.log(`Error occured: ${error}`);
    }
  }

  useEffect(() => {
    fetch(`${config.api.invokeUrl}/customer/${username}`)
      .then(resp => resp.json())
      .then(data => {
          if (data.Item) {
            setName(data.Item.name)
            setStreet(data.Item.street)
            setHousenumber(data.Item.housenumber)
            setCity(data.Item.city)
            setPostalCode(data.Item.postalCode)           
          }
        }
      )
    }, []);


  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography alignItems = "left" component="h1" variant="h5">
          Settings
        </Typography>
        <form className={classes.form} onSubmit={event => { event.preventDefault(); handleUpdateCustSettings({ "username": username, "name": name, "street": street, "housenumber": housenumber, "city" : city, "postalCode": postalCode}, event); }}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
            <TextField
                variant="outlined"
                margin="dense"
                fullWidth
                id="name"
                label="Full Name"
                name="name"
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <div><b>Billing Address</b></div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                name="street"
                variant="outlined"
                margin="dense"
                autoComplete="street"
                value={street}
                onChange={(event) => setStreet(event.target.value)}
                fullWidth
                id="street"
                label="Street"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                name="housenumber"
                variant="outlined"
                margin="dense"
                autoComplete="street"
                value={housenumber}
                onChange={(event) => setHousenumber(event.target.value)}
                fullWidth
                id="houseNumber"
                label="House Number"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                name="city"
                variant="outlined"
                margin="dense"
                autoComplete="city"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                fullWidth
                id="city"
                label="City"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                variant="outlined"
                margin="dense"
                autoComplete="postalCode"
                value={postalCode}
                onChange={(event) => setPostalCode(event.target.value)}
                fullWidth
                id="postalCode"
                label="Postal Code"
                name="postalCode"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <a href="/home">
                <ArrowBackIosIcon /> <span><b>Back</b></span>
              </a>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              >
                Update Settings
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}