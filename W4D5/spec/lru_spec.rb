require "lru"

describe LRUCache do 
    subject(:lrucache) {LRUCache.new(4) }

    describe '#initialize' do 
        it 'should accept an argument (size)' do
            lrucache
        end 

        it "should set the instance variable @size" do 
            expect(lrucache.instance_variable_get(:@size)).to eq(4)
        end 
        
        it "should set the instance variable @cache to empty array" do
            expect(lrucache.instance_variable_get(:@cache)).to eq([])
        end  
    end 

    describe "#add" do 
        it "should accept an element" do 
            lrucache.add("I walk the line")
            lrucache.add(5)
            lrucache.add([1,2,3])
            lrucache.add(-5)
            lrucache.add({a: 1, b: 2, c: 3})
        end 

        context "when element is already in @cache"
            it "it should get the index of the element" do 
                expect(@cache.index(ele)).to eq(2)
            end 
        end 
    end 

    
    describe "#count" do 
        it "should return the number of @cache" do 
            lrucache.add("I walk the line")
            lrucache.add(5)
            expect(lrucache.count).to eq(2)
        end 
    end


    describe "#show"
        it "should prints reversed @cache" do 
            expect(@cache.index(ele)).to eq(2)
        end 
    end 

end 