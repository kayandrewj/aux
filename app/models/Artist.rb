# == Schema Information
#
# Table name: artists
#
#  id            :integer          not null, primary key
#  user_id       :string           not null
#  band          :string           not null
#  bio           :text
#  header_img    :string
#  profile_color :string
#

class Artist < ApplicationRecord
  validates :user_id, :band, presence: true;

  belongs_to :user

end
