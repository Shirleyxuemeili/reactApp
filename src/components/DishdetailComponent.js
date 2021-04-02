import React, { useState } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

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

    function RenderCommentModal() {
        const [isModalOpen,setModalOpen] = useState(false);

        const toggleModal = () => {
            setModalOpen(!setModalOpen);
        };

        return (
            <div>
                <button outline secondary onClick={setModalOpen} >
                    <span className="fa fa-pencil fa-lg"></span> Submit Comment
                </button>

                <Modal isOpen={isModalOpen} >
                    <ModalHeader toggle={toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        
                            
                        <Button type="submit" value="submit" color="primary">Submit</Button>
                    </ModalBody>
                </Modal>
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
                <RenderCommentModal />
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