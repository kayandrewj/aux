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

export const createAlbum = (album) => {
  return $.ajax({
    method: "POST",
    url: `/api/users/${album.user_id}/albums`,
    data: { album },
  });
};
