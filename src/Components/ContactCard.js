import React from "react";
import "./ContactCard.css";
import user from "../images/user.jpg";
import { Link } from "react-router-dom";

export default function ContactCard(props) {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link
          to={{ pathname: `contact/${id}`, state: { contact: props.contact } }}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
}
