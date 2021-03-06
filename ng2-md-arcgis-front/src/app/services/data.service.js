/**
 * Created by najorcruzcruz on 11/7/16.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.BASE_REST_URL = 'http://localhost:3000/api/';
    }
    DataService.prototype.getPoints = function () {
        return this.http.get(this.BASE_REST_URL + 'points')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.getPoint = function (id) {
        return this.http.get(this.BASE_REST_URL + ("points/" + id))
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.savePoint = function (point) {
        return this.http.post(this.BASE_REST_URL + 'points/', point)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.updatePoint = function (point) {
        return this.http.put(this.BASE_REST_URL + ("points/" + point._id), point)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.deletePoint = function (point) {
        return this.http.delete(this.BASE_REST_URL + ("points/" + point._id))
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        console.error(error);
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable()
], DataService);
exports.DataService = DataService;
