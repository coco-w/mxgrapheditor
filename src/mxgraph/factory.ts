import factory from 'mxgraph'

// const mx = 
declare global {
  interface Window {
    mxBasePath: string
    mxLoadResources: boolean
    mxForceIncludes: boolean
    mxLoadStylesheets: boolean
    mxResourceExtension: string
  }
}

window.mxBasePath = ''
window.mxLoadResources = true
window.mxForceIncludes = false
window.mxLoadStylesheets = true
window.mxResourceExtension = '.txt'

export default factory({
  // mxBasePath: ''
})