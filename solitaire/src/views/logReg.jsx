import React, { useState, useContext } from 'react';
import '../App.css';
import Form from '../components/form';
import axios from 'axios';
import { navigate } from '@reach/router';
import UserContext from '../contexts/userContext';


const LogReg = props => {

    const initialUser = {
        name: "",
        email: "",
        password: ""
    }

    const [user, setUser] = useState(initialUser);
    const [errors, setErrors] = useState(initialUser);

    const { setCurrentUser } = useContext(UserContext);

    const handleInputChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        console.log("user here", user)
    }

    const handleSubmit = (e) => {
        console.log("In handle submit")
        console.log("user here,", user);
        console.log("errors here,", errors);
        setErrors(initialUser);
        e.preventDefault();
        axios.post("http://localhost:8000/api/user/register", user, {
            withCredentials: true,
            Access_Control_Allow_Origin: true,
        })
        .then(res => {
            console.log("got this far");
            if (res.data.results) {
                setCurrentUser(user);
                navigate("/");
            }
            else {
                    setErrors(res.data)
                }
            })
        .catch(err => console.log("in here now: ",err));
    }

    // const handleSubmit2 = (e) => {
    //     setErrors(initialUser);
    //     e.preventDefault();
    //     axios.get("http://localhost:8000/api/user")
    // }

    return (
        <div class="logRegBack">
            <Form
                input={user}
                errors={errors}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                submitValue="Create a User"
            />

        </div>
    );
}


export default LogReg;