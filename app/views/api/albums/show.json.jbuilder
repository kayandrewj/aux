json.displayAlbum do
  json.(@album, :title, :artwork)
  json.artwork @album.artwork.url(:medium)
  json.(@album.user.artist_profile, :band, :user_id, :header)
end
