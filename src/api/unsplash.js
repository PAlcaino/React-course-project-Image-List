import axios from 'axios';

export default axios.create({ 
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 5d9f4e631c5aa17653df22d5e7835e0742a99f4fbd59f0ccc01a35c3bbd4a2ee'
    }
});

