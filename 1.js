var input = [
   {id: 1, name: 'Sally', score: {Korean: "06", Math: "09", English: "30"}},
   {id: 2, name: 'Tom', score: {Korean: "50", Math: "80", English: "90"}},
   {id: 3, name: 'Andy', score: {Korean: "99", Math: "50", English: "88"}},
   {id: 4, name: 'Erik', score: {Korean: "70", Math: "60", English: "90"}},
   {id: 5, name: 'Candy',  score: {Korean: "22", Math: "09", English: "20"}},
]

function studentsClass(list) {
    let arr = [];

    list.forEach( (el) => {
        let result = 0;
        
        for(let key in el.score) {
            result += Number(el.score[key])
        }
        el.score['result'] = result;

        arr.push(result);
    })

    arr.sort( (a, b) => {
        return b - a;
    })

    arr.forEach( (el, key) => {
        list.forEach( (cu) => {
            if(el === cu.score.result) {
                if(!arr.includes(cu.name)) {
                    arr[key] = cu.name
                }
            }
        })
    })
    return arr;
}

console.log(studentsClass(input));