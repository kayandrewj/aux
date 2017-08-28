import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class AlbumBooklet extends React.Component {
  constructor(props) {
    super(props);
    this.albumArt = this.albumArt.bind(this);
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.albumId !== nextProps.match.params.albumId) {
      this.props.fetchAlbum(nextProps.match.params.albumId);
    }
  }

  albumArt() {
    if (this.props.album) {
      return (
        <div className="album-art-view">
          <img src={this.props.album.artwork} className="album-art-img"/>
        </div>
      );
    }
  }

  render() {
    return(
    <div className="album-booklet">
      {this.albumArt()}
    </div>
    );
  }
}

export default withRouter(AlbumBooklet);
