const clientID ='e7cbf631fd03446bb66a5678bb9587df';
const secret ='dfdd520c5434494b8fc1c2149d82372b';
const redirectURI = 'http://localhost:3005/';

let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    //adding in accessToken info
  },

  search(term) {
    const accessToken=Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,
      {
        headers: {
          Authorization: `Bearer ${acccessToken}`
        }
      }).then(response =>{
        return response.json();
      }).then (jsonResponse => {
        if(!jsonResponse.tracks){
          return [];
        }
        return jsonResponse.tracks.items.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artist[0].name,
          album: track.album.name,
          uri: track.uri
        }));
      });
  },

  savePlaylist() {
    // saving playlist to Spotify account
  }
};

export default Spotify;
