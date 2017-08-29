export const createTrack = (track) => {
  return $.ajax({
    method: "POST",
    url: "",
    data: { track },
  });
};
