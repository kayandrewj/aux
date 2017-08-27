# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  is_artist       :boolean          default(FALSE), not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "https://d30y9cdsu7xlg0.cloudfront.net/png/1046-200.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/


  has_one :artist_profile, inverse_of: :user
  has_many :albums

  after_initialize :ensure_session_token
  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = self.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end




end
