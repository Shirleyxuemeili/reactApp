import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle} from 'reactstrap';

    function RenderDish({dish}) {
        console.log('Dishdetail rederDish invoked');
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
        console.log('Dishdetail renderComments invoked');
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
            </div>
        );
    }

    const DishDetail = (props) => {

        const dish = props.dish;
        if(dish == null){
            return(
                <div></div>
            );
        }
        else{
            return (
                <div className="container">
                    <div class="row">
                        <RenderDish dish={dish} />
                        <RenderComments comments={dish.comments} />
                    </div>  
                </div>
                 
            );
        }
    }


export default DishDetail;