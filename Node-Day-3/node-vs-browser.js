const http = require("http");

http.get('http://jsonplaceholder.typicode.com/posts/1', (res) => {
    console.log(res.statusCode);

    res.on("data", (data) => {
        console.log(data.toString());
    });
});
// .on("error", (err) => {
//     console.log("Error: " + err.message);
// });

