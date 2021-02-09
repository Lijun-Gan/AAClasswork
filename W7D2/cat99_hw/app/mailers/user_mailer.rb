class UserMailer < ApplicationMailer
    default from: 'cats99@example.com'
    
    def welcome_email(user)
       @user = user
       @url = 'http://localhost:3000/session/new'
       mail(to: @user.username, subject:"welcom to 99 cats!")
    end
end
