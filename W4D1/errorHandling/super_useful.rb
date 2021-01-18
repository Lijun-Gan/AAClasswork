# PHASE 2
def convert_to_int(str)
  raise "Not a digit number" unless str.chars.all?{|c| "0123456789".include?(str)}
  Integer(str)
end

# PHASE 3
FRUITS = ["apple", "banana", "orange"]

# def reaction(maybe_fruit)
#   if FRUITS.include? maybe_fruit
#     puts "OMG, thanks so much for the #{maybe_fruit}!"
#   else 
#     raise StandardError 
#   end 
# end

# def feed_me_a_fruit
#   puts "Hello, I am a friendly monster. :)"

#   puts "Feed me a fruit! (Enter the name of a fruit:)"
#   maybe_fruit = gets.chomp
#   reaction(maybe_fruit)
# end 

def reaction(maybe_fruit)
  if FRUITS.include? maybe_fruit
    puts "OMG, thanks so much for the #{maybe_fruit}!"
  else 
    raise "Wrong Fruit"   
  end 
end

def feed_me_a_fruit
  puts "Hello, I am a friendly monster. :)"
  begin
    puts "Feed me a fruit! (Enter the name of a fruit:)"
    maybe_fruit = gets.chomp
    reaction(maybe_fruit)
  rescue =>e
    if maybe_fruit.downcase == "coffee"
      puts "Not my fruit. Give you another try because I love coffee! "
      retry    
    else 
      raise "Wrong Fruit" 
    end 
  end 
end  

# PHASE 4
class BestFriend
  def initialize(name, yrs_known, fav_pastime)
    raise "Friendship is less than 5 years." if yrs_known < 5
    raise "Empty name" if name.length <= 0
    raise "Empty favorite pastime" if fav_pastime.length <= 0
    
    @name = name

    @yrs_known = yrs_known
    @fav_pastime = fav_pastime
  end

  def talk_about_friendship
    puts "Wowza, we've been friends for #{@yrs_known}. Let's be friends for another #{1000 * @yrs_known}."
  end

  def do_friendstuff
    puts "Hey bestie, let's go #{@fav_pastime}. Wait, why don't you choose. 😄"
  end

  def give_friendship_bracelet
    puts "Hey bestie, I made you a friendship bracelet. It says my name, #{@name}, so you never forget me." 
  end
end



