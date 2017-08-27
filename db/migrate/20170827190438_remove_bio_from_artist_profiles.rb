class RemoveBioFromArtistProfiles < ActiveRecord::Migration[5.1]
  def change
    remove_column :artist_profiles, :bio, :text
  end
end
