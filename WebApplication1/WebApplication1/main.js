(function () {
    'use strict';

    angular.module(APPNAME)
        .service('productService', productService);

    productService.$inject = ['$http'];
    function productService($http) {

        var url = '/api/products';
        var svc = this;

        svc.getAll = _getAll;
        svc.getById = _getById;
        svc.create = _create;
        svc.delete = _delete;
        svc.update = _update;

        function _getAll() {
            var settings = {
                url: url,
                method: "GET",
                cache: false,
                withCredentials: true
            };
            return $http(settings);
        }

        function _getById(id) {
            var settings = {
                url: url + '/' + id,
                method: "GET",
                cache: false,
                withCredentials: true
            };
            return $http(settings)
        }

        function _create() {
            var settings = {
                url: url,
                method: "POST",
                cache: false,
                withCredentials: true
            }
            return $http(settings)
        }

        function _delete(id) {
            var settings = {
                url: url + '/' + id,
                method: "DELETE",
                cache: false,
                withCredentials: true
            }
            return $http(settings)
        }

        function _update(data) {
            var settings = {
                url: url + '/' + data.id,
                method: "PUT",
                cache: false,
                withCredentials: true
            }
        }
    }
    

})();