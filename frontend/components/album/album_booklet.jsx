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
    if (this.props.album) {
      return parseInt(this.props.targetProfilePath.match(/(\d+$)/)[0]);
    }
  }
// gets album using id
  componentWillMount() {
    this.props.fetchAlbum(this.targetAlbumId());
  }
// gets artist using album id
  componentDidMount() {
    fetchUser(this.props.album.user_id);
  }


  render() {
    debugger
    return(
    <div></div>
    );
  }
}

export default AlbumBooklet;
