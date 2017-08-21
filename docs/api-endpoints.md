# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

**Routes marked with an `+` are restricted to users with `artist: true`**

### Users

- `GET /api/users/:id`
  - links to user profile, or beefier artist profile if user has `artist: true`
  - needs to be more graceful
- `POST /api/users`
- `PATCH /api/users`
- `DELETE /api/users/:id`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Artist

- `GET /api/artist/:id`
- `POST /api/artist` +
- `PATCH /api/artist/:id` +
- `DELETE /api/artist/:id` +

### Albums

- `GET /api/album/:id`
- `GET /api/artist/:id/album`
  - index for all albums of a given artist
- `PATCH /api/album/:id` +
- `POST /api/album` +
- `DELETE /api/album/:id` +

### Tracks

- `GET /api/album/:id/track`
  - index for all tracks of a given album
- `PATCH /api/album/:id/track/:id` +
- `POST /api/album/:id/track` +
- `DELETE /api/album/:id/track/:id` +
