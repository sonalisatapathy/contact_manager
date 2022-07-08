import React from "react";
import images from "../Images/images.png";
import delete_icon from "../Images/delete_icon.png";
import contactStyle from "./ContactPage.module.css";
const ContactPage = (props) => {
  return (
    <>
      <table className={contactStyle.mainContainer}>
        <thead>
          {props.contactDetails.length > 0 && (
            <tr className={contactStyle.row}>
              <th>Profile</th>
              <th>Name</th>
              <th>Email</th>
              <th>Delete Contacts</th>
            </tr>
          )}
          {props.contactDetails.map((item, i) => {
            return (
              <tr className={contactStyle.row} key={i}>
                <td>
                  <img src={images} className={contactStyle.profile} />
                </td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <img src={delete_icon} className={contactStyle.delete_icon} />
                </td>
              </tr>
            );
          })}
        </thead>
      </table>
    </>
  );
};

export default ContactPage;
