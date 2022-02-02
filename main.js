document.querySelector('button').addEventListener('click', getCocktail);
function getCocktail() {
	document.querySelector('img').src = '';
	document.querySelector('h5').innerText = '';
	document.querySelector('p').innerText = '';

	let name = document.querySelector('input').value.toLowerCase();
	name = name.replace(' ', '_');
	fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=` + name)
		.then((res) => res.json())
		.then((data) => {
			console.log(data.drinks[0]);
			document.querySelector('img').src = data.drinks[0].strDrinkThumb;
			document.querySelector('h5').innerText = data.drinks[0].strDrink;
			document.querySelector('p').innerText = data.drinks[0].strInstructions;
		})
		.catch((err) => {
			console.log(`${err}`);
		});
}
