var elixir = require('laravel-elixir');
var paths = {
    'jquery': './node_modules/jquery/',
    'bootstrap': './node_modules/bootstrap-sass/assets/',
}
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss')
        .copy(paths.bootstrap + 'fonts/bootstrap/**', 'public/fonts/bootstrap')
        .scripts([
            paths.jquery + "dist/jquery.js",
            paths.bootstrap + "javascripts/bootstrap.js",
            './resources/assets/js/**/*.js',
        ], 'public/js/app.js', './')
        .version([
            'css/app.css',
            'js/app.js'
        ])
});
