class Review < ApplicationRecord
  belongs_to :user
  belongs_to :bike

  validates :user_id, presence: true
  validates :bike_id, presence: true
  validates :rating, presence: true, numericality: {only_integer: true, less_than_or_equal_to: 5, greater_than_or_equal_to: 1}
end
