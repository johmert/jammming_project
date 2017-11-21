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
    // adding tracks from results to playlist
  }

  removeTrack(track){
    // removing tracks from playlist
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
