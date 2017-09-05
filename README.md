# AUX

<<<<<<< HEAD
  AUX is a clone of bandcamp. It features many core features of bandcamp. At this state, it allows users two types of accounts, file upload and download, album streaming, search, and cataloging features for musicians.
=======
  AUX is a clone of bandcamp. It features many core features of bandcamp. At this state, it allows users two types of accounts, file upload and download, album streaming, search, and cataloging features for musicians. 
>>>>>>> a982aba9807b9ddbfca4eecd0d240cb57c27560d

https://aux-io.herokuapp.com/#/

## Stack

<<<<<<< HEAD
  I built AUX's server using Rails, ActiveRecord, and Postgres. I used jbuilder to limit Ajax queries and normalize my state. In the future, I would like to implement GraphQL in this project to clean up communication between the DOM and my server and to learn more about databases in general.

 The front end of AUX is built on React and Redux. I used withRouter, lodash, and a few other modules to keep things running smoothly. AUX is styled with vanilla CSS with intentions to migrate to Sass as the project grows.

 ## Functionality


 ### Database

  The database is a web of associations, using inverse associations to eliminate unnecessary ajax calls. Searching the tables of the database uses pg_search, a gem allowing multisearch functionality by generating an indexed table of search objects. The results are parsed with a jbuilder and passed to the frontend as a slice of state.

 ### Auth

  The auth page of AUX signs in two classes of user using the same `create` controller action. This cuts out unwanted database complications and allows single-file rendering of the three auth types. Artist-class users are allowed and required to possess more parameters than normal users. This additional information is stored in a seperate table. The current solution uses `accepts_nested_params` to validate the user and the artist profile parameters it optionally carries. In trying to save the user, ActiveRecord also tries to save the associated artist record, rolling back both if one fails.

 ### Communication

  Efficient interaction with the database is essential to growing AUX into a richer web app. Information rendered by AUX components is rarely pulled from a single table. To fetch just the data needed from all the tables using one ajax query, I implemented succinct jbuilders and re-used data that was already rendered. Modularizing React components to use this style of database query led to functional development styles within React components.

### Interface

  AUX is designed closely after bandcamp, focused on intuitive and visually pleasing placement of components. Some components were left out: the alternative sign-in modal and the altered color scheme on some of the nav bars.

 ## Expansion

=======
  I built AUX's server using Rails, ActiveRecord, and Postgres. I used jbuilder to limit Ajax queries and normalize my state. In the future, I would like to implement GraphQL in this project to clean up communication between the DOM and my server and to learn more about databases in general. 
  
 The front end of AUX is built on React and Redux. I used withRouter, lodash, and a few other modules to keep things running smoothly. AUX is styled with vanilla CSS with intentions to migrate to Sass as the project grows. 
 
 ## Functionality
 
 
 ### Database
  
  The database is a web of associations, using inverse associations to eliminate unnecessary ajax calls. Searching the tables of the database uses pg_search, a gem allowing multisearch functionality by generating an indexed table of search objects. The results are parsed with a jbuilder and passed to the frontend as a slice of state. 
 
 ### Auth
 
  The auth page of AUX signs in two classes of user using the same `create` controller action. This cuts out unwanted database complications and allows single-file rendering of the three auth types. Artist-class users are allowed and required to possess more parameters than normal users. This additional information is stored in a seperate table. The current solution uses `accepts_nested_params` to validate the user and the artist profile parameters it optionally carries. In trying to save the user, ActiveRecord also tries to save the associated artist record, rolling back both if one fails. 
 
 ### Communication
 
  Efficient interaction with the database is essential to growing AUX into a richer web app. Information rendered by AUX components is rarely pulled from a single table. To fetch just the data needed from all the tables using one ajax query, I implemented succinct jbuilders and re-used data that was already rendered. Modularizing React components to use this style of database query led to functional development styles within React components. 
  
### Interface

  AUX is designed closely after bandcamp, focused on intuitive and visually pleasing placement of components. Some components were left out: the alternative sign-in modal and the altered color scheme on some of the nav bars.
  
 ## Expansion
 
>>>>>>> a982aba9807b9ddbfca4eecd0d240cb57c27560d
  Current priorities for AUX are database migration, genre implementation, and better search through filter bars. Back burner plans include social integration and algorithmic listening suggestions.
