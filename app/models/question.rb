class Question < ApplicationRecord
  default_scope { order(question_number: :asc) }

  has_many :answers, inverse_of: :question
  validates :question_number,
    presence: { message: 'Question number is required.' },
    uniqueness: { message: 'Question number must be unique.' }
end
