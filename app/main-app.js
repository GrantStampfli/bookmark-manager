angular.module('Manager', [

])
.controller('MainCtrl', function($scope) {
        $scope.categories = [
            {"id": 0, "name": "JavaScript"},
            {"id": 1, "name": "Themes"},
            {"id": 2, "name": "Interesting"},
            {"id": 3, "name": "Keep"}
        ];
        $scope.bookmarks = [
            {"id": 0, "title": "angularjs", "url": "http://angularjs.org", "category": "JavaScript"},
            {"id": 1, "title": "angularjs", "url": "http://angularjs.org", "category": "JavaScript"},
            {"id": 2, "title": "angularjs", "url": "http://angularjs.org", "category": "JavaScript"},
            {"id": 3, "title": "angularjs", "url": "http://angularjs.org", "category": "JavaScript"},
            {"id": 4, "title": "angularjs", "url": "http://angularjs.org", "category": "JavaScript"},
            {"id": 5, "title": "angularjs", "url": "http://angularjs.org", "category": "JavaScript"},
            {"id": 6, "title": "angularjs", "url": "http://angularjs.org", "category": "JavaScript"},
            {"id": 7, "title": "angularjs", "url": "http://angularjs.org", "category": "JavaScript"},
            {"id": 8, "title": "angularjs", "url": "http://angularjs.org", "category": "JavaScript"}

        ];
})
;