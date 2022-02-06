import { Component } from "react";

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
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
                                    <input type={"button"} value={"Login"} className="btn btn-success" onClick={this.saveUser} />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;