FactoryBot.define do
  factory :user do
    password = Faker::Internet.password(min_length: 8)
    # name {Faker::Name.last_name}
    name {"name"}
    # email {Faker::Internet.free_email}
    email {"hoge@hoge.com"}
    password {password}
    password_confirmation {password}
  end
end