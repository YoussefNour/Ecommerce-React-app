import { useState } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {CreateProduct} from "../../Actions/Products/index"

let NewProduct = (props)=>{
    let [product, setProduct] = useState({})
    let handleChange=(e)=>{
        const n = e.target.name;
        setProduct({...product,[n]:e.target.value})
    }
        return(
            <div className="mt-5">
                <form className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-5 p-5 border border-2 rounded border-dark"> 
                            <div className="form-group mb-3">
                                <label className="mb-2">Product Title</label>
                                <input type="text" name="title" className="form-control" id="productname" onChange={(e)=>handleChange(e)} placeholder="Enter Product Title"/>
                            </div>  
                            <div className="form-group mb-3">
                                <label className="mb-2">Product Price</label>
                                <input type="number" name="price" className="form-control" id="productPrice" onChange={(e)=>handleChange(e)} placeholder="Enter Product Price"/>
                            </div>
                            <div className="form-group mb-3">
                                <label className="mb-2">Product Image Link</label>
                                <input type="text" name="image" className="form-control" id="productImage" onChange={(e)=>handleChange(e)} placeholder="Enter Product Image Url"/>
                            </div>  
                            <div className="form-group mb-3">
                                <label className="mb-2">Product Description</label>
                                <textarea type="text" name="details" className="form-control largeTextBox" onChange={(e)=>handleChange(e)} id="ProductDescription" placeholder="Enter Product Description"/>
                            </div>  
                            <input type="button" onClick={()=>{props.CreateProduct(product)}} value="Add New Product" className="btn btn-success btn-sm" />
                        </div>
                    </div>
                </form>
            </div>
        )
}

let mapToAction=(dispatch)=>{
    return(bindActionCreators({CreateProduct},dispatch))
}

export default connect(null,mapToAction)(NewProduct)