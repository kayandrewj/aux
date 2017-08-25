# == Schema Information
#
# Table name: artist_profiles
#
#  id            :integer          not null, primary key
#  user_id       :integer          not null
#  band          :string           not null
#  bio           :text
#  header_img    :string
#  profile_color :string
#

class ArtistProfile < ApplicationRecord
  validates :user_id, :band, presence: true;


  belongs_to :user, inverse_of: :artist_profile

end
