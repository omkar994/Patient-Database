import React from 'react';
import { Button } from "@material-ui/core";
import { useState } from "react";
//import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import "./css/add-subscriber.css";

function EditSubscriber(props) {

  /*const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [gender, setGender] = useState();
  const [bDate, setBdate] =useState(new Date());
  const [occupation, setOccupation] =useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] =useState();
  const [tempAddress, setTempAddress]=useState();
  const [perAddress, setPerAddress]=useState();*/

    return (
        <>
        <Header heading="EDIT PATIENT" />
        <h2>{props.fname}</h2>
        
      </>
    )
}

export default EditSubscriber
