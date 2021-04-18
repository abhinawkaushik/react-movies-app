import React, {Component} from 'react'
import movieData from '../../common/movieData';
import Header from '../../common/header/Header';
class Details extends Component{
    constructor(){
        super();
        this.state = {
            movie:{}
        }
    }
    componentDidMount(){
        let currentState = this.state;
        currentState.movie = movieData.filter((mov)=>{            
            return mov.id === this.props.movieId
        })[0]

        this.setState({currentState})
        console.log(this.state)
    }
    render(){        
        return(
            <div className="details">
                <Header/>
                <div className="flex-containerDetails">
                <div className="leftDetails">
                </div>
                <div className="middleDetails">
                </div>
                <div className="rightDetails">
                </div>
                </div>
            </div>
        );
    }
}

export default Details;