console.log ("CONNECTED");

function printReverse(arr) {
    console.log ("PRINT REVERSE FUNCTION:");
    for(var i = arr.length -1; i>=0; i--) {
        console.log (arr[i]);
    }
}


function isUniform(arr) {
    console.log ("IS UNIFORM FUNCTION:");
    var first = arr[0];
    for (var i=1; i<arr.length; i++){
        if (arr[i] !== first){
            return false;
        }
    }
    return true;
}

function sumArray(arr){
    var total=0;
    arr.forEach(function (element){
        total+= element;
    });
    console.log ("SUM ARRAY FUNCTION:");
    return total;
}