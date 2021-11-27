const axios = require('axios');
const urls = require('./urls');

/**
 * Looks for the data about a song.
 * @public
 * @param {string} name A song's name.
 */

const getTracks = async (name) => {
    const preResult = [];
    const results = [];
    await axios({
        'method': 'get',
        'url': `${urls.urlSearch}${encodeURIComponent(name)}`,
        'headers': {
            'content-type': 'application/json'
        }
    }).then((response) => {
        const {data} = response.data;
        for (let i = 0; i < data.length; i++) {
            preResult.push({
                id: i,
                artist: data[i].artist.name,
                title: data[i].title,
                preview: data[i].preview,
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
            console.log({lyrics: response.data.lyrics});
            const paragraphs = (response.data.lyrics?.split('\n') ?? [])
            const lyrics = paragraphs
                .map(line => {
                    if (line.startsWith('Paroles de la chanson') || line.startsWith('[Thanks to ')) return '';
                    return line;
                })
                .filter(line => !!line)
                .join('\n');

            if (!lyrics) {
                return;
            }

            results.push({
                id: i,
                title: preResult[i].title,
                artist: preResult[i].artist,
                preview: preResult[i].preview,
                lyrics,
                album: {
                    title: preResult[i].album.title,
                    artwork: preResult[i].album.cover_xl,
                },
            })
        }).catch(console.log);
    }

    return results;
}

module.exports = getTracks;