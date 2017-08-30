import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class TrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      audio: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({ audio: file });
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
    formData.append("track[audio]", this.state.audio);
    this.props.createTrack(formData);
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return(
      <div className="track-form-box">
        <form onSubmit={this.handleSubmit} className="track-form">
          <label>Track Title
            <input onChange={this.handleChange('title')}/>
          </label>
          <label>Audio
            <input type="file" onChange={this.updateFile}/>
          </label>
          <button>Post</button>
          <img src={this.state.url}/>
        </form>
      </div>
    );
  }
}

export default withRouter(TrackForm);
