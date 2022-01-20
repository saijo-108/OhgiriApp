10.times do
    User.create(

        email: Faker::Internet.email,
        password: 'test',
        password_confirmation: 'test'
    )
  end
  
  20.times do |index|
    Board.create(
        user: User.offset(rand(User.count)).first,
        title: "タイトル#{index}",
        body: "本文#{index}"
    )
  end