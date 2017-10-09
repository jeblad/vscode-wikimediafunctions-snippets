/* jshint node:true */
module.exports = function ( grunt ) {
	grunt.loadNpmTasks( "grunt-jsonlint" );
	grunt.loadNpmTasks( "grunt-markdownlint" );
	grunt.loadNpmTasks( "grunt-merge-json" );
	grunt.loadNpmTasks( "grunt-run" );

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
		},
		run: {
			options: {
				wait: true
			},
			package: {
				cmd: "vsce",
				args: [
					"package"
				]
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
	grunt.registerTask( "package",
		[
			"merge-json",
			"run:package"
		] );
	grunt.registerTask( "default",
		[
			"test",
			"package"
		] );
};
