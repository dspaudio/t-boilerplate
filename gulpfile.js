var elixir = require('laravel-elixir');
var paths = {
    'jquery': './node_modules/jquery/',
    'bootstrap': './node_modules/bootstrap-sass/assets/',
}

elixir(function(mix) {
    // 설치 후 다음 라인은 주석 처리하세요
    mix.copy(paths.bootstrap + 'fonts/bootstrap/**', 'public/fonts/bootstrap')

    // 스크립트 작업이 없으면 다음 scripts 항목을 주석 처리하세요
    mix.scripts([
            paths.jquery + "dist/jquery.js",
            paths.bootstrap + "javascripts/bootstrap.js",
            './resources/assets/js/**/*.js',
        ], 'public/js/app.js', './')

    // css 작업이 없으면 다음 항목을 주석 처리하세요
    mix.sass('app.scss')
        .version([
            'css/app.css',
            'js/app.js'
        ])
});
