class AddAlbumToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :album_id, :integer
  end
end
