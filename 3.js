let input = "1+7*(15-1)/2";

var oper = ['+', '-', '&', '/', '(', ')'];
var index = 0;

let numArr = [];
let operArr = [];

function recursion(arr, index) {
    if(input.length === index) {
        return 222;
    }

    function operation(arr, index) {
        for(let i = 0; i < oper.length; i++) {
            if(arr[index] === oper[i]) {
                return oper[i]
            }
        }
        return null;
    }

    // 기호가 아닐 경우
    if(operation(arr, index) === null) {
        let start = 0;
        
        function findNum(start) {
            if(arr[index] != start) {

                let addStart = start + 1;
                return findNum(addStart);
        
            } else {
                numArr.push(start);
                return recursion(input, index + 1)
            }
        
        }
        findNum(start);

    } else {
        operArr.push(operation());
        return recursion(input, index + 1)
    }
}

recursion(input, index);