class WelcomeController < ApplicationController
	def index
		@websites_best = Website.order(:likes).reverse_order.limit(4)
		@websites_last = Website.order(:created_at).reverse_order.limit(4)
		@websites_count = @websites_best.count
	end

	def all
		@websites_all = Website.order(:likes)
	end
	
	def author
		@websites_author = Website.order(:user_id)
	end
end
