import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const PersonDetails = () => {
    const {id} = useParams()
    const [data, setData] = useState({});
    const {first_name, last_name, age, _id, createdAt, updatedAt} = data;
   useEffect(() => {
    axios.get('http://localhost:8000/api/person/'+id)
    .then((response) => {
        setData(response.data)
    })
    .catch((err) => {
        console.log(err);
    })
   }, []);
  return (
    <div>
    <p>First Name: {first_name}</p>
    <p>Last Name: {last_name} </p>
    <p>Age: {age} </p>
    <p>Created At: {createdAt}</p>
    <p>Updated At:{updatedAt} </p>
    <p>Person Id: {_id}</p>
    </div>
  )
}

export default PersonDetails