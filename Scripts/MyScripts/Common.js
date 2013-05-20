
var rowCount = 0;
var columnCount = 0

function generateTableByBrowserSizeUsingDefaultStyle() {
    setRowAndColumnCount();
    var tableHtml = "";
    var rows = "";
    for (var i = 0; i < rowCount; i++) {
        var cells = "";
        for (var j = 0; j < columnCount; j++) {
            cells += "<td id='" + "r" + i + "c" + j + "'" + "></td>"
        }
        var row = "<tr id='r" + i + "'>" + cells + "</tr>";
        rows += row;
    }
    tableHtml = "<table id='mainTable'>" + rows + "</table>";
    return tableHtml;
}

function setRowAndColumnCount() {
    var width = getClientWidth();
    var height = getClientHeight();
    rowCount = parseInt((height / 13).toString());
    columnCount = parseInt((width / 13).toString());
}

function getClientWidth() {
    return $(window).width();
}

function getClientHeight() {
    return $(window).height();
}