
var Date = function (date) {
    var datetime = date.getDate() + "/"
        + (date.getMonth()+1)  + "/"
        + date.getFullYear() + " "
        + date.getHours() + ":"
        + date.getMinutes() + ":"
        + date.getSeconds();

    return datetime;
};


module.exports = {
    Date:Date
};
