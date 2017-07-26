import { module, kernel, match, initializeContract, executeContract, reactiveContract, namespace } from '@lib'
import $this from './alias'
import { state, event } from './contexts'


const logic = new (class {
  init = initializeContract()

  // eventProcess = reactiveContract()

})()

const kernels = new (class {
  main = kernel()
})()

export default module($this, { state }, kernels)
