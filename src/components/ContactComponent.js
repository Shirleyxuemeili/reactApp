import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
    
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log("Current State is: " + JSON.stringify(values));
        this.props.postFeedback(values.firstname, values.lastname, values.telnum, values.email, values.agree, values.contactType, values.message);
        this.props.resetFeedbackForm();
    }

    render() {

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <FadeTransform in transformProps={{exitTransform: 'scale(0.5) translateY(-50%)'}} >
                    <div className="row row-content">
                        <div className="col-12">
                        <h3>Location Information</h3>
                        </div>
                        <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                        </div>
                        <div className="col-12 col-sm-6 offset-sm-1">
                            <h5>Map of our Location</h5>
                            <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.17908596155!2d114.28274575093975!3d22.309065848141287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404038194bfecc3%3A0x690e926322ef3ce4!2s121%20Clear%20Water%20Bay%20Rd%2C%20Clear%20Water%20Bay%2C%20Hong%20Kong!5e0!3m2!1sen!2sus!4v1617901596718!5m2!1sen!2sus" width="400" height="300" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                        <div className="col-12 col-sm-11 offset-sm-1">
                            <div className="btn-group" role="group">
                                <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                                <a role="button" className="btn btn-info" href="skype:confusion?add"><i className="fa fa-skype"></i> Skype</a>
                                <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                            </div>
                        </div>
                    </div>
                </FadeTransform>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us Your Feedback</h3>
                        <div className="col-12 col-md-9">
                            <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlfor="firstname" md={2}>First Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".firstname" className="form-control" id="firstname" name="firstname" placeholder="First Name" validators={{required,minLength: minLength(3),maxLength: maxLength(15)}} />
                                        <Errors className="text-danger" model=".firstname" show="touched"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 15 characters and less'
                                            }} />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlfor="lastname" md={2}>Last Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".lastname" className="form-control" id="lastname" name="lastname" placeholder="Last Name" validators={{required, minLength: minLength(2), maxLength: maxLength(15)}} /> 
                                        <Errors className="text-danger" model=".lastname" show="touched"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be greater than 1 characters',
                                                maxLength: 'Must be 15 characters and less'
                                            }} />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlfor="telnum" md={2}>Contact Tel.</Label>
                                    <Col md={10}>
                                        <Control.text model=".telnum" className="form-control" id="telnum" name="telnum" placeholder="Tel. Number" validators={{required, minLength: minLength(3), maxLength: maxLength(15), isNumber}} />
                                        <Errors className="text-danger" model=".telnum" show="touched"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 15 characters and less',
                                                isNumber: 'Must be a number'
                                            }} />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlfor="email" md={2}>Email</Label>
                                    <Col md={10}>
                                        <Control.text model=".email" className="form-control" id="email" name="email" placeholder="Email" validators={{required, validEmail}} />
                                        <Errors className="text-danger" model=".email" show="touched"
                                            messages={{
                                                required: 'Required',
                                                validEmail: 'Invalid email address'
                                            }} />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{size: 6, offset: 2}}>
                                        <div className="form-check">
                                            <Label check>
                                                <Control.checkbox model=".agree" className="form-check-input" name="agree" /> {' '}
                                                <strong>May we contact you?</strong>
                                            </Label>
                                        </div>
                                    </Col>
                                    <Col md={{size: 3, offset: 1}}>
                                        <Control.select model=".contactType" className="form-control" name="contactType"  >
                                            <option>Tel.</option>
                                            <option>Email</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlfor="message" md={2}>Your Feedback</Label>
                                    <Col md={10}>
                                        <Control.textarea model=".message" className="form-control" id="message" name="message" rows="12" />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{size:10, offset: 2}}>
                                        <Button type="submit" color="primary">Send Feedback</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;