export const createTrack = (track) => {
  return $.ajax({
    method: "POST",
    url: `/api/albums/${track.album_id}/tracks`,
    data: { track },
  });
};

export const fetchAlbumTracks = (albumId) => {
  return $.ajax({
    method: "GET",
    url: `api/albums/${albumId}/tracks`
  });
};
