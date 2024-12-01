import { ReactNode } from "react"
import Widget from "./components/Widget"

export enum WidgetType {
    STREAM = 1,
    STATS = 2,
}

// totally not hardcoding my dummy web api.
const API_URL = "http://localhost:5173";

export function createWidget(type: WidgetType): ReactNode {
    if (type == WidgetType.STREAM) {
        return (
            <Widget>
                I'm a stream widget!
            </Widget>
        )
    } else if (type == WidgetType.STATS) {
        // TOOD: Stream stats from web api '/stats' endpoint.
        return (
            <Widget>
                I'm a stats widget!
            </Widget>
        )
    }
}