import React, { Component } from "react";
import "./../styles/home.css";
import faker from 'faker';

function Comment(props) {
    return (
        <div className="comment">
          <a href="/" className="avatar">
            <img src={faker.image.avatar()} />
          </a>
          <div className="content">
            <a href="/" className="author">
              {props.name}
            </a>
            <div className="metadata">
              <span className="date">Today at 5:42PM</span>
            </div>
            <div className="text">{props.content}</div>
            <div className="actions">
              <a href="/" className="reply">
                Reply
              </a>
            </div>
          </div>
        </div>
    );
}

class Udemy extends Component {
  render() {
    return (
        <div className="ui comments">
        <h3 className="ui dividing header">Comments</h3>
            <Comment name="Alisha" content="Wow!" />
            <Comment name="Jane" content="How artistic!" />
            <Comment name="Duke" content="This is bullshit!" />
        </div>
    );
  }
}

export default Udemy;
