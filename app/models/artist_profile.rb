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
  validates_format_of :profile_color, :with => /\A[A-Za-z\d]([-\w]{,498}[A-Za-z\d])?\Z/i, allow_nil: true;


  belongs_to :user, inverse_of: :artist_profile

end
