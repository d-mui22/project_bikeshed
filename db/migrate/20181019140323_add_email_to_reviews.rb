class AddEmailToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :email, :string, null:false
  end
end
