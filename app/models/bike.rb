class Bike < ApplicationRecord
  validates :make, presence:true
  validates :model, presence:true
  validates :year, presence: true, numericality: true, length: {is: 4}

  belongs_to :user
  has_many :reviews
end
