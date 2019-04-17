import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./FrmRegister.css";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class FrmRegister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      userName: null,
      email: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        User Name: ${this.state.userName}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "userName":
        formErrors.userName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Đăng ký tài khoản</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="First Name"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Last Name"
                type="text"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
            <div className="userName">
              <label htmlFor="userName">User Name</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="User Name"
                type="text"
                name="userName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.userName.length > 0 && (
                <span className="errorMessage">{formErrors.userName}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit">Create Account</button>
              <small>Already Have an Account?</small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FrmRegister;

// <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />
// constructor(props) {
//   	super(props);
//   	this.state = {
//   		name: "",
//   		nameError: "",

//   		pass: "",
//   		passError: "",

//   		email: "",
//   		emailError: "",

//   		phone: "",
//   		phoneError: ""
//   	};
//   }

//   change = e => {
//     this.props.onChange({ [e.target.name]: e.target.value });
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };

//   validate = () => {
//     let isError = false;
//     const errors = {
//       nameError: "",
//       passError: "",
//       emailError: "",
//       phoneError: ""
//     };

//     if (this.state.name.length < 6) {
//       isError = true;
//       errors.nameError = "Username needs to be atleast 6 characters long";
//     }

// 	if (this.state.pass.length < 8) {
//       isError = true;
//       errors.passError = "Password needs to be atleast 8 characters long";
//     }

//     if (this.state.email.indexOf("@") === -1) {
//       isError = true;
//       errors.emailError = "Requires valid email";
//     }

//     this.setState({
//       ...this.state,
//       ...errors
//     });

//     return isError;
//   };

//   onSubmit = e => {
//     e.preventDefault();
//     // this.props.onSubmit(this.state);
//     const err = this.validate();
//     if (!err) {
//       // clear form
//       this.setState({
//         name: "",
//   		nameError: "",

//   		pass: "",
//   		passError: "",

//   		email: "",
//   		emailError: "",

//   		phone: "",
//   		phoneError: ""
//       });
//       this.props.onChange({
//         name: "",
//         pass: "",
//         email: "",
//         phone: ""
//       });
//     }
//   };

//   render() {
//     return (
//     	<div>
//     		<h3>Đăng ký</h3>
//     		<div className="container">
// 	    		<form className="register">
// 	    			<div>
// 		    			<label>Username: </label>
// 		    			<input type="text" 
// 		    			className="form-control"
// 		    			placeholder="Mời bạn nhập username..."
// 		    			value={this.state.name}
// 				        onChange={e => this.change(e)}
// 				        errorText={this.state.nameError}
// 				        />	
// 		    		</div>
// 		    		<div>
// 		    			<label>Password: </label>
// 		    			<input type="password" 
// 		    			className="form-control" 
// 		    			placeholder="Mời bạn nhập password..."
// 		    			value={this.state.pass}
// 				        onChange={e => this.change(e)}
// 				        errorText={this.state.passError}
// 		    			/>	    				
// 		    		</div>
// 		    		<div>
// 		    			<label>Email: </label>
// 		    			<input type="email" 
// 		    			className="form-control" 
// 		    			placeholder="Mời bạn nhập email..."
// 		    			value={this.state.email}
// 		    			onChange={e => this.change(e)}
//         	  			errorText={this.state.emailError}
//         	  			/>	
// 	    			</div>
// 	    			<div>
// 		    			<label>Phone: </label>
// 		    			<input type="text" 
// 		    			className="form-control" 
// 		    			placeholder="Mời bạn nhập số điện thoại..."
// 		    			value={this.state.phone}
// 		    			onChange={e => this.change(e)}
//         	  			errorText={this.state.phoneError}
// 		    			/>	
// 	    			</div>

// 	    			<button type="submit" class="btnRegister btn btn-primary">Đăng ký</button>
// 	    			<button type="button" class="btnRegister btn btn-danger">Hủy bỏ</button>
// 	    		</form>
// 	    	</div>
//     	</div>
//     );
//   }