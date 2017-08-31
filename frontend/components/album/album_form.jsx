import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class AlbumForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      artwork: null,
      url: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({ artwork: file, url: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      this.setState({ artwork: null, url: ""});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("album[title]", this.state.title);
    formData.append("album[artwork]", this.state.artwork);
    this.props.createAlbum(formData).then(
      (action) => {
        return this.props.history.push(`/album/${action.album.displayAlbum.id}/newTracks`);
      }
    );
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return(
      <div className="album-form-box">
        <form onSubmit={this.handleSubmit} className="album-form">
          <label className="album-form-art">Album Cover
            <input className="album-input-art" type="file" onChange={this.updateFile}/>
          </label>
          <label className="album-form-title">Album Title
            <input className="album-input-title" onChange={this.handleChange('title')}/>
          </label>
          <button>Next</button>
          <img src={this.state.url}/>
        </form>

      </div>
  );
  }
}

export default AlbumForm;
