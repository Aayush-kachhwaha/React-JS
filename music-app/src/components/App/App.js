import React from 'react';
import './App.css';

import Playlist from "../playlist/playlist";
import SerachBar from ".//SerachBar/SerachBar";
import SearchResults from ".//SearchResults/SearchResults";
import Spotify from ".../uitl/Spotify";

class App extends React.Component{
    constructor(props){
      super(props);
      
      this.state={
        SearchResults: [],
        playlistName: "New Playlist",
        playListTracks: []
      };

      this.search =this .search.bind(this);
      this.addTrack = this.addTrack.bind(this);
      this.removeTrack =this.removeTrack.bind(this);
      this.updatePlaylistName= this.updatePlaylistName.bind(this);
      this.savePlaylist= this/this.savePlaylist.bind(this);
      this.removeTrackSearch =this.removeTrackSearch.bind(this);
      this.doThese = this.doThese.bind(this);
    }
    
    serch(term){
      Spotify.search(term).then(SearchResults => {
          this.setState({SearchResults : SearchResults});
      });
    }

    addTrack(track){
      let track =this.state.playListTracks;
      if (track.find(saveTrack => saveTrack.id === track.id)){
        return;
      }
      tracks.push(track);
      this.setState({playListTracks: track});
    }
    
    
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
