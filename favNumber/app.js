const favNum = document.querySelector("#favNum");
const favTitle = document.querySelector("#favTitle");
const numFactsList = document.querySelector("#numFactsList");
const randFacts = document.querySelector("#randFacts");
const li = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');



addEventListener('submit', evt => {
    evt.preventDefault();
    userNum = favNum.value;
    const url = `http://numbersapi.com/${userNum}/trivia?json`;
    favTitle.style.display = "block";
    
    axios
        .get(url)
        .then(res1 => {
            numFactsList.append(li)
            li.innerHTML = res1.data.text
            return axios.get(url)
        })
        .then(res2 => {
            numFactsList.append(li2)
            li2.innerHTML = res2.data.text
            return axios.get(url)
        })
        .then(res3 => {
            numFactsList.append(li3)
            li3.innerHTML = res3.data.text
            return axios.get(url)
        })
        .then(res4 => {
            numFactsList.append(li4)
            li4.innerHTML = res4.data.text
        })
        .catch(err => {
            console.log(`Ooops ${err}`)
        })
})

const li5 = document.createElement('li');
const li6 = document.createElement('li');
const li7 = document.createElement('li');
const li8 = document.createElement('li');
const li9 = document.createElement('li');

const randUrl = "http://numbersapi.com/5..10/trivia?json"
axios
    .get(randUrl)
    .then(rand1 => {
        randFacts.append(li5)
        randFacts.append(li6)
        randFacts.append(li7)
        randFacts.append(li8)
        randFacts.append(li9)

        li5.innerHTML = rand1.data[5]
        li6.innerHTML = rand1.data[6]
        li7.innerHTML = rand1.data[7]
        li8.innerHTML = rand1.data[8]
        li9.innerHTML = rand1.data[9]
    })