import React from 'react';
import { Link } from 'react-router-dom';

class AlbumForm extends React.Component {
  constructor(props) {
    super(props);

  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    debugger
    e.preventDefault();
    const album = Object.assign({}, { user_id: this.props.currentUser.id });
    this.props.createAlbum(album);
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    debugger
    return(
      <div className="album-form-box">
        <form onSubmit={this.handleSubmit} className="album-form">
          <label>Album Title
            <input onChange={this.handleChange('title')}/>
          </label>

          <label>Album Cover
            <input onChange={this.handleChange('artwork')}/>
          </label>

          <button>Next</button>
        </form>

      </div>
  );
  }
}

export default AlbumForm;