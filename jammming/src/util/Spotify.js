const clientID ='e7cbf631fd03446bb66a5678bb9587df';
const redirectURI = 'http://localhost:3005/';

let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    //adding in accessToken info
    const token = window.location.href.match(/access_token=([^&]*)/);
    const expireTime = window.location.href.match(/expires_in=([^&]*)/);

    if (token && expireTime) {
      accessToken=token[1];
      const expiresIn = Number(expireTime[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
      window.location = accessUrl
    }
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
