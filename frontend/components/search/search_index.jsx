import React from 'react';
import SearchIndexArtist from './search_index_artist';
import SearchIndexAlbum from './search_index_album';
import SearchIndexTrack from './search_index_track';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let error;
    let artists;
    let albums;
    let tracks;
    if (!this.props.artists && !this.props.albums && !this.props.tracks) {
      error = <p>looks like there's nothing here...</p>
    }
    if (this.props.artists && this.props.artists.length > 0) {
      artists = this.props.artists.map(artist => {
        return <SearchIndexArtist
          artist={artist}
          key={ artist.id }
        />;
    });
    }

    if (this.props.albums && this.props.albums.length > 0) {
      albums = this.props.albums.map(album => {
        return <SearchIndexAlbum
          album={album}
          key={ album.id }
        />;
    });
    }

    if (this.props.tracks && this.props.tracks.length > 0) {
      tracks = this.props.tracks.map(album => {
        return <SearchIndexTrack
          track={track}
          key={ track.id }
        />;
    });
    }

    return (
      <div className="search-results">
        { artists }
        { albums }
        { tracks }
      </div>
    );
  }
}

export default SearchIndex;
