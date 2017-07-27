import { module, kernel, match, initializeContract, executeContract, reactiveContract, multiReactiveContract, namespace } from '@lib'
import $this from './alias'
import { state, input, event } from './contexts'
import other from '../Other'
import partial from '../Partial'


const logic = namespace('General', new (class {
  init = initializeContract()

  eventProcess = reactiveContract()
    .enter(match.all(event.event, other.contexts.state.application))

  multis = multiReactiveContract(state, input, other.contexts.state)
    .enter(match.all(event.event, event.index))
    .left(match.all(event.event, event.index))
    .enter(match.all(event.event, event.processed))

})())

const kernels = new (class {
  main = kernel()
    .add(logic.init)
    .add(logic.eventProcess)
    .add(other.kernels.main)
})()

export default module($this, { state }, kernels)
