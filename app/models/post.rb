class Post < ApplicationRecord
  has_many :comments

  #overrides as_json rails method so that post will include comments
  def as_json(options = {})
    super(options.merge(include: :comments))
  end 
end
