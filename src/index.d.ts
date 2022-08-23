
import MyGraph from './mxgraph/graph';
import { mxCell } from 'mxgraph'
import { NodeInfo } from './mxgraph/type/node';
declare module 'mxgraph' {
  export interface mxEditor {
    graph: MyGraph
  }
  export interface mxConnectionHandler {
    graph: MyGraph
  }
  export interface mxCell {
    info: NodeInfo
  }
  // export class mxGraphModel {
  //   getCell(id: string):undefined| mxCell
  // }
  class mxStyleRegistry {
    putValue(name: string, func: any): void
  }
  export interface mxSvgCanvas2D {
    text(
      x: number,
      y: number,
      w: number,
      h: number,
      str: string,
      align?: string,
      valign?: string,
      wrap?: string,
      format?: string,
      overflow?: string,
      clip?: string,
      rotation?: number,
      dir?: string
    ): void;
    image(
      x: number, y: number, w: number, h: number, src: string, aspect?: boolean, flipH?: boolean, flipV?: boolean
    )
  }
}