import config from '../../config';
import SignUp from './SignUp';

export default function ClientSignUp(props) {
  return (
    <SignUp {...props} auth={props.auth} 
            forward={config.clientlogin.FORWARD} 
            userType={config.clientlogin.USERTYPE} 
            user={config.clientlogin.USER}/>
  );
}