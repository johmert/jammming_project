import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

// This displays a list of tracks
// Used in SearchResults and Playlist

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {
          // renders same information for each track
          // as they populate from Spotify
          this.props.tracks.map(track => {
            return <Track track={track}
                    key={track.id}
                    onAdd={this.props.onAdd}
                    isRemoval={this.props.isRemoval}
                    onRemove={this.props.onRemove} />
            })
        }
      </div>
    );
  }
}

export default TrackList;
