class BikeSerializer < ActiveModel::Serializer
  attributes :id, :year, :make, :model, :code, :user_id, :created_at, :profile_photo

  belongs_to :user
  has_many :reviews
end
