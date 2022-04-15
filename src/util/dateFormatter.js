
export default (unformattedDate, showYear = true) => {
    const publishDate = new Date(unformattedDate);

    let dateOptions = { weekday: 'short', month: 'long', day: 'numeric' };
    let timeOptions = { hour: 'numeric', hour12: true };
    
    if (showYear) {
        dateOptions = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
    }

    const dateString = publishDate.toLocaleString('en-GB', dateOptions);
    const timeString = publishDate.toLocaleString('en-GB', timeOptions);

    return `${dateString} • ${timeString}`
}
