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

ActiveRecord::Schema.define(version: 20170827190517) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albums", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "title", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "artwork_file_name"
    t.string "artwork_content_type"
    t.integer "artwork_file_size"
    t.datetime "artwork_updated_at"
    t.index ["title"], name: "index_albums_on_title"
    t.index ["user_id"], name: "index_albums_on_user_id"
  end

  create_table "artist_profiles", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "band", null: false
    t.string "profile_color"
    t.string "header_file_name"
    t.string "header_content_type"
    t.integer "header_file_size"
    t.datetime "header_updated_at"
    t.index ["band"], name: "index_artist_profiles_on_band"
    t.index ["user_id"], name: "index_artist_profiles_on_user_id", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.boolean "is_artist", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "avatar_file_name"
    t.string "avatar_content_type"
    t.integer "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.text "bio"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
