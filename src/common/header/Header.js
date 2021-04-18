import React, { Component } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
const TabContainer = function (props) {
    return (
        <Typography component="div" style={{ padding: 0, textAlign: 'center' }}>
            {props.children}
        </Typography>
    )
}
TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}
class Header extends Component {
    constructor() {
        super();
        this.state = {
            isModelOpen: false,
            value: 0,
            username: "",
            password:'',
            usernameRequired: "dispNone",
            passwordRequired:"dispNone",
            firstname:'',
            lastname:'',
            email:'',
            password1:'',
            contactno:'',
            firstnameRequired:'dispNone',
            lastnameRequired:'dispNone',
            emailRequired:'dispNone',
            password1Required:'dispNone',
            contactnoRequired:'dispNone'
        }
    }
    openModelHandler = (e) => {
        this.setState({ isModelOpen: true });
    }
    closeModalHandler = (e) => {
        this.setState({ isModelOpen: false,usernameRequired:"dispNone",value:0, username:'',password:'',passwordRequired:"dispNone",
                           firstname:'',lastname:'',email:'',password1:'',contactno:'',firstnameRequired:'dispNone',lastnameRequired:'dispNone',emailRequired:'dispNone',
                        password1Required:'dispNone',contactnoRequired:'dispNone'  });
    }
    tabChangehandler = (event, value) => {
        this.setState({ value });
    }
    loginClickHandler = () => {        
        this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" })
        this.state.password === "" ? this.setState({ passwordRequired: "dispBlock" }) : this.setState({ passwordRequired: "dispNone" })
    }
    registerClickHandler=()=>{
        this.state.firstname === "" ? this.setState({firstnameRequired:"dispBlock"}):this.setState({firstnameRequired:"dispNone"})
        this.state.lastname === "" ? this.setState({lastnameRequired:"dispBlock"}):this.setState({lastnameRequired:"dispNone"})
        this.state.email === "" ? this.setState({emailRequired:"dispBlock"}):this.setState({emailRequired:"dispNone"})
        this.state.password1 === "" ? this.setState({password1Required:"dispBlock"}):this.setState({password1Required:"dispNone"})
        this.state.contactno === "" ? this.setState({contactnoRequired:"dispBlock"}):this.setState({contactnoRequired:"dispNone"})
    }
    inputUserNameChangeHandler = (e) => {
        this.setState({ username: e.target.value })
    }
    inputPasswordChangeHandler=(e)=>{
        this.setState({password:e.target.value})
    }
    inputFirstNameChangeHandler=(e)=>{
        this.setState({firstname:e.target.value})
    }
    inputLastNameChangeHandler= (e)=>{
        this.setState({lastname:e.target.value})
    }
    inputEmailChangeHandler =(e)=>{
        this.setState({email:e.target.value})
    }
    inputPassword1ChangeHandler=(e)=>{
        this.setState({password1:e.target.value})
    }
    inputContactNoChangeHandler=(e)=>{
        this.setState({contactno:e.target.value})
    }
    render() {
        return (
            <div>
                <header className="app-header">
                    <img src={logo} alt="logo" className="app-logo" />
                    <div className="login-button">
                        <Button variant="contained" color="default" onClick={this.openModelHandler}>
                            Login
                        </Button>
                    </div>
                </header>
                <Modal ariaHideApp={false} isOpen={this.state.isModelOpen} contentLabel="Login" onRequestClose={this.closeModalHandler} style={customStyles}>
                    <Tabs className="tabs" value={this.state.value} onChange={this.tabChangehandler}>
                        <Tab label="Login" />
                        <Tab label="Register" />
                    </Tabs>
                    {this.state.value === 0 &&
                        <TabContainer>
                            <FormControl required>
                                <InputLabel htmlFor="userName">Username</InputLabel>
                                <Input id="userName" type="text" username={this.state.username} onChange={this.inputUserNameChangeHandler} />
                                <FormHelperText className={this.state.usernameRequired}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input id="password" type="password" password={this.state.password} onChange={this.inputPasswordChangeHandler}/>
                                <FormHelperText className={this.state.passwordRequired}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br /><br />
                            <Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>
                        </TabContainer>
                    }
                    {this.state.value === 1 &&
                        <TabContainer>
                            <FormControl required>
                                <InputLabel htmlFor="firstname">First Name</InputLabel>
                                <Input id="firstname" type="text" firstname={this.state.firstname} onChange={this.inputFirstNameChangeHandler} />
                                <FormHelperText className={this.state.firstnameRequired}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="lastname">Last Name</InputLabel>
                                <Input id="lastname" type="text" lastname={this.state.lastname} onChange={this.inputLastNameChangeHandler}/>
                                <FormHelperText className={this.state.lastnameRequired}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input id="email" type="text" email={this.state.email} onChange={this.inputEmailChangeHandler}/>
                                <FormHelperText className={this.state.emailRequired}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="password1">Password</InputLabel>
                                <Input id="password1" type="password" email={this.state.password1} onChange={this.inputPassword1ChangeHandler}/>
                                <FormHelperText className={this.state.password1Required}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="contactno">Contact No.</InputLabel>
                                <Input id="contactno" type="text" email={this.state.contactno} onChange={this.inputContactNoChangeHandler}/>
                                <FormHelperText className={this.state.contactnoRequired}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br /><br />
                            <Button variant="contained" color="primary" onClick={this.registerClickHandler}>REGISTER</Button>
                        </TabContainer>
                    }
                </Modal>
            </div>
        )
    }
}

export default Header;