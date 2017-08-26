class RemoveHeaderImgFromArtistProfiles < ActiveRecord::Migration[5.1]
  def change
    remove_column :artist_profiles, :header_img, :string
  end
end
