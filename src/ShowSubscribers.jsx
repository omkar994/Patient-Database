import { Button } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import "./css/show-subscribers.css";

const ShowSubscribers = (props) => {
  const history = useHistory();

  function navigateToAddSubscriber() {
    history.push("/add");
  }

  function navigateToEditSubscriber() {
    history.push("/edit");
  }

  return (
    <>
      <Header heading="PHONE DIRECTORY" />
      <Button
        style={{ margin: "20px" }}
        color="primary"
        variant="contained"
        onClick={navigateToAddSubscriber}
      >
        Add
      </Button>

      <div className="subscriber-info-container">
        <div className="grid-container">
          <span className="grid-item heading">Name</span>
          <span className="grid-item heading">Gender</span>
          <span className="grid-item heading">Phone</span>
          <span className="grid-item heading">Email</span>
        </div>

        {props.subscribersList.map((contact) => {
          return (
            <div key={contact.id} className="grid-container">
              <span className="grid-item">{contact.fname} {contact.lname}</span>
              <span className="grid-item">{contact.gender} </span>
              <span className="grid-item">{contact.phone}</span>
              <span className="grid-item">{contact.email}</span>
              <span className="grid-item">
                <Button
                  onClick={function () {
                    props.handleDelete(contact.id);
                  }}
                  color="secondary"
                  variant="contained"
                  display="inline"
                >
                  Delete
                </Button>
                {/*
                 <Button
                  onClick={function () {
                    props.handleEdit(contact.id);
                    navigateToEditSubscriber();
                  }}
                  color="primary"
                  variant="contained"
                  display="inline"
                >
                  Edit
                </Button>
                
                */}

               
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ShowSubscribers;