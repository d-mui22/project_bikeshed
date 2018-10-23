class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body, :rating, :user_email, :created_at, :user_id

  def user_email
    "#{object.user.email}"
  end

  belongs_to :user
end
