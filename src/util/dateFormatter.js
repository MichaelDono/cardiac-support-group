
export default (unformattedDate) => {
    const publishDate = new Date(unformattedDate);
    const date = publishDate.getDate() // day of month
    const months = {
        0: 'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December'
    }

    const days = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
    ]

    const monthName = months[publishDate.getMonth()]
    const dayName = days[publishDate.getDay()] 

    let hours = publishDate.getHours() + 24
    let mid ='am';

    if (hours === 0) { // At 00 hours we need to show 12 am
        hours = 12;
    } else if (hours > 12) {
        hours = hours % 12;
        mid = 'pm';
    }
      
    return `${dayName}, ${monthName} ${date} • ${hours}${mid}`
}
