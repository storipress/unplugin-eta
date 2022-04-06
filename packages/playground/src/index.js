import * as Eta from 'eta'
import Hello from './hello.eta'

const res = Eta.render(Hello, {
  name: 'Eta',
})

document.querySelector('#root').innerHTML = res
