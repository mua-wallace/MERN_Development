import axios from "axios"
import { useState } from "react"

const PersonForm = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  // eslint-disable-next-line react/prop-types
  const {person, setPerson} = props;

  const createPersonHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/person', {
     first_name:firstName,
     last_name:lastName,
     age: age
    })
    .then((response) => setPerson([...person, response.data]))
    .catch((err)=> console.log(err))
    setFirstName('')
    setLastName('')
    setAge('')
  }

  return (
    <form onSubmit={createPersonHandler}>
      <div>
        <label>First Name</label>
        <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
      </div><br/>
      <div>
        <label>Last Name</label>
        <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
      </div><br/>
      <div>
        <label>Age</label>
        <input type="text" onChange={(e) => setAge(e.target.value)} value={age} />
      </div><br/>
      <input type="submit"  value='Create Person'/><br/><br/>
    </form>
  )
}

export default PersonForm