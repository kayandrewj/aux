class SemanticizeArtistProfiles < ActiveRecord::Migration[5.1]
  def change
    rename_table :artists, :artist_profiles
  end
end
