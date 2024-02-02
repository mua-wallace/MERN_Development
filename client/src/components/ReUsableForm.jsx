/* eslint-disable react/display-name */
import  { useState } from "react"
export default (props) => {
const {InitialFName, InitialLName,InitialAge ,actionHandler} = props
const [firstName, setFirstName] = useState(InitialFName)
  const [lastName, setLastName] = useState(InitialLName)
  const [age, setAge] = useState(InitialAge)

  const onSubmitHandler = (e) => {
    e.preventDefault()
    actionHandler({firstName, lastName, age})
    setFirstName("")
    setLastName("")
    setAge("")


  }
 
    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>First Name</label>
                <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
            </div><br />
            <div>
                <label>Last Name</label>
                <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
            </div><br />
            <div>
                <label>Age</label>
                <input type="text" onChange={(e) => setAge(e.target.value)} value={age} />
            </div><br />
            <input type="submit" value='Create Person' /><br /><br />
        </form>
    )
}
