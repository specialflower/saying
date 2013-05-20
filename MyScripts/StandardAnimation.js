var matrixPool = new Array();
var isMatrixEnd = false;
var isPoolEnd = false;
var currentRowIndex = 0;
var currentColumnIndex = -1;
var pageCurrentRowIndex = 20;
var pageCurrentColumnIndex = 29;
var binaryMatrixArray = new Array();

function calculatePageStartIndex() {

}

function initMatrixPool() {
    //    matrixPool[2] = "0480,0ea0,7890,0890,0884,fffe,0880,0890,0a90,0c60,1840,68a0,0920,0a14,2814,100c-2000,2000,2204,3f7e,2844,4844,8844,0944,ffc4,0844,0844,1444,1244,227c,4044,8000-0208,4110,37fc,1080,0108,03fc,f208,13f8,1208,1208,13f8,1208,1208,2bf8,4406,03fc";
    //    matrixPool[1] = "0480,0ea0,7890,0890,0884,fffe,0880,0890,0a90,0c60,1840,68a0,0920,0a14,2814,100c-0000,0000,0000,0000,0000,0000,0004,fffe,0000,0000,0000,0000,0000,0000,0000,0000-0100,0108,7ffc,0100,0110,1ff8,1010,1ff0,1010,1ff0,1010,1ff0,1010,1014,fffe,0000";
    matrixPool[1] = "0010,3ff8,2010,2010,3ff0,2004,2004,1ffc,0820,0824,fffe,0820,0820,0820,1020,2020-0820,0824,fffe,0820,0820,0880,1088,1098,30a0,50c0,9080,1180,1282,1482,107e,1000";
    matrixPool[0] ="0820,0824,fffe,0820,0820,0880,1088,1098,30a0,50c0,9080,1180,1282,1482,107e,1000"

}


function start() {
    initMatrixPool();
    binaryMatrixArray = parseStrings(matrixPool.pop(), "-", ",");
    var timer = setInterval(function () {
        if (isMatrixEnd) {
            for (var i = 0; i < rowCount; i++) {
                for (var j = 0; j < columnCount; j++) {
                    var selector = "#r" + i + "c" + j;
                    $(selector).css("background-color", "#485050");
                }
            }
            if (isPoolEnd) {
                clearInterval(timer);
                $.fn.snow();
            }
            else {
                var str = matrixPool.pop();
                if (typeof (str) == "undefined" && matrixPool.length == 0) {
                    isPoolEnd = true;
                    return;
                }
                binaryMatrixArray = parseStrings(str,"-", ",");
                isMatrixEnd = false;
                currentRowIndex = 0;
                currentColumnIndex = -1;
                pageCurrentRowIndex = 20;
                pageCurrentColumnIndex = 29;
                continueAnimation();

            }
        }
        else {
            continueAnimation();
        }

    }, 100);

}



function continueAnimation() {

    if (currentRowIndex == binaryMatrixArray.length && currentColumnIndex == binaryMatrixArray[0].length) {
        isMatrixEnd = true;

    }
    else {
        do {
            if (typeof (binaryMatrixArray[currentRowIndex]) != "undefined" && currentColumnIndex == binaryMatrixArray[currentRowIndex].length) {
                currentRowIndex++;
                currentColumnIndex = 0;
                pageCurrentRowIndex++;
                pageCurrentColumnIndex = 30;
            }
            else {
                currentColumnIndex += 1;
                pageCurrentColumnIndex += 1;

            }
        } while (typeof (binaryMatrixArray[currentRowIndex]) != "undefined" && binaryMatrixArray[currentRowIndex][currentColumnIndex] == 0);

    }
    var cellSelector = "#r" + pageCurrentRowIndex + "c" + pageCurrentColumnIndex;
    if (typeof (binaryMatrixArray[currentRowIndex]) != "undefined" && binaryMatrixArray[currentRowIndex][currentColumnIndex] == 1) {
        $(cellSelector).css("background-color", "#ffffff");
    }
    else {
        $(cellSelector).css("background-color", "#485050");
    }
}

