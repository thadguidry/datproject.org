const html = require('choo/html')
const header = require('./../../components/header')
const drop = require('drag-drop')

const landingPage = (state, prev, send) => {
  return html`
    <div>
      ${header(state, prev, send)}
      <div class="landing-main container">
        hello

      </div>
    </div>`
}

module.exports = landingPage