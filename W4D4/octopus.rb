def sliggish_octopus(fish)
    most =  []
    (0...fish.length).each do |i|
        (i...fish.length).each do |j|
            most = fish[i] if fish[i].length >= fish[j].length
        end
    end
    most
end 


def dominant_Octopus(fish)
    fish.sort_by(&:length)[-1]
end 



def clever_Octopus(fish)
    len = ""
    fish.each {|f| len = f if f.length > len.length }
    len
end 



# fish = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
# # => "fiiiissshhhhhh"

# p sliggish_octopus(fish)
# p dominant_Octopus(fish)
# p clever_Octopus(fish)



tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]

def slow_dance(dir, array)
    array.each.with_index {|ele,i| return i if ele == dir }
end 

def fast_dance(dir,array)
    array.index(dir)
end 

# p slow_dance("up", tiles_array) #0
# p slow_dance("right-down", tiles_array) #3

# new_tiles_data_structure = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]
# p fast_dance("up", new_tiles_data_structure) #0
# p fast_dance("right-down", new_tiles_data_structure) #3