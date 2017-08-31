formattedResults = {
  "ArtistProfile" => [],
  "Album" => [],
  "Track" => [],
}

@results.each do |result|
  formattedResults[result.searchable_type] << result.searchable
end

json.extract!(formattedResults, "ArtistProfile", "Album", "Track")
