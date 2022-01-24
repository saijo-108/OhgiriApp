class User < ApplicationRecord
  authenticates_with_sorcery!

  has_many :boards, dependent: :destroy

  validates :password, length: { minimum: 4 }, if: -> {new_record? || changes[:crypted_password]}
  validates :password, confirmation: true, if: -> { new_record? || changes[:crypted_password] }
  validates :password_confirmation, presence: true, if: -> { new_record? || changes[:crypted_password] }

  validates :email, uniqueness: true, presence: true
  validates :nick_name, presence: true, length: { maximum: 50 }
end
