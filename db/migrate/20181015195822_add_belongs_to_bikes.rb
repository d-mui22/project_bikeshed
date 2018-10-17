class AddBelongsToBikes < ActiveRecord::Migration[5.2]
  def change
    add_reference :bikes, :user, index: true
  end
end
