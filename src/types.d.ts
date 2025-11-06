

declare namespace SparkJS {
  type Props = Record<string, unknown>
  type ObjectConstructor = new (props: Props) => Object
  type RenderResult = JSX | JSX[] | string
  type RenderCallback = () => RenderResult

  type EffectType = (
    | ''
    | 'Placement'
    | 'Update'
    | 'Deletion'
  )

  type NodeType = (
    | 'Root'
    | 'Component'
    | 'Element'
    | 'Text'
  )

  type NodeProps = Props & Partial<{
    key: string
    ref: RefObject
  }>

  type RefObject = {
    current: any
  }

  type JSX = {
    elementName: ObjectConstructor | string
    attributes: NodeProps
    children: (JSX|string)[]
  }

  type AppConfig = {
    mountEl: HTMLElement | string
    render: RenderCallback
  }
}