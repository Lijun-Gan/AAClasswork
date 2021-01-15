#exercise 1
class Stack

    def initialize 
        @stack =[]
    end 

    def push(el)
        @stack.push(el)
    end 

    def pop
        @stack.pop
    end 

    def peek
        @stack.first
    end 

end 

stack1 = Stack.new
stack1.push(1)
stack1.push(2)
stack1.push(3)
p stack1
stack1.pop
p stack1
p stack1.peek


#Exercise 2

class Queue 

    def initialize
        @queue = []
    end 

    def enqueue(el)
        @queue.push(el)
    end 

    def dequeue
        @queue.shift
    end 

    def peek
        @queue.first
    end 
end 


queue1 = Queue.new
queue1.enqueue(1)
queue1.enqueue(2)
queue1.enqueue(3)
p queue1
queue1.dequeue
p queue1
p queue1.peek


#exercise 3
class Map
    def initialize
        @arr = []
    end 

    def set(key,value)
        uniq_key =  (0...@arr.length).select {|i| @arr[i].first == key }
        if uniq_key.empty?
            @arr << [key,value]
        else 
            @arr[uniq_key[0]][1] = value
        end             
    end 

    def get(key)
        @arr.each{|sub| return sub if sub.first == key}
        "key is not exit"
    end 

    def delete(key)
        idx = (0...@arr.length).select {|i| @arr[i][0] == key }
        if idx.empty?
            puts "key is not exit"
        else 
            @arr.delete_at(idx.first)
            puts "delete successfully"
        end 
    end

    def show
        @arr
    end 
end 

map = Map.new()
map.set("good","morning")
map.set("hi","afternoon")
map.set("hi","girl")
map.set("hello","night")

p map.show
p map.get("yes")
p map.get("hello")
map.delete("good")
p map.show







