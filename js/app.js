var mainApp = angular.module("rubenmarcus", ['ngRoute','door3.css'])


   
      mainApp.config(function($routeProvider, $locationProvider)  {
            $routeProvider.
            
               when('/pt', {
                  templateUrl: 'views/pt/home.html',
                  controller: 'PTController',
                  css: 'css/home.css',
                title: 'Home',
                   enhref:'en',
                     pthref:'pt',
                homehref:'pt',
                lang:'pt-br'
               
               }).
             when('/portfolio', {
                  templateUrl: 'views/portfolio.html',
                  controller: 'PortfolioController',
                  css: 'css/works.css',
                title: 'Portfolio',
                 enhref:'works',
                     pthref:'pt',
                homehref:'pt',
                lang:'pt-br'
               
               }).
               when('/works', {
                  templateUrl: 'views/works.html',
                  controller: 'WorkController',
                  css: 'css/works.css',
                title: 'Works',
                pthref:'portfolio',
                  enhref:'en',
              homehref:'en',
                   lang:'en'
               
               }).
               when('/about', {
                  templateUrl: 'views/about.html',
                  controller: 'AboutController',
                css: 'css/home.css',
                      title: 'About',
                pthref:'sobre',
                  enhref:'en',
              homehref:'en',
                   lang:'en'
               
               }).
            
            
               when('/sobre', {
                  templateUrl: 'views/pt/sobre.html',
                  controller: 'SobreController',
                css: 'css/home.css',
                      title: 'Sobre',
                pthref:'pt',
                  enhref:'about',
              homehref:'pt',
                   lang:'pt-br'
               
                
                
               }).
            when('/contato', {
                  templateUrl: 'views/pt/contato.html',
                  controller: 'ContatoController',
                css: 'css/home.css',
                      title: 'Sobre',
                pthref:'pt',
                  enhref:'contact',
              homehref:'pt',
                   lang:'pt-br'
               
                
                
               }).         when('/curriculo', {
                  templateUrl: 'views/pt/curriculo.html',
                  controller: 'CurriculoController',
                css: 'css/curriculo.css',
                      title: 'Currículo',
                pthref:'pt',
                  enhref:'resume',
              homehref:'pt',
                   lang:'pt-br'
               
                
                
               }).
                   when('/resume', {
                  templateUrl: 'views/resume.html',
                  controller: 'ResumeController',
                css: 'css/curriculo.css',
                      title: 'Currículo',
                pthref:'curriculo',
                  enhref:'en',
              homehref:'en',
                   lang:'en'
               }).
             when('/contact', {
                  templateUrl: 'views/contact.html',
                  controller: 'ContactController',
                css: 'css/home.css',
                          title: 'Contact',
                pthref:'contato',
                  enhref:'en',
              homehref:'en',
                   lang:'en'
               }).
             when('/en', {
                  templateUrl: 'views/home.html',
                  controller: 'HomeController',
                  css: 'css/home.css',
                  title: 'Home',
                   enhref:'en',
                     pthref:'pt',
                homehref:'en',
                lang:'en'
               }).
            
             when('/portfolio/webdesign', {
                  templateUrl: 'views/pt/webdesign.html',
                  controller: 'WebptController',
                  css: 'css/works.css',
                 title: 'Portfolio | Webdesign',
                pthref:'pt',
                  enhref:'works/webdesign',
              homehref:'pt',
                   lang:'pt-br'
               }).
                  when('/portfolio/visualid', {
                  templateUrl: 'views/pt/visualid.html',
                  controller: 'VidptController',
                  css: 'css/works.css',
                 title: 'Portfolio | Visual Id ',
                       pthref:'pt',
                  enhref:'works/visualid',
              homehref:'pt',
                   lang:'pt-br'
               }).
            
                 when('/portfolio/dev', {
                  templateUrl: 'views/pt/development.html',
                  controller: 'DevptController',
                  css: 'css/works.css',
                 title: 'Portfolio | Desenvolvimento',
                       pthref:'pt',
                  enhref:'works/dev',
              homehref:'pt',
                   lang:'pt-br'
               }).
                when('/portfolio/wordpress', {
                  templateUrl: 'views/pt/wp.html',
                  controller: 'WpptController',
                  css: 'css/works.css',
                 title: 'Portfolio | Wordpress',
                       pthref:'pt',
                  enhref:'works/wordpress',
              homehref:'pt',
                   lang:'pt-br'
               }).
            
               when('/portfolio/php', {
                  templateUrl: 'views/pt/php.html',
                  controller: 'PhpptController',
                  css: 'css/works.css',
                 title: 'Portfolio | PHP',
                       pthref:'pt',
                  enhref:'works/php',
              homehref:'pt',
                   lang:'pt-br'
               }).
                when('/portfolio/aspnet', {
                  templateUrl: 'views/pt/aspnet.html',
                  controller: 'AspnetptController',
                  css: 'css/works.css',
                 title: 'Portfolio | ASP.net C#',
                       pthref:'pt',
                  enhref:'works/aspnet',
              homehref:'pt',
                   lang:'pt-br'
               }).
               when('/portfolio/photoshop', {
                  templateUrl: 'views/pt/photoshop.html',
                  controller: 'PsptController',
                  css: 'css/works.css',
                 title: 'Portfolio | Photoshop',
                       pthref:'pt',
                  enhref:'works/photoshop',
              homehref:'pt',
                   lang:'pt-br'
               }).
            
                when('/portfolio/html', {
                  templateUrl: 'views/pt/html.html',
                  controller: 'HtmlptController',
                  css: 'css/works.css',
                 title: 'Portfolio | Html',
                       pthref:'pt',
                  enhref:'works/html',
              homehref:'pt',
                   lang:'pt-br'
               }).
            
               when('/portfolio/2014', {
                  templateUrl: 'views/pt/a2014.html',
                  controller: 'a2014ptController',
                  css: 'css/works.css',
                 title: 'Portfolio | 2014',
                       pthref:'pt',
                  enhref:'works/2014',
              homehref:'pt',
                   lang:'pt-br'
               }).
            
               when('/portfolio/2012', {
                  templateUrl: 'views/pt/a2012.html',
                  controller: 'a2012ptController',
                  css: 'css/works.css',
                 title: 'Portfolio | 2012',
                       pthref:'pt',
                  enhref:'works/2012',
              homehref:'pt',
                   lang:'pt-br'
               }).
            
            
               when('/portfolio/2013', {
                  templateUrl: 'views/pt/a2013.html',
                  controller: 'a2013ptController',
                  css: 'css/works.css',
                 title: 'Portfolio | 2013',
                       pthref:'pt',
                  enhref:'works/2013',
              homehref:'pt',
                   lang:'pt-br'
               }).
            
              when('/portfolio/2011', {
                  templateUrl: 'views/pt/a2011.html',
                  controller: 'a2011ptController',
                  css: 'css/works.css',
                 title: 'Portfolio | 2011',
                       pthref:'pt',
                  enhref:'works/2011',
              homehref:'pt',
                   lang:'pt-br'
               }).
              when('/portfolio/pre', {
                  templateUrl: 'views/pt/pre2011.html',
                  controller: 'PreptController',
                  css: 'css/works.css',
                 title: 'Portfolio | Pre 2011',
                       pthref:'pt',
                  enhref:'works/pre',
              homehref:'pt',
                   lang:'pt-br'
               }).
            
                when('/works/webdesign', {
                  templateUrl: 'views/webdesign.html',
                  controller: 'WebController',
                  css: 'css/works.css',
                 title: 'Works | Webdesign',
                       pthref:'portfolio/webdesign',
                  enhref:'en',
              homehref:'en',
                   lang:'en'
               }).
              when('/works/visualid', {
                  templateUrl: 'views/visualid.html',
                  controller: 'WebController',
                  css: 'css/works.css',
                 title: 'Works | Visual Id' , 
                pthref:'portfolio/visualid',
                  enhref:'en',
              homehref:'en',
                   lang:'en'
               }).
              when('/works/wordpress', {
                  templateUrl: 'views/wp.html',
                  controller: 'WpController',
                  css: 'css/works.css',
                 title: 'Works | Wordpress',
                pthref:'portfolio/wordpress',
                  enhref:'en',
              homehref:'en',
                   lang:'en'
               }).
                  when('/works/php', {
                  templateUrl: 'views/php.html',
                  controller: 'phpController',
                  css: 'css/works.css',
                 title: 'Works | PHP',
                pthref:'portfolio/php',
                  enhref:'en',
              homehref:'en',
                   lang:'en'
               }).
               when('/works/dev', {
                  templateUrl: 'views/development.html',
                  controller: 'DevController',
                  css: 'css/works.css',
                 title: 'Works | Development',
                pthref:'portfolio/dev',
                  enhref:'en',
              homehref:'en',
                   lang:'en'
               })
                
                .
                when('/works/html', {
                  templateUrl: 'views/html.html',
                  controller: 'htmlController',
                  css: 'css/works.css',
                 title: 'Works | HTML/CSS',
                pthref:'portfolio/html',
                  enhref:'en',
              homehref:'en',
                    lang:'en'
               })
                
                .
                 when('/works/photoshop', {
                  templateUrl: 'views/photoshop.html',
                  controller: 'photoshopController',
                  css: 'css/works.css',
                 title: 'Works | Photoshop',
                pthref:'portfolio/photoshop',
                  enhref:'en',
              homehref:'en',
                    lang:'en'
               })
                
                .
                 when('/works/aspnet', {
                  templateUrl: 'views/aspnet.html',
                  controller: 'aspnetController',
                  css: 'css/works.css',
                 title: 'Works | Asp.Net',
                pthref:'portfolio/aspnet',
                  enhref:'en',
              homehref:'en',
                    lang:'en'
               })
                      .
                 when('/works/pre', {
                  templateUrl: 'views/pre2011.html',
                  controller: 'preController',
                  css: 'css/works.css',
                 title: 'Works | Pre 2011',
                pthref:'portfolio/pre',
                  enhref:'en',
              homehref:'en',
                    lang:'en'
               })
                
                .
                  when('/works/2011', {
                  templateUrl: 'views/a2011.html',
                  controller: 'a2011Controller',
                  css: 'css/works.css',
                 title: 'Works | 2011',
                pthref:'portfolio/2011',
                  enhref:'en',
              homehref:'en',
                    lang:'en'
               })
                
                .
                 when('/works/2012', {
                  templateUrl: 'views/a2012.html',
                  controller: 'a2012Controller',
                  css: 'css/works.css',
                 title: 'Works | 2012',
                pthref:'portfolio/2012',
                  enhref:'en',
              homehref:'en',
                    lang:'en'
               })
                
                .
            
                   when('/works/2013', {
                  templateUrl: 'views/a2013.html',
                  controller: 'a2013Controller',
                  css: 'css/works.css',
                 title: 'Works | 2013',
                pthref:'portfolio/2013',
                  enhref:'en',
              homehref:'en',
                    lang:'en'
               })
                
                .
                   when('/works/2014', {
                  templateUrl: 'views/a2014.html',
                  controller: 'a2014Controller',
                  css: 'css/works.css',
                 title: 'Works | 2014'
                ,
                pthref:'portfolio/2014',
                  enhref:'en',
              homehref:'en',
                    lang:'en'
               })
                
                .
            
            
                when('/works/2015', {
                  templateUrl: 'views/a2015.html',
                  controller: 'a2015Controller',
                  css: 'css/works.css',
                 title: 'Works | 2015',
                pthref:'portfolio/2015',
                  enhref:'en',
              homehref:'en',    
                lang:'en'
               })
                
                .
            
            
            
            
            when('/portfolio/:slug', {templateUrl:function(params){ return 'views/works/pt/' + params.slug +'.html'  }, controller: 'ProjetoController',css: 'css/works.css',  title: 'Portfolio',
                pthref:'pt',
                  enhref:'works',
              homehref:'pt',
                   lang:'pt'     
                                 }).
     
            
            when('/works/:slug', {templateUrl:function(params){ return 'views/works/' + params.slug +'.html'  }, controller: 'ProjectController',css: 'css/works.css',  title: 'Works',
                pthref:'portfolio',
                  enhref:'en',
              homehref:'en',
                   lang:'en'
                                 
                                 }).

               otherwise({
                  redirectTo: '/pt'
               });
             
             $locationProvider.html5Mode(true);
         });

      mainApp.controller('ProjectController',function($scope, $http) {
 $http.get('data/portfolioin.min.json').
   success(function(data, status, headers, config) {
     $scope.posts = data;
     $scope.otherCondition = true;

$scope.myCustomFilter = function(params) {


    
    return params.slug.match(slug) && $scope.otherCondition;
}
   });});



      mainApp.controller('ProjetoController',function($scope, $http) {
 $http.get('data/portfolioin-br.min.json').
   success(function(data, status, headers, config) {
     $scope.posts = data;
     $scope.otherCondition = true;

$scope.myCustomFilter = function(params) {


    
    return params.slug.match(slug) && $scope.otherCondition;
}
   });});


      mainApp.controller('WorkController',function($scope, $http) {
 $http.get('data/portfolio.json').
   success(function(data, status, headers, config) {
     $scope.posts = data;
  
     
     
     
   })
 
 
 ;});

     mainApp.controller('AboutController', function($scope) { });
     mainApp.controller('SobreController', function($scope) { });
    mainApp.controller('PTController', function($scope) { });

     mainApp.controller('ContatoController', function($scope) {
     
         });
     
      mainApp.controller('preController',function($scope, $http) {
 $http.get('data/portfolio.json').
   success(function(data, status, headers, config) {
     $scope.posts = data;
   });});


      mainApp.controller('a2011Controller',function($scope, $http) {
 $http.get('data/portfolio.json').
   success(function(data, status, headers, config) {
     $scope.posts = data;
   });});
      mainApp.controller('a2013Controller',function($scope, $http) {
 $http.get('data/portfolio.json').
   success(function(data, status, headers, config) {
     $scope.posts = data;
   });});
      mainApp.controller('a2014Controller',function($scope, $http) {
 $http.get('data/portfolio.json').
   success(function(data, status, headers, config) {
     $scope.posts = data;
   });});
      mainApp.controller('a2012Controller',function($scope, $http) {
 $http.get('data/portfolio.json').
   success(function(data, status, headers, config) {
     $scope.posts = data;
   });});



      mainApp.controller('a2015Controller',function($scope, $http) {
 $http.get('data/portfolio.json').
   success(function(data, status, headers, config) {
     $scope.posts = data;
   });});


