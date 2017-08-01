class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.integer :age
      t.string :neighboorhood
      t.boolean :lives_in_noumea, default: false
      t.integer :months_lived_in_noumea
      t.string :email
      t.boolean :enable_receive_emails, default: false

      t.timestamps
    end
  end
end
