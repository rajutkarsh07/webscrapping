const request = require("request");
const cheerio = require("cheerio");

request("https://utkarsh-raj.netlify.app/", (err, res, html) => {
  if (!err && res.statusCode == 200) {
    // console.log(html);

    const $ = cheerio.load(html);

    const about = $(".header-nav");
    console.log(about.html());
    // console.log(about.text());

    console.log("---------------- new line -----------------");

    let arr = [];

    about.each((i, e) => {
      const item = $(e).text();
      arr.push(item);
      // console.log(item);
    });

    arr.toString();

    console.log(arr);
    console.log(arr.length);

    console.log("---------------- new line -----------------");
  }
});
