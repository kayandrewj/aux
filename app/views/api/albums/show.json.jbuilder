json.displayAlbum do
  json.(@album, :title, :artwork, :id)
  json.artwork @album.artwork.url(:medium)
  json.(@album.user.artist_profile, :band, :user_id, :header)
  json.header @album.user.artist_profile.header.url(:header)
end
