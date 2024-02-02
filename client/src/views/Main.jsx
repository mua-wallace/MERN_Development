import { useState } from "react";
// import PersonForm from "../components/PersonForm"
import PersonList from "../components/PersonList"
import ReUsableForm from "../components/ReUsableForm";
import axios from "axios";

const Main = () => {

    const [person, setPerson] = useState([]);


    const removeFromDom = (persondId) => {
        setPerson(person.filter((p) =>p._id != persondId ))
    }

    const createPersonHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/person', {
         first_name:person.firstName,
         last_name:person.lastName,
         age: person.age
        })
        .then((response) => setPerson([...person, response.data]))
        .catch((err)=> console.log(err))
      }
    return (
        <div>
            <ReUsableForm InitialFName="" InitialLName="" InitialAge="" actionHandler={createPersonHandler}/>
            <PersonList person = {person} setPerson = {setPerson}  removeFromDom= {removeFromDom}/>
        </div>
    )
}

export default Main