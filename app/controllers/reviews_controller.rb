class ReviewsController < ApplicationController
  def edit
    @review = Review.find(params[:id])
  end
  def update
    @review = Review.find(params[:id])
    @review.update(review_params)
    redirect_to bike_path(@review.bike)
  end
  private

  def review_params
    @review = Review.find(params[:id])
    @bike = @review.bike
    params.require(:review).permit(:body, :rating).merge(user_id: current_user.id, bike_id: @bike.id)
  end
end
