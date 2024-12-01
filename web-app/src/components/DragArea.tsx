import { ReactNode } from "react"

interface Props {
    widgets: ReactNode[]
}

function DragArea(props: Props) {
    return (
        <div className="h-full bg-gray-900 rounded-lg">
            {props.widgets.map((value) => {return value;})}
        </div>
    )
}

export default DragArea