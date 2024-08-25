const tabs = document.querySelector('.tabs')
const gallery = document.querySelectorAll('.images')

tabs.addEventListener('click', (event) => {
    console.log(event.target.dataset.category)
    filterSearch(event.target.dataset.category)
})

const filterSearch = (value) => {
   gallery.forEach(currElem => {
       console.log((currElem.dataset.category))
       if (currElem.dataset.category === value) {
         currElem.computedStyleMap.display = 'block'
       } else {
        currElem.computedStyleMap.display = 'none'
       }
   });
}
