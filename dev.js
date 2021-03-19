// This module is only used for development. It is being loaded as a module (using <script type="module" />)
// inside index.html file (root file for development). This module imports Banana class and demo.js module
// that adds required functionality for the development Web UI. Run `npm run serve` to start dev server

// eslint-disable-next-line no-unused-vars
import Banana from './src'
import '/demo/js/demo'
window.Banana = Banana
window.localePathPrefix = '/demo/i18n/'
