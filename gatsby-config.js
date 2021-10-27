module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Gatsby Gantt Chart",
  },
  plugins: [
  
  "gatsby-plugin-gatsby-cloud",

  {
    resolve: "gatsby-source-airtable",
    options: {
      apiKey: "XXX", 
      concurrency: 5,  
      tables: [
        {
          baseId: "YYY",
          tableName: "Jobs",    
        },
        {
          baseId: "ZZZ",
          tableName: "Resources",
        }
      ]
    }
  }

  ],
};
