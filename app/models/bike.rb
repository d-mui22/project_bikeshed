class Bike < ApplicationRecord
  validates :make, presence:true
  validates :model, presence:true
  validates :year, presence: true, numericality: true, length: {is: 4}
end
