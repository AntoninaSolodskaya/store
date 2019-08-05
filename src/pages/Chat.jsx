import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBListGroup
} from "mdbreact";
import ReviewForm from "./ReviewForm";

class Chat extends Component {
  state = {
    friends: [
      {
        name: "John Doe",
        avatar: "https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg",
        message: "Hello, Are you there?",
        when: "Just now",
        toRespond: 1,
        seen: false,
        active: true
      },
      {
        name: "Danny Smith",
        message: "Lorem ipsum dolor sit",
        avatar: "https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg",
        when: "5 min ago",
        toRespond: 0,
        seen: false,
        active: false
      },
      {
        name: "Alex Steward",
        message: "Lorem ipsum dolor sit",
        avatar: "https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg",
        when: "Yesterday",
        toRespond: 0,
        seen: false,
        active: false
      },
      {
        name: "Ashley Olsen",
        message: "Lorem ipsum dolor sit",
        avatar: "https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg",
        when: "Yesterday",
        toRespond: 0,
        seen: false,
        active: false
      },
      {
        name: "Kate Moss",
        message: "Lorem ipsum dolor sit",
        avatar: "https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg",
        when: "Yesterday",
        toRespond: 0,
        seen: false,
        active: false
      },
      {
        name: "Lara Croft",
        message: "Lorem ipsum dolor sit",
        avatar: "https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg",
        when: "Yesterday",
        toRespond: 0,
        seen: false,
        active: false
      },
      {
        name: "Brad Pitt",
        message: "Lorem ipsum dolor sit",
        avatar: "https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg",
        when: "5 min ago",
        toRespond: 0,
        seen: true,
        active: false
      }
    ],
    messages: [
      {
        author: "Brad Pitt",
        avatar: "https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg",
        when: "12 mins ago",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        author: "Lara Croft",
        avatar: "https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg",
        when: "13 mins ago",
        message:
          " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
      },
      {
        author: "Brad Pitt",
        avatar: "https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg",
        when: "14 mins ago",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ]
  };
  render() {
    return (
      <MDBContainer className="my-5">
        <h1 className="h1-responsive teal-text font-weight-bold pb-0">
          Reviews of product
        </h1>
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="h4-responsive teal-text font-weight-bold">
            Name of product
          </h4>
          <MDBBtn>Leave a review</MDBBtn>
        </div>

        <div>
          <h4 className="h4-responsive pb-3">Foto of product:</h4>
          <img
            src="https://png.pngtree.com/element_origin_min_pic/16/11/10/40439dc1ed9aa08c792a87d9e59fd12d.jpg"
            alt="avatar"
            className="mr-2 z-depth-1"
            style={{ height: "150px", width: "150px" }}
          />
          <img
            src="https://png.pngtree.com/element_origin_min_pic/16/11/10/40439dc1ed9aa08c792a87d9e59fd12d.jpg"
            alt="avatar"
            className="mr-2 z-depth-1"
            style={{ height: "150px", width: "150px" }}
          />
          <img
            src="https://png.pngtree.com/element_origin_min_pic/16/11/10/40439dc1ed9aa08c792a87d9e59fd12d.jpg"
            alt="avatar"
            className="mr-2 z-depth-1"
            style={{ height: "150px", width: "150px" }}
          />
        </div>
        <MDBCard className="grey lighten-3 chat-room mt-5">
          <MDBCardBody>
            <MDBRow className="px-lg-2 px-2">
              <MDBCol md="10" xl="8" className="mx-auto">
                <MDBRow>
                  <MDBListGroup className="list-unstyled pl-3">
                    {this.state.messages.map(message => (
                      <ChatMessage
                        key={message.author + message.when}
                        message={message}
                      />
                    ))}
                    <li />
                  </MDBListGroup>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
        <ReviewForm />
      </MDBContainer>
    );
  }
}

const ChatMessage = ({ message: { author, avatar, when, message } }) => (
  <li className="chat-message d-flex flex-column justify-content-between mb-4">
    <div className="d-flex flex-column">
      <MDBCard className="mb-3">
        <MDBCardBody>
          <div>
            <strong className="primary-font">{author}</strong>
            <small className="pull-right text-muted">
              <i className="far fa-clock" /> {when}
            </small>
          </div>
          <hr />
          <p className="mb-0">{message}</p>
        </MDBCardBody>
      </MDBCard>
      <div className="form-group basic-textarea">
        <textarea
          className="form-control pl-2 my-0"
          id="exampleFormControlTextarea2"
          rows="3"
          placeholder="Type your message here..."
        />
        <MDBBtn color="info" rounded size="sm" className="float-right mt-4">
          Send
        </MDBBtn>
      </div>
    </div>
  </li>
);

export default Chat;
