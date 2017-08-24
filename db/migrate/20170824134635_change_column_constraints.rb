class ChangeColumnConstraints < ActiveRecord::Migration[5.1]
  def change
    change_column_null :artists, :header_img, true
    change_column_null :artists, :profile_color, true
  end
end
