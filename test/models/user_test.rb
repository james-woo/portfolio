require 'test_helper'

class UserTest < ActiveSupport::TestCase
  def setup
    @user = User.new( 
      username: "foo",
      password: "bar"
    )
  end

  test 'create user' do
    @user.save
    assert_empty @user.errors.full_messages
  end
end
