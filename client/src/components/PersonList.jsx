import axios from "axios";
import '../App.css'
import { useEffect } from "react"
import { Link } from "react-router-dom";

const PersonList = (props) => {
    const {person, setPerson, removeFromDom} = props;
    const deletePerson = (persondId) => {
        console.log(persondId);
        axios.delete("http://localhost:8000/api/person/" + persondId)
        .then((response) => {
            console.log(response.data);
            removeFromDom(persondId)
        })
        .catch((err) => console.log(err))

    }
    useEffect(() => {
        axios.get("http://localhost:8000/api/person")
            .then((response) => setPerson(response.data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <table>
            <tr>
                <th>Object Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Person Details</th>
                <th>Edit Details</th>
                <th>Delete Person</th>
            </tr>
            {
                person.map((person, index) => {
                    return (
                        <tr key={index}>
                            <td>{person._id}</td>
                            <td>{person.first_name}</td>
                            <td>{person.last_name}</td>
                            <td>{person.age}</td>
                            <td>{person.createdAt}</td>
                            <td>{person.updatedAt}</td>
                            <td>
                            <Link to={`/person/${person._id}`}>Details</Link>
                            </td>
                            <td>
                            <Link to={`/person/edit/${person._id}`}>Edit</Link>
                            </td>
                            <td>
                            <button onClick={() => deletePerson(person._id)}>Delete</button>
                            </td>
                        </tr>
                    
                    )
                })
            }


        </table>
    )
}

export default PersonList