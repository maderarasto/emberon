declare namespace SparkJS {
  type Props = Record<string, unknown>
  type ComponentConstructor = new (props: Props) => import('./component').default
  type EventListener = EventListenerOrEventListenerObject
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

  type NodeTag = (
    string | ComponentConstructor
  )

  type NodeProps = Props & Partial<{
    key: string
    ref: RefObject
  }>

  type RefObject = {
    current: any
  }

  type JSX = {
    elementName: ComponentConstructor | string
    attributes: NodeProps
    children: (JSX|string)[]
  }

  type AppConfig = {
    mountEl: HTMLElement | string
    render: RenderCallback
  }
}