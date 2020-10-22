
// TODO: test all these functions

function formatNumber(num) {
    // formats 11300123 as "11,300,123"
    return parseInt(num).toLocaleString()
}

function formatPct(num) {
    // formats 0.3444444 as "34.4%"
    return (num * 100.0).toFixed(1) + "%"
}

function numberLabel(num){
    var label
    if(num >= 1_000_000){
        label = (num / 1_000_000).toFixed(1) + "M"
    } else if (num >= 1_000){
        label = (num / 1_000).toFixed(1) + "K"
    }  else {
        label = num
    }
    return label
}

// todo: add these assertions to the test suite!
//debugger;
//console.log(formatNumber(11300123) === '11,300,123')
//console.log(formatBigNumber(11300123) === '11300.1K') // hey can we do intelligent millions labels? let's use a package maybe.
//console.log(formatPct(0.3444444) === '34.4%')

export {formatPct, formatNumber, numberLabel}
