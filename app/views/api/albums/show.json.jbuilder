json.displayAlbum do
  json.(@album, :title, :artwork)
  json.(@album.user.artist_profile, :band, :user_id, :header)
end
