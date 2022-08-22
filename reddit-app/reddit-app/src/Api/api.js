 const mainApi = "https://www.reddit.com";

export const fetchReddits = async() => {
    const response = await fetch(`${mainApi}/r/popular.json`);
    const json = await response.json();
    return json.data.children.map(reddit => reddit.data);
};

export const fetchSearchedReddits = async(searchTerm) => {
    const response = await fetch(`${mainApi}/search.json?q=${searchTerm}`);
    const json = await response.json();
    return json.data.children.map(reddit => reddit.data);
};


export const fetchSubreddits = async() => {
    const response = await fetch(`${mainApi}/subreddits.json`);
    const json = await response.json();
    return (json.data.children.map(subreddit => subreddit.data));
};

export const fetchCardReddits = async(subreddit) => {
    const response = await fetch(`${mainApi}/${subreddit}.json`);
    const json = await response.json();
    return json.data.children.map(reddit => reddit.data);
};

export const fetchSubredditReddits = async(subreddit) => {
    const response = await fetch(`${mainApi}/r/${subreddit}.json`);
    const json = await response.json();
    console.log(json.data.children.map(postdata => postdata.data));
    return json.data.children.map(reddit => reddit.data);
};

export const fetchComments = async (permalink) => {
    const response = await fetch(`${mainApi}${permalink}.json`);
    const json = await response.json();
    return json[1].data.children.map(comments => comments.data);
};

export const fetchSubredditImage = async (subreddit) => {
    const response = await fetch(`${mainApi}/subreddits.json`);
    const json = await response.json();
    const items = json.data.children.map( data => 
         data.data )
    const word = items.filter(item => item.display_name === subreddit && item.icon_img !== "" ? item : "") 
    return word[0]; 
};

