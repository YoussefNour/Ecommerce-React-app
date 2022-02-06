import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {GetAllUsers} from '../../Actions/Users/index'

class Login extends Component {
    constructor(props) {
        super(props)
        this.props.GetAllUsers();
        this.state = {
            email: "",
            password: ""
        }

    }
    changeEmailHandler = (e) => {
        this.setState({ email: e.target.value })
    }
    changePasswordHandler = (e) => {
        this.setState({ password: e.target.value })
    }

    login=()=>{
        
        let loginUser = {email:this.state.email,password:this.state.password}
        console.log(loginUser)
        let allusers = this.props.users;
        console.log(allusers);
        let founded = allusers.find(x=>x.email==loginUser.email)
        console.log(founded)
        if(founded){
        }
        
        
    }
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 offset-md-3">
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Email: </label>
                                        <input placeholder="Email" name="email" className="form-control"
                                            type={"email"} value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>
                                   
                                    <div className="form-group">
                                        <label>Password: </label>
                                        <input placeholder="Password" name="password" className="form-control"
                                            type={"password"} value={this.state.password} onChange={this.changePasswordHandler} />
                                    </div>
                                    <br />
                                    <input type={"button"} value={"Login"} className="btn btn-success" onClick={this.login} />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
let mapToAction = (dispatch) => {
    return (bindActionCreators({GetAllUsers}, dispatch))
}
let mapToProps=(state)=>{
    return{
        users:state.usersList
    }
}

export default connect(mapToProps, mapToAction)(Login)