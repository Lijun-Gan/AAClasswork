class ApplicationController < ActionController::Base
     skip_before_action :verify_authenticity_token
    helper_method :current_user, :logout!

    def current_user 
        return nil if session[:session_token].nil?
        @current_user ||= User.find_by(session_token: session[:session_token])
    end 


    def login_user!(user)
        session[:session_token] = user.reset_session_token! 
    end

    def logged_in?
        !!current_user
    end
    
    def logout!
        current_user.reset_session_token! if logged_in?
        session[:session_token] = nil
        @current_user = nil        
    end

end
