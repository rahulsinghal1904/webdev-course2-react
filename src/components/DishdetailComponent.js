import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

class DishDetail extends Component{

    constructor(props) {
        super(props);
    }


    renderDish(dish){
        if(dish!=null){
             return( <Card>
                <CardImg width='100%' src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
           </Card>);
        } else {
            return <div></div>;
        }
    }

    renderComments(dish){
        if(dish!=null){
            return dish.comments.map((comment)=>{
                return(
                    
                    <div key={comment.id} >
                        <ul className="list-unstyled">
                        <li className="mt-1">
                        {comment.comment}
                        </li>
                        <li className="mt-1">
                            -- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                        </li>
                        </ul>
                    </div>
                )
            })
        }else {
            return <div></div>;
        }
    }

    render(){

        return(
            <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                        {this.renderComments(this.props.dish)}
                </div>
            </div>
        </div>
        );
    }
}

export default DishDetail;