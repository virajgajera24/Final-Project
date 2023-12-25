import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <>
        <Navbar/>
            <div>
                <section id="hero">
                    <div
                        className="slider"
                        style={{ backgroundImage: 'url(assets/images/slider1.jpg)' }}
                    >
                        <div className="container">
                            <div className="slider_text">
                                <h3 className="title">
                                    <span>Welcome to</span> <br />
                                    Oreo <strong>Hospital</strong>
                                </h3>
                                <p className="sub-title">
                                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                                </p>
                                <br />
                                <button className="btn btn-primary btn-round">View More</button>
                            </div>
                            <div className="slider_form row">
                                <p className="col-12">Make an Appointment</p>
                                <div className="col-lg-4 col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            defaultValue="enter name"
                                            placeholder="Enter Name"
                                            className="form-control m-b-15"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            defaultValue="enter moblie"
                                            placeholder="Enter Mobile"
                                            className="form-control m-b-15"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            defaultValue="enter date"
                                            placeholder="Enter Date"
                                            className="form-control m-b-15"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-6">
                                    <select className="form-control m-b-15">
                                        <option selected="selected">Select Doctor</option>
                                        <option>Marc Parcival</option>
                                        <option>Alen Bailey</option>
                                        <option>Basil Andrew</option>
                                        <option>Giles Franklin</option>
                                        <option>Edgar Denzil</option>
                                        <option>Garfield Feris</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 col-md-6 col-6">
                                    <select className="form-control">
                                        <option selected="selected">Select Department</option>
                                        <option>Cardiology</option>
                                        <option>Pulmonology</option>
                                        <option>Gynecology</option>
                                        <option>Neurology</option>
                                        <option>Urology</option>
                                        <option>Gastrology</option>
                                        <option>Pediatrician</option>
                                        <option>Laboratory</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <button className="btn btn-primary btn-round btn-block m-t-0 m-b-0">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Content Area */}
                <section className="main-section">
                    {/* Home About Us Section */}
                    <div className="about-us-section">
                        <div className="container">
                            <div className="row">
                                <div className="section-title col-12" data-aos="fade-up">
                                    <h2>
                                        <span>About </span>Us
                                    </h2>
                                    <p>Description text here...</p>
                                </div>
                            </div>
                            <div className="row justify-content-between">
                                <div className="col-lg-4 col-sm-4">
                                    <div className="box-img box-shadow" data-aos="fade-up">
                                        <img src="assets/images/about-img.jpg" alt />
                                        <span className="section-line" data-aos="fade-up" />
                                    </div>
                                </div>
                                <div className="col-lg-7 col-sm-8">
                                    <div className="common-cnt" data-aos="fade-up">
                                        <div className="section-top">
                                            <p>
                                                <strong>Oreo Hospital</strong> isIt is a long established fact
                                                that a reader will be distracted by the readable content.
                                            </p>
                                        </div>
                                        <p>
                                            Contrary to popular belief, Lorem Ipsum is not simply random
                                            text. It has roots in a piece of classical Latin literature from
                                            45 BC, making it over 2000 years old. Richard McClintock, a
                                            Latin professor at Hampden-Sydney College in Virginia, looked up
                                            one of the more obscure Latin words, consectetur, from a Lorem
                                            Ipsum passage, and goingered the undoubtable source.
                                        </p>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available,
                                            but the majority have suffered alteration in some form, by
                                            injected humour
                                        </p>
                                        <p>
                                            <a
                                                className="btn btn-primary btn-simple btn-round margin-0"
                                                data-aos="flip-up"
                                            >
                                                View More
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Home About Us Section */}
                    {/* Home About Us Section */}
                    <div className="our-best-service xl-slategray section-65-100">
                        <div className="container">
                            <div className="row">
                                <div className="section-title col-12" data-aos="fade-up">
                                    <h2>
                                        <span>Our </span>Best Services
                                    </h2>
                                    <p>Description text here...</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div
                                        className="service-box"
                                        data-aos="fade-up"
                                        data-aos-duration={3000}
                                    >
                                        <div className="service-icon">
                                            <img
                                                src="assets/images/icon-cardio-monitoring.png"
                                                alt="Cardio Monitoring"
                                            />
                                        </div>
                                        <div className="service-cnt">
                                            <div className="service-name">Cardio Monitoring</div>
                                            <div className="service-dep">
                                                <p>
                                                    Contrary to popular belief, Lorem Ipsum is not simply random
                                                    text. It has roots in a piece[...]
                                                </p>
                                                <a href="javascript:void(0);">View More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div
                                        className="service-box"
                                        data-aos="fade-up"
                                        data-aos-duration={3000}
                                    >
                                        <div className="service-icon">
                                            <img
                                                src="assets/images/icon-orthodontics.png"
                                                alt="Orthodontics"
                                            />
                                        </div>
                                        <div className="service-cnt">
                                            <div className="service-name">Orthodontics</div>
                                            <div className="service-dep">
                                                <p>
                                                    It has roots in a piece of classical Latin literature from
                                                    45 BC, making it over 2000 years old [...]
                                                </p>
                                                <a href="javascript:void(0);">View More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div
                                        className="service-box"
                                        data-aos="fade-up"
                                        data-aos-duration={3000}
                                    >
                                        <div className="service-icon">
                                            <img
                                                src="assets/images/icon-traumatology.png"
                                                alt="Traumatology"
                                            />
                                        </div>
                                        <div className="service-cnt">
                                            <div className="service-name">Traumatology</div>
                                            <div className="service-dep">
                                                <p>
                                                    Contrary to popular belief,literature from 45 BC, making it
                                                    over 2000 years old [...]
                                                </p>
                                                <a href="javascript:void(0);">View More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div
                                        className="service-box"
                                        data-aos="fade-up"
                                        data-aos-duration={3000}
                                    >
                                        <div className="service-icon">
                                            <img src="assets/images/icon-cardiology.png" alt="Cardiology" />
                                        </div>
                                        <div className="service-cnt">
                                            <div className="service-name">Cardiology</div>
                                            <div className="service-dep">
                                                <p>
                                                    Contrary to popular belief, Lorem Ipsum is not simply random
                                                    text. It has roots in a piece[...]
                                                </p>
                                                <a href="javascript:void(0);">View More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div
                                        className="service-box"
                                        data-aos="fade-up"
                                        data-aos-duration={3000}
                                    >
                                        <div className="service-icon">
                                            <img src="assets/images/icon-prostheses.png" alt="Prostheses" />
                                        </div>
                                        <div className="service-cnt">
                                            <div className="service-name">Prostheses</div>
                                            <div className="service-dep">
                                                <p>
                                                    It has roots in a piece of classical Latin literature from
                                                    45 BC, making it over 2000 years old [...]
                                                </p>
                                                <a href="javascript:void(0);">View More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div
                                        className="service-box"
                                        data-aos="fade-up"
                                        data-aos-duration={3000}
                                    >
                                        <div className="service-icon">
                                            <img src="assets/images/icon-pulmonary.png" alt="Pulmonary" />
                                        </div>
                                        <div className="service-cnt">
                                            <div className="service-name">Pulmonary</div>
                                            <div className="service-dep">
                                                <p>
                                                    Contrary to popular belief, Lorem Ipsum is not simply random
                                                    text. It has roots in a piece[...]
                                                </p>
                                                <a href="javascript:void(0);">View More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Home About Us Section */}
                    {/* Home Fun Fact */}
                    <div className="fun-fact">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="fun-fact-box text-center">
                                        <i className="zmdi zmdi-account" />
                                        <span
                                            className="counter timer"
                                            data-from={0}
                                            data-to={652}
                                            data-speed={2500}
                                            data-fresh-interval={700}
                                        >
                                            652
                                        </span>
                                        <p>Happy Clients</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="fun-fact-box text-center">
                                        <i className="zmdi zmdi-favorite" />
                                        <span
                                            className="counter timer"
                                            data-from={0}
                                            data-to={7652}
                                            data-speed={2500}
                                            data-fresh-interval={700}
                                        >
                                            7652
                                        </span>
                                        <p>Heart Transplant</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="fun-fact-box text-center">
                                        <i className="zmdi zmdi-thumb-up" />
                                        <span
                                            className="counter timer"
                                            data-from={0}
                                            data-to={52}
                                            data-speed={2500}
                                            data-fresh-interval={700}
                                        >
                                            52
                                        </span>
                                        <p>Years Of Experience</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="fun-fact-box text-center">
                                        <i className="zmdi zmdi-mood" />
                                        <span
                                            className="counter timer"
                                            data-from={0}
                                            data-to={7652}
                                            data-speed={2500}
                                            data-fresh-interval={700}
                                        >
                                            7652
                                        </span>
                                        <p>Well Smiley Faces</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Home Fun Fact */}
                    {/* Home Our Team */}
                    <div className="our-team">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="section-title left col-lg-4" data-aos="fade-up">
                                    <h2>
                                        <span>Meet </span>Our Team
                                    </h2>
                                    <p>Description text here...</p>
                                </div>
                                <div className="section-title right col-lg-8" data-aos="fade-up">
                                    <p>
                                        <span className="color-212121">Oreo Hospital</span> The wise man
                                        therefore always holds in these matters to this principle of
                                        selection: he rejects pleasures to secure.
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div
                                        className="team-box text-center"
                                        data-aos="flip-left"
                                        data-aos-easing="ease-out-cubic"
                                        data-aos-duration={5000}
                                    >
                                        <div className="doctor-pic">
                                            <img src="assets/images/team-member-01.png" alt="Dr. John" />
                                        </div>
                                        <div className="doctor-info">
                                            <h4>
                                                Dr. John <span>Dentist</span>
                                            </h4>
                                            <ul className="clearfix">
                                                <li>
                                                    <a href="javascript:void(0);">
                                                        <i className="zmdi zmdi-facebook" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">
                                                        <i className="zmdi zmdi-twitter" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">
                                                        <i className="zmdi zmdi-instagram" />
                                                    </a>
                                                </li>
                                            </ul>
                                            <a
                                                className="btn btn-simple btn-primary btn-round"
                                                href="javascript:void(0);"
                                            >
                                                View More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div
                                        className="team-box text-center"
                                        data-aos="flip-left"
                                        data-aos-easing="ease-out-cubic"
                                        data-aos-duration={4000}
                                    >
                                        <div className="doctor-pic">
                                            <img src="assets/images/team-member-02.png" alt="Dr. Amelia" />
                                        </div>
                                        <div className="doctor-info">
                                            <h4>
                                                Dr. Amelia <span>Gynecologist</span>
                                            </h4>
                                            <ul className="clearfix">
                                                <li>
                                                    <a href="javascript:void(0);">
                                                        <i className="zmdi zmdi-twitter" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">
                                                        <i className="zmdi zmdi-instagram" />
                                                    </a>
                                                </li>
                                            </ul>
                                            <a
                                                className="btn btn-simple btn-primary btn-round"
                                                href="javascript:void(0);"
                                            >
                                                View More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div
                                        className="team-box text-center"
                                        data-aos="flip-left"
                                        data-aos-easing="ease-out-cubic"
                                        data-aos-duration={5000}
                                    >
                                        <div className="doctor-pic">
                                            <img src="assets/images/team-member-03.png" alt="Dr. Jack" />
                                        </div>
                                        <div className="doctor-info">
                                            <h4>
                                                Dr. Jack <span>Audiology</span>
                                            </h4>
                                            <ul className="clearfix">
                                                <li>
                                                    <a href="javascript:void(0);">
                                                        <i className="zmdi zmdi-facebook" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">
                                                        <i className="zmdi zmdi-twitter" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">
                                                        <i className="zmdi zmdi-instagram" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">
                                                        <i className="zmdi zmdi-google-plus" />
                                                    </a>
                                                </li>
                                            </ul>
                                            <a
                                                className="btn btn-simple btn-primary btn-round"
                                                href="javascript:void(0);"
                                            >
                                                View More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div
                                        className="team-box text-center"
                                        data-aos="flip-left"
                                        data-aos-easing="ease-out-cubic"
                                        data-aos-duration={3000}
                                    >
                                        <div className="doctor-pic">
                                            <img src="assets/images/team-member-04.png" alt="Dr. Charlie" />
                                        </div>
                                        <div className="doctor-info">
                                            <h4>
                                                Dr. Charlie<span>Dentist</span>
                                            </h4>
                                            <ul className="clearfix">
                                                <li>
                                                    <a href="javascript:void(0);">
                                                        <i className="zmdi zmdi-facebook" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">
                                                        <i className="zmdi zmdi-twitter" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">
                                                        <i className="zmdi zmdi-instagram" />
                                                    </a>
                                                </li>
                                            </ul>
                                            <a
                                                className="btn btn-simple btn-primary btn-round"
                                                href="javascript:void(0);"
                                            >
                                                View More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Home Our Team */}
                    {/* Home Why choose us */}
                    <div className="why-choose-us">
                        <div className="container">
                            <div className="row">
                                <div className="section-title col-12" data-aos="fade-up">
                                    <h2>
                                        <span>Why </span>Choose Us
                                    </h2>
                                    <p>Description text here...</p>
                                </div>
                            </div>
                            <div className="row justify-content-between">
                                <div className="col-lg-6 col-md-12">
                                    <div className="common-cnt">
                                        <div className="section-top" data-aos="fade-down">
                                            <p>
                                                Our goal is to make sure
                                                <br />
                                                with advances in <br />
                                                technology
                                            </p>
                                        </div>
                                        <p data-aos="fade-down" data-aos-duration={3000}>
                                            Professional dental clinic 32roDent offers the whole range of
                                            dentistry services: treatment of caries, gum diseases, tooth
                                            whitening, implantation, dentures (crowns installation),
                                            surgery, correction (braces) etc.
                                        </p>
                                        <p>
                                            <a className="btn btn-primary btn-round" data-aos="flip-up">
                                                More about practice
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div
                                        className="box-img"
                                        data-aos="fade-up"
                                        data-aos-duration={3000}
                                    >
                                        <img src="assets/images/why-choose-img.png" alt />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Home Why choose us */}
                    {/* Home Support */}
                    <div className="support-home text-center xl-slategray">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h4>We provide 24/7 customer support.</h4>
                                    <p>
                                        Please feel free to contact us at (01) 234 5678 for emergency
                                        case.
                                    </p>
                                    <a
                                        className="btn btn-primary btn-simple btn-round"
                                        href="javascript:void(0);"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Home Support */}
                    {/* Home Blog */}
                    <div className="home-blog">
                        <div className="container">
                            <div className="row">
                                <div className="section-title col-12" data-aos="fade-up">
                                    <h2>
                                        <span>Latest </span>From Blog
                                    </h2>
                                    <p>Description text here...</p>
                                </div>
                            </div>
                            <div className="row" data-aos="flip-up">
                                <div className="col-lg-4 col-md-6">
                                    <div className="blog-box">
                                        <div className="blog-img">
                                            <img src="assets/images/blog-1.png" alt />
                                        </div>
                                        <div className="blog-cnt">
                                            <h5>
                                                <a href="javascript:void(0);">
                                                    How to handle your kids’ from Lorem ipsum dolor sit amet
                                                </a>
                                            </h5>
                                            <p>
                                                The great explorer of the truth, master builder of human
                                                happiness one rejects, dislikes[...]
                                            </p>
                                        </div>
                                        <div className="blog-info">
                                            <span className="blog-date">
                                                <i className="zmdi zmdi-calendar" /> 02 Feb 2018
                                            </span>
                                            <span className="blog-comment">
                                                <i className="zmdi zmdi-comments" /> Comment ( 25 )
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="blog-box">
                                        <div className="blog-img">
                                            <img src="assets/images/blog-2.png" alt />
                                        </div>
                                        <div className="blog-cnt">
                                            <h5>
                                                <a href="javascript:void(0);">
                                                    How to handle your kids’ from Lorem ipsum dolor sit amet
                                                </a>
                                            </h5>
                                            <p>
                                                The great explorer of the truth, master builder of human
                                                happiness one rejects, dislikes[...]
                                            </p>
                                        </div>
                                        <div className="blog-info">
                                            <span className="blog-date">
                                                <i className="zmdi zmdi-calendar" /> 02 Feb 2018
                                            </span>
                                            <span className="blog-comment">
                                                <i className="zmdi zmdi-comments" /> Comment ( 25 )
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 d-none d-lg-block">
                                    <div className="blog-box">
                                        <div className="blog-img">
                                            <img src="assets/images/blog-3.png" alt />
                                        </div>
                                        <div className="blog-cnt">
                                            <h5>
                                                <a href="javascript:void(0);">
                                                    How to handle your kids’ from Lorem ipsum dolor sit amet
                                                </a>
                                            </h5>
                                            <p>
                                                The great explorer of the truth, master builder of human
                                                happiness one rejects, dislikes[...]
                                            </p>
                                        </div>
                                        <div className="blog-info">
                                            <span className="blog-date">
                                                <i className="zmdi zmdi-calendar" /> 02 Feb 2018
                                            </span>
                                            <span className="blog-comment">
                                                <i className="zmdi zmdi-comments" /> Comment ( 25 )
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Home Blog */}
                </section>
            </div>
            <Footer/>
        </>
    )
}

export default Home;