const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.ts', 'public/js')
   .webpackConfig({
      module: {
         rules: [
            {
               test: /\.tsx?$/,
               loader: "ts-loader",
               exclude: /node_modules/,
               resolve: {
                  extensions: [".ts", ".tsx", ".js", ".jsx"]
               },
            }
         ],
      }
   });

mix.sass('resources/sass/app.scss', 'public/css');
