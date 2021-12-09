import React from 'react';
import { useDispatch } from "react-redux";
import { Button } from '@mui/material';
import FacebookLoginButton from 'react-facebook-login/dist/facebook-login-render-props';
import FacebookIcon from '@mui/icons-material/Facebook';
import { facebookAppId } from '../../../config';
import { facebookLogin } from '../../../store/actions/usersActions';

const FacebookLogin = () => {
    const dispatch = useDispatch();

    const responseFacebook = response => {
        console.log(response);
        dispatch(facebookLogin(response));
    };

    return (
        <FacebookLoginButton
            appId={facebookAppId}
            fields="name,email,picture"
            render={props => (
                <Button
                    fullWidth
                    variant="outlined"
                    color="primary"
                    startIcon={<FacebookIcon />}
                    onClick={props.onClick}
                >
                    Login with facebook
                </Button>
            )}
            callback={responseFacebook} />
    )
}

export default FacebookLogin;
