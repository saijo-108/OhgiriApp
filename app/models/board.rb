class Board < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy

  validates :title, presence: true, length: { in: 3..500 }
  validates :body, presence: true, length: { in: 3..500 }
end
