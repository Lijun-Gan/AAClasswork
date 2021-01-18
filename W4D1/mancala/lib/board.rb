class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @name1 =  name1
    @name2 =  name2
    @cups = Array.new(14){Array.new}
    place_stones
  
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    @cups.each.with_index do |sub,i|
      4.times{sub << :stone} unless [6,13].include?(i)
    end 
  end

  def valid_move?(start_pos)
    raise "Invalid starting cup" if start_pos > 12 || start_pos < 0 
    raise "Starting cup is empty" if @cups[start_pos].empty? 

  end

  def make_move(start_pos, current_player_name)

     moving_stones = @cups[start_pos]
     @cups[start_pos] = []
 
     cup_idx = start_pos
     until moving_stones.empty?
       cup_idx += 1
       cup_idx = 0 if cup_idx > 13
       if cup_idx == 6
         @cups[6] << moving_stones.pop if current_player_name == @name1
       elsif cup_idx == 13
         @cups[13] << moving_stones.pop if current_player_name == @name2
       else
         @cups[cup_idx] << moving_stones.pop
       end
     end
 
     render
     next_turn(cup_idx)

  end

  def next_turn(ending_cup_idx)
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
    if ending_cup_idx == 6 || ending_cup_idx == 13
      :prompt
    elsif @cups[ending_cup_idx].count == 1
      :switch
    else
      ending_cup_idx
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    @cups[0..5].all?{|cup| cup.empty? } || @cups[7..12].all?{|cup| cup.empty?}
  end

  def winner
    name1_stones = @cups[6].count
    name2_stones = @cups[13].count
    return :draw if name1_stones == name2_stones 
    name1_stones > name2_stones ? @name1 : @names2 
  end
end
