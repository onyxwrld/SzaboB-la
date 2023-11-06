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
    hosszGomb.addEventListener('click',theFeladat);
    theGomb.addEventListener('click',theFeladat);
}
function theFeladat()
{

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
