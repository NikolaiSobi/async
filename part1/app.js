

let url = "http://numbersapi.com/";
let favNum = 42;
let favNums = [2, 22, 99];

// 1.
async function getNum(){
    let num = await axios.get(`${url}${favNum}?json`)
    console.log(num.data.text)
    
}

getNum()

// 2.
async function multipleNums(){
    let num = await Promise.all([
        axios.get(`${url}${favNums[0]}?json`),
        axios.get(`${url}${favNums[1]}?json`),
        axios.get(`${url}${favNums[2]}?json`)
    ])
    console.log(num[0].data.text);
    console.log(num[1].data.text);
    console.log(num[2].data.text);
}

multipleNums()



// 3.
let body = document.querySelector('body');
async function numFacts(){
    for(let i = 0; i < 4; i++){
        let num = await axios.get(`${url}${favNum}?json`)
        let p = document.createElement('p')
        p.innerText = num.data.text
        body.append(p)
    }
}

numFacts()