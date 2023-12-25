const SignIn = () =>{
    return(
        <>
         <div>
  {/* Mirrored from thememakker.com/templates/oreo/hospital/html/light/sign-in.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 17 Feb 2023 05:48:08 GMT */}
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport" />
  <meta name="description" content="Responsive Bootstrap 4 and web Application ui kit." />
  <title>:: Oreo Hospital :: Sign In</title>
  {/* Favicon*/}
  <link rel="icon" href="favicon.ico" type="image/x-icon" />
  {/* Custom Css */}
  <link rel="stylesheet" href="../assets/plugins/bootstrap/css/bootstrap.min.css" />
  <link rel="stylesheet" href="assets/css/main.css" />
  <link rel="stylesheet" href="assets/css/authentication.css" />
  <link rel="stylesheet" href="assets/css/color_skins.css" />
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg fixed-top navbar-transparent">
    <div className="container">        
      <div className="navbar-translate n_logo">
        <a className="navbar-brand" href="javascript:void(0);" title target="_blank">Oreo</a>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-bar bar1" />
          <span className="navbar-toggler-bar bar2" />
          <span className="navbar-toggler-bar bar3" />
        </button>
      </div>
      <div className="navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="index.html">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="javascript:void(0);">Search Result</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" title="Follow us on Twitter" href="javascript:void(0);" target="_blank">
              <i className="zmdi zmdi-twitter" />
              <p className="d-lg-none d-xl-none">Twitter</p>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" title="Like us on Facebook" href="javascript:void(0);" target="_blank">
              <i className="zmdi zmdi-facebook" />
              <p className="d-lg-none d-xl-none">Facebook</p>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" title="Follow us on Instagram" href="javascript:void(0);" target="_blank">                        
              <i className="zmdi zmdi-instagram" />
              <p className="d-lg-none d-xl-none">Instagram</p>
            </a>
          </li>                
          <li className="nav-item">
            <a className="nav-link btn btn-white btn-round" href="sign-up.html">SIGN UP</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* End Navbar */}
  <div className="page-header">
    <div className="page-header-image" style={{backgroundImage: 'url(../assets/images/login.jpg)'}} />
    <div className="container">
      <div className="col-md-12 content-center">
        <div className="card-plain">
          <form className="form" method action="#">
            <div className="header">
              <div className="logo-container">
                <img src="https://thememakker.com/templates/oreo/hospital/html/assets/images/logo.svg" alt width={"65px"}/>
              </div>
              <h5>Log in</h5>
            </div>
            <div className="content">                                                
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Enter User Name" />
                <span className="input-group-addon">
                  <i className="zmdi zmdi-account-circle" />
                </span>
              </div>
              <div className="input-group">
                <input type="password" placeholder="Password" className="form-control" />
                <span className="input-group-addon">
                  <i className="zmdi zmdi-lock" />
                </span>
              </div>
            </div>
            <div className="footer text-center">
              <a href="index.html" className="btn btn-primary btn-round btn-block  ">SIGN IN</a>
              <h5><a href="forgot-password.html" className="link">Forgot Password?</a></h5>
            </div>
          </form>
        </div>
      </div>
    </div>
    <footer className="footer">
      <div className="container">
        <nav>
          <ul>
            <li><a href="http://thememakker.com/contact/" target="_blank">Contact Us</a></li>
            <li><a href="http://thememakker.com/about/" target="_blank">About Us</a></li>
            <li><a href="javascript:void(0);">FAQ</a></li>
          </ul>
        </nav>
        <div className="copyright">
          ©
          ,
          <span>Designed by <a href="http://thememakker.com/" target="_blank">ThemeMakker</a></span>
        </div>
      </div>
    </footer>
  </div>
  {/* Jquery Core Js */}
  {/* Lib Scripts Plugin Js */}
  {/* Mirrored from thememakker.com/templates/oreo/hospital/html/light/sign-in.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 17 Feb 2023 05:48:08 GMT */}
</div>     
      </>
    )
}

export default SignIn;