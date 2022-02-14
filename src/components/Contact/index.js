import React from "react";
import * as componentStyles from "./Contact.module.css";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";

const Contact = () => {
  return (
    <div className={componentStyles.contact}>
      <h1 className={componentStyles.contactTitle}>Contact</h1>
      <div className={componentStyles.contactContainer}>
        <div className={componentStyles.contactBox}>
          <div className={componentStyles.contactLinks}>
            <p>Find Me Here</p>
            <div className={componentStyles.links}>
              <a
                href="https://www.linkedin.com/in/mondalsayantan/"
                target={"_blank"}
              >
                <div className={componentStyles.link}>
                  <AiFillLinkedin size={30} color="#fff" />
                  <p>@MondalSayantan</p>
                </div>
              </a>
              <a href="https://twitter.com/sayantannnnn" target={"_blank"}>
                <div className={componentStyles.link}>
                  <AiOutlineTwitter size={30} color="#fff" />
                  <p>@sayantannnnn</p>
                </div>
              </a>
              <a href="https://github.com/MondalSayantan" target={"_blank"}>
                <div className={componentStyles.link}>
                  <AiFillGithub size={30} color="#fff" />
                  <p>@MondalSayantan</p>
                </div>
              </a>
            </div>
          </div>
          <div className={componentStyles.contactFormWrapper}>
            <p>Send Me a Message</p>
            <form
              name="contact"
              method="post"
              data-netlify="true"
              className={componentStyles.form}
              onSubmit="submit"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className={componentStyles.formItem}>
                <input type="text" name="sender" required />
                <label>Name:</label>
              </div>
              <div className={componentStyles.formItem}>
                <input type="text" name="email" required />
                <label>Email:</label>
              </div>
              <div className={componentStyles.formItem}>
                <textarea class="" name="message" required></textarea>
                <label>Message:</label>
              </div>
              <button className={componentStyles.submitBtn} type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
