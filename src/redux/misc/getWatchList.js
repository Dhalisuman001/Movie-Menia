const API_URL = "https://api.themoviedb.org/3/";
const tmdbApiKey =
  "734f9ebb8853a3ddec313e0f0c5b6338" || process.env.RECAT_APP_TMDB_KEY;


export async function getWatchList(id) {
  const response = await fetch(
    `${API_URL}/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`
  ).then((r) => r.json());
  return response;
}
