import angular from 'angular'
import './root.component'
import './gifs.component'

angular
	.module('angularJS-app')
	.config(($stateProvider, $locationProvider) => {
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		})

		$stateProvider
			.state('root', {
				url: '/angularJS',
				template: '<root/>',
			})
			.state('root.gifs', {
				url: '/gifs',
				template: '<gifs />'
			})
	})