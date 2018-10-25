class AddBikePhoto < ActiveRecord::Migration[5.2]
  def change
    add_column :bikes, :profile_photo, :string
  end
end