mainApp.controller('WpController',function($scope, $http) {
 $http.get('data/portfolio.json?nocache=123').
   success(function(data, status, headers, config) {
     $scope.posts = data;
   });});
    mainApp.controller('aspnetController',function($scope, $http) {
 $http.get('data/portfolio.json?nocache=123').
   success(function(data, status, headers, config) {
     $scope.posts = data;
   });});
      mainApp.controller('htmlController',function($scope, $http) {
 $http.get('data/portfolio.json?nocache=123').
   success(function(data, status, headers, config) {
     $scope.posts = data;
   });});
      mainApp.controller('phpController',function($scope, $http) {
 $http.get('data/portfolio.json?nocache=123').
   success(function(data, status, headers, config) {
     $scope.posts = data;
   });});
     mainApp.controller('PortfolioController',function($scope, $http) {
 $http.get('data/portfolio-br.json?nocache=123').
   success(function(data, status, headers, config) {
     $scope.posts = data;
   });});

    mainApp.controller('photoshopController',function($scope, $http) {
 $http.get('data/portfolio.json?nocache=123').
   success(function(data, status, headers, config) {
     $scope.posts = data;
   });});
     mainApp.controller('WebController',function($scope, $http) {
 $http.get('data/portfolio.json').
   success(function(data, status, headers, config) {
     $scope.posts = data;
   });});
    mainApp.controller('DevController',function($scope, $http) {
 $http.get('data/portfolio.json?nocache=123').
   success(function(data, status, headers, config) {
     $scope.posts = data;
   });});
    mainApp.controller('VidController',function($scope, $http) {
 $http.get('data/portfolio.json?nocache=123').
   success(function(data, status, headers, config) {
     $scope.posts = data;
   });});
     mainApp.controller('VidptController',function($scope, $http) {
 $http.get('data/portfolio-br.json?nocache=123').
   success(function(data, status, headers, config) {
     $scope.posts = data;
   });});
    mainApp.controller('DevptController',function($scope, $http) {
 $http.get('data/portfolio-br.json?nocache=123').
   success(function(data, status, headers, config) {
     $scope.posts = data;
   });});
    mainApp.controller('WebptController',function($scope, $http) {
 $http.get('data/portfolio-br.json?nocache=123').
   success(function(data, status, headers, config) {
     $scope.posts = data;
   });});

   mainApp.controller('WpptController',function($scope, $http) {
 $http.get('data/portfolio-br.json?nocache=123').
   success(function(data, status, headers, config) {
     $scope.posts = data;
   });});

   mainApp.controller('AspnetptController',function($scope, $http) {
 $http.get('data/portfolio-br.json').
   success(function(data, status, headers, config) {
     $scope.posts = data;
   });});
 mainApp.controller('PhpptController',function($scope, $http) {
 $http.get('data/portfolio-br.json').
   success(function(data, status, headers, config) {
     $scope.posts = data;
   });});

