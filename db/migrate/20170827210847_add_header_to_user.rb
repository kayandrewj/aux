class AddHeaderToUser < ActiveRecord::Migration[5.1]
  def change
    add_attachment :users, :header
  end
end
