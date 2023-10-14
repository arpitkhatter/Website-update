import LocalShipping from '@material-ui/icons/LocalShipping';
import CardContent from "@material-ui/core/CardContent";
import SettingsIcon from '@material-ui/icons/Settings';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';
import Timeline from '@material-ui/icons/Timeline';
import Divider from "@material-ui/core/Divider";
import Update from '@material-ui/icons/Update';
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { Link } from 'react-router-dom';
import React , {Fragment} from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  section: {
    marginTop: '4rem',
    marginBottom: '4rem'
  },
  card: {
    width: 245,
    height: 245,
    margin: "auto",
    transition: "0.3s",
    borderRadius: "9px",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  media: {
    paddingTop: "56.25%"
  },
  content: {
    textAlign: "left",
    padding: theme.spacing(3)
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`
  },
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial'
  }
}));

const menuItems = [
  {
      title:'Settings',
      forward: '/project/settings',
      detail: 'Update detail setting for your apartment',
      url:'#',
      cName:'nav-links'
  },
  {
      title:'Deliveries',
      detail: 'Update detail setting for your apartment',
      url:'#',
      cName:'nav-links'
  },
  {
      title:'Onboarding',
      detail: 'Update your chosen onboaring responses',
      url:'#',
      cName:'nav-links'
  },
  {
    title:'Timeline',
    detail: 'Update your chosen onboaring responses',
    url:'#',
    cName:'nav-links'
  },
  {
      title:'Billing',
      component: 'SettingsIcon',
      detail: 'Manage  your payment methods and billing methods',
      url:'#',
      cName:'nav-links'
  },
  {
    title:'Invoices',
    component: 'SettingsIcon',
    detail: 'View or pay invoices for your Dexterio subscription',
    url:'#',
    cName:'nav-links'
  },
  {
    title:'Products',
    component: 'SettingsIcon',
    detail: 'View all products included in your subscription ',
    url:'#',
    cName:'nav-links'
  },
  {
    title:'Insurance',
    component: 'SettingsIcon',
    detail: 'File insurance claims for your apartment\'s products',
    url:'#',
    cName:'nav-links'
  }
];

function GridItem({ classes , item}) {
  
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card className={classes.card}>
        <ButtonBase
            className={classes.cardAction}
            component={Link} to={item.forward}
        >

          <CardContent className={classes.content}>
            <p>
              {(() => {
                switch (item.title) {
                  case "Settings":   return <SettingsIcon/>;
                  case "Deliveries": return <LocalShipping/>;
                  case "Timeline": return   <Timeline/>;
                  case "Onboarding": return   <Update/>;
                  case "Billing": return  <LocalShipping/>;
                  case "Invoices":  return  <SettingsIcon/>;
                  case "Products": return <LocalShipping/>;
                  case "Insurance": return <LocalShipping/>;
                  default: return  <LocalShipping/>;
                }
              })()}
            </p>
            <Typography
              className={"MuiTypography--heading"}
              variant={"h5"}
              gutterBottom
            >
              {item.title}
            </Typography>
            <Divider className={classes.divider} light />
            <Typography
              className={"MuiTypography--subheading"}
              variant={"caption"}
            >
              {item.detail}
            </Typography>
          </CardContent>
        </ButtonBase>
      </Card>
    </Grid>
  );
}

export default function ClientGrid(props) {
  const classes = useStyles();
  return (
    <Fragment>
      <Container maxWidth="lg" className={classes.section}>
        <Container maxWidth="lg" className={classes.section}>
            <Typography component="h3" variant="h5">
              Project Updates
            </Typography>
        </Container>
        <Grid container spacing={5} className={classes.maingrid}>

        {menuItems.map((item,index) => (
          <GridItem classes={classes} item={item} key={index}/>
        ))}

        </Grid>
      </Container>
    </Fragment>
  );
}
