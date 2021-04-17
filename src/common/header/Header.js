import React, {Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
class Header extends Component{
    constructor()
    {
        super();
        this.state = {
            isModelOpen:false
        }
    }
    openModelHandler= (e)=>{
        this.setState({isModelOpen:true});
    }
    closeModalHandler = (e) =>{
        this.setState({isModelOpen:false});
    }
    render(){
        return (
            <div>
                 <header className="app-header">
                <img src={logo} alt="logo"         className="app-logo"/>
                    <div className="login-button">
                        <Button variant="contained" color="default" onClick={this.openModelHandler}>
                            Login
                        </Button>
                    </div>
                </header>
                <Modal ariaHideApp={false} isOpen={this.state.isModelOpen} contentLabel="Login" onRequestClose={this.closeModalHandler}>

                </Modal>
            </div>
        )
    }
}

export default Header;