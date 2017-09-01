export const fetchFeaturedAlbums = () => {
  return $.ajax({
    method: "GET",
    url: `/api/albums`
  });
};
