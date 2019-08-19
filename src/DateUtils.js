// Переводит дату формата dd.MM.yyyy (русская)
// к формату MM.dd.yyyy (нативная для js)
function ruDateToUS(ruDate){
    if(ruDate) {
        var array = ruDate.split('.');
        if(array.length===3){
            return array[1]+'.'+array[0]+'.'+array[2];
        }
    }
}