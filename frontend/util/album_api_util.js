export const fetchArtistAlbums = (artistId) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${artistId}/albums`
  });
};
