// 2. 다음 Array의 SubArray 중에서 그 합이 최대인 것을 찾는 코드를 작성하시오. 단 각 원소의 값은 Integer 형식이고, 배열의 크기는 0 ~ 214748364
//  ex1) 
    const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    //output: [4, -1, 2, 1]
//  ex2) input: [], output: []

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