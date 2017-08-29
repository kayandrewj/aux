import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class AlbumSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.renderAlbums = this.renderAlbums.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.album && nextProps.album) {
      this.props.fetchArtistAlbums(nextProps.album.user_id);
    }
    if (this.props.album && (this.props.album.user_id !== nextProps.album.user_id)) {
      this.props.fetchArtistAlbums(nextProps.album.user_id);
    }
  }

  renderAlbums() {
    let albums;
    if (this.props.artistAlbums) {
      albums = Object.keys(this.props.artistAlbums).map(id => (
        <li className="sidebar-album-box" key={id}>
          <Link to={`/album/${this.props.artistAlbums[id].id}`}>
            <img className="sidebar-album-img" src={this.props.artistAlbums[id].artwork} />
            <p className="sidebar-album-text">{this.props.artistAlbums[id].title}</p>
          </Link>
        </li>
      ));
      return albums;
    }
  }

  render() {
    return (
      <div className="album-sidebar">
        <p>{this.props.album ? this.props.album.band : "loading..."}</p>
        <p>discography</p>
        {this.renderAlbums()}
      </div>
    );
  }
}

export default withRouter(AlbumSidebar);
