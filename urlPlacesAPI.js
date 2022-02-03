/** The following code desmotrate how to make 
 * a request on Google API Place and get a list
 * of restaurantes. 
 * 
 * Note: 
 * 1 - The Google Places API return a list of 20 places
 * 2 - An account must be set with Google Cloud
 * 3 - Places API and JavaScript API must be enable 
 */
const GoogleAPIKey = "<API_KEY>";

const lat = '<lat>';
const lon = '<long>';
const rad = '<radius>';

const url  = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
const location = `location=${lat},${lon}`;
const radius = `&radius=${rad}`;
const type = "&keyword='restaurant";
const key = `&key=${GoogleAPIKey}`;
const restaurantSearchUrl = url + location + radius + type + key;

fetch(restaurantSearchUrl)
.then(response => response.json())
.then(data => console.log(data));