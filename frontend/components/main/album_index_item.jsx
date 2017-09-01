import React from 'react';
import { Link } from 'react-router-dom';

class AlbumIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li className="main-album-box">
        <Link to={`/album/${this.props.album.id}`} className={this.props.number}>
          <img className={`img-${this.props.number}`} src={ this.props.album.artwork} />
        </Link>
      </li>
    );
  }
}

export default AlbumIndexItem;
