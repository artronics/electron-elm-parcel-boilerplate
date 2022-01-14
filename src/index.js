// You can similarly write Sass and parceljs takes care of everything! Just import it here.
import './global.css'
import { Elm } from './Main.elm'

console.log(`${__dirname}/../build`)
Elm.Main.init({
  node: document.getElementById('root'),
  flags: 'My Elm Counter',
})
