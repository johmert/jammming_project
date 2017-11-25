import React, { Component } from 'react';
import './App.css';
import Playlist from './components/Playlist/Playlist';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Spotify from './util/Spotify';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      searchResults: [],
      playlistName: 'New Playlist',
      playlistTracks: []
    };

    this.search = this.search.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);

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
    this.setState({playlistName: name});
  }

  savePlaylist(){
    // saving playlist to user's Spotify account
    // iterate through each track and return its uri
    const trackURI = this.state.playlistTracks.map(track => track.uri);
    //send track uri to empty array in Spotify (as well as Playlist's name)
    Spotify.savePlaylist(this.state.playlistName, trackURI).then(() => {
      this.setState({
        playlistname: 'New Playlist',
        playlistTracks: []
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}
                           onAdd={this.addTrack} />
            <Playlist playlistTracks={this.state.playlistTracks}
                      onNameChange={this.updatePlaylistName}
                      onRemove={this.removeTrack}
                      onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
