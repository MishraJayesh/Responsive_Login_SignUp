import React from 'react';
import Form from 'react-bootstrap/Form';
import './main.css';

function Forms() {
    return (
        <div>
            <div className="wrapper">
                <div className="title-text">
                    <div className="title login">Login Form</div>
                    <div className="title signup">Signup Form</div>
                </div>
                <div className="form-container">
                    <div className="slide-controls">
                        <input type="radio" name="slide" id="login" checked />
                        <input type="radio" name="slide" id="signup" />
                        <Form.Label for="login" className="slide login">Login</Form.Label>
                        <Form.Label for="signup" className="slide signup">Signup</Form.Label>
                        <div className="slider-tab"></div>
                    </div>
                    <div className="form-inner">
                        <Form action="#" className="login">
                            <div className="field">
                                <input type="text" placeholder="Email Address" required />
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Password" required />
                            </div>
                            <div className="pass-link"><a href="##">Forgot password?</a></div>
                            <div className="field btn">
                                <div className="btn-layer"></div>
                                <input type="submit" value="Login" />
                            </div>
                            <div className="signup-link">Not a member? <a href="##">Signup now</a></div>
                        </Form>
                        <Form action="#" className="signup">
                            <div className="field">
                                <input type="text" placeholder="Name" required />
                            </div>
                            <div className="field">
                                <input type="number" placeholder="Mobile Number" required />
                            </div>
                            <div className="field">
                                <input type="text" placeholder="Email Address" required />
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Password" required />
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Confirm password" required />
                            </div>
                            <div className="field btn">
                                <div className="btn-layer"></div>
                                <input type="submit" value="Signup" />
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Forms;