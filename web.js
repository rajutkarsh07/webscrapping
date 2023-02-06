const request = require("request");
const cheerio = require("cheerio");
const axios = require("axios");
const express = require("express");

// request("https://utkarsh-raj.netlify.app/", (err, res, html) => {
//   if (!err && res.statusCode == 200) {
//     // console.log(html);

//     const $ = cheerio.load(html);

//     const about = $(".header-nav");
//     console.log(about.html());
//     // console.log(about.text());

//     console.log("---------------- new line -----------------");

//     let arr = [];

//     about.each((i, e) => {
//       const item = $(e).text();
//       arr.push(item);
//       // console.log(item);
//     });

//     arr.toString();

//     console.log(arr);
//     console.log(arr.length);

//     console.log("---------------- new line -----------------");
//   }
// });

const PORT = 4001;

const app = express();

axios("https://www.youtube.com/").then((err, res, html) => {
  if (err) {
    console.log(err);
  }
  if (!err) {
    // console.log(res);
    const htmlData = res.data;
    const $ = cheerio.load(htmlData);

    const arr = [];

    $(".style-scope").each((ind, ele) => {
      const title = $(ele).children(".yt-simple-endpoint").text();
      const titleUrl = $(ele).children(".yt-simple-endpoint").attr("href");
      arr.push({ title, titleUrl });
    });

    console.log("-------------------------");

    console.log(arr);
  }
});

app.listen(PORT, () => console.log("server started at port 4001"));
