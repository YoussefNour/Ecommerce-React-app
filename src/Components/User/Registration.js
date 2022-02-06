import { Component } from "react";
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { CreateUser } from '../../Actions/Users/index'

class Registration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            gender: "",
            address: "",
            password: "",
            image: ""
        }

    }
    changeNameHandler = (e) => {
        this.setState({ name: e.target.value })
    }
    changeEmailHandler = (e) => {
        this.setState({ email: e.target.value })
    }
    changeGenderHandler = (e) => {
        this.setState({ gender: e.target.value })
    }
    changeAddressHandler = (e) => {
        this.setState({ address: e.target.value })
    }
    changePasswordHandler = (e) => {
        this.setState({ password: e.target.value })
    }
    changeImageHandler = (e) => {
        this.setState({ image: e.target.value })
    }
    saveUser = (e) => {
        e.preventDefault();
        let user = {
            name: this.state.name,
            email: this.state.email,
            gender: this.state.gender,
            address: this.state.address,
            password: this.state.password,
            image: this.state.image
        }
        console.log(user)
        this.props.CreateUser(user)
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 offset-md-3">
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Name: </label>
                                        <input placeholder="Name" name="name" className="form-control"
                                            value={this.state.name} onChange={this.changeNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email: </label>
                                        <input placeholder="Email" name="email" className="form-control"
                                            type={"email"} value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Gender: </label>
                                        <input placeholder="Gender" name="gender" className="form-control"
                                            value={this.state.gender} onChange={this.changeGenderHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Address: </label>
                                        <input placeholder="Address" name="address" className="form-control"
                                            value={this.state.address} onChange={this.changeAddressHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Password: </label>
                                        <input placeholder="Password" name="password" className="form-control"
                                            type={"password"} value={this.state.password} onChange={this.changePasswordHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Image: </label>
                                        <input placeholder="Image" name="image" className="form-control"
                                            value={this.state.image} onChange={this.changeImageHandler} />
                                    </div>
                                    <br />
                                    <input type={"button"} value={"Register"} className="btn btn-success" onClick={this.saveUser} />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
//export default Registration;
let mapToAction = (dispatch) => {
    return (bindActionCreators({ CreateUser }, dispatch))
}

export default connect(null, mapToAction)(Registration)