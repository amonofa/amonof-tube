import axios from 'axios'

const BASE_URI = 'https://youtube-v31.p.rapidapi.com'

const options = {
	params: {
		maxResults: '50',
	},
	headers: {
		'X-RapidAPI-Key': "1b1d76e78amsh29133b3c8081b11p1eb317jsn1f0dc710cce1",
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	},
}

export const ApiService = {
	async fetching(url) {
		const response = await axios.get(`${BASE_URI}/${url}`, options)
		return response.data
	},
}

// RAPID_API_KEY.toString(),