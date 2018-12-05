module.exports = [
  {
    entry: {
      core: './node_modules/core-js/client/shim.min.js',
      zone: './node_modules/zone.js/dist/zone.js',
      reflect: './node_modules/reflect-metadata/Reflect.js',
      system: './node_modules/systemjs/dist/system.src.js'
    },
    output: {
      filename: './wwwroot/js/[name].js'
    },
    target: 'web',
    node: {
      fs: "empty"
    }
  },
// companies
  {
    entry: {
        admin: './wwwroot/app/Components/Companies/page-bootrappers/admin/companies-admin-bootstrap.ts',
        companies: './wwwroot/app/Components/Companies/page-bootrappers/companies/companies-bootstrap.ts'
    },
    output: {
        filename: './wwwroot/app/Components/Companies/page-bootrappers/[name]/[name]-bootstrap.js'
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
      loaders: [
        { test: /\.ts$/, loader: 'ts-loader' }
      ]
    }
  },

  // Products
  {
      entry: {
          admin: './wwwroot/app/Components/Products/page-bootstrappers/admin/products-admin-bootstrap.ts',
          products: './wwwroot/app/Components/Products/page-bootstrappers/Products/products-view-bootstrap.ts'
      },
      output: {
          filename: './wwwroot/app/Components/Products/page-bootstrappers/[name]/[name]-bootstrap.js'
      },
      devtool: 'source-map',
      resolve: {
          extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
      },
      module: {
          loaders: [
              { test: /\.ts$/, loader: 'ts-loader' }
          ]
      }
  },

  // users
  {
      entry: {
          admin: './wwwroot/app/Components/Users/page-bootstrappers/admin/users-admin-bootstrap.ts'
      },
      output: {
          filename: './wwwroot/app/Components/Users/page-bootstrappers/[name]/[name]-bootstrap.js'
      },
      devtool: 'source-map',
      resolve: {
          extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
      },
      module: {
          loaders: [
              { test: /\.ts$/, loader: 'ts-loader' }
          ]
      }
  }



];