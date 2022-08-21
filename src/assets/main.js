const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCvRzNVtjYH8fumDk6FvRiHQ&part=snippet%2Cid&order=date&maxResults=10'

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '769cc8f19amsh152e7d117f2de21p1e6452jsn1473e972936b',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi,options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API)
        let view = `
        ${videos.items.map(video => `
            <div class="h-52">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="h-auto w-80 rounded-md">
            </div>
            `
    ).slice(0,2).join('')}
    `;
    content.innerHTML = view;
    }catch(error) {
        console.log(error);
    }
})();