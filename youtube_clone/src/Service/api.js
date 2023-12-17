

export const apiKey= "AIzaSyDfFJu0JAKlpmFR1iZ9tgJsKzdXUzObviQ"

// youtube popular video
export const youtube_video_api = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + apiKey;

export const search_suggestion_api = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" 

export const getVideodetails = async ({id}) => {
    const responce = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" + id +"&key=" + apiKey)
    const json = await responce.json()
    const data = json
    console.log(data)
  }
  