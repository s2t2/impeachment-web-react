
import {scaleSequential, interpolateRdBu as RdBu} from 'd3'

// 0 is blue, 1 is red
const opinionScale = scaleSequential(RdBu).domain([1, 0])

// -7% is blue, +7% is red
//const opinionShiftScale = scaleSequential(RdBu).domain([0.065, -0.065]) // v1 data (just bots in communities)
//const opinionShiftScale = scaleSequential(RdBu).domain([0.13, -0.13]) // v2 data (all bots)
//const opinionShiftScale = scaleSequential(RdBu).domain([0.0065, -0.0065]) // v3 data (calcs for the first time include users who have been retweeted / more accurate with respect to who is influencing and how much)
const opinionShiftScale = scaleSequential(RdBu).domain([0.15, -0.15]) // v4 data (normalized)

const legendBlue = "steelblue" // opinionScale(0.15) // "flag" blue: "#002868"
const legendRed = "#D62021" // opinionScale(0.85) // "flag" red: "#bf0a30"
const legendNeutral = "#ccc"

//const barRed = opinionScale(0.8)

export {
    opinionScale, opinionShiftScale,
    legendBlue, legendRed, legendNeutral,
    //barRed
}
