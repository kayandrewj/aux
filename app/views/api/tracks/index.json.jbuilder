@tracks.each do |track|
  json.set!(track.id) do
    json.extract!(track, :id, :album_id, :title, :audio_file)
  end
end
