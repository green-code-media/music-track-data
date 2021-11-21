# Music Track Data API
A simple JavaScript music track data search API.

## Installing
```
$ npm install music-track-data-api
```

## Usage
```javascript
const getTracks = require('lyrics-api');

await getTracks('Times Like These')
    .then(console.log)
    .catch(console.log);
```
The method returns an array of objects in the format below. Each object is data of a song that the API found.
If the API doesn't find any lyrics, you will get an empty array.

```json
{
  "id": 0,
  "artist": "Foo Fighters",
  "title": "Times Like These",
  "link": "https://www.deezer.com/track/4311600",
  "album": "https://e-cdn-images.dzcdn.net/images/cover/266f01f1c7a04843d11cd08f9c07d11f/250x250-000000-80-0-0.jpg",
  "lyrics": "I, I'm a one way motorway\nI'm the one that drives away\nThen follows you back home\nI, I'm a street light shining\nI'm a wild light blinding bright\nBurning off alone..."
}
```


### Info
* Large thanks to [lyrics.ovh](https://lyrics.ovh/) and [deezer.com](https://deezer.com/).
* Author of the API [beningreenjam](https://github.com/beningreenjam).
* Forked from [s0ftik3/lyrics-api](https://github.com/s0ftik3/lyrics-api).