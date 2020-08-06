# Pokédex Tutorial

The idea is to dive into programming. But how?


## Pre-reqs and Overview

- Install Node 10.x
- Install GIT
- Install VSCode
- Install useful plugins for VSCode
- Mobile-first methodology


## Version 1.0

### (Lesson 1) Display Umbreon Pokedex

- Fetch umbreon from the API
- Show a loading indicator while it's downloading
- Show Pokedex entry (name and sprite)


### (Lesson 2) Display Random Pokemon (1st Gen) Pokedex

- Lesson 4: Generate a random id between 1-150 for first Gen Pokemon
- Lesson 5: Fetch that chosen id's pokedex information


## Version 2.0

### (Lesson 1) Sprucen up the design

- Give it a background color or background image.
- Wrap the content in a "Card"-like component.


### (Lesson 2) Show the pokemon's picture

- Show the pokemon image from the official pokedex page. (leftpad nums. e.g.: 001, 002, etc)
- Add a header and give it a background color. Add optional things like shadow, font color, etc.


### (Lesson 3) Add a "Reload" button

- Make it look pretty


## Version 3.0

### (Lesson 1) Show loading spinner

- Create our own `<PokedexEntry />` component and transform the data coming in from several api endpoints into one the view recognizes and renders.
- Consider that there several different async actions going off while gathering the pokemon's pokedex entry. Things like its evolution chain, portrait image, and sprites.
- Wait for *all* to complete and then show the view.
- While data is being gathered show a neat little loading icon.


### (Lesson 2) Disable button while loading

- In order for the parent component to know when the pokedex is done "loading" it can pass in a "onLoadingChange" prop.


## Version 4.0

### (Lesson 1) Show Pokedex entry details

- Show sprites from evolution line with names underneath
- Weaknesses and strengths
- Change favicon to current pokemon's sprite


### (Lesson 2) Progressive loading

- Replace the loading icon with a recent web trend: progressive loading!
- Show placeholders for what the final view will look like. Then load things as they come in.
- Ease the user into the app instead of the jarring transition from a loading state to a completed state.