import { Component } from 'react';
import { connect } from 'react-redux';
import  * as actions from '../../Actions/index'

class Products extends Component{
    constructor(props){
        super(props);
        this.props.GetAllProducts();
        this.state={
        }
    }


    refresh=()=>{
        if(this.props.products){
           return( this.props.products.map((product)=>{return <div key={product.id}>{product.title}</div>
            })
           )
        }
        return(
            <div>No Products</div>
        )
    }

    render(){
        return(
            <div>
                {this.refresh()}
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