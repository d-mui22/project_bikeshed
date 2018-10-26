class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body, :rating, :user_email, :created_at, :user_id, :profile_photo

  def user_email
    "#{object.user.email}"
  end

  def profile_photo
    "#{object.user.profile_photo}"
  end
  belongs_to :user
end
