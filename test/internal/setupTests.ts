import noop from 'lodash/noop'

import './support/extend-jest-with-chai';

Object.defineProperty(window, 'scrollTo', { value: noop, writable: true })
window.HTMLElement.prototype.scrollIntoView = () => {}
