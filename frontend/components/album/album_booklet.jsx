import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class AlbumBooklet extends React.Component {
  constructor(props) {
    super(props);
    this.albumArt = this.albumArt.bind(this);
    this.albumInfo = this.albumInfo.bind(this);
    this.targetProfileHeader = this.targetProfileHeader.bind(this);
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

  albumInfo() {
    if (this.props.album) {
      return (
        <ul className="album-info">
          <li>
            {this.props.album.title}
          </li>
          <li>
            <Link to={`/profile/${this.props.album.user_id}`}>
              by {this.props.album.band}
            </Link>
          </li>
        </ul>
      );
    }
  }

  targetProfileHeader() {
    if (this.props.album) {
      return (
        <div className="profile-header">
          <img src={this.props.album.header} className="header-img"/>
        </div>
      );
    }
  }

  render() {
    return(
    <div className ="artist-profile">
      {this.targetProfileHeader()}
    <div className="album-booklet">
      {this.albumArt()}
      <div className="album-info-box">
        {this.albumInfo()}
      </div>
    </div>
  </div>
    );
  }
}

export default withRouter(AlbumBooklet);
