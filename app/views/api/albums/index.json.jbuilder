json.set!("features") do
  @albums.each do |album|
    json.set!(album.id) do
      json.(album, :id, :title, :artwork)
      json.(album.user.artist_profile, :band)
      json.(album.user, :header, :bio)
    end
  end
end