mainApp.controller('PsptController',function($scope, $http) {
 $http.get('data/portfolio-br.json?nocache=123').
   success(function(data, status, headers, config) {
     $scope.posts = data;
   });});

 mainApp.controller('HtmlptController',function($scope, $http) {
 $http.get('data/portfolio-br.json?nocache=123').
   success(function(data, status, headers, config) {
     $scope.posts = data;
   });});
 mainApp.controller('a2011ptController',function($scope, $http) {
 $http.get('data/portfolio-br.json?nocache=123').
   success(function(data, status, headers, config) {
     $scope.posts = data;
   });});
 mainApp.controller('a2012ptController',function($scope, $http) {
 $http.get('data/portfolio-br.json?nocache=123').
   success(function(data, status, headers, config) {
     $scope.posts = data;
   });});
 mainApp.controller('a2013ptController',function($scope, $http) {
 $http.get('data/portfolio-br.json?nocache=123').
   success(function(data, status, headers, config) {
     $scope.posts = data;
   });});
 mainApp.controller('a2013ptController',function($scope, $http) {
 $http.get('data/portfolio-br.json?nocache=123').
   success(function(data, status, headers, config) {
     $scope.posts = data;
   });});
 mainApp.controller('a2014ptController',function($scope, $http) {
 $http.get('data/portfolio-br.json?nocache=123').
   success(function(data, status, headers, config) {
     $scope.posts = data;
   });});
 mainApp.controller('PreptController',function($scope, $http) {
 $http.get('data/portfolio-br.json?nocache=123').
   success(function(data, status, headers, config) {
     $scope.posts = data;
   });});
     mainApp.controller('HomeController', function($scope) {
         });
     mainApp.controller('CurriculoController', function($scope) {
         });
     mainApp.controller('Resume', function($scope) {
         });
  mainApp.controller('PanelController', function(){

  this.selectTab = function(setTab){
    this.tab = setTab;
  }
  this.isSelected = function(checkTab){
    return this.tab === checkTab;
  }
  
});
mainApp.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
        $rootScope.firsttitle = current.$$route.firsttitle;
         $rootScope.pthref = current.$$route.pthref;
             $rootScope.homehref = current.$$route.homehref;
             $rootScope.lang = current.$$route.lang;
             $rootScope.enhref = current.$$route.enhref;
    });
}]);