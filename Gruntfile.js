module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    babel: {
      files: {
        expand: true,
        cwd: 'src',
        src: '**/*.js',
        dest: 'dist'
      }
    },

    watch: {
      scripts: {
  	    files: ['src/**/*.js'],
  	    tasks: ['babel']
      }
    }
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['babel']);
  grunt.registerTask('dev', ['babel', 'watch']);
};
