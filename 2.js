const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

var count = 2;
var result = { arr : [], num : 0 };
var cover = [];

function recursion() {
    if(count >= input.length) {
        return result;
    }

    for(let i = 0; i < input.length; i++) {
        cover = input.slice(i, count + i);
        
        var add = cover.reduce( (el, cu) => {
            return el + cu;
        })

        if(result.arr.length === 0) {
            result.arr = cover;
            result.num = add;

        } else {
            if(add > result.num) {
                result.arr = cover;
                result.num = add;
            }
        }
    }
    count++;
    recursion();
}

recursion();

let bigNum = recursion();
console.log(bigNum)