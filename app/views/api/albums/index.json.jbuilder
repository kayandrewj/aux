# json.set!('artistAlbums') do
  @albums.each do |album|
    json.set!(album.id) do
      json.extract!(album, :id, :title, :artwork)
    end
  end
# end
