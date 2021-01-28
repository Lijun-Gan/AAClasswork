class AddHouseIdToPeople < ActiveRecord::Migration[5.2]
  def change
    add_column :people, :house_id, :int, null: false
  end
end
