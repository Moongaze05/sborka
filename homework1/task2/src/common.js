const message = document.querySelector('.message');

export default function renderMessage(text) {
    message.textContent = text;
}

export function renderDates(result) {
    message.innerHTML = `
    Годы: ${result.years}
    Месяцы: ${result.months}
    Дни: ${result.days}
    `
}

export const time = document.querySelector('.time');

export function renderTime(hours, mins, secs) {
    time.innerHTML = `Осталось: ${Math.trunc(hours)}:${Math.trunc(mins)}:${Math.trunc(secs)}`
}