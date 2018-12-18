import React, { Component } from "react";
import "./../styles/home.css";
import faker from "faker";

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

const ApprovalCard = (props) => {
    console.log('Props is ', props);
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Decline</div>
        </div>
      </div>
    </div>
  );
};

class Udemy extends Component {
  render() {
    return (
      <div className="ui comments">
        <h3 className="ui dividing header">Comments</h3>
        <ApprovalCard>
            <Comment name="Alisha" content="Wow!" />
        </ApprovalCard>
        <ApprovalCard>
            <Comment name="Jane" content="How artistic!" />
        </ApprovalCard>
        <ApprovalCard>
            <Comment name="Duke" content="This is bullshit!" /> 
        </ApprovalCard>
        <ApprovalCard>
            <h4>Warning!</h4>
            <div>Are you sure?</div>
        </ApprovalCard>    
      </div>
    );
  }
}

export default Udemy;
