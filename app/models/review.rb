class Review < ApplicationRecord
  belongs_to :user
  belongs_to :bike

  validates :user_id, presence: true
  validates :bike_id, presence: true
end
