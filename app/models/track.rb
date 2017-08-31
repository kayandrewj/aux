class Track < ApplicationRecord
  include PgSearch
  multisearchable against: %i(title album)

  validates :title, :album_id, presence: true

  belongs_to :album

  has_attached_file :audio_file
  validates_attachment_presence :audio_file
  validates_attachment_content_type :audio_file, :content_type => [ 'audio/mp3','audio/mpeg']


end
