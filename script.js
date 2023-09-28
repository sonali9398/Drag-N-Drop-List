const sortableList = document.querySelector(".sortable-list");
const items = sortableList.querySelectorAll(".item");



items.forEach(item =>{
    item.addEventListener("dragstart", () =>{
        setTimeout(() => {
            item.classList.add("dragging");
        }, 0); 
    });
    //removing dragging class 
    item.addEventListener("dragging" , () => item.classList.remove("dragging"));
})
const initSortableList = (e) =>{
    e.preventDefault();
    const draggingItem = document.querySelector(".dragging");
    //making array while dragging
    let sibling =[...sortableList.querySelectorAll(".item:not(.dragging)")] ;

// where dragging item must be placed
    let nextSibling = sibling.find(sibling =>{
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });
    console.log(nextSibling);
    
    //inserting item before found sibling
    sortableList.insertBefore(draggingItem, nextSibling);
}

sortableList.addEventListener("dragover", initSortableList);
sortableList.addEventListener("dragenter", e =>e.preventDefault());
