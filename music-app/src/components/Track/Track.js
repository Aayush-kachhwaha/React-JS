import React from "react";
import "./Track.css";

class SerachBar extends React.Component{
    constructor(props){
        super(props);

        this.state={
            term:""
        };
        this.addTrack= this.addTrack.bind(this);
        this.remodeTrack=this.remodeTrack.bind(this);
    }

    addTrack(event){
        this.setState({term: event.target.value});
    }

    remodeTrack(){
        this.props.onSearch(this.state.term);
    }

    remodeAction(){
        if(this.props.isRemoval){
            return{
                <button className = "Track.-action" onclick ={this.remodeAction}> - </button>
            };
        }
        return(
            <button className = "Track.-action" onclick ={this.addTrack}> - </button>
        )
    }

    render(){
        return{
            <div className = "SearchBar">
            <input placeholder="Enter song, album or artist" onChange={this.handleTermChange} onKeyUp={this.handleEnter} /><button className="SerachButton" onClick={this.serach}></button></>
            </div>
        };
    }
}


export default SerachBar;
