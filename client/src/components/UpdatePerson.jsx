import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePerson = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const { id } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        axios.get('http://localhost:8000/api/person/' + id)
        .then((response) => {
           setFirstName(response.data.first_name)
           setLastName(response.data.last_name)
           setAge(response.data.age)
        })
        .catch((err) => {
            console.log(err);
        })

    }, [id]);

    const updatePerson =(e) =>{
        e.preventDefault()
        axios.patch('http://localhost:8000/api/person/edit/' + id, {
            first_name: firstName,
            last_name:lastName,
            age:age
        })
        .then((res) =>{
            console.log(res);
            navigate('/person')
        })
        .catch((err) =>{
            console.log(err);
        })
    }

    return (
        <form onSubmit={updatePerson} >
            <div>
                <label>First Name</label>
                <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
            </div><br />
            <div>
                <label>Last Name</label>
                <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
            </div><br />
            <div>
                <label>Age</label>
                <input type="text" onChange={(e) => setAge(e.target.value)} value={age} />
            </div><br />
            <input type="submit" value='Update Person' /><br /><br />
        </form>
    )
}

export default UpdatePerson
