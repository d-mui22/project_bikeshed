class Api::V1::ReviewsController < ApiController
  def show
    @bike = Bike.find(params['id'])
    @reviews = @bike.reviews

    render json: @reviews
  end

  def index
    @reviews = Review.all
    render json: @reviews
  end

  def create
    review = Review.new(review_params)
    if review.save
      render json: review
    else
      render json: review.errors.full_messages
    end
  end

  private
  def review_params
    params.require(:review).permit(:body, :rating, :user_id, :bike_id)
  end
end
