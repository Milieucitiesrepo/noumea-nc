class CreateAnswers < ActiveRecord::Migration[5.1]
  def change
    create_table :answers do |t|
      t.string :body
      t.belongs_to :question
      t.belongs_to :user

      t.timestamps
    end
  end
end
