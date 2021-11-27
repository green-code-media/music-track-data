# Music Track Data API
A simple JavaScript music track data search API.

## WARNING
This package is currently undergoing initial development. DO NOT USE until this warning has been removed.  

## Installing
```
npm install @green-code/music-track-data
```

## Get Tracks
```javascript
const {getTracks} = require("@green-code/music-track-data");

await getTracks("Times Like These")
    .then(console.log)
    .catch(console.log);
```

## Get Lyrics
```javascript
const {getLyrics} = require("@green-code/music-track-data");

await getLyrics("Foo Fighters", "Times Like These")
    .then(console.log)
    .catch(console.log);
```
The method returns an object in the format below.

This method call uses MusicMatch and requires an API key. Set yours with the var name of `MUSICMATCH_API_KEY`

```json
{
  "explicit": false,
  "lyrics": ""
}
```


### Info
* Large thanks to [MusicMatch](https://www.musixmatch.com/) and [deezer.com](https://deezer.com/).
* Author: [beningreenjam](https://github.com/beningreenjam).
* Forked from [s0ftik3/lyrics-api](https://github.com/s0ftik3/lyrics-api).