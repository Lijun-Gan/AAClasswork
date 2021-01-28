class House < ApplicationRecord
    validates :address, presence: true

    has_many(:people, {
        primary_key: :id, #house's id
        foreign_key: :house_id, #Person table
        class_name: :Person
    })
end 