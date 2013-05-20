

function parseString(wordMatrixString, separator) {
    var wordMatrixArray = wordMatrixString.split(separator);
    var length = wordMatrixArray.length;
    var firstDimensionCount = Math.sqrt(length * 16);
    var secondDimensionCount = firstDimensionCount;
    var wordMatrix2DArray = new Array(firstDimensionCount);
    for (var i = 0; i < firstDimensionCount; i++) {
        wordMatrix2DArray[i] = new Array(secondDimensionCount)
        for (var j = 0; j < secondDimensionCount; j++) {
            //   var index = i * firstDimensionCount + j;
            var binaryMatrix = leftPad(parseInt(wordMatrixArray[i], 16).toString(2))
            wordMatrix2DArray[i][j] = binaryMatrix.charAt(j);
        }
    }
    return wordMatrix2DArray;
}

function leftPad(source) {
    var length = source.length;
    var padLength = 16 - length;
    var padStr = "";
    for (var i = 0; i < padLength; i++) {
        padStr += "0";
    }
    return padStr + source;

}


function parseStrings(wordMatrixStrings, matrixSeparator, seperator) {
    var wordMatrixStringArray = wordMatrixStrings.split(matrixSeparator);
    var wordMatrixBinaryArray = new Array();
    var wordMatrixArray;
    for (var i = 0; i < wordMatrixStringArray.length; i++) {
        wordMatrixArray = parseString(wordMatrixStringArray[i], seperator);
        wordMatrixBinaryArray = union(wordMatrixBinaryArray, wordMatrixArray);
    }
    return wordMatrixBinaryArray;
}

function union(target, source) {

    if (target.length == 0) {
        target = source;
    }
    else {
        var columnLength = target[0].length;
        for (var i = 0; i < source.length; i++) {
            for (var j = 0; j < source[i].length; j++) {
                target[i][columnLength + j] = source[i][j];
            }
        }
    }
    return target;

}



