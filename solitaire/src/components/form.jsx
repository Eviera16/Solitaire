import React from 'react';
import { Link } from '@reach/router';
import '../App.css';

const Form = (props) => {

    const { input, errors, handleInputChange, handleSubmit, submitValue } = props;

    return (
        <div className="formWrapper">
            <form className="formForm" onSubmit={handleSubmit}>
                <div className="extraWrap">
                    <div className="left">
                        <div className="labelWrap">
                            <p className="label">Name: </p>
                            <input className="input" type="text" name="name" value={input.name} onChange={handleInputChange}></input>
                            <span>{errors.name.message ? errors.name.message : ""}</span>
                        </div>

                        <div className="labelWrap">
                            <p className="label">Email: </p>
                            <input className="input" type="email" name="email" onChange={handleInputChange} value={input.type}></input>
                            <span>{errors.email.message ? errors.email.message : ""}</span>
                        </div>

                        <div className="labelWrapDes">
                            <p className="labelDes">Password: </p>
                            <input className="input" name="password" onChange={handleInputChange} value={input.desc}></input>
                            <span>{errors.password.message ? errors.password.message : ""}</span>
                        </div>
                    </div>
                </div>
                <button className="formSubmit" type="submit" value={submitValue}>Submit</button>
            </form>
            <form className="formForm" onSubmit={handleSubmit}>
                <div className="extraWrap">
                    <div className="right">
                        <div className="labelWrap">
                            <p className="label">Email: </p>
                            <input className="input" type="email" name="email" onChange={handleInputChange} value={input.type}></input>
                            <span>{errors.email.message ? errors.email.message : ""}</span>
                        </div>

                        <div className="labelWrapDes">
                            <p className="labelDes">Password: </p>
                            <input className="input" name="password" onChange={handleInputChange} value={input.desc}></input>
                            <span>{errors.password.message ? errors.password.message : ""}</span>
                        </div>
                    </div>
                </div>
                <button className="formSubmit" type="submit" value={submitValue}>Submit</button>
            </form>
            <Link className="homeLink" to="/">Home</Link>
        </div>
    );
}


export default Form;