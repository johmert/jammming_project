import React from 'react';
import './Track.css';

// basic Track Component
// includes methods for adding and removing from playlist

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack() {
    //adds track to playlist
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    //removes track from playlist
    this.props.onRemove(this.props.track);
  }

  renderAction() {
    // displays either a + or a -
    // showing track to be added to playlist or removed
    if(this.props.isRemoval) {
      return <a className="Track-action" onClick={this.removeTrack}>-</a>;
    }
    return <a className="Track-action" onClick={this.addTrack}>+</a>;
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
        <h3>{this.props.track.name}</h3>
        <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;
