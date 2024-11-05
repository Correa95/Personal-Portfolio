import "./Contact.css";
import { MdOutlineMailOutline, MdOutlineLocationOn } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
// import {  } from "react-icons/md";
function Contact() {
  return (
    <section className="contactContainer" id="contact">
      <h1 className="header">Contact Me</h1>
      <h4>
        Interested in hiring me to work with you. KIndly fill in the contact
        form below or send me an email to mathewcorrea19@gmail.com
      </h4>
      <div className="inform">
        <h1 className="tact">Contact Detail</h1>
        <div className="bel">
          <div className="con">
            <h1>
              <FiPhoneCall className="icon" size={20} />
              Phone
            </h1>
            <h3>678 651 7298</h3>
          </div>
          <div className="con">
            <h1>
              <MdOutlineLocationOn className="icon" size={20} />
              Location
            </h1>
            <h3>Anywhere</h3>
          </div>
          <div className="con">
            <h1>
              <MdOutlineMailOutline className="icon" size={20} />
              Email
            </h1>
            <h3>mathewcorrea19@gmail.com</h3>
          </div>
        </div>
        <div className="form">
          <form>
            <div className="name">
              <label htmlFor="">
                <input type="text" placeholder="Your Name" className="input" />
              </label>
              <label htmlFor="">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input"
                />
              </label>
            </div>
            <div className="phone">
              <label htmlFor="">
                <input
                  type="number"
                  placeholder="Your Phone"
                  className="input"
                />
              </label>
              <label htmlFor="">
                <input
                  type="text"
                  placeholder="Your Location"
                  className="input"
                />
              </label>
              <div className="message">
                <input type="text" placeholder="Your Message" />
              </div>
            </div>
            <button className="btnMessage">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
