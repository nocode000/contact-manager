import React from 'react';
import './ContactCard.css';

export default function ContactCard(props) {
  const { id, name, email } = props.contact;
  const user =
    'https://tse2.mm.bing.net/th?id=OIP.b2u7Fq7Jc5Gu_hIOxaTmogHaHa&pid=Api&P=0&w=168&h=168';
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        // onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
}
