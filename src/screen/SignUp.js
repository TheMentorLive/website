import React from "react";
import '../style/SignUp.css';

const SignUp=()=>{
    return(
        <>
            <div className="top">
                 <img  id="logo" src="/images/logo-white.png" alt="" srcset="" /> 
            </div>

            <div className="context-container">
                <img id="pic1" src="/images/Frame 2.png" alt="" />
            </div>

            <div className="over-img">
                <img id="over-content" src="/images/technology 1.png" alt="" srcset="" />
            </div>

            <div className="right-container">
                <p id="heading">Join the journey!</p>
                <p id="subheading">Go inside the best social network !</p>

                <img id="g1" src="/images/google.png" alt="" srcset="" />
                <img id="t1" src="/images/twitter.png" alt="" srcset="" />
                <img id="l1" src="/images/linkdin.png" alt="" srcset="" />
                <img id="git1" src="/images/github.png" alt="" srcset="" />
                <br/>

                <span id="partision">or</span>

                <form action="">
                  <p id="sub-inpt"> Your email</p>
                  <input id="inpt-1" type="text" placeholder="write your email"/>

                  <p id="sub-inpt2">Choose a password</p>
                  <input id="inpt-2" type="password" placeholder="**********"/>

                <input type="checkbox" name="" id="cb1" /><span id="content1">I agree to terms and conditons</span>
                <br/>
                <input type="checkbox" name="" id="cb2" /><span id="content2">I'd like being informed about latest news and tips</span>

                <button id="btn">Sign up for free</button><br/> 
                 <p class="content3">Do you already have an account?
                 
                
                 <a href="wwww.google.com" >Log in</a>
                 </p> 
                 
                </form>


            </div>
        </>
    );
}

export default SignUp;