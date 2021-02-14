class Toy < ApplicationRecord
    validates :name, :toyable_id,:toyable_type, presence:true, uniqueness:true
    belongs_to :toyable, polymorphic: true
    validates :name, uniqueness: { scope: :toyable_id}

end
