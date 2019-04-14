# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_04_08_002720) do

  create_table "educations", force: :cascade do |t|
    t.datetime "start_time"
    t.datetime "end_time"
    t.integer "position_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "experiences", force: :cascade do |t|
    t.string "title"
    t.string "image"
    t.string "content"
    t.string "experienceable_type"
    t.integer "experienceable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["experienceable_type", "experienceable_id"], name: "index_experiences_on_experienceable_type_and_experienceable_id"
  end

  create_table "jobs", force: :cascade do |t|
    t.datetime "start_time"
    t.datetime "end_time"
    t.integer "position_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "projects", force: :cascade do |t|
    t.datetime "start_time"
    t.datetime "end_time"
    t.integer "position_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
