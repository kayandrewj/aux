@albums.each do |album|
  json.set!(album.id) do
    json.extract!(bench, :id, :title, :artwork)
  end
end
