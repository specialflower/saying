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
    matrixPool.push("0810,0810,0810,1020,1020,2244,7efc,0408,0810,1020,2040,7efc,0000,0004,fffe,0000-0810,0810,0810,1020,1020,2244,7efc,0408,0810,1020,2040,7efc,0000,0004,fffe,0000-0080,4044,2ffe,1008,03fc,0208,0a08,1208,23f8,e248,2040,2150,224c,2444,2940,0080-0110,3ff8,0820,0444,fffe,0010,1ff8,1010,1ff0,1010,1ff0,0200,5184,5092,9012,0ff0");
    matrixPool.push("1040,1040,20a0,20a0,4910,fa0e,1404,23f8,4000,f808,43fc,0208,1a08,e208,43f8,0208-1100,1100,1100,23fc,2204,6408,a840,2040,2150,2148,224c,2444,2040,2040,2140,2080-0920,0928,7ffc,0920,0920,7ffe,4102,8104,1ff0,1110,1110,1110,1110,1150,1120,0100-0100,0100,0108,7ffc,0100,2110,1930,0944,fffe,0380,0540,0930,311e,c104,0100,0100");//给你带来
    matrixPool.push("0008,3ffc,2100,2208,2ffc,2808,2ff8,2808,2ff8,2080,4490,8988,0900,2894,2812,47f2-0080,4040,3048,17fc,0010,0210,f120,10a0,1040,1040,10a0,1110,1210,2806,47fc,0000-1ff0,0100,7ffe,4102,9d74,0100,1d70,0108,3ffc,0008,0008,1ff8,0008,0008,3ff8,0008-1080,1088,2498,44a0,fec0,0284,7c84,447c,7c00,4488,4498,7ca0,44c0,4482,5482,487e");//愿这雪能
    matrixPool.push("7ffc,0200,1ff0,1010,1ff0,1010,1ff0,1010,1ff0,0800,0ff0,1420,2240,4180,0660,381c-0010,1ff8,1010,1010,1010,1010,1010,1ff0,1010,1010,1010,1010,1010,1ff0,1010,0000-0008,3ffc,2108,2108,3ff8,2108,2108,2108,3ff8,0100,0108,7ffc,0100,0104,fffe,0000");//夏日里
    matrixPool.push("0000,0010,1ff8,1010,1010,1010,1010,1010,1ff0,1010,0000,0440,0c20,1018,200c,4004-0200,0200,0204,fffe,0400,0440,0840,0850,13f8,3040,5040,9040,1040,1044,17fe,1000-0078,3f80,0100,0100,1110,0d30,0540,0104,fffe,0100,0100,0100,0100,0100,0500,0200-1100,1100,1100,23fc,2204,6408,a840,2040,2150,2148,224c,2444,2040,2040,2140,2080");//只在乎你
    matrixPool.push("0200,0100,0000,1f00,0108,0118,7da0,0540,0540,0920,0920,1110,210e,4104,0500,0200-0010,43f8,3000,1000,0008,07fc,f120,1120,1120,1124,1224,121c,1400,2806,47fc,0000");//永远
    matrixPool.push("0080,7848,4ffc,5000,5110,50a0,6004,57fe,4808,4bfc,6a08,5208,4208,4208,43f8,4208-0820,0448,7ffc,0100,3ff8,0200,fffe,0410,0ff8,1810,2ff0,c810,0ff0,0810,0ff0,0810-1100,1100,1100,23fc,2204,6408,a840,2040,2150,2148,224c,2444,2040,2040,2140,2080");//陪着你
    matrixPool.push("1000,11fc,1004,1008,fc10,2420,2424,27fe,2420,4420,2820,1020,2820,4420,84a0,0040-1000,11fc,1004,1008,fc10,2420,2424,27fe,2420,4420,2820,1020,2820,4420,84a0,0040-1040,1040,2244,7f7e,4284,4304,4204,4284,7e64,4224,4204,4204,4204,7e04,4228,0010");//好好的
    matrixPool.push("0480,0ea0,7890,0890,0884,fffe,0880,0890,0a90,0c60,1840,68a0,0920,0a14,2814,100c-0008,3ffc,2100,2208,2ffc,2808,2ff8,2808,2ff8,2080,4490,8988,0900,2894,2812,47f2-0110,3ff8,0820,0444,fffe,0010,1ff8,1010,1ff0,1010,1ff0,0200,5184,5092,9012,0ff0");//我愿意
    matrixPool.push("0480,0ea0,7890,0890,0884,fffe,0880,0890,0a90,0c60,1840,68a0,0920,0a14,2814,100c-0108,7ffc,0100,3ff8,0000,1ff0,1010,1ff0,0444,fffe,0010,1ff8,1010,1010,1ff0,1010-0080,0080,fc80,04fc,4504,4648,2840,2840,1040,2840,24a0,44a0,8110,0108,020e,0c04-1100,1100,1100,23fc,2204,6408,a840,2040,2150,2148,224c,2444,2040,2040,2140,2080");//我喜欢你
    matrixPool.push("0100,0110,3ff8,0100,0104,fffe,0820,0450,3ff8,0100,0108,7ffc,0100,0100,0100,0100-2008,17fc,1000,03f8,fa08,0a08,13f8,3804,57fe,9444,1444,17fc,1444,1444,17fc,1404");//幸福
    matrixPool.push("1ff0,1010,1ff0,1010,1ff0,0004,fffe,2200,3ffc,2284,3e88,2250,3e20,e258,028e,0304-0100,0100,0100,0100,0104,fffe,0100,0280,0280,0240,0440,0420,0810,100e,6004,0000-1040,1040,2244,7f7e,4284,4304,4204,4284,7e64,4224,4204,4204,4204,7e04,4228,0010");//最大的
    matrixPool.push("0fe0,0820,0820,0fe0,0820,0820,0fe0,0004,fffe,0100,0920,09f0,0900,1500,2306,40fc-0480,0ea0,7890,0890,0884,fffe,0880,0890,0a90,0c60,1840,68a0,0920,0a14,2814,100c");//是我
    matrixPool.push("0008,47fc,2488,27f8,0488,07f8,e084,2ffe,2884,28a4,2bf4,2804,2814,5008,8806,07fc-0104,7f84,0804,1024,2224,4124,7fa4,08a4,0a24,7f24,0824,0824,0804,0f84,f814,0008-1100,1100,1100,23fc,2204,6408,a840,2040,2150,2148,224c,2444,2040,2040,2140,2080");//遇到你
    matrixPool.push("1080,1088,2498,44a0,fec0,0284,7c84,447c,7c00,4488,4498,7ca0,44c0,4482,5482,487e-2020,2020,227c,3f44,4288,8350,7a20,4a50,4a9e,4b22,4a44,7aa8,4210,0a20,0440,0080");//能够
    matrixPool.push("0000,4004,2ffe,2040,0040,e080,2080,21a0,2298,248c,2884,2080,2080,5006,8ffc,0000-1000,11fc,1004,1008,fc10,2420,2424,27fe,2420,4420,2820,1020,2820,4420,84a0,0040-0010,0bf8,7c10,4910,4910,4910,4910,4914,49fe,4804,4824,7ff4,4804,0004,0014,0008");//还好吗
    matrixPool.push("1ff0,1010,1ff0,1010,1ff0,0004,fffe,2200,3ffc,2284,3e88,2250,3e20,e258,028e,0304-0008,401c,33e0,1200,0200,0208,f3fc,1220,1220,1220,1220,1420,1020,2820,4406,03fc-0800,0808,0ffc,1400,2420,47f0,0400,0420,07f0,0400,0400,5204,5192,9092,0ff0,0000-1208,1110,10a0,17fc,fc40,1050,3bf8,3440,5040,5044,9ffe,1040,1040,1040,1040,1040");//最近怎样
    matrixPool.push("0010,3ff8,2010,2010,3ff0,2004,2004,1ffc,0820,0824,fffe,0820,0820,0820,1020,2020-0820,0824,fffe,0820,0820,0880,1088,1098,30a0,50c0,9080,1180,1282,1482,107e,1000");
}
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

