import { Component } from "react";
import { connect } from "react-redux";
// import {useParams} from 'react-router'
import { bindActionCreators } from "redux";
import {GetProductById} from '../../Actions/Products/index'

class ProductDetails extends Component{
    constructor(props){
        super(props);
        // const {id} = useParams()
        props.GetProductById(3);
        this.state={
            counter:0,
        }   
    }
    componentDidMount(){

    }

    increaseCounter(){
        this.setState({counter:(this.state.counter+1)})
    }

    
    decreaseCounter(){
        if(this.state.counter >0)
            this.setState({counter:(this.state.counter-1)})
    }

    checkProduct(){
        if(this.props.PDetails){
            return(
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-4">
                            <div className="card text-center">
                                <img className="card-img-top" src={this.props.PDetails.image} alt="productimage"/>
                                <div className="card-body">
                                <h4 className="card-title">{this.props.PDetails.title}</h4>
                                <p className="card-text">$ {this.props.PDetails.price}</p>
                                <p className="card-text">{this.props.PDetails.details}</p>
                                

                                
                                <div className="d-flex justify-content-center">
                                    <input className="btn btn-success btn-sm" onClick={()=>this.increaseCounter()} type='button' value='+'/>
                                    <label id="count" className="mx-2">{this.state.counter}</label>
                                    <input className="btn btn-secondary btn-sm" onClick={()=>this.decreaseCounter()} type='button' value='-'/>
                                    <button className="btn btn-primary mx-2 btn-sm">Add To Card</button>
                                    <button className="btn btn-danger mx-2 btn-sm">Delete</button>
                                    <button className="btn btn-dark mx-2 btn-sm">Edit</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                )
        }
        return(
            <div><h3>Product Not Found</h3></div>
        )
    }

    render(){
        return(
           <div>{this.checkProduct()}</div>
        )
        
    }

}

let mapToProps= (state)=>{
    console.log(state.GetProduct);
    return(
        {
        PDetails:state.GetProduct
        }
    )
}

let mapToAction=(dispatch)=>{
    return (bindActionCreators({GetProductById},dispatch))
}

export default connect(mapToProps,mapToAction)(ProductDetails)