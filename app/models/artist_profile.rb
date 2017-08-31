# == Schema Information
#
# Table name: artist_profiles
#
#  id                  :integer          not null, primary key
#  user_id             :integer          not null
#  band                :string           not null
#  profile_color       :string
#  header_file_name    :string
#  header_content_type :string
#  header_file_size    :integer
#  header_updated_at   :datetime
#

class ArtistProfile < ApplicationRecord
  include PgSearch
  multisearchable against: %i(band user)

  validates :user, :band, presence: true

  belongs_to :user

  has_attached_file :header, styles: { medium: "300x300>", thumb: "100x100>", header:"180x1000>" }, default_url: "http://i.imgur.com/t2pGWHv.jpg"
  validates_attachment_content_type :header, content_type: /\Aimage\/.*\Z/

end
