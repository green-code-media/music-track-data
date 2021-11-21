const axios = require('axios');
const urls = require('./urls');

/**
 * Looks for the data about a song.
 * @public
 * @param {string} name A song's name.
 */

const getTracks = async (name) => {
    let preResult = [];
    let result = [];
    await axios({
        'method': 'get',
        'url': `${urls.urlSearch}${encodeURIComponent(name)}`,
        'headers': {
            'content-type': 'application/json'
        }
    }).then((response) => {
        const {data} = response.data;
        for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
            preResult.push({
                id: i,
                artist: data[i].artist.name,
                title: data[i].title,
                link: data[i].link,
                album: data[i].album,
            })
        }
    }).catch(console.log);

    for (let i = 0; i < preResult.length; i++) {
        await axios({
            'method': 'get',
            'url': `${urls.urlGet}${encodeURIComponent(preResult[i].artist)}/${encodeURIComponent(preResult[i].title)}`,
            'headers': {
                'content-type': 'application/json'
            }
        }).then((response) => {
            const lyrics = (response.data.lyrics?.split('\n') ?? [])
                .map(line => {
                    if (line.startsWith('Paroles de la chanson')) return '';
                    return line;
                })
                .filter(line => !!line)
                .join('\n');

            if (!lyrics) {
                return;
            }

            result.push({
                id: i,
                artist: preResult[i].artist,
                title: preResult[i].title,
                link: preResult[i].link,
                thumb: preResult[i].album.cover_medium,
                lyrics,
            })
        }).catch(console.log);
    }

    return result;
}

module.exports = getTracks;