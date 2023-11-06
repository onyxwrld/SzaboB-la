import './style.css'
import lista from './quotes.json'

const osszesIdezet = Array.from(lista.quotes);
const theFeladat2 = Array.from(lista.quotes);
const hosszFeladat3 = Array.from(lista.quotes);
const darabszamFeladat4 = Array.from(lista.quotes);

document.addEventListener('DOMContentLoaded',lefutFuggveny);
function lefutFuggveny()
{
    const osszGomb = document.createElement('button');
    osszGomb.textContent = 'Összes idézet';
    const theGomb = document.createElement('button');
    theGomb.textContent = 'The';
    const hosszGomb = document.createElement('button');
    hosszGomb.textContent = 'Hossz';
    const darabGomb = document.createElement('button');
    darabGomb.textContent = 'Darabszám';
    const gomb = document.getElementById('gomb');
    gomb.appendChild(osszGomb);
    gomb.appendChild(theGomb);
    gomb.appendChild(hosszGomb);
    gomb.appendChild(darabGomb);
    osszGomb.addEventListener('click',osszidezet);
    theGomb.addEventListener('click',theFeladat);
    hosszGomb.addEventListener('click',hosszGombFuggveny);
    darabGomb.addEventListener('click',darabFuggveny);
}
function theFeladat()
{
    const stringtomb = theFeladat2.map(a=>{
        if(a.quote.includes('the '))
        {
            return a.quote.replace('the ','<b> the </b> ')
        }
        else if(a.quote.includes('The '))
        {
            return a.quote.replace('The ','<b> The </b> ')
        }
        else{
            return a.quote;
        }
    });
    const listA = document.getElementById('elsoFeladat');
    listA.innerHTML = `
    <ol id='szerzok'>
    </ol>
    `
    stringtomb.forEach(a=>{
        document.getElementById('szerzok').innerHTML += `
        <li>${a}</li>
        `
    });

}
function hosszGombFuggveny()
{
    const hossz = hosszFeladat3.map(a=>a.quote.length).join(', ');
    const listA = document.getElementById('elsoFeladat');
    listA.innerHTML = `
     ${hossz}
    ` 
}
function darabFuggveny()
{
    const inputGomb = document.getElementById('inputID').value;
    const output = document.getElementById('outputID');
    const szam = darabszamFeladat4.filter(a=>a.author === inputGomb).length;
    output.value = szam;
}
function osszidezet()
{
    osszesIdezet.sort((a,b)=> a.author.localeCompare(b.author));
    const eredmeny = osszesIdezet.map(a => ({
        author: a.author,
        quotes: a.quote
    }))
    //console.log(eredmeny);
    const listA = document.getElementById('elsoFeladat');
    listA.innerHTML = `
    <ul id='szerzok'>
    </ul>
    `
    eredmeny.forEach(a=>{
        document.getElementById('szerzok').innerHTML += `
        <li>
        szerző: ${a.author}
        <blockquote> idézet: ${a.quotes}</blockquote>
        </li>
        `
    })

}
