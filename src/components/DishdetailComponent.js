import React, { Component} from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalBody, ModalHeader, Row, Label, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            openModal: false
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            openModal: !this.state.openModal
        });
    }

    handleSubmit(values) {
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));

    }

    render () {
        return (
            <div>
                <Button outline secondary onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"></span> Submit Comment
                </Button>
                <Modal isOpen={this.state.openModal} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlfor="rating" className="col-12">Rating</Label>
                                    <Col>
                                        <Control.select model=".rating" className="form-control" name="rating">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.select>
                                        
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlfor="author" className="col-12">Your Name</Label>
                                    <Col>
                                        <Control.text model=".author" className="form-control" id="author" name="author" placeholder="Your Name" validators={{required, minLength: minLength(3), maxLength: maxLength(15)}} />
                                        <Errors className="text-danger" model=".author" show="touched" messages={{required: 'Required', minLength: 'Must be greater than 2 characters', maxLength: 'Must be 15 characters and less'}} />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlfor="comment" className="col-12">Comment</Label>
                                    <Col>
                                        <Control.textarea model=".comment" className="form-control col-12" id="comment" name="comment" rows="6" />
                                        <Errors class="text-danger" model=".comment" show="touched" />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col>
                                    <Button type="submit" value="submit" color="primary">Submit</Button>
                                    </Col>
                                </Row> 
                            </LocalForm>`
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

    function RenderDish({dish}) {
        
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                           <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card> 
            </div>
        );
    }

    function RenderComments({comments}) {
        
        const commentList = comments.map((comment) => {
            return(
                <div key={comment.id}>
                    <li>
                        <p>{comment.comment}</p>
                        <p> -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                    </li>
                </div>
            );
        });

        return (
            <div className = "col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">{commentList}</ul>
                <CommentForm />
            </div>
        );
    }

    const DishDetail = (props) => {

        if(props.dish == null){
            return(
                <div></div>
            );
        }
        else{
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div class="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.comments} />
                    </div>  
                </div>
                 
            );
        }
    }


export default DishDetail;