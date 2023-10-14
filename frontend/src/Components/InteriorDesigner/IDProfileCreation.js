import { makeStyles, useTheme } from '@material-ui/core/styles';
import React, {useCallback, useState, useEffect} from 'react';
import StackGrid, { transitions } from "react-stack-grid";
import FormControl from '@material-ui/core/FormControl';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import { DropzoneArea } from 'material-ui-dropzone';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import axios from "axios";

const { scaleDown } = transitions;
const config = require('../../config.json');
    
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  image: {
    backgroundImage: 'linear-gradient(40deg, #00808008 0%, #00808008 100%)',
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
  textarea: {
    resize: "both"
  },
}));

export default function IDProfileCreation({props}) {   
  const theme = useTheme();

  async function onDrop (acceptedFiles) {
    for (const imFile of acceptedFiles) {
      const result = await postImage({image: imFile});
      console.log(projectImages);
      projectImages.push(result.imagePath);
      console.log(projectImages);
    }
  }

  const handleAddIDProfile = useCallback((event) => {
    submit(event);
  }, []);

  async function postImage({image}) {
    const formData = new FormData();
    formData.append("image", image)
    formData.append("description", "Tarun")
  
    const result = await axios.post('/images', formData, { headers: {'Content-Type': 'multipart/form-data', "Access-Control-Allow-Origin": "true"}})
    return result.data
  }
  

  const submit = async(props, event) => {
    try {
      const params = {
        "username" : props.username,
        "name" : props.name,
        "email" : props.email,
        "profileDesc" : props.profileDesc,
        "projectImageUrls" : props.projectImages,
        "tags" : props.tags,
        "oneLiner" : props.oneLiner
      }
      await axios.post(`${config.api.invokeUrl}designerprofile/${props.username}`,params);

    } catch(error){
      console.log(`Error occured: ${error}`);
    }
  }
  
  const classes = useStyles();

  const [name, setName] = useState("");
  const [username, setUsername] = useState(props.user.username);
  const [email, setEmail] = useState(props.user.attributes.email);
  const [profileDesc, setProfileDesc] = useState("");
  const [projectImages1, setProjectImages1] = useState([]);
  const [projectImages, setProjectImages] = useState([]);
  const [oneLiner, setOneLiner] = useState([]);
  const [step, setStep] = useState(0);
  const [tags, setTags] = useState([]);

  const handleChange = (event) => {
    setTags(event.target.value);
  };

  const imageThemes = [
    'Bed Room',
    'Living Room',
    'Kitchen',
    'Bath Room',
    'Flats',
    'Individual Housing',
    'General'
  ];

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
      
  useEffect(() => {
    fetch(`${config.api.invokeUrl}/designerprofile/${username}`)
      .then(resp => resp.json())
      .then(data => {
          if (data.Item) {
            setName(data.Item.name)
            setProjectImages(data.Item.projectImageUrls)
            setProfileDesc(data.Item.profileDesc)
            setOneLiner(data.Item.oneLiner)
            setTags(data.Item.tags)
          }
        }
      )
    }, []);
  
  return (
    
    <Grid container component="main" className={classes.root}>
        <CssBaseline />

    { step === 0 && 
      (
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <DropzoneArea
            acceptedFiles={['image/*', 'video/*', 'application/*']}
            showFileNames
            dropzoneText="Add your project Images"
            showAlerts={true}
            showPreviewsInDropzone={true}
            filesLimit={10}
            maxFileSize={2097152}
            value={projectImages1}
            onChange={onDrop} />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick = {event => { event.preventDefault(); setStep(1) }}
              >Next </Button>
        </Grid>
        )
    }
    { step === 1 && 
      (
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Please provide your details
            </Typography>

            <form className={classes.form} onSubmit={event => { event.preventDefault(); handleAddIDProfile({ "username": username, "email": email, "name": name, "profileDesc": profileDesc, "tags": tags, "oneLiner" : oneLiner, "projectImages": projectImages}, event); } }>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Full Name"
                name="name"
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)} />

              <FormControl className={classes.formControl}>
                <InputLabel id="theme-selection">Design theme</InputLabel>
                <Select
                  labelId="theme-selection"
                  id="theme-selection"
                  multiple
                  fullWidth
                  value={tags}
                  onChange={handleChange}
                  input={<Input id="theme" />}
                  renderValue={(selected) => (
                    <div className={classes.chips}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} className={classes.chip} />
                      ))}
                    </div>
                  )}
                  MenuProps={MenuProps}
                >
                  {imageThemes.map((image) => (
                    <MenuItem key={image} value={image} style={getStyles(image, tags, theme)}>
                      {image}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="oneLiner"
                label="Brief Description (50 Chars)"
                name="oneLiner"
                autoComplete="oneLiner"
                value={oneLiner}
                onChange={(event) => setOneLiner(event.target.value)}
                inputProps={{ maxLength: 50 }}
                />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="profileDesc"
                label="My Profile"
                name="profileDesc"
                autoComplete="profileDesc"
                value={profileDesc}
                onChange={(event) => setProfileDesc(event.target.value)}
                multiline
                minRows={3}
                maxRows={5} />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}>
                Submit
              </Button>
            </form>
          </div>
        </Grid>
      )
    }
        <Grid item xs={false} sm={4} md={6} className={classes.image}>
          <StackGrid columnWidth={220} appear={scaleDown.appear}
                                      appeared={scaleDown.appeared}
                                      enter={scaleDown.enter}
                                      entered={scaleDown.entered}
                                      leaved={scaleDown.leaved}
                                      monitorImagesLoaded = {true}
                                      gutterWidth = {15}
                                      gutterHeight = {15}
          >
            { projectImages.map( (image, index) => (
                  <img src={image} alt="Project images" key={index} />
            ))}
          </StackGrid>
        </Grid>
      </Grid>
  );
}