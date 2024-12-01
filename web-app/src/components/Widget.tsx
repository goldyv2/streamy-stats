import { ReactNode } from "react";
import Draggable from "react-draggable"; 
// TODO: A library just to implement a dragging component is kinda 
// crazy, I should replace this with my own implementation sometime.

interface Props {
    children: ReactNode
}

function Widget({ children }: Props) {
    return (
        <Draggable>
            <div className="
                block w-fit absolute cursor-move select-none max-w-sm p-4 
                border-2 border-gray-300 rounded-lg shadow bg-gray-800 hover:bg-gray-600">

                {children}

            </div>
        </Draggable>
    )
}

export default Widget;