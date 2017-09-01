import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class TrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      audio_file: "",
      album_id: this.props.match.params.albumId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({ audio_file: file });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      this.setState({ file: null});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("track[title]", this.state.title);
    formData.append("track[audio_file]", this.state.audio_file);
    this.props.createTrack(formData, this.props.match.params.albumId);
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return(
      <div className="track-form-box">
        <form onSubmit={this.handleSubmit} className="track-form">
          <label>Track Title
            <input onChange={this.handleChange('title')} className="track-title-input"/>
          </label>
          <label>Audio
            <input type="file" onChange={this.updateFile} className="file-upload-input"/>
          </label>
          <button>Post</button>
          <img src={this.state.url}/>
        </form>
      </div>
    );
  }
}

export default withRouter(TrackForm);
