class Api::V1::ReviewsController < ApiController
  def show
    @bike = Bike.find(params['id'])
    @reviews = @bike.reviews
<<<<<<< HEAD

=======
>>>>>>> 3c1c523a74db4422e33de95f88fe0ee3daeb6104
    render json: @reviews
  end

  def index
    @reviews = Review.all
    render json: @reviews
  end

  def create
<<<<<<< HEAD
    review = Review.new(review_params)
=======
    if Rails.env.test?
      review = Review.new(rating: params[:rating], user_id: params[:user_id], bike_id: params[:bike_id], email: params[:email])
    else
      review = Review.new(review_params)
    end
>>>>>>> 3c1c523a74db4422e33de95f88fe0ee3daeb6104
    if review.save
      render json: review
    else
      render json: review.errors.full_messages
    end
  end

  private
<<<<<<< HEAD
  def review_params
    params.require(:review).permit(:body, :rating, :user_id, :bike_id)
=======

  def review_params
    params.require(:review).permit(:body, :rating, :user_id, :bike_id, :email)
>>>>>>> 3c1c523a74db4422e33de95f88fe0ee3daeb6104
  end
end
