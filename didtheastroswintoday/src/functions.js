export const getIndexOfMostRecentGame = (array, todaysDate, start, end) => {
    
    if(start > end) return end

    let mid=Math.floor((start + end)/2);

    let midDate = new Date(array[mid].scheduled)

    if (sameDay(midDate, todaysDate)) return mid
    
    if(midDate > todaysDate){
        return getIndexOfMostRecentGame(array, todaysDate, start, mid-1);
    }
    else{
        return getIndexOfMostRecentGame(array, todaysDate, mid+1, end); 
    }
}


export const sameDay = (date, date2) => {
    return date.getFullYear() === date2.getFullYear() && 
    date.getDay() === date2.getDate() && 
    date.getMonth() === date2.getMonth()
}