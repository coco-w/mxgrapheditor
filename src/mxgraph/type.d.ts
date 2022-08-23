import MyGraph from './graph';
declare module 'react-xml-parser'
declare global {
  interface Window {
    graph: MyGraph;
  }
}