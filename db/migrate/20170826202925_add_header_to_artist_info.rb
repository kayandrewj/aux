class AddHeaderToArtistInfo < ActiveRecord::Migration[5.1]
  def change
    add_attachment :artist_profiles, :header
  end
end
