require 'rails_helper'

RSpec.describe User, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
  subject(:user) { User.new(email: 'aa@gmail', password: '1111') }

  describe 'validations' do
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_length_of(:password).is_at_least(3) }
    
    it "creates a password_digest when password is given" do 
      
      expect(user.password_digest).to_not be_nil
    end 

    it "creates a session_token before validation" do 
      user.valid?
      expect(user.session_token).to_not be_nil
    end 
  end 
  
  describe 'is_password?' do
    it "verifies a valid password" do
      expect(user.is_password?("1111")).to be true
    end

    it "verifies an invalid password" do
      expect(user.is_password?("2222")).to be false
    end
  end
  
  describe 'reset_session_token' do
    it "resets the session token on the user" do
      user.valid?
      old_session_token = user.session_token
      user.reset_session_token!
      expect(user.session_token).to_not eq(old_session_token)
    end

    it "returns the new session token" do
      expect(user.reset_session_token!).to eq(user.session_token)
    end
  end

  describe 'class methods' do
    describe '::find_by_credentials' do
      before { user.save! }
      it "returns user given good credentials" do
        expect(User.find_by_credentials('aa@gmail','1111')).to eq(user)
      end
  
      it "returns nil given bad credentials" do
        expect(User.find_by_credentials('aa@gmail','2222')).to eq(nil)
      end
    end
  end 

end
