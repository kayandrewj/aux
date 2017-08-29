class Track < ApplicationRecord
  validates :title, :album_id, presence: true

  # has_attached_file :audio_file
  # validates_attachment_presence :audio_file
  # validates_attachment_content_type :audio_file, :content_type => [ 'audio/mp3','audio/mpeg']

  belongs_to :album

end
