export const fetchUser = (artistId) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${artistId}/`
  });
};
