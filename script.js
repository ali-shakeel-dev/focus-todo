// Variables
let container = document.querySelector(".container");
let container2 = document.querySelector(".container2");
let focusTime = document.querySelector("#focusTime");
let focusTime2 = document.querySelector("#focusTime2");
let startBtn = document.querySelector("#startBtn");
let startBtn2 = document.querySelector("#startBtn2");
let reloadButton = document.querySelector("#reloadButton");
let span1 = document.querySelector("#span1");
let span2 = document.querySelector("#span2");
let span3 = document.querySelector("#span3");
let span4 = document.querySelector("#span4");
let sound = document.querySelector("#alarmTone")

// Focus Container 1 Function
function func25() {
    container.classList.add("true")
    startBtn.addEventListener('click', function () {
        let startMinutes = 25;
        let time = startMinutes * 60;
        let interval25 = setInterval(focusTimer, 1000)

        function focusTimer() {
            let minutes = Math.floor(time / 60)
            let seconds = time % 60;
            seconds < 10 ? "0" + seconds : seconds;
            span1.innerHTML = minutes;
            span2.innerHTML = seconds;
            if (span1.innerHTML < 10) {
                span1.innerHTML = "0" + minutes
            }
            if (span2.innerHTML < 10) {
                span2.innerHTML = "0" + seconds
            }
            time--;

            if (span1.innerHTML + span2.innerHTML == 0) {
                clearInterval(interval25)
                container.classList.remove("true")
                sound.play()
                func5()
            }
        }
        reloadButton.classList.add("true")
    }, { once: true })

    document.querySelector("#skipButton").addEventListener('click', () => {
        container.classList.toggle("true")
        func5()
        if (container2.classList.contains("true") && container.classList.contains("true")) {
            container2.classList.remove("true")
            container.classList.add("true")
        }
    })
}
func25()
// Focus Container 2 Function
function func5() {
    container2.classList.add("true")
    startBtn2.addEventListener('click', function () {
        let interval5 = setInterval(focusTimer2, 1000)
        let startMinutes = 5;
        let time = startMinutes * 60;
        function focusTimer2() {
            let minutes = Math.floor(time / 60)
            let seconds = time % 60;
            seconds < 10 ? "0" + seconds : seconds;
            span3.innerHTML = minutes;
            span4.innerHTML = seconds;
            if (span3.innerHTML < 10) {
                span3.innerHTML = "0" + minutes
            }
            if (span4.innerHTML < 10) {
                span4.innerHTML = "0" + seconds
            }
            time--;

            if (span3.innerHTML + span4.innerHTML == 0) {
                clearInterval(interval5)
                container2.classList.remove("true")
                sound.play()
                func25()
            }
        }
        reloadButton.classList.add("true")
    }, { once: true })
}

// Page Reload
reloadButton.addEventListener('click', () => {
    window.location.reload()
    window.location.href
})