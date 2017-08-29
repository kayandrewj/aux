import React from 'react';
import { Link } from 'react-router-dom';

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

    fileReader.onloadend = function () {
      this.setState({ artwork: file, url: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataUrl(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const album = Object.assign({}, this.state);
    this.props.createAlbum(album);
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return(
      <div className="album-form-box">
        <form onSubmit={this.handleSubmit} className="album-form">
          <label>Album Title
            <input onChange={this.handleChange('title')}/>
          </label>
          <label>Album Cover
            <input type="file" onChange={this.updateFile}/>
          </label>
          <button>Next</button>
          <img src={this.state.artwork}/>
        </form>

      </div>
  );
  }
}

export default AlbumForm;
