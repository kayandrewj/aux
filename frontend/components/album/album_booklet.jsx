import React from 'react';
import { Link } from 'react-router-dom';

class AlbumBooklet extends React.Component {
  constructor(props) {
    super(props);

    this.targetAlbumId = this.targetAlbumId.bind(this);
    this.targetAlbumId = this.targetAlbumId.bind(this);

  }
// gets id of target album from address bar
  targetAlbumId() {
    return parseInt(this.props.targetProfilePath.match(/(\d+$)/)[0]);
  }

// gets artist using album id
  componentDidMount() {
    this.props.fetchUser(this.props.album.user_id);
    // essentially move this here.
    // this.props.fetchAlbum(this.targetAlbumId());
  }


  render() {
    debugger
    return(
    <div></div>
    );
  }
}

export default AlbumBooklet;
