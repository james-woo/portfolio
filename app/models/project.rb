class Project < ApplicationRecord
  has_one :experience, as: :experienceable, dependent: :destroy
end
