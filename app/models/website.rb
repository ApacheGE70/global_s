class Website < ActiveRecord::Base
  validates :website_name, presence: true
	belongs_to :user
	has_many :pages
end
