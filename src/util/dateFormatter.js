const dateFormatter =  (unformattedDate, showYear = true) => {
    const publishDate = new Date(unformattedDate);

    let dateOptions = { weekday: 'short', month: 'long', day: 'numeric' };
    
    if (showYear) {
        dateOptions = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
    }

    let hours = publishDate.getHours();
    let suffix = hours >= 12 ? "pm" : "am"
    hours = hours % 12;
    hours = hours ? hours : 12;
    const timeString = hours + suffix;

    const dateString = publishDate.toLocaleString('en-GB', dateOptions);


    return `${dateString} • ${timeString}`
}

export default dateFormatter;