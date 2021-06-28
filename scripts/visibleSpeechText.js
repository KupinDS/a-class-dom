const speecheItemGroup = document.querySelectorAll(".speeche__item_group");
const speecheItemSingle = document.querySelectorAll(".speeche__item_single");

speecheItemGroup.forEach(item => {
  setVisibleClass(item)
})

speecheItemSingle.forEach(item => {
  setVisibleClass(item)
})


function setVisibleClass(item) {
  let isVisible = false

  item.addEventListener('click', () => {
    isVisible = !isVisible

    if (isVisible) {
      item.classList.add("visible")
    }
    if (!isVisible) {
      item.classList.remove("visible")
    }
  })
}