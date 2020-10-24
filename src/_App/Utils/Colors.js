
import {scaleSequential, interpolateRdBu} from 'd3'

const colorScale = scaleSequential(interpolateRdBu).domain([1, 0]) // reverse so 0:blue and 1:red

const legendBlue = "steelblue" // colorScale(0.15) // "flag" blue: "#002868"
const legendRed = "#D62021" // colorScale(0.85) // "flag" red: "#bf0a30"
const legendNeutral = "#ccc"

export {
    colorScale, legendBlue, legendRed, legendNeutral
}
