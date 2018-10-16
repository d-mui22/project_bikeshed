class AddColumnToReviewsAgain < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :rating, :integer, null: false
  end
end
