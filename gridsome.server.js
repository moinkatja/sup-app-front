// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const nodeExternals = require('webpack-node-externals')
const axios = require('axios')

module.exports = function (api) {

  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          allowlist: [/^vuetify/]
        })
      ])
    }
  })
  api.loadSource(async actions => {
    const { data } = await axios.get('http://localhost:1337/spots')

    const collection = actions.addCollection({
      typeName: 'Spots'
    })

    for (const spot of data) {
      collection.addNode({
        id: spot.id,
        title: spot.title,
        description: spot.description,
        duration: spot.duration,
        address: spot.address,
        thumbnail: spot.image.formats.thumbnail?.url,
        image: spot.image.formats.medium?.url,
        category: spot.categories[0].id
      })
    }
  })

}
