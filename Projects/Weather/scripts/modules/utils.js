const addZero = (n) => {
    if (n < 10) {
        n = `0${n}`;
    }
    return n;
};

export const getCurrentDateTime = () => {

    const months = [
        'янв',
        'фев',
        'мар',
        'апр',
        'май',
        'июн',
        'июл',
        'авг',
        'сен',
        'окт',
        'ноя',
        'дек',
    ];

    const weekdays = [
        'воскресенье',
        'понедельник',
        'вторник',
        'среда',
        'четверг',
        'пятница',
        'суббота',
    ]

    const date = new Date();

    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = weekdays[date.getDay()];

    const hours = addZero(date.getHours());
    const minutes = addZero(date.getMinutes());

    return {dayOfMonth, month, year, hours, minutes, dayOfWeek};
};

export const getWindDirection = (deg) => {
    const directions = [
        '&#8593;',
        '&#8599;',
        '&#8594;',
        '&#8600;',
        '&#8595;',
        '&#8601;',
        '&#8592;',
        '&#8598;'
    ];

    const i = Math.round(deg / 45) % 8;

    return directions[i];
}
