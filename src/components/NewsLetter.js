

const NewsLetter = () =>{
    return(
    <div className="newsletter-div">
        <img src="/images/logo.png" alt="" />
        
        <p>Get Started with Our<br/> 
            Career Updates<br/>
            Newsletter Today !!
        </p>
        <input type="email" placeholder="Enter Your Email" />
        {/* <i class="fa fa envelope fa-lg-fa-fw" aria-hidden="true"></i> */}
        <br/><p></p>
        <button className='btn-news'>
            Subscribe
        </button>
        <img  id="img1" src="/images/newletter.png" alt=""/>
    </div>
    );
}

export default NewsLetter;