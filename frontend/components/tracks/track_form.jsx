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
    // fix this it's for album make it for track
    formData.append("track[]", this.state.artwork);
    this.props.createAlbum(formData).then(
      (album) => this.match.params.history.push(`album/newTracks`)
    );
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {

  }
}
