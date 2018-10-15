class CreateBikes < ActiveRecord::Migration[5.2]
  def change
    create_table :bikes do |t|
      t.integer :year, null:false
      t.string :make, null:false
      t.string :model, null:false
      t.string :code
      t.timestamps null:false
    end
  end
end
