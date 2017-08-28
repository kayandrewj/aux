export const fetchArtistAlbums = (artistId) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${artistId}/albums`
  });
};

export const fetchAlbum = (albumId) => {
  return $.ajax({
    method: "GET",
    url: `/api/albums/${albumId}`
  });
};
