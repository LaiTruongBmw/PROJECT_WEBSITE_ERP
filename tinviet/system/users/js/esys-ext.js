/**
 * http://usejsdoc.org/
 */
function getMonths(month,year){
    var ar = [];
    var start = moment(year+"-"+month,"YYYY-MMM");
    for(var end = moment(start).add(1,'month');  start.isBefore(end); start.add(1,'day')){
        ar.push(start.format('D-ddd'));
    }
    return ar;
}

/*--------- SU DUNG FUNCTION CHO WH MAP LOCATION--------*/

/*--------- SU DUNG FUNCTION CHO WH MAP LOCATION--------*/