var isparta = require('isparta');
var metal = require('gulp-metal');

var babelOptions = {
	resolveModuleSource: metal.renameAlias,
	sourceMap: 'both'
};

module.exports = function (config) {
	config.set({
		frameworks: ['mocha', 'chai', 'source-map-support', 'commonjs'],

		files: [
			'bower_components/soyutils/soyutils.js',
			'bower_components/metal*/src/**/*.js',
			'bower_components/crystal*/src/**/*.js',
			'bower_components/crystal*/test/**/*.js'
		],

		preprocessors: {
			'bower_components/crystal*/src/**/!(*.soy).js': ['coverage', 'commonjs'],
			'bower_components/crystal*/src/**/*.soy.js': ['babel', 'commonjs'],
			'bower_components/metal*/src/**/*.js': ['babel', 'commonjs'],
			'bower_components/crystal*/test/**/*.js': ['babel', 'commonjs']
		},

		browsers: ['Chrome'],

		reporters: ['coverage', 'progress'],

		babelPreprocessor: {options: babelOptions},

		coverageReporter: {
			instrumenters: {isparta : isparta},
			instrumenter: {'**/*.js': 'isparta'},
			instrumenterOptions: {isparta: {babel: babelOptions}},
			reporters: [
				{type: 'html'},
				{type: 'lcov', subdir: 'lcov'},
				{type: 'text-summary'}
			]
		}
	});
}