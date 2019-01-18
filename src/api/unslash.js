import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 7402a0e6ba965b50b8128e1cb02c653b2b172aefd68c617ee0d6be0032e05ee0'
	}
});
