import React from 'react';
import { Link } from 'react-router-dom';
import TrackIndexItem from './track_index_item';
import { withRouter } from 'react-router-dom';
import JSZip from 'jszip';
import FileSaver from 'file-saver';

class TrackIndex extends React.Component {
  constructor(props) {
    super(props);

    this.clearTracks = this.clearTracks.bind(this);
    this.addTrackButton = this.addTrackButton.bind(this);
    this.buildZipFile = this.buildZipFile.bind(this);
    this.downloadZipFile = this.downloadZipFile.bind(this);
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
    if (this.props.displayAlbum && this.props.currentUserId === this.props.displayAlbum.userId) {
      return <Link to={`/album/${this.props.displayAlbum.id}/newTracks`}>Add Track</Link>;
    }
  }

  buildZipFile() {
    this.zip = new JSZip();
    Object.keys(this.props.tracks).forEach(idx=> {
      this.zip
        .file(this.props.tracks[idx].audio_file, this.props.tracks[idx].title);
    });

    let promise = null;
    if (JSZip.support.uint8array) {
      promise = this.zip.generateAsync({type : "uint8array"});
    } else {
      promise = this.zip.generateAsync({type : "string"});
    }
  }

  downloadZipFile() {
    this.buildZipFile();
    this.zip.generateAsync({type:"base64"}).then(function(base64) {
      window.location = "data:application/zip;base64," + base64;
    }, function(err) {
      console.log(err);
    });
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
