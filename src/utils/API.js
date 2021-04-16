import axios from "axios";

const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const TRENDINGURL = "api.giphy.com/v1/gifs/trending"	
const APIKEY = "&api_key=BwLH6EekaraNN4YwsuWCmaVrKkbrrPHz";
const LIMIT = "&limit=20";

const params = {
    api_key: 'BwLH6EekaraNN4YwsuWCmaVrKkbrrPHz',
  };

export default {
    // TRENDING CALL
    trending: function () {
        return axios.get(TRENDINGURL + LIMIT, { params });
    },
    // SEARCH CALL 
    search: function (query) {
        return axios.get(BASEURL + query + APIKEY + LIMIT);
    },
};
