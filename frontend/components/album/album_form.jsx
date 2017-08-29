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
      (album) => this.match.params.history.push(`album/newTracks`)
    );
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
          <img src={this.state.url}/>
        </form>

      </div>
  );
  }
}

export default AlbumForm;
