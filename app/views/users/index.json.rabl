collection @users

attributes :id, :age, :neighboorhood, :lives_in_noumea, :months_lived_in_noumea, :email, :enable_receive_emails

child :answers do
  attributes :id, :body

  child :question do
    attributes :id, :body, :question_number
  end
end
