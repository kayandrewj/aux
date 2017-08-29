export const createTrack = (track) => {
  return $.ajax({
    method: "POST",
    url: "/api/tracks",
    data: { track },
  });
};
