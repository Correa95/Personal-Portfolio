import "./Contact.css";
function Contact() {
  return (
    <div className="contactContainer">
      <h1 className="header">Contact Me</h1>
      <h4>
        Interested in hiring me to work with you. KIndly fill in the contact
        form below or send me an email to mathewcorrea19@gmail.com
      </h4>
      <div className="inform">
        <head>Contact Detail</head>
        <div className="bel">
          <div className="con">
            <h1>Phone</h1>
            <h3>678 651 7298</h3>
          </div>
          <div className="con">
            <h1>Location</h1>
            <h3>Anywhere</h3>
          </div>
          <div className="con">
            <h1>Email</h1>
            <h3>mathewcorrea19@gmail.com</h3>
          </div>
        </div>
        {/* <div className="form"> */}
        <form action="">
          <div className="name">
            <label htmlFor="">
              <input type="text" placeholder="Your Name" className="input" />
            </label>
            <label htmlFor="">
              <input type="email" placeholder="Your Email" className="input" />
            </label>
          </div>
          <div className="phone">
            <label htmlFor="">
              <input type="number" placeholder="Your Phone" className="input" />
            </label>
            <label htmlFor="">
              <input
                type="text"
                placeholder="Your Location"
                className="input"
              />
            </label>
            <input type="text" placeholder="Your Message" />
          </div>
          <button>Send Message</button>
        </form>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Contact;
