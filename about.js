function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let img = document.querySelector('img')

img.addEventListener('mouseover',() => {
	alert('You look as adorable as this cat!')
})