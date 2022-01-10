import React from "react";

import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";

function App() {
  const responseFacebook = (response) => {
    document.write(
      `Hey ${response.name} you are logged in with following user id ${response.userID}`
    );
  };

  const responseGoogle = (response) => {
    document.write(
      `Hey ${response.profileObj.name} you are logged in with ${response.profileObj.email}`
    );
  };
  return (
    <div className="container">
      <div>
        <FacebookLogin
          appId="472363297589387"
          autoLoad
          callback={responseFacebook}
          render={(renderProps) => (
            <button
              className="btn btn-primary btn-lg btn-block"
              onClick={renderProps.onClick}
            >
              Login with FACEBOOK
            </button>
          )}
        />

        <GoogleLogin
          clientId="325116987819-oihfd3kr2h9grb4jvo42l8r36i5q8g49.apps.googleusercontent.com"
          render={(renderProps) => (
            <button
              className="btn btn-danger btn-lg btn-block"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Login with GOOGLE
            </button>
          )}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
}

export default App;
