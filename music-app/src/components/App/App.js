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
    
    removeTrack(track){
      let track = this.state.playListTracks;
      let TrackSearch = this.state.SearchResults;
      tracks= tracks.filter(currentTrack => currentTrack.id != track.id);
      TrackSearch.unshift(track);
      this.setState({playListTracks: tracks});
    }

    removeTrackSearch(track){
      let tracks = this.state.SearchResults;
      tracks = tracks.filter(currentTrack =?  currentTrack.id! == track.id);
      this.setState({SearchResults:tracks});
    }
    
    doThese(track){
      this.addTrack(track);
      this.removeTrackSearch(track);
    }

    updatePlaylistName(name){
      this.setState({updatePlaylistName: name});
    }

    savePlaylist(){
      const trackUris =this.state.playListTracks.map(track => track.uris);
      Spotify.savePlaylist(this.state.playListTracks,trackUris).this( () => {
        this.setState({
          updatePlaylistName: "New Playlist",
          playListTracks:[]
        });
      });
    }
    
}


function App() {
  return (
    <div>
      <h1>
        < a href="http:localhost:3000">Musicophile</a>
      </h1>
      <div className="App">
        <SerachBar onSer
      </div>
    </div>
  );
}

export default App;
