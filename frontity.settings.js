const settings = {
  "name": "403page2020",
  "state": {
    "frontity": {
      "url": "https://403page.com",
      "title": "403Page.com",
      "description": "Blazing-edge Wordpress development"
    }
  },
  "packages": [
    {
      "name": "fourothree",
      "state": {
        "theme": {
          "menu": [
            [
              "All",
              "/"
            ],
            [
              "Performance",
              "/category/performance/"
            ],
            [
              "Errors",
              "/category/errors/"
            ],
            [
              "How to...",
              "/category/how-to/"
            ],

          ],
          "featured": {
            "showOnList": true,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://restfeed.403page.com/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
