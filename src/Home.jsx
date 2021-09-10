import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import AddSubscriber from "./AddSubscriber";
import EditSubscriber from "./EditSubscriber";
import ShowSubscribers from "./ShowSubscribers";

//The component which owns the state should be the one changing it.
//This means that all functions modifying the state should reside in the
//component where the state resides

const Home = () => {
  const [subscribersList, setSubscribersList] = useState([
    { id: 1, fname: "Akash", lname: "Sharma", gender: "Male", bDate: "", occupation: "Data Scientist", phone: "7391309812", email: "akash@gmail.com", tempAddress: "Pune", perAddress: "Mumbai" },
    { id: 2, fname: "Omkar", lname: "Raut", gender: "Male", bDate: "", occupation: "Developer", phone: "8457854562", email: "omkar@gmail.com", tempAddress: "Delhi", perAddress: "Delhi" },

  ]);

  let editPatient;

  function handleDelete(id) {
    const filteredSubscribers = subscribersList.filter(
      (contact) => contact.id !== id
    );

    setSubscribersList(filteredSubscribers);
  }

  function handleEdit(id) {
    editPatient = subscribersList[id - 1];
    console.log("inside edit");
    console.log(editPatient);
  }

  function handleAdd(fname, lname, gender, bDate, occupation, phone, email, tempAddress, perAddress) {
    const newContact = {
      id: subscribersList.length + 1,
      fname: fname,
      lname: lname,
      gender: gender,
      bDate: bDate,
      occupation: occupation,
      phone: phone,
      email: email,
      tempAddress: tempAddress,
      perAddress: perAddress
    };
    const newSubscribersList = [...subscribersList, newContact];
    setSubscribersList(newSubscribersList);
  }

  return (
    <Switch>
      <Route
        path="/add"
        render={() => <AddSubscriber handleAdd={handleAdd} />}
      />
      {
        /*
        <Route
        path="/edit"
        render={() => <EditSubscriber editPatient={editPatient} />}
      />
         */

      }
      
      <Route
        path="/"
        render={() => (
          <ShowSubscribers
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            subscribersList={subscribersList}
          />
        )}
      />
    </Switch>
  );
};

export default Home;