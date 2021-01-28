class Person < ApplicationRecord
    validates :name, presence: true
    validates :house_id, presence: true

    belongs_to(:house, {
        primary_key: :id #house's id
        foreign_key: :house_id, #on the other table
        class_name: :House
    })
end