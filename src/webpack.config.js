plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, "public", "index.html"),
    favicon: "./public/favicon.ico",
    filename: "index.html",
    manifest: "./public/manifest.json",
  }),
  {
    test: /\.svg$/,
    use: [
      {
        loader: 'svg-url-loader',
        options: {
          limit: 10000,
        },
      },
    ],
 }
]
  