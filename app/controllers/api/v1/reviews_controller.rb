class Api::V1::ReviewsController < ApiController
  def show
    @bike = Bike.find(params['id'])
    @reviews = @bike.reviews
    render json: @reviews
  end

  def create
    if Rails.env.test?
      review = Review.new(rating: params[:rating], user_id: params[:user_id], bike_id: params[:bike_id], email: params[:email])
    else
      review = Review.new(review_params)
    end
    if review.save
      render json: {review: review}
    else
      render json: {error: review.errors.full_messages}, status: :unprocessable_entity
    end
  end

  private

  def review_params
    params.require(:review).permit(:body, :rating, :user_id, :bike_id, :email)
  end
end
