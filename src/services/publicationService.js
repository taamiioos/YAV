import axios from 'axios';

export const sendPublication = async (publication) => {
    const response = await axios.post('http://your-server-url/api/publications', publication);

    if (!response.ok) {
        throw new Error('Failed to send publication');
    }

    return await response.json();
};
