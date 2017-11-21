import React, { Component } from 'react';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../../util/Spotify';

class App extends Component {
  constructor(props){
    super(props);
    //event handlers
  }

  search(term) {
    Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults});
    });
  }

  addTrack(track){
    //current playlist
    let tracks = this.state.playlistTracks;
    //add track to playlist
    tracks.push(track);
    //update current playlist
    this.setState({playlistTracks: tracks});
  }

  removeTrack(track){
    //current playlist
    let tracks = this.state.playlistTracks;
    //create new array (playlist) that doesn't include selected track
    tracks = tracks.filter(selectedTrack => selectedTrack.id !== track.id);
    //update current playlist
    this.setState({playlistTracks: tracks});
  }

  updatePlaylistName(name){
    //changing the name of the playlist
  }

  savePlaylist(){
    // saving playlist to user's spotify account
  }

  render() {
    return (
      <h1>Ja<span className="hightlight">mmm</span>ing</h1>
      <div className="App">
      // SearchBar component
      // SearchResults component
      // PlayList component
      </div>
    );
  }
}

export default App;
