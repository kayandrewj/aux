## Component Hierarchy

**AuthFormContainer**
 - AuthForm

***Main Page***
**navMain**
 - navUserLinks
 - navSearch
 - navAuth

**splashIndex**
 - splashIndexItem

**dailyIndex**
 - dailyIndexItem

**newIndex**
 - newIndexItem

**Footer**

***User Page***

**subNav**
 - subNavUserLinks
 - navSearch
 - userAuthSettings

**userContainer**
 - userItems
 - userProfileSettings

**collectionIndex**
 - collectionNav
 - collectionItem

**footer**

***Album Show Page***

**subNav**
 - subNavUserLinks
 - navSearch
 - userAuthSettings

**artistItem**

**albumContainer**
 + albumHeader
 * trackIndexItem

**albumDescription**

**albumInfoContainer**
 - albumArt
 - albumLinks

**artistAlbumsContainer**
 - artistSocial
 - artistAlbum

***Artist Show Page***

**subNav**
 - subNavUserLinks
 - navSearch
 - userAuthSettings

**artistItem**

**albumIndexContainer**
 - albumIndexItem

 **artistAlbumsContainer**
  - artistSocial
  - artistAlbum

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign_up" | "AuthFormContainer" |
| "/login" | "AuthFormContainer" |
| "/" | "homePageContainer" |
| "/users/:id/" | "UserContainer" |
| "/album/:id/" | "AlbumContainer" |
