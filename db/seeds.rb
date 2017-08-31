# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

p "destroying all users..."
User.destroy_all
p "destroying all artist profiles..."
ArtistProfile.destroy_all
p "destroying all albums..."
Album.destroy_all
p "destroying all tracks..."
Track.destroy_all


ARTISTS = [
  "Arkivet",
  "Azymandias",
  "Bulldozer Preachers",
  "Deafheaven",
  "Fracture",
  "Fried Egg",
  "Hands Up",
  "Infinity Mirror",
  "Kodachrome",
  "LIFE ARCTIC",
  "LORDE",
  "Night Rider",
  "The Trotskys",
  "psuedocereal",
  "seiko",
  "Ship of Theseus",
  "The Belles of Sausalito",
  "The G-Men",
  "The Moneychangers",
  "The Once Prouds",
  "The War on Drugs",
  "TOWER",
  "Unacceptable Use",
  "Vincent Vinyl",
  "vladimir",
  "Waffle House",
  "Warp Drive"
]

p "creating new artists..."
ARTISTS.each do |artist|
  handle = artist.gsub(/\s+/, '').downcase
  User.create!(
    username: handle,
    email: "#{handle}@demo.com",
    password: "password",
    is_artist: true,
    bio: "#{artist} is an art form and cultural activity whose medium is sound organized in time. Different styles of #{artist} omit some of these elements. The name derives from Greek.",
    artist_profile_attributes: {band: artist}
  )
end

p "creating new albums..."
all_albums = []

all_albums << Album.create!(
title: "The Benefits of Doubting",
user_id: User.find_by(username: "arkivet").id,
artwork: "https://s3.us-east-2.amazonaws.com/aux-io-dev/albums/artworks/000/000/seed_artwork/arkivet-thebenefitsofdoubting.png"
)

all_albums << Album.create!(
  title: "I BEEN WAITING",
  user_id: User.find_by(username: "azymandias").id,
  artwork: "https://s3.us-east-2.amazonaws.com/aux-io-dev/albums/artworks/000/000/seed_artwork/azymandias-ibeenwaiting.jpg"
)

all_albums << Album.create!(
  title: "Float On",
  user_id: User.find_by(username: "bulldozerpreachers").id,
  artwork: "https://s3.us-east-2.amazonaws.com/aux-io-dev/albums/artworks/000/000/seed_artwork/bulldozerpreachers-floaton.png"
)

all_albums << Album.create!(
  title: "why me?",
  user_id: User.find_by(username: "fracture").id,
  artwork: "https://s3.us-east-2.amazonaws.com/aux-io-dev/albums/artworks/000/000/seed_artwork/arkivet-thebenefitsofdoubting.png"
)

all_albums << Album.create!(
  title: "I'm in Love",
  user_id: User.find_by(username: "friedegg").id,
  artwork: "https://s3.us-east-2.amazonaws.com/aux-io-dev/albums/artworks/000/000/seed_artwork/friedegg-iminlove.png"
)

all_albums << Album.create!(
  title: "How do I delete this",
  user_id: User.find_by(username: "handsup").id,
  artwork: "https://s3.us-east-2.amazonaws.com/aux-io-dev/albums/artworks/000/000/seed_artwork/handsup-howdoideletethis.jpg"
)

all_albums << Album.create!(
  title: "Infinity Mirror",
  user_id: User.find_by(username: "infinitymirror").id,
  artwork: "https://s3.us-east-2.amazonaws.com/aux-io-dev/albums/artworks/000/000/seed_artwork/infinitymirror-infinitymirror.jpg"
)

all_albums << Album.create!(
  title: "Manhattan Sunset",
  user_id: User.find_by(username: "infinitymirror").id,
  artwork: "https://s3.us-east-2.amazonaws.com/aux-io-dev/albums/artworks/000/000/seed_artwork/infinitymirror-manhattansunset.jpg"
)

all_albums << Album.create!(
  title: "KAYAK",
  user_id: User.find_by(username: "kodachrome").id,
  artwork: "https://s3.us-east-2.amazonaws.com/aux-io-dev/albums/artworks/000/000/seed_artwork/kodachrome-kayak.jpg"
)

all_albums << Album.create!(
  title: "noise",
  user_id: User.find_by(username: "lifearctic").id,
  artwork: "https://s3.us-east-2.amazonaws.com/aux-io-dev/albums/artworks/000/000/seed_artwork/lifearctic-noise.png"
)

all_albums << Album.create!(
  title: "Armored Woman",
  user_id: User.find_by(username: "lorde").id,
  artwork: "https://s3.us-east-2.amazonaws.com/aux-io-dev/albums/artworks/000/000/seed_artwork/lorde-armoredwoman.jpg"
)

all_albums << Album.create!(
  title: "You Said You Loved Me",
  user_id: User.find_by(username: "nightrider").id,
  artwork: "https://s3.us-east-2.amazonaws.com/aux-io-dev/albums/artworks/000/000/seed_artwork/nightrider-yousaidyoulovedme.jpg"
)

all_albums << Album.create!(
  title: "Okay, good.",
  user_id: User.find_by(username: "thetrotskys").id,
  artwork: "https://s3.us-east-2.amazonaws.com/aux-io-dev/albums/artworks/000/000/seed_artwork/okaygood-thetrotskys.jpg"
)

