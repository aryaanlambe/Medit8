const container = document.querySelector('.container')
const text = document.querySelector('#text')

// This variable will be used for setting the total time the marker will take to get back to its starting point.
// Time is in milliseconds (JS convention).
const finalTime = 7500
// Time for breathing in.
const inTime = (finalTime / 5) * 2
// Time for holding breath.
const holdBreath = finalTime / 5

animBreathe()

// This function constantly runs.
function animBreathe() {
    // set values for in-center text.
    text.innerHTML = 'Take a breath...'
    container.className = 'container expand'

    setTimeout(() => {

        text.innerText = 'Hold your breath'

        setTimeout(() => {

            text.innerText = 'Breathe out'
            // At this point, the background circle should scale down.
            container.className = 'container scale_down'

        }, holdBreath)

    }, inTime) // The value here is duration to wait before re-executing the function body.

}

setInterval(animBreathe, finalTime)
