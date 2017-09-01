# AUX

  AUX is a simple clone of bandcamp. It can perform many of the core features of bandcamp, with the exception of most user interaction. At this state, it allows users two types of accounts, file upload and download, album streaming, search, and cataloging features for musicians. 

https://aux-io.herokuapp.com/#/

  I built AUX's server using Rails, ActiveRecord, and Postgres. I used jbuilder to limit Ajax queries and normalize my state. In the future, I would like to implement GraphQL in this project to clean up communication between the DOM and my server and to learn more about databases in general. 
  
 The front end of AUX is built on React and Redux. I used withRouter, lodash, and a few other modules to keep things running smoothly. AUX is styled with vanilla CSS.
 
  The first real bump I hit building this app came early on in the project when I had to implement a way to sign up two classes of user using the same `create` controller action. In addition to saving the user, the artist-class user had to save another record holding additional parameters only available to artist-class users.
  
  Initially, I explored implementing this double validation and commit using normal Ruby conventions, but I soon realized the two tables had to be validated and saved simultaneously. I spent a lot of time reading the docs and talking to instructors. I tried using a rails service object, a transaction, and a few other ways of using normal Ruby. The solution that is in the codebase now uses `accepts_nested_params` to validate the user and the artist profile parameters it optionally carries.
  
   
