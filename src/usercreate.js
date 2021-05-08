import {useState} from "react";
import {useContext } from "react";
import UserContext from './userContext';

export default function UserCreate() {

    let userData=useContext(UserContext)

    let [firstName,setfirstName] = useState("");
    let [lastName,setlastName] = useState("");
    let [email,setemail] = useState("");
    let [location,setlocation] = useState("");

    let userSubmit = async (e) => {
        e.preventDefault()
       
        userData.setuserList([...userData.userList,{
            firstName,
            lastName,
            email,
            location
        }])

   await fetch("https://60926a0185ff510017212b19.mockapi.io/users",{
       method : "POST",
       body : JSON.stringify({
        firstName,
        lastName,
        email,
        location
       }),
       headers : {
           "Content-type" : "application/json"
       }
   })
}

    return <>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
            <h1>User Form</h1>
            </div>
        </div>
    </div>
        <div className="container">
            <form onSubmit={userSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <label>First Name</label>
                        <input className="form-control" value={firstName} onChange={(e) => setfirstName(e.target.value)}></input>
                    </div>
                    <div className="col-lg-6">
                        <label>Last Name</label>
                        <input className="form-control" value={lastName} onChange={(e) => setlastName(e.target.value)}></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <label>E-mail</label>
                        <input className="form-control" value={email} onChange={(e) => setemail(e.target.value)}></input>
                    </div>
                    <div className="col-lg-6">
                        <label>Location</label>
                        <input className="form-control" value={location} onChange={(e) => setlocation(e.target.value)}></input>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-6">
                        <input className="btn btn-primary" type="submit" value="submit"/>
                    </div>
                </div>
            </form>
        </div>
    </>
}