```js
{
  entities: {
    users: { //basic user information stored for all users
      1: {
        id: 1,
        username: 'LionelTowers',
        email: 'gypsyandthecat@gmail.com'
        password_digest: "v57*oqeibc47yqoei7tyv|qoeby7ao_slrvit7aycirvta"
        session_token: null,
        artist_follow_ids: [1, 3],
        comment_ids: [1, 2],
        profile_header: "www.header.com/6f7dA"
        artist: true, //boolean to determine artist status; if true, user has a value in the following table.
      },
    },
    artist_profile: {
      2: {
        //joining only users who are artists with this additional information
        //allows cleaner state and conditional validation of certain columns, i.e.
        //requiring artists to have a band name and profile page.
        user_id: 1,
        albums: [1, 2]
        band_name: "Gypsy and the Cat"
        bio: "Gypsy & The Cat is an indie/dream pop duo formed by former Melbourne DJs Xavier Bacash and Lionel Towers.",
        location_id: [1]
        profile_color: "#8af3ba",
      }
    },
    albums: {
      1: {
        id : 1,
        art_url: "www.albumart.com/f73jf"
        title: "Virtual Islands",
        track_ids: [1],
        user_id: 7,
      },
      2: {
        id : 2,
        art_url: "www.albumart.com/v63n1"
        title: "The Late Blue",
        track_ids: [3],
        user_id: 7,
      },
    },
    tracks {
      1: {
        id : 1,
        title: "Bloom",
        album_ids: [2],
        length: ["4:12"],

      },
      2: {
        id : 2,
        title: "Inside Your Mind",
        album_ids: [1],
        length: ["4:45"],
      },
    },
  },
  ui: {
    displayArtist: {
      albums: [1, 2, 3], //array of album ids.
      displayAlbum: {
        tracks: [1, 2, 3], //array of track ids
      },
    },
    loading: true/false,
  },
  errors: {
    login: ["Incorrect username/password combination"],
    file_format: ["File format must be ____"],
  },
  session: {
    id: 1,
    username: 'Guest',
  },
}

```
