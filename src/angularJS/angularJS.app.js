import singleSpaAngularJS from 'single-spa-angularjs'
import angular from 'angular'
import './app.module'
import './routes'

const domElementGetter = () => document.getElementById('angularJS')

const angularLifeCycles = singleSpaAngularJS({
	angular,
	domElementGetter,
	mainAngularModule: 'angularJS-app',
	uiRouter: true,
	preserveGlobal: false
})

export const bootstrap = [
	angularLifeCycles.bootstrap
]

export const mount = [
	angularLifeCycles.mount
]

export const unmount = [
	angularLifeCycles.unmount
]