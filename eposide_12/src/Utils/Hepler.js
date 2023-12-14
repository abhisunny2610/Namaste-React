export function filterData(searchText, filterList) {

    const filterData = filterList.filter((restaurant) => restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
  
    return filterData 
  }