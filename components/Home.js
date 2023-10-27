import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import { createClient } from "next-sanity";
import Head from "next/head";
import dynamic from "next/dynamic";
const inter = Inter({ subsets: ["latin"] });

const Home = ({ blog }) => {
  return (
    <>
      <Head>
        <title>AkhilGaddam Portfolio</title>
        <meta content="" name="description" />
        <meta content="" name="keywords" />
      </Head>

      <link href="http://localhost:3000/assets/img/favicon.png" rel="icon" />
      <link
        href="http://localhost:3000/assets/img/apple-touch-icon.png"
        rel="apple-touch-icon"
      />

      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet"
      />
      <link
        href="http://localhost:3000/assets/vendor/aos/aos.css"
        rel="stylesheet"
      />
      <link
        href="http://localhost:3000/assets/vendor/bootstrap/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="http://localhost:3000/assets/vendor/bootstrap-icons/bootstrap-icons.css"
        rel="stylesheet"
      />
      <link
        href="http://localhost:3000/assets/vendor/boxicons/css/boxicons.min.css"
        rel="stylesheet"
      />
      <link
        href="http://localhost:3000/assets/vendor/glightbox/css/glightbox.min.css"
        rel="stylesheet"
      />
      <link
        href="http://localhost:3000/assets/vendor/swiper/swiper-bundle.min.css"
        rel="stylesheet"
      />

      <link
        href="http://localhost:3000/assets/css/style.css"
        rel="stylesheet"
      />

      <div>
        <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

        <header id="header">
          <div className="d-flex flex-column">
            <div className="profile">
              <img
                src="http://localhost:3000/assets/img/profile-img.jpg"
                alt=""
                className="img-fluid rounded-circle"
              />
              <h1 className="text-light">
                <a href="#">Akhil Gaddam</a>
              </h1>
              <div className="social-links mt-3 text-center">
                <a href="https://www.facebook.com/akhil.gaddam.96155?mibextid=ZbWKwL" className="facebook">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="https://instagram.com/akhil.gaddam.96155?igshid=OGQ5ZDc2ODk2ZA==" className="instagram">
                  <i className="bx bxl-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/akhil-gaddam-3a1558225/"
                  className="linkedin"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
            </div>

            <nav id="navbar" className="nav-menu navbar">
              <ul>
                <li>
                  <a href="#hero" className="nav-link scrollto active">
                    <i className="bx bx-home"></i> <span>Home</span>
                  </a>
                </li>
                <li>
                  <a href="#about" className="nav-link scrollto">
                    <i className="bx bx-user"></i> <span>About</span>
                  </a>
                </li>
                <li>
                  <a href="#resume" className="nav-link scrollto">
                    <i className="bx bx-file-blank"></i> <span>Resume</span>
                  </a>
                </li>

                <li>
                  <a href="#services" className="nav-link scrollto">
                    <i className="bx bx-server"></i> <span>Services</span>
                  </a>
                </li>
                <li>
                  <a href="#contact" className="nav-link scrollto">
                    <i className="bx bx-envelope"></i> <span>Contact</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <section
          id="hero"
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className="hero-container" data-aos="fade-in">
            <h1>Akhil Gaddam</h1>
            <p>I'm A MernStack Devoloper/Full Stack Java Dev</p>
          </div>
        </section>

        <main id="main">
          <section id="about" className="about">
            <div className="container">
              <div className="section-title">
                <h2>About</h2>
                <p>
                  I am a devoloper passionate and ready to dedicate my time and
                  skills to organizationMy achievements include I secured 4th
                  place in tech gig code war sprint challenge by tech gig and I
                  also secured 87 percent at wipro talent next program by wipro
                  My tech stack include pyspark ,sql ,Html,css ,javascript,
                  spring boot,Node js ,react js, Express.js, hibernate
                </p>
              </div>

              <div className="row">
                <div className="col-lg-4" data-aos="fade-right">
                  <img
                    src="http://localhost:3000/assets/img/profile-img.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div
                  className="col-lg-8 pt-4 pt-lg-0 content"
                  data-aos="fade-left"
                >
                  <h3>Full Stack Java Devoloper &amp; Mern Stack Devoloper.</h3>
                  <p className="fst-italic">
                    I am a enthusiastic person who is really good at His
                    professional SKills and My TEch Stack includes Full Stack
                    web and Java and I have an experience of 6 months in the
                    domain I also have a good Leetcode Profile and Hackerrank
                    Profile and I also secured 4 th place in Tech gig code war
                    sprint Challenge
                  </p>
                  <div className="row">
                    <div className="col-lg-6">
                      <ul>
                        <li>
                          <i className="bi bi-chevron-right"></i>{" "}
                          <strong>Birthday:</strong>{" "}
                          <span>8 th March 2002</span>
                        </li>
                        <li>
                          <i className="bi bi-chevron-right"></i>{" "}
                          <strong>Phone:</strong> <span>+919390667322</span>
                        </li>
                        <li>
                          <i className="bi bi-chevron-right"></i>{" "}
                          <strong>City:</strong>{" "}
                          <span>Kadapa ,Andhra Pradesj</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul>
                        <li>
                          <i className="bi bi-chevron-right"></i>{" "}
                          <strong>Age:</strong> <span>21</span>
                        </li>
                        <li>
                          <i className="bi bi-chevron-right"></i>{" "}
                          <strong>Degree:</strong> <span>Bachelors</span>
                        </li>
                        <li>
                          <i className="bi bi-chevron-right"></i>{" "}
                          <strong>PhEmailone:</strong>{" "}
                          <span>akhilgaddam00@gmail.com</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="facts" className="facts">
            <div className="container">
              <div className="section-title">
                <h2>Projects</h2>
                <p>
                  These are the Projects That I have done in my Bachelors and I
                  am also attaching my github repo link and You can have THem
                  for the reference and I hope you find it productive Please
                  Hover On the Image To Find the Image
                </p>
              </div>
              <div className="p_dat">
                <a href="https://akhii-akhil.github.io/React_Todo_app/">
                  <img
                    className="project_img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCwd4HlE7LP8xXcSctI962V9KH7O2UjPknOEnAKlxcJg&s"
                    alt=""
                  />
                </a>
                <p className="desc">
                  <strong>This is a simple ToDo List App</strong>
                </p>
              </div>
              <br />

              <div className="p_dat">
                <a href="https://akhii-akhil.github.io/online_food_app/">
                  <img
                    className="project_img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp0GS-MwwCv5bcvogUC99VVRn_i1oG4oJ2Q&usqp=CAU"
                    alt=""
                  ></img>
                </a>
                <p className="desc">
                  <strong>
                    This is a Online Food Ordering App Made on TechStack like
                    Node and Expressjs As Backend and REactjs as Frontend{" "}
                  </strong>
                </p>
              </div>
            </div>
          </section>

          <section id="skills" className="skills section-bg">
            <div className="container">
              <div className="section-title">
                <h2>Skills</h2>
                <p>
                  The Above Mentioned Skills are the skills that i have learnt
                  during my tenure of Bachelors and I also have 6 months of
                  experience in the Domain of Full stack web and java and I am
                  perfect in the skills mentioned Below
                </p>
              </div>

              <div className="row skills-content">
                <div className="col-lg-6 skill" data-aos="fade-up">
                  {blog.map((i) => {
                    return (
                      <div className="progress">
                        <span className="skill">
                          {i.Language} <i className="val">{i.Percentage}%</i>
                        </span>
                        <div className="progress-bar-wrap">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={i.Percentage}
                            aria-valuemin={0}
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
          <section id="resume" className="resume">
            <div className="container">
              <div className="section-title">
                <h2>Resume</h2>
                <p>
                  I am Attaching My resume in a format of a website so that the
                  users can find it a liitle productive Now This project is
                  associated with sanity io in backend you can check the code if
                  required
                </p>
              </div>

              <div className="row">
                <div className="col-lg-6" data-aos="fade-up">
                  <h3 className="resume-title">Summary</h3>
                  <div className="resume-item pb-0">
                    <h4>Akhil Gaddam</h4>
                    <p>
                      <em>
                        Innovative and deadline-driven Software Devoloper With 7
                        monts of experience designing and developing
                        Applications by using Tech Stack like Mern Stack and
                        Java Stack
                      </em>
                    </p>
                    <ul>
                      <li>Kadapa ,ANdhraPradesh ,India</li>
                      <li>Dno:405,Mallemala Apartments</li>
                      <li>akhilgaddam00@gmail.com</li>
                    </ul>
                  </div>

                  <h3 className="resume-title">Education</h3>

                  <div className="resume-item">
                    <h4>Bachelor of Technology &amp; Computer Science</h4>
                    <h5>2019 - 2023</h5>
                    <p>
                      <em>Madanapalle Institute of Technology and Science</em>
                    </p>
                    <p>
                      I Completed My Bachelors in the Stream of Computer science
                      and engineering in the domain of Cse My TechStack includes
                      i am good ant MErn stack and java stack
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h3 className="resume-title">Professional Experience</h3>

                  <div className="resume-item">
                    <h4>Product Engineer Intern</h4>
                    <h5>Feb 2023 - Sep 2023</h5>
                    <p>
                      <em>Banglore India</em>
                    </p>
                    <ul>
                      <li>
                        Worked in the Domain of Full stack java and devolped
                        Applications as a part of Team for 7 months
                      </li>
                      <li>Managed 1 project under the leadership of a guide</li>
                      <li>
                        Recommended and consulted with clients on the most
                        appropriate Software Design
                      </li>
                      <li>
                        Created 3 Projects that enhance my skills in the domain
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="services" className="services">
            <div className="container">
              <div className="section-title">
                <h2>Services</h2>
                <p>
                  These are the services that I can provide by using my skill
                  set please Have a glance
                </p>
              </div>

              <div className="row">
                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                  <div className="icon">
                    <i className="bi bi-briefcase"></i>
                  </div>
                  <h4 className="title">
                    <a href="">SQL</a>
                  </h4>
                  <p className="description">
                    Structured query language (SQL) is a programming language
                    for storing and processing information in a relational
                    database
                  </p>
                </div>
                <div
                  className="col-lg-4 col-md-6 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="icon">
                    <i className="bi bi-card-checklist"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Python</a>
                  </h4>
                  <p className="description">
                    Python is commonly used for developing websites and
                    software, task automation, data analysis, and data
                    visualization
                  </p>
                </div>
                <div
                  className="col-lg-4 col-md-6 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="icon">
                    <i className="bi bi-bar-chart"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Java</a>
                  </h4>
                  <p className="description">
                    Java is a widely used object-oriented programming language
                    and software platform that runs on billions of devices
                  </p>
                </div>
                <div
                  className="col-lg-4 col-md-6 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="icon">
                    <i className="bi bi-binoculars"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Mern Stack abd Nextjs</a>
                  </h4>
                  <p className="description">
                    The Mern Stack includes Node js ,Edxpressjs as Backend and
                    React js as Frontend which is pretty useful for devoloping
                    full stack apps
                  </p>
                </div>
                <div
                  className="col-lg-4 col-md-6 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="icon">
                    <i className="bi bi-brightness-high"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Java Full Stack</a>
                  </h4>
                  <p className="description">
                    In this the skills include spring boot as main backend and
                    Hibernate for exceuting data base queries and In the Front
                    end we can use the reactjs framework for building apps
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="contact" className="contact">
            <div className="container">
              <div className="section-title">
                <h2>Contact</h2>
                <p>
                  This is a Contact Page if any Queries you can Contact me via
                  This page or can send a mail to my email id
                </p>
              </div>

              <div className="row" data-aos="fade-in">
                <div className="col-lg-5 d-flex align-items-stretch">
                  <div className="info">
                    <div className="address">
                      <i className="bi bi-geo-alt"></i>
                      <h4>Location:</h4>
                      <p>Kadapa ,Andhra Pradesh</p>
                    </div>

                    <div className="email">
                      <i className="bi bi-envelope"></i>
                      <h4>Email:</h4>
                      <p>akhilgaddam00@gmail.com</p>
                    </div>

                    <div className="phone">
                      <i className="bi bi-phone"></i>
                      <h4>Call:</h4>
                      <p>+91 9390667322</p>
                    </div>
                    
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.494069453972!2d78.82670617481608!3d14.456295580593917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb372722dcc351d%3A0x4de1bec0c0927f47!2sLIC%20Office%20-%20KADAPA!5e0!3m2!1sen!2sin!4v1698336651878!5m2!1sen!2sin"
                      frameborder={0}
                      style={{ border: "0px", width: "100%", height: "290px" }}
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>

                <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                  <form
                    action="forms/contact.php"
                    method="post"
                    role="form"
                    className="php-email-form"
                  >
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label htmlFor="name">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="name"
                          required
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="name">Your Email</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        id="subject"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Message</label>
                      <textarea
                        className="form-control"
                        name="message"
                        rows="10"
                        required
                      ></textarea>
                    </div>
                    <div className="my-3">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                    </div>
                    <div className="text-center">
                      <button type="submit">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer id="footer">
          <div className="container">
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>MyPortfolio</span>
              </strong>
            </div>
            <div className="credits">Designed by Akhil Gaddam</div>
          </div>
        </footer>

        <a
          href="#"
          className="back-to-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>

        <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
        <script src="assets/vendor/aos/aos.js"></script>
        <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
        <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
        <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
        <script src="assets/vendor/typed.js/typed.umd.js"></script>
        <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
        <script src="assets/vendor/php-email-form/validate.js"></script>
        <script src="assets/js/main.js"></script>
      </div>
    </>
  );
};
export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "y1oguca2",
    dataset: "production",
    useCdn: true,
  });
  const query = `*[_type == "blog"]`;
  const blogs = await client.fetch(query);
  return { props: { blogs } };
}

export default Home;
