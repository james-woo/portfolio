class User < ApplicationRecord
  before_save { self.username = username.downcase }

  validates :username, presence: true, length: {maximum: 255}, uniqueness: { case_sensitive: false }

  has_secure_password

  validates :password, presence: true, length: { minimum: 8 }

  def User.new_token
    SecureRandom.urlsafe_base64
  end
end
