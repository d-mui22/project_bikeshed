class AddVoteColReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :votes, :integer, :default => 0
  end
end
