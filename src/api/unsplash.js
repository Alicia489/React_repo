import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 8406298c3967109b364a72a7ecdb9033eb6fcf0739fa4d76a05470ef5cdfa5b9'
    }
});