import React from "react";
import Styles from "./ContactMe.module.css";
import footer from "../../images/footer.svg";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
const ContactMe = () => {
  return (
    <div id="contactme" className={Styles.container}>
      <div className={Styles.contactsDiv}>
        <div className={Styles.contactsDivHeader}>
          <p>Start a project</p>
          <p>
            Interested in working together? We should queue up a time to chat.
          </p>
          <button>
            <a style={{ color: "white" }} href="https://www.linkedin.com/in/rajesh111/ " target="_blank">
              Let's do this
            </a>
          </button>
        </div>
        <div className={Styles.contactsFooter}>
          <img
            style={{ width: "3rem", height: "3rem", color: "white" }}
            src={footer}
            alt=""
          />
          <p>Living, learning, & leveling up one day at a time.</p>
          <div className={Styles.footerLink}>
            <span>
              <a href="mailto:rkraja730@gmail.com">
                <MdMarkEmailUnread />
              </a>
            </span>
            <span>
              <a
                style={{ fontSize: "1.7rem" }}
                href="https://www.linkedin.com/in/rajesh111/"
                target="_blank"
                rel="noreferrer"
              >
                <CiLinkedin />
              </a>
            </span>
            <span>
              <a
                href="https://www.instagram.com/rajesh_.___kumar/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </span>
            <span>
              <a
                href="https://twitter.com/Rajeshk58735879"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </span>
          </div>
          <p style={{textAlign:"center",fontSize:"1rem",marginTop:"1rem"}}>Made by @Rajesh🙎</p>
        </div>
      </div>
      
    </div>
  );
};

export default ContactMe;
