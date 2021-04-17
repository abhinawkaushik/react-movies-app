import React, {Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
class Header extends Component{
    constructor()
    {
        super();
        this.state = {
            isModelOpen:false,
            value:0
        }
    }
    openModelHandler= (e)=>{
        this.setState({isModelOpen:true});
    }
    closeModalHandler = (e) =>{
        this.setState({isModelOpen:false});
    }
    tabChangehandler =(event, value) =>{
        this.setState({value});
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
                <Tabs value={this.state.value} onChange={this.tabChangehandler}>
                    <Tab label="Login"/>
                    <Tab label="Register"/>
                </Tabs>
                </Modal>
            </div>
        )
    }
}

export default Header;