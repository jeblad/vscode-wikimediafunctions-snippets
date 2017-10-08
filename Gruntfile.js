/* jshint node:true */
module.exports = function ( grunt ) {
	grunt.loadNpmTasks( "grunt-jsonlint" );
	grunt.loadNpmTasks( "grunt-markdownlint" );
	grunt.loadNpmTasks("grunt-merge-json");

	grunt.initConfig( {
		jsonlint: {
			all: [
				"**/*.json",
				"!node_modules/**"
			]
		},
		markdownlint: {
			options: {
				config: {
					"default": true,
					"MD013": false
				}
			},
			all: [
				"**/*.md",
				"!node_modules/**"
			]
		},
		"merge-json": {
			options: {
				replacer: function( key, value ) {
					if ( key === "@metadata" ) {
						return undefined;
					}
					return value;
				}
			},
			"snippets": {
				files: {
					"snippets/lua.json": [ "src/lua/*.json" ]
				}
			}
		}
	} );

	grunt.registerTask( "lint",
		[
			"jsonlint",
			"markdownlint"
		] );
	grunt.registerTask( "test",
		[
			"lint"
		] );
	grunt.registerTask( "merge",
		[
			"merge-json"
		] );
	grunt.registerTask( "default",
		[
			"merge",
			"test"
		] );
};
