import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  error: {
    textAlign: 'left',
    color: 'red'
  }
}));

function FormErrors(props) {

  const classes = useStyles();

  if (props.formerrors && props.formerrors.cognito) {
    return (
      <div className={classes.error}>
          {props.formerrors.cognito}
      </div>
    );
  } else {
    return <div />;
  }
}

export default FormErrors;