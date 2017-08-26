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

## artist
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
user_id       | integer   | not null (foreign key, references users), unique, indexed
band_name     | string    | not null, indexed
bio           | text      |
location_id   | integer   |
header        | aws media |
profile_color | string    |

## albums
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references artists), indexed
title       | string    | not null
artwork     | aws media |

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
