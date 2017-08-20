```js
{
  entities: {
    users: {
      1: {
        id: 1,
        username: 'Guest',
        handle: '@guest'
        artist_follow_ids: [1, 3],
        comment_ids: [1, 2],
        artist: true
      },
      7: {
        id: 7,
        username: 'Gypsy_and_the_Cat',
        handle: '@gatc',
        artist: true,
        profile_header_url: "www.profileheader.com/43oVq",
        city: "Melbourne",
        artist_follow_ids: [1, 4, 6],
        follower_ids: [4, 8, 9],
        album_ids: [1, 2, 3, 4],
        comment_ids: [3, 4]
      }
    },
    albums: {
      1: {
        id : 1,
        art_url: "www.albumart.com/f73jf"
        title: "Virtual Islands",
        track_ids: [1],
        user_id: 7
      },
      2: {
        id : 2,
        art_url: "www.albumart.com/v63n1"
        title: "The Late Blue",
        track_ids: [3],
        user_id: 7
      },
    },
    tracks {
      1: {
        id : 1,
        title: "Bloom",
        album_ids: [2],
        length: ["4:12"]

      },
      2: {
        id : 2,
        title: "Inside Your Mind",
        album_ids: [1],
        length: ["4:45"]
      },
    }
  },
  ui: {
    displayArtist: {
      albums: [1, 2, 3] //array of album ids.
      displayAlbum: {
        tracks: [1, 2, 3] //array of track ids
      }
    }
    loading: true/false,
  },
  errors: {
    login: ["Incorrect username/password combination"],
    file_format: ["File format must be ____"]
  },
  session: {
    id: 1,
    username: 'Guest'
  }
}

```
