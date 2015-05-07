var root = process.cwd();

'use strict';

module.exports = {
  runner:{
    src:{
      html: 'test/runner.html',
      js: 'scripts/**/*.js',
      test: 'test/spec/**/*js'
    }
  },
  lint:{
    all:['scripts/**/*.js', 'test/**/*.js','build/**/*.js', '!node_modules/','!bower_components/']
  },
	html:['../login.html'],
	css: ['styles/**/*.css'],
	js:{
     all: 'scripts/**/*.js',
		 main:'scripts/app.js'
		},
  spec:{
    path:'test/spec/**/*.js',
    options:{
      ui:'bdd',
      growl: true,
      reporter:'spec'
    }
  },
  build:{
    root: root + 'dist/',
    css: root + 'dist/css',
    js: root + 'dist/js',
    font: root + 'dist/fonts',
    images: root + 'dist/images'
  }
};
