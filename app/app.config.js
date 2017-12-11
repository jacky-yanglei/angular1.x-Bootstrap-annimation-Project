var myApp=angular.module('myApp', ['ui.router','oc.lazyLoad','ngAnimate']);

    //路由懒加载配置。
    myApp.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider",function($provide, $compileProvider, $controllerProvider, $filterProvider) {
        myApp.controller = $controllerProvider.register;
        myApp.directive = $compileProvider.directive;
        myApp.filter = $filterProvider.register;
        myApp.factory = $provide.factory;
        myApp.service = $provide.service;
        myApp.constant = $provide.constant;
    }]);
    myApp.constant('Modules_Config', [
            {
                name: 'treeControl',
                serie: true,
                files: []
            }
        ]);
    myApp.config(["$ocLazyLoadProvider", "Modules_Config", function ($ocLazyLoadProvider,Modules_Config) {
        console.log($ocLazyLoadProvider);
        console.log(Modules_Config);
        $ocLazyLoadProvider.config({
                debug: false,
                events: false,
                modules: Modules_Config,
                name: "demo"
            });
        }]);