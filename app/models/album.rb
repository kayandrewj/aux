class Album < ApplicationRecord
  include PgSearch
  multisearchable against: %i(title user)

  validates :user_id, :title, presence: true
  has_attached_file :artwork, styles: { medium: "352x352>", thumb: "100x100>" }, default_url: "https://s.discogs.com/images/default-label.png"
  validates_attachment_content_type :artwork, content_type: /\Aimage\/.*\Z/

  belongs_to :user
  has_many :tracks, dependent: :destroy
end
