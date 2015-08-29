module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'client/scripts/app.js',
                dest: 'server/public/assets/scripts/app.min.js'

            },
            controllers: {
                src: 'client/scripts/controllers/controller.js',
                dest: "server/public/assets/scripts/controllers/controller.min.js"
            }

        },
        copy: {
            angular: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "angular/angular.min.js",
                    "angular/angular.min.js.map"
                ],
                "dest": "server/public/vendors/"
            },
            angularRoute: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "angular-route/angular-route.min.js",
                    "angular-route/angular-route.min.js.map"
                ],
                "dest": "server/public/vendors/"
            },
            angularMaterial: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "angular-material/angular-material.min.js"
                ],
                "dest": "server/public/vendors/"
            },
            angularAria: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "angular-aria/angular-aria.min.js"
                ],
                "dest": "server/public/vendors/"
            },
            angularAnimate: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "angular-animate/angular-animate.min.js"
                ],
                "dest": "server/public/vendors/"
            },
            html: {
                expand: true,
                cwd: 'client/views/',
                src: [
                    "index.html"
                ],
                "dest": "server/public/assets/views/"
            },
            htmlRoutes: {
                expand: true,
                cwd: 'client',
                src: [
                    "views/routes/home.html",
                    "views/routes/activitylog.html",
                    "views/routes/setgoalsreminders.html",
                    "views/routes/practice.html"
                ],
                "dest": "server/public/assets"
            },
            style: {
                expand: true,
                cwd: 'client',
                src: [
                    "styles/style.css",
                    "styles/angularstyles.css"
                ],
                dest: "server/public/assets/"
            },
            fontAwesome: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "css/font-awesome.min.css",
                    "css/font-awesome.css.map"
                ],
                "dest": "server/public/vendors/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy')
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);
};
