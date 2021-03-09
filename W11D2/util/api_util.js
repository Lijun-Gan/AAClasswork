// Kp5xqNCXZQooS1IPeKAXyVZtkASB86Sz


export const fetchSearchGiphys = (searchTerm) =>{
    return $.ajax({
        method: "GET",
        url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${"Kp5xqNCXZQooS1IPeKAXyVZtkASB86Sz"}&limit=2`
    })
}