import { Component } from 'react';
import { connect } from 'react-redux';
import  * as actions from '../../Actions/Products/index'
import Product from './Product';

class Products extends Component{
    constructor(props){
        super(props);
        this.props.GetAllProducts();
        this.state={
            
        }
    }


    refresh=()=>{
        if(this.props.products){
           return( this.props.products.map((product)=>{return <div className="col-3" key={product.id}><Product productCard={product}/></div>
            })
           )
        }
        return(
            <div>No Products</div>
        )
    }

    render(){
        return(
            <div className="container">
                <div className="row mb-5">
                    <button className="btn btn-secondary btn-block btn-sm">Create new product</button>
                </div>
                <div className="row">
                    {this.refresh()}
                </div>
            </div>
        )
    }
}

let mapToProps=(state)=>{
    return{
        products:state.productList
    }
}

export default connect(mapToProps, actions)(Products)