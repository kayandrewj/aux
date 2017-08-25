class AddImageColumnsToAlbums < ActiveRecord::Migration[5.1]
  def change
    add_attachment :albums, :artwork
  end
end
