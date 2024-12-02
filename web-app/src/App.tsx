import { ReactNode, useState } from "react";

import "./App.css";
import DragArea from "./components/DragArea";
import { createWidget, WidgetType } from "./widgetGenerator";

function App() {
    const [widgets, setWidgets] = useState<ReactNode[]>([]);

    return (
        <div className="h-screen text-white">
            <div className="h-full grid grid-cols-3 gap-2 grid-rows-[auto,auto,0,0,0,0,1fr]">
                <div className="hidden xl:block"></div> {/* Ghost grid element to fill up the grid space on the left */}

                <div className="mt-2 col-span-3 xl:col-auto ">
                    <div className="select-none w-fit mx-auto border-dashed border-2 border-orange-300 p-3 rounded-lg">
                        <h1 className="text-center text-orange-400 text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-5xl font-bold underline">
                            Streamy Stats
                        </h1>
                        <sub className="text-xs md:text-base xl:text-lg">
                            <h4 className="text-center mt-1 text-orange-200 italic">
                                Just a proof of concept web app.
                            </h4>
                        </sub>
                    </div>
                </div>

                <div className="col-span-3 xl:col-auto grid grid-cols-4 gap-5 mx-16 my-5">
                    {/* Just some ghost grid elements to push the add widget button to the right */}
                    <div></div>
                    <div></div>
                    <div>
                        TODO: widget dropdown will go here :)
                    </div>
                    <button className="bg-gray-800 py-2 rounded-xl hover:bg-gray-600 transition" onClick={
                        () => {
                            setWidgets(
                                [
                                    ...widgets,
                                    createWidget(WidgetType.STATS)
                                ]
                            );
                        }
                    }>Add Widget</button>
                </div>

                <div className="row-span-6 col-span-3 flex">
                    <div className="flex-grow mx-6 mb-6 border-dashed border-2 border-gray-300 rounded-lg">
                        <DragArea widgets={widgets} />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;