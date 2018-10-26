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
    if Rails.env.test?
      review = Review.new(rating: params[:rating], user_id: params[:user_id], bike_id: params[:bike_id], email: params[:email])
    else
      review = Review.new(review_params)
    end

    if review.save
      render json: review
    else
      # flash[:notice] = review.errors.full_messages.join(', ')
      # binding.pry
      render json: review.errors.full_messages
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    render json: {review_id: @review.id}
  end

  private

  def review_params
    params.require(:review).permit(:body, :rating, :user_id, :bike_id, :email)
  end
end
