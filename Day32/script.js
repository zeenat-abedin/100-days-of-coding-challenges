const tabs = document.querySelector('.tabs')
const gallery = document.querySelectorAll('.images')

tabs.addEventListener('click', (event) => {
    filterSearch(event.target.dataset.category)
})

const filterSearch = (value) => {
   gallery.forEach(currElem => {
       console.log((currElem.dataset.category))
       if (currElem.dataset.category === value || value === 'all') {
         currElem.style.display = 'block'
       } else {
        currElem.style.display = 'none'
       }
   });
}
