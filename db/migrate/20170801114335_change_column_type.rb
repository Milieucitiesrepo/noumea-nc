class ChangeColumnType < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :months_lived_in_noumea, :string
  end
end