all_albums << Album.create!(
  title: "Lover's Hour",
  user_id: User.find_by(username: "psuedocereal").id,
  artwork: "https://s3.us-east-2.amazonaws.com/aux-io-dev/albums/artworks/000/000/seed_artwork/psuedocereal-lovershour.jpg"
)

all_albums << Album.create!(
  title: "FRI-@!",
  user_id: User.find_by(username: "seiko").id,
  artwork: "https://s3.us-east-2.amazonaws.com/aux-io-dev/albums/artworks/000/000/seed_artwork/seiko-fri21.jpg"
)

all_albums << Album.create!(
  title: "The Flood",
  user_id: User.find_by(username: "shipoftheseus").id,
  artwork: "https://s3.us-east-2.amazonaws.com/aux-io-dev/albums/artworks/000/000/seed_artwork/shipoftheseus-theflood.jpg"
)

all_albums << Album.create!(
  title: "My Boyfriend's Car",
  user_id: User.find_by(username: "thebellesofsausalito").id,
  artwork: "https://s3.us-east-2.amazonaws.com/aux-io-dev/albums/artworks/000/000/seed_artwork/thebellesofsausalito-myboyfriendscar.jpg"
)

all_albums << Album.create!(
  title: "Stratosphere",
  user_id: User.find_by(username: "theg-men").id,
  artwork: "https://s3.us-east-2.amazonaws.com/aux-io-dev/albums/artworks/000/000/seed_artwork/thegmen-stratosphere.jpg"
)

all_albums << Album.create!(
  title: "Change",
  user_id: User.find_by(username: "themoneychangers").id,
  artwork: "https://s3.us-east-2.amazonaws.com/aux-io-dev/albums/artworks/000/000/seed_artwork/themoneychangers-change.jpg"
)

all_albums << Album.create!(
  title: "Utopia",
  user_id: User.find_by(username: "theonceprouds").id,
  artwork: "https://s3.us-east-2.amazonaws.com/aux-io-dev/albums/artworks/000/000/seed_artwork/theonceprouds-utopia.jpg"
)

all_albums << Album.create!(
  title: "Homesick For A Place I'm Not Even Sure Exists",
  user_id: User.find_by(username: "thewarondrugs").id,
  artwork: "https://s3.us-east-2.amazonaws.com/aux-io-dev/albums/artworks/000/000/seed_artwork/thewarondrugs-homesick.jpg"
)

all_albums << Album.create!(
  title: "STONE",
  user_id: User.find_by(username: "tower").id,
  artwork: "https://s3.us-east-2.amazonaws.com/aux-io-dev/albums/artworks/000/000/seed_artwork/tower-stone.jpg"
)

all_albums << Album.create!(
  title: "TOWER",
  user_id: User.find_by(username: "tower").id,
  artwork: "https://s3.us-east-2.amazonaws.com/aux-io-dev/albums/artworks/000/000/seed_artwork/tower-tower.png"
)

all_albums << Album.create!(
  title: "Right Side Up",
  user_id: User.find_by(username: "unacceptableuse").id,
  artwork: "https://s3.us-east-2.amazonaws.com/aux-io-dev/albums/artworks/000/000/seed_artwork/unacceptableuse-rightsideup.jpg"
)

all_albums << Album.create!(
  title: "The Beach Experience",
  user_id: User.find_by(username: "vincentvinyl").id,
  artwork: "https://s3.us-east-2.amazonaws.com/aux-io-dev/albums/artworks/000/000/seed_artwork/vincentvinyl-thebeachexperience.png"
)

all_albums << Album.create!(
  title: "Iron Man",
  user_id: User.find_by(username: "vladimir").id,
  artwork: "https://s3.us-east-2.amazonaws.com/aux-io-dev/albums/artworks/000/000/seed_artwork/vladimir-ironman.jpg"
)

all_albums << Album.create!(
  title: "Waffle House",
  user_id: User.find_by(username: "wafflehouse").id,
  artwork: "https://s3.us-east-2.amazonaws.com/aux-io-dev/albums/artworks/000/000/seed_artwork/wafflehouse-wafflehouse.jpg"
)

all_albums << Album.create!(
  title: "marble",
  user_id: User.find_by(username: "warpdrive").id,
  artwork: "https://s3.us-east-2.amazonaws.com/aux-io-dev/albums/artworks/000/000/seed_artwork/warpdrive-marble.png"
)


TRACKS = [
  {title: "Cake", audio_file: "https://s3.us-east-2.amazonaws.com/aux-io-dev/cake.mp3"},
  {title: "Flame", audio_file: "https://s3.us-east-2.amazonaws.com/aux-io-dev/flame.mp3"},
  {title: "Cake", audio_file:   "https://s3.us-east-2.amazonaws.com/aux-io-dev/glasslantern.mp3"},
  {title: "Pines", audio_file:   "https://s3.us-east-2.amazonaws.com/aux-io-dev/pines.mp3"},
  {title: "Plastic", audio_file: "https://s3.us-east-2.amazonaws.com/aux-io-dev/plastic.mp3"},
  {title: "Rhapsody", audio_file: "https://s3.us-east-2.amazonaws.com/aux-io-dev/rhapsody.mp3"},
  {title: "Silence", audio_file: "https://s3.us-east-2.amazonaws.com/aux-io-dev/silence.mp3"}
]

p "creating new tracks..."
all_albums.each do |album|
  5.times do
    track = Track.new(TRACKS.sample)
    track.album = album
    track.save!
  end
end
