import React from 'react';
import { Link } from 'react-router-dom';


class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFeaturedAlbums();
  }

  render() {
    let artists;
    if (this.props.artists) {
      artists = Object.keys(this.props.artists).map(id, artist => (
        <ProfileAlbumItem
          artist={artist}
          key={ id } />
        )
      );
    }
    let albums;
    if (this.props.albums) {
      albums = Object.keys(this.props.albums).map(id, album => (
        <ProfileAlbumItem
          album={album}
          key={ id } />
        )
      );
    }

    return(
      <div>
        <ul>
          { artists }
        </ul>
        <ul>
          { albums }
        </ul>
      </div>
    );
  }
}

export default Main;
