const express = require('express'),
    request = require('request')
;
const app = express();

app.get('/api/list/:name', (req, res) => {
    request('https://www.reddit.com/r/' + req.params.name + '/hot.json', function (error, response, body) {
        const redditPosts = JSON.parse(body).data.children;
        const result = redditPosts.map((post)=>{
            var p = {
                title: post.data.title,
                thumbnail: post.data.thumbnail,
                url: post.data.url,
                image: post.data.preview.images[0] ? post.data.preview.images[0].source.url : null,
                video: post.data.preview.reddit_video_preview ? post.data.preview.reddit_video_preview.fallback_url : null
            };
            if (p.video) p.type = "video";
            else if (p.image) p.type = "image";
            return p;
        });
        res.send(result.splice(1,100));

    });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))