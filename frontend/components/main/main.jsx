import React from 'react';
import { Link } from 'react-router-dom';
import AlbumIndexItem from './album_index_item';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFeaturedAlbums();
  }

  render() {

    let albums;
    let i = "a";
    if (this.props.albums) {
      albums = Object.keys(this.props.albums).map(idx => {
        i += "a";
        return <AlbumIndexItem
          album={this.props.albums[idx]}
          key={ idx }
          number={i}
          />;
        }
      );
    }

    return(
      <div className="album-back-box">
        <ul>
          <p className="new-notable">New and Notable</p>
          { albums }
        </ul>
      </div>
    );
  }
}

export default Main;
