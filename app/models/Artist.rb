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
  validates_format_of :profile_color, :with => /^#(?:[0-9a-fA-F]{3}){1,2}$/i


  belongs_to :user

end
