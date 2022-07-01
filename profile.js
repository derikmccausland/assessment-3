const favColor = document.querySelector('#color')
const favPlace = document.querySelector('#place')
const favRitual = document.querySelector('#ritual')

const pressColor = () => alert('My favorite color is Purple!')
const pressPlace = () => alert('My favorite place is Washington D.C.!')
const pressRitual = () => alert("My favorite ritual is probably Identify. It is really helpful when you find a new item, want to know what it's magical properties are, without spending a first level spell slot!")

favColor.addEventListener('click',pressColor)
favPlace.addEventListener('click',pressPlace)
favRitual.addEventListener('click',pressRitual)