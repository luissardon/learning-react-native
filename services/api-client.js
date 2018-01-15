const URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=peru&api_key=761c947f990a6e2ea21f6108e40cb56a&format=json';

function getArtists() {
  return fetch( URL )
      .then( response => response.json() )
      .then( data => data.topartists.artist)
      .then( artists => artists.map( artist => {
        return {
          name: artist.name,
          image: artist.image[ 3 ][ '#text' ],
          likes: 200,
          comments: 150
        }
      } ) )
}

export { getArtists };
