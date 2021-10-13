function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42)
}

function distanceFromHqInFeet(blocks) {
    return Math.abs((blocks - 42) * 264)
}

function distanceTravelledInFeet(a, b) {
    return Math.abs((a - b) * 264)

}

function calculatesFarePrice(a, b) {
    let feet = Math.abs((a - b) * 264)
    if (feet < 400) {
        return 0
    } else if (feet < 2000) {
        return (feet - 400) * .02
    } else if (feet < 2500 && feet > 2000) {
        return 25
    } else if (feet > 2500) {
        return "cannot travel that far"
    }
}