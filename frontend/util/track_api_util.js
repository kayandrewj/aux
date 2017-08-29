export const createTrack = (track) => {
  return $.ajax({
    method: "POST",
    url: `/api/albums/${track.album_id}/tracks`,
    data: { track },
  });
};
