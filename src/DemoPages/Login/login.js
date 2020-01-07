import React, { Component } from 'react';
import { authenticationService } from '../../services/authentificationService';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import avatart from '../../assets/utils/images/avatar-01.jpg';
import {
  faTrash, faLock, faUser

} from '@fortawesome/free-solid-svg-icons';
// import { Container } from './styles';

export default class Login extends Component {
  constructor(props) {
    super(props);
    // redirection vers la home page si le user est connecté
    this.state = {
      email: '',
      password: '',
      redirect: false,
      disableButton: true
    }
  }
  handleSubmit = event => {
    console.log("login ", this.state.email, "and mot de passe ", this.state.password);
    event.preventDefault();
    //appel au actions pour une connexion avec le backend et utiliser l'api,

    authenticationService.login(this.state)
      .then(
        response => {
          if (response && response.status === 200) {
            this.setState({ redirect: true })
          } else {
            if (response.message === "Request failed with status code 401")
              toast.error(`Login ou mot de passe incorrect `, {
                position: toast.POSITION.TOP_CENTER
              });
            else
              toast.error(`une erreur est survenue coté serveur veuillez réessayer svp `, {
                position: toast.POSITION.TOP_CENTER
              });
          }
        },
        error => {
          console.log("erreur coté serveur", error);
        }
      );


  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log("state manage", this.state)
    if (this.state.email && this.state.password) {
      this.setState({ disableButton: false });
    }
  }


  render() {
    if (this.state.redirect) {
      return (<Redirect to={'/dashboard'} />)
    }
    return (
      <div className="limiter">
        <div className="container-login100" >
          <div className="wrap-login100 p-t-90 p-b-30">
            <form className="login100-form validate-form">
              <div className="login100-form-avatar">
                <img src={avatart} alt="AVATAR" />
              </div>
              <span className="login100-form-title p-t-20 p-b-45">
                Système de gestion du planning
					    </span>
              <div className="wrap-input100 validate-input m-b-10 inp" data-validate="Login obligatoire">
                <input className="input100" type="text" name="email" placeholder="Login" onChange={this.handleChange} />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-user"><FontAwesomeIcon icon={faUser} /></i>
                </span>
              </div>
              <div className="wrap-input100 validate-input m-b-10" data-validate="Mot de passe obligatoire" >
                <input className="input100" type="password" name="password" placeholder="Mot de passe" onChange={this.handleChange} />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-lock"><FontAwesomeIcon icon={faLock} /></i>
                </span>
              </div>
              <div className="container-login100-form-btn p-t-10">
                <button className="login100-form-btn" onClick={this.handleSubmit}>
                  Connexion
						</button>
              </div>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>



    )
  }

}
