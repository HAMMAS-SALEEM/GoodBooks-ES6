const removeBooks = (id,arr)=> {
    let array = arr.filter((e) => e.id !== id);
    return array
}