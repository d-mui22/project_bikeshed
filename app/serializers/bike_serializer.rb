class BikeSerializer < ActiveModel::Serializer
  attributes :id, :year, :make, :model, :code, :user_id, :profile_photo, :created_at

  belongs_to :user
  has_many :reviews
end
