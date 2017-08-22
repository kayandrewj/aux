# Schema Information

## users

column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
username          | string    | not null, indexed, unique
email             | string    | not null, indexed, unique
password_digest   | string    | not null
session_token     | string    | not null, indexed, unique
artist            | boolean   | not null (flag, denotes ability to join with artist_info)

## artist_info
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
user_id       | integer   | not null (foreign key, references users), unique, indexed
album_id      | string    | not null (foreign key, references albums), unique, indexed
band_name     | string    | not null, indexed
bio           | text      | not null, foreign key (references users)
location_id   | integer   | foreign key (references notebooks), indexed
header_img    | string    |
profile_color | string    |

## albums
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
title       | string    | not null
track_id    | integer   | not null, foreign key (references tracks)
art_url     | string    |

## tracks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
album_id    | integer   | not null, foreign key (references albums),
title       | string    | not null
length      | string    | not null


## follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower    | integer   | not null, foreign key (references users), indexed
followee    | integer   | not null, foreign key (references users), indexed
