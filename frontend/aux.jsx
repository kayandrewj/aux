import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchAlbum } from './actions/album_actions';
import { fetchArtistAlbums } from './actions/album_actions';


document.addEventListener("DOMContentLoaded", () => {

  let store;
  if (window.currentUser){
    const preloadedState = {session: { currentUser: window.currentUser, } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchAlbum = fetchAlbum;
  window.fetchArtistAlbums = fetchArtistAlbums;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={ store } />, root);
});
