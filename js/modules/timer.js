function timer(deadline) {


    function setDateData(deadline) {
        let total = new Date(deadline) - new Date(),
            days, hours, minutes, seconds

        if (total <= 0) {
            days = 0
            hours = 0
            minutes = 0
            seconds = 0
        } else {
            days = Math.floor(total / (1000 * 60 * 60 * 24))
            hours = Math.floor(total / (1000 * 60 * 60) % 24)
            minutes = Math.floor(total / (1000 * 60) % 60)
            seconds = Math.floor(total / 1000 % 60)
        }
        return {
            total,
            days,
            hours,
            minutes,
            seconds,
        }
    }

    function setClock(deadline) {
        const days = document.querySelector('#days'),
            hours = document.querySelector('#hours'),
            minutes = document.querySelector('#minutes'),
            seconds = document.querySelector('#seconds')

        const timerId = setInterval(updateClock, 1000)
        updateClock()

        function updateClock() {
            const total = setDateData(deadline)
            days.textContent = getZero(total.days)
            hours.textContent = getZero(total.hours)
            minutes.textContent = getZero(total.minutes)
            seconds.textContent = getZero(total.seconds)
            if (total <= 0) clearInterval(timerId)
        }

        function getZero(num) {
            if (num < 10) {
                return `0${num}`
            } else {
                return num
            }
        }
    }
    setClock(deadline)

}
export default timer