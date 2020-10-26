
import {scaleSequential, interpolateRdBu as RdBu} from 'd3'

// TODO: rename as opinionScale
// 0 is blue, 1 is red
const opinionScale = scaleSequential(RdBu).domain([1, 0])

// -7% is blue, +7% is red
const opinionShiftScale = scaleSequential(RdBu).domain([0.065, -0.065])

const legendBlue = "steelblue" // opinionScale(0.15) // "flag" blue: "#002868"
const legendRed = "#D62021" // opinionScale(0.85) // "flag" red: "#bf0a30"
const legendNeutral = "#ccc"

//const barRed = opinionScale(0.8)

export {
    opinionScale, opinionShiftScale,
    legendBlue, legendRed, legendNeutral,
    //barRed
}
