import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization : "Client-ID d3fc70b7a14c3a52b18e0d3699e9cf2c7781db3763cd8788e9d00df08ac42718"
    }
})