// DEFINE YOUR FUNCTION BELOW:
function returnDay(dayNum) {
    let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if(dayNum < 1 || dayNum > 7) {
        return null;
    }
    return daysOfWeek[dayNum - 1];
}