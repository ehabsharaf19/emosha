const board=document.getElementById('board');
const size=8;

const gems=['💎','🔥','⭐','🟢','🟣','🔷'];

let grid=[];
let selected=null;

let score=0;
let gold=0;
let level=1;

const questions=[
{
q:'ما عاصمة مصر؟',
a:['القاهرة','روما','باريس'],
c:'القاهرة'
},
{
q:'كم عدد الكواكب؟',
a:['8','9','7'],
c:'8'
}
];

function updateUI(){

document.getElementById('score').innerText=score;
document.getElementById('gold').innerText=gold;
document.getElementById('level').innerText=level;

}

function randomGem(){
return gems[Math.floor(Math.random()*gems.length)];
}

function createBoard(){

board.innerHTML='';

grid=[];

for(let row=0;row<size;row++){

let current=[];

for(let col=0;col<size;col++){

const gem=document.createElement('div');

gem.className='gem';

gem.innerText=randomGem();

gem.dataset.row=row;
gem.dataset.col=col;

gem.addEventListener('click',()=>selectGem(gem));

board.appendChild(gem);
current.push(gem);

}

grid.push(current);

}

}

function selectGem(gem){

if(selected===null){
selected=gem;
}else{
swap(selected,gem);
selected=null;
}

}

function swap(a,b){

const temp=a.innerText;
a.innerText=b.innerText;
b.innerText=temp;

checkMatches();

}

function checkMatches(){

let matched=[];

for(let row=0;row<size;row++){
for(let col=0;col<size-2;col++){

let g1=grid[row][col];
let g2=grid[row][col+1];
let g3=grid[row][col+2];

if(
g1.innerText===g2.innerText &&
g2.innerText===g3.innerText
){
matched.push(g1,g2,g3);
}

}
}

if(matched.length>0){

matched.forEach(g=>{

g.classList.add('explode');

setTimeout(()=>{
g.innerText=randomGem();
g.classList.remove('explode');
},300);

});

score+=matched.length*10;
gold+=matched.length*2;

updateUI();

document.getElementById('boom').play();

if(score>=level*200){
showQuestion();
}

}

}

function showQuestion(){

const q=questions[Math.floor(Math.random()*questions.length)];

const popup=document.getElementById('questionBox');
popup.style.display='block';

document.getElementById('questionText').innerText=q.q;

const answers=document.getElementById('answers');
answers.innerHTML='';

q.a.forEach(ans=>{

const btn=document.createElement('button');
btn.innerText=ans;

btn.onclick=()=>{

if(ans===q.c){
level++;
gold+=100;
}else{
score=0;
}

updateUI();
popup.style.display='none';

};

answers.appendChild(btn);

});

}

createBoard();
updateUI();

window.addEventListener('click',()=>{
document.getElementById('bgMusic').play();
},{once:true});
