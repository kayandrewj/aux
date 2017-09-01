import React from 'react';
import { Link } from 'react-router-dom';
import TrackIndexItem from './track_index_item';
import { withRouter } from 'react-router-dom';

class TrackIndex extends React.Component {
  constructor(props) {
    super(props);

    this.clearTracks = this.clearTracks.bind(this);
    this.addTrackButton = this.addTrackButton.bind(this);
  }

  componentDidMount() {
    this.props.fetchAlbumTracks(this.props.match.params.albumId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.albumId !== nextProps.match.params.albumId) {
      this.clearTracks();
      this.props.fetchAlbumTracks(nextProps.match.params.albumId);
    }
  }

  clearTracks() {
    this.props.clearTracks();
  }

  addTrackButton() {
    debugger
  if (this.props.displayAlbum && this.props.currentUserId === this.props.displayAlbum.userId) {
    return <Link to={`/album/${displayAlbum.id}/newTracks`}>Add Track</Link>;
  }
}

  render() {
    let tracks;
    if (this.props.tracks) {
      tracks = Object.keys(this.props.tracks).map((id, idx) => {
        return <TrackIndexItem
          track={this.props.tracks[id]}
          key={id}
          idx={idx}
        />;
    });
    }
    return (
      <div className="track-index">
        { tracks }
        {this.addTrackButton()}
      </div>
    );
  }
}

export default withRouter(TrackIndex);
