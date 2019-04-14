class Project < ApplicationRecord
  before_create :set_position
  has_one :experience, as: :experienceable, dependent: :destroy

  def set_position
    last_position_number = Project.maximum(:position_number)
    self.position_number = last_position_number.to_i + 1
  end
end
