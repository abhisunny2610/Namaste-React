const apiKey= process.env.YOUTUBE_APP_API_KEY

// youtube popular video
export const youtube_video_api = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=[YOUR_API_KEY]"