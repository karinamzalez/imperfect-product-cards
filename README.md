This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Preview

<img src="https://media.giphy.com/media/QTlwExHRtI0fTrYwIP/giphy.gif" width="">

## Running 

  1. Install dependencies: 
    `npm install` or `yarn`
  
  2. Start express API server. Once running, navigate to [http://localhost:9001](http://localhost:9001) to confirm it is runnig correctly: 
```sh
# Run on a later version of node
# Runs on PORT 9001 by default, but can set the PORT env variable to run on a different port
$ node api/server.js
```

3. start local server: In the project directory-- `src/`, you can run `yarn start`

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Process
- I chose to implement Category Shelves in the given "Product Cards" repo. 
- I exclusively wrote functional components so that I could use react hooks.
- I replaced the direct import of 'products.json' into App.tsx with an async http call to the express back end, using the library, Axios and async/await. To do so, I needed to make a small change to the express api so that it would accept calls from my localhost origin.  
- I updated all of the files that I touched to use TypeScript. Writing in typescript helps me read my code more clearly-- especially when I'm in React land and component states are in play. I've run into type errors when using JS in the past, so I habitually use typescript as a precaution. I have a separate `types.ts` file for shared types. 
- I wrote a custom hook for Products. I did so to more easily implement my parser and I've found that it makes data fetched from apis easier to maintain. 
- I chose to discard separate scss files and kept my `styled-component` styling in the same file as my components themselves. This is something I really enjoyed when using Vue so I maintained the habit when I shifted back to React post-hook-release. :) 
- I'm using 3 libraries, Material UI, Axios and Lodash -- Material's inputs are a quick way to make input code clean (don't need to specify `<label>` per `<input>`) and they're aesthetically pleasing. I used Axios for my http request to the express API. I used Lodash's Uniq method to cleanly sort my Product categories. 
- I took a quick second to add responsive styles. To do so, I used scss grid and media queries. 
- For filtering, my Filters and Products components are sharing the state of their parent, App.tsx. I decided to do it this way because this is a relatively simple use case and a callback seemed like the quickest and easiest way to implement shared state. 

## TODO (with more time, I would...)
- I left some TODO notes in some of my components. For reference :)
- I chose to use the Product Categories to filterBy-- with more time, I would also use the tags so that the user would filter by things like "Gluten-free". 
- I would make the Category headers sticky. So that the user still knows what category they are in when scrolling. 
- I would allow user to search by product name with a Search Filter. 
- I would refactor the way that I produce create categories for grouping and searching. I would do it more programmatically (utilize fact that products all have two categories, one for produce/non-produce and one more specific one)
- Implement any refactors that my teammates would suggest :)

## Feedback

- This coding challenge was fun practice for me. It took me slightly more than 2 hours but time flies when you're having fun!
