angular.module('Manager', [

])
.controller('MainCtrl', function($scope) {
        $scope.categories = [
            {"id": 0, "name": "JavaScript"},
            {"id": 1, "name": "Themes"},
            {"id": 2, "name": "Hosting"},
            {"id": 3, "name": "Programing"}
        ];

        $scope.bookmarks = [
            {"id": 0, "title": "angularjs", "url": "http://angularjs.org", "category": "JavaScript"},
            {"id": 1, "title": "JavaScript PCS", "url": "http://portlandcodeschool.github.io/jsi", "category": "JavaScript"},
            {"id": 2, "title": "Bootstrap Themes", "url": "http://prepbootstrap.com", "category": "Themes"},
            {"id": 3, "title": "GoDaddy", "url": "http://godaddy.com", "category": "Hosting"},
            {"id": 4, "title": "DigitalOcean", "url": "http://digitalocean.com", "category": "Hosting"},
            {"id": 5, "title": "Plural Site", "url": "http://pluralstie.com", "category": "Programing"},
            {"id": 6, "title": "Google Developers", "url": "http://developers.google.com", "category": "Programing"},
            {"id": 7, "title": "Fuel PHP", "url": "http://fuelphp.com", "category": "Programing"},
            {"id": 8, "title": "To Do MVC", "url": "http://todomvc.com", "category": "Programing"}

        ];

        $scope.currentCategory = null;

        function setCurrentCategory(category) {
            $scope.currentCategory = category;
        }

        function isCurrentCategory(category) {
            return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
        }

        $scope.setCurrentCategory = setCurrentCategory;
        $scope.isCurrentCategory = isCurrentCategory;
})
;