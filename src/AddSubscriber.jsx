import { Button } from "@material-ui/core";
import { useState } from "react";
//import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import "./css/add-subscriber.css";

const AddSubscriber = (props) => {
  const history = useHistory();

  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [gender, setGender] = useState();
  const [bDate, setBdate] =useState(new Date());
  const [occupation, setOccupation] =useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] =useState();
  const [tempAddress, setTempAddress]=useState();
  const [perAddress, setPerAddress]=useState();

  function navigateToHomePage() {
    history.push("/");
  }

  function handleSubmit() {
    props.handleAdd(fname, lname, gender, bDate, occupation, phone, email, tempAddress, perAddress );
    history.push("/");
  }

  return (
    <>
      <Header heading="ADD PATIENT" />
      <Button
        style={{ margin: "20px" }}
        variant="outlined"
        onClick={navigateToHomePage}
      >
        BACK
      </Button>
      <div className="formDiv">
      <form onSubmit={handleSubmit}>
        <p>1: Primary Details</p>
        <label>Patient Name</label>
        <input type="text" placeholder="First Name" value={fname} onChange={ (e) =>(setFname(e.target.value))}/>
        <input type="text" placeholder="Last Name"  value={lname} onChange={ (e) =>(setLname(e.target.value))}/>
        <br/><br/>
        <div>
        <span>Select Gender : </span>
        <input type="radio" id="male" name="gender" value="Male"  onChange={ (e) =>(setGender(e.target.value))}/>
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="Female" onChange={ (e) =>(setGender(e.target.value))}/>
        <label for="female">female</label>
        <input type="radio" id="others" name="gender" value="Others" onChange={ (e) =>(setGender(e.target.value))}/>
        <label for="others">Others</label>
        
        <br /><br />
        <div className="date">
        <label for="birthday">Date of Birth:</label>
        <input type="date" id="birthday" name="birthday" value={bDate} onChange={ (e) =>(setBdate(e.target.value))}/>

        </div>
       

        </div>

        
        <br /><br />
        <span>Matrital Status</span>
        <input type="radio" id="married" name="maritalStatus" value="Married"/>
        <label>Married</label>
        <input type="radio" id="unmarried" name="maritalStatus" value="Unarried"/>
        <label>Married</label>

        <div className="occupation">
        <label for="occupation" style={{marginLeft: "26.5%"}}>Occupation: </label>
        <select name="occupation" id="occupation" onChange={(e) => {setOccupation(e.target.value)}}>
        <option value="Teacher">Teacher</option>
        <option value="Business">Business</option>
        <option value="Working Professional">Working Professional</option>
        <option value="others">others</option>
        </select>


        </div>
       
        
        
        <br /><br />
        <label>Mobile number  </label><input type ="number" onChange={ (e) =>(setPhone(e.target.value))}/>
        
        <br />
        <br />
        <label for="email"  style={{marginLeft: "47.5%"}}>Email Address</label>
        <input type ="email" id="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>

        <p>2: Communication Details</p>
      
        <label for="tempAddress">Temporary Address: </label><br/>
        <textarea id="tempAddress" name="tempAddress" value={tempAddress} onChange={(e)=>{setTempAddress(e.target.value)}} rows="3" cols="30"/><br/>

        <label for="copyAddress"> Copy Temporary Address </label><br></br>
        <input type="checkbox" id="copyAddress" name="copyAddress"  value="" onChange={() => {
            
            setPerAddress(tempAddress);
        }}/>
        
        <br/><br/>
        <label for="perAddress">Permanent Address: </label><br/>
        <textarea id="perAddress" name="perAddress" value={perAddress}   onChange={(e)=>{setPerAddress(e.target.value)}} rows="3" cols="30"/><br/>
        
        

      
        <br/>
        <Button
        style={{ margin: "20px" }}
        type ="submit"
        color="primary"
        variant="contained"
        >
        Add
        </Button>
      </form>
      </div>
      
    </>
  );
};

export default AddSubscriber;