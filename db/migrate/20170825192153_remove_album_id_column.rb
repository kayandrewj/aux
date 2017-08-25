class RemoveAlbumIdColumn < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :album_id, :integer
  end
end
