class ChangeColumnName < ActiveRecord::Migration[5.1]
  def change
    rename_column :users, :artist, :is_artist
  end
end
