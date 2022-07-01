food = ['Fat Jacks Pizza is one of the best in the Biz!',"Dalton's is an old town classic!a",'Los Amigos has been around forever, and for a reason!','Check out McDonalds! How can you go wrong?']

const btn = document.querySelector('#btn')

const randomRestaurant = () => {
    alert(`Go to ${food[(Math.random() * food.length | 0)]} for some yummy food!`)
    console.log('Success!')
}

btn.addEventListener('click',randomRestaurant)