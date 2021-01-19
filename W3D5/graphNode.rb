require "set"

class GraphNode
    attr_accessor :val, :neighbors

    def initialize(val)
        self.val = val
        self.neighbors = []
    end 

    # def add_neighbor(node)
    #     self.neighbors << node
    # end
    
    def inspect
        val
    end 
end 

def bfs(starting_node, target_value)
    visited = Set.new
    visited.add(starting_node)
    nodes = starting_node.neighbors.dup
    until nodes.empty?
        # p [nodes,visited]
        node = nodes.shift
        # puts node.val
        return node.val if node.val == target_value
        visited.add(node)
        # p [nodes ,visited]
        node.neighbors.each do |neighbor|
            nodes << neighbor unless (visited.include?(neighbor))
        end  
    end 
    nil 
end

# def bfs(starting_node, target_value)
#     visited = Set.new
#     nodes = [starting_node]
#     until nodes.empty?
#         node = nodes.shift
#         unless visited.include?(node)
#             return node.val if node.val == target_value
#             visited.add(node)
#             nodes += node.neighbors
#         end 
#     end 
#     nil
# end 

def dfs(node, target, visited = Set.new())

    return node.val if node.val == target
    visited.add(node.val) 

    node.neighbors.each do |neighbor|
        next if (visited.include?(neighbor.val))
        found = dfs(neighbor,target,visited)
        return found unless found.nil?
    end 
    nil
end

a = GraphNode.new('a')
b = GraphNode.new('b')
c = GraphNode.new('c')
d = GraphNode.new('d')
e = GraphNode.new('e')
f = GraphNode.new('f')
a.neighbors = [b, c, e]
c.neighbors = [b, d]
e.neighbors = [a]
f.neighbors = [e]

# puts
# p "bfs(a, 'b') => #{bfs(a, "b")}"
# puts
# p "bfs(a, 'f') => #{bfs(a, "f")}"
# puts
# p "bfs(a, 'b') => #{bfs(a, "b")}"
# p "bfs(a, 'd') => #{bfs(a, "d")}"


puts
p "dfs(a, 'b') => #{dfs(a, "b")}"
puts
p "dfs(a, 'f') => #{dfs(a, "f")}"
puts
p "dfs(a, 'b') => #{dfs(a, "b")}"
p "dfs(a, 'd') => #{dfs(a, "d")}"





