import config from '../../config';
import SignUp from './SignUp';

export default function IDSignUp(props) {

  return (
    <SignUp {...props} auth={props.auth} 
            forward={config.idlogin.FORWARD} 
            userType={config.idlogin.USERTYPE} 
            user={config.idlogin.USER}/>
  );
}