# WeatherClients

## Scripts 
```sh
First run npm install in both project directories
npm start will start a hot reloading server on the front-end at localhost:8800
npm start on the back end will start a hot reloading server on port 4400

```
**You should be able to input city/country/state/zipcode and always get a result. The more information the more accurate the location but there are a lot of cities that the Weather API has no information on.**


**The only route to the backend is /api/forecast atm. There is a proxy setup through webpack so cors should not have to be allowed.**


  This app (WeatherClients) is one of two repositories belonging to this project. I build the backend microservice using Node.js and Express.js. I used Express because it abstracts much of the busy work of setting up servers. Since there was only ond page that needed to be rendered, no database, and only one route I needed to hit I had a very simple folder and file structure. One file for middleware, one file for a helper funcion (I though I would be using more or else I would have thrown this in with the controllers. 

  The API we were supposed to use uses google's deprecated woeid API (as of february 2019) because of this I had some trouble getting accurate woeid's as there are very few sources. The documentation is no longer even avaiable. I decided to make a call to mapQuest's API because it had a lot more leeway with what the user could input for the address. The not so great weather API can only take the woeid's very large popular cities so a lot of searches return no result which I handled with a message.
  
  Initially I considered caching the weather results (updating every few minutes or so) and/or some of the woeid lookups. I briefly thought of creating a backend that could hold the last 10 searches or something akin to that.I quickly realized that all of these things were well out of the scope and need for this assignment. I did take the time to try a few new libraries that I have not used before one of them being 'whatwg-fetch'. It was wonderful and I think it made the fetch request a little cleaner and easier to read and is by far has the lightest load of any of the other modules I looked at.

  I made a pretty big mistake on the front end and setup my React from scratch instead of using Create-React-App. It had been awhile since I setup a React app from scratch so I didn't mind it but it definately was a time suck for no reason. Which led to another issue when I tried to setup css modules with my current React Setup, every single article was how to setup css modules using Create-React-App and there was a pretty big update to babel at the end of last year which makes finding the correct setup for present day non Create-React-Apps difficult. This did spur me to check out google charts which was okay, I don't think google charts looks as good as some of the other chart libraries out there. Sadly, this meant I had to do a lot of inline css but I used flexbox and the app scales pretty well on mobile.

  The tasks I would like to accomplish next are only displaying 6 days instead of 7 and a blank day because the pretty bad API only gave back 6 results. I would add testing immediately and then just clean things up a little bit. I would probably try another weather api too.
