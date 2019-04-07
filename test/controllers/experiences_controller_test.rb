require 'test_helper'

class ExperiencesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @experience = experiences(:one)
  end

  test "should create experience" do
    assert_difference('Experience.count') do
      post experiences_url, params: { experience: { content: @experience.content } }, as: :json
    end

    assert_response 201
  end

  test "should update experience" do
    patch experience_url(@experience), params: { experience: { content: @experience.content } }, as: :json
    assert_response 200
  end

  test "should destroy experience" do
    assert_difference('Experience.count', -1) do
      delete experience_url(@experience), as: :json
    end

    assert_response 204
  end
end
