class CreateArtists < ActiveRecord::Migration[5.1]
  def change
    create_table :artists do |t|
      t.string :user_id, null: false
      t.string :band, null: false
      t.text :bio
      t.string :header_img, null: false
      t.string :profile_color, null: false
    end
    add_index :artists, :user_id, unique: true
    add_index :artists, :band


  end
end
