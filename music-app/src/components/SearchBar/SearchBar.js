import React from "react";
import"./SearchBar.css";

class SerachBar extends React.Component{
    constructor(props){
        super(props);

        this.state={
            term:""
        };
        this.handleTermChange= this.handleTermChange.bind(this);
        this.serach=this.serach.bind(this);
        this.handleEnter= this.handleEnter.bind(this);
    }

    handleTermChange(event){
        this.setState({term: event.target.value});
    }

    serach(){
        this.props.onSearch(this.state.term);
    }

    handleEnter(event){
        if(event.keyCode === 13){
            this.serach();
        }
    }

    render(){
        return{
            <div className = "SearchBar">
            <><input placeholder="Enter song, album or artist" onChange={this.handleTermChange} onKeyUp={this.handleEnter} /><button className="SerachButton" onClick={this.serach}></button></>
            </div>
        };
    }
}