import "../style/Login.css";

const Login = () => {
  return (
    <>
      <div className="top">
        <img id="logo" src="/images/logo-white.png" alt="" srcset="" />
      </div>

      <div className="left-container">
        <img id="pic1" src="/images/uncle.png" alt="" srcset="" />
      </div>

      <div className="right-container">
        <span id="right-heading">Welcome back</span>
        <br />
        <span id="right-subheading">
          <b>Login to your account</b>
        </span>

        <form action="">
          <span id="content-field1">Your email</span>
          <br />
          <input id="field1" type="text" placeholder="Enter your email" />
          <br />
          <span id="content-field2">Choose a password</span>
          <br />{" "}
          <input
            id="field2"
            type="password"
            placeholder="* * * * * * * * *"
          ></input>
        </form>

        <div className="footer">
          <input id="checkbox" type="checkbox" name="" />
          <span id="cb-content">Remember me</span>
          <span id="forget">Forget password?</span>
        </div>

        <div className="btn">
          <button id="btn1" className="btn-all ">
            Log in
          </button>
          <button id="btn2" className="btn-all ">
            Sign in with google
          </button>
        </div>

        <div className="bottom">
          <span id="botm">Don't have an account?</span>
          <span id="botm2">
            <u>Join free today</u>
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
