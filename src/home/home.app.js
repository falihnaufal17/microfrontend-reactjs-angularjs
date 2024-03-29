import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import Home from './root.component'

const domElementGetter = () => {
    return document.getElementById('home')
}

const reactLifeCycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Home,
    domElementGetter
})

export const bootstrap = [
    reactLifeCycles.bootstrap
]

export const mount = [
    reactLifeCycles.mount
]

export const unmount = [
    reactLifeCycles.unmount
]