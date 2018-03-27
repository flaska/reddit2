const express = require('express'),
    request = require('request')
;
const app = express();

app.get('/api/list/:name', (req, res) => {
    request('https://www.reddit.com/r/' + req.params.name + '/hot.json', function (error, response, body) {
        const redditPosts = JSON.parse(body).data.children;
        const result = redditPosts.map((post)=>{
            return {
                title: post.data.title,
                thumbnail: post.data.thumbnail,
                url: post.data.url,
                image: post.data.preview.images[0] ? post.data.preview.images[0].source.url : null,
                video: post.data.preview.reddit_video_preview ? post.data.preview.reddit_video_preview.fallback_url : null
            };
        });
        res.send(result);

    });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))