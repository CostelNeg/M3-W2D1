function addList(){
    let x = document.getElementsByTagName('i')
    console.log(x)
    if(x.classList.contains("bi-bookmark-plus-fill")){
        x.classList.remove("bi-bookmark-plus-fill")
        x.classList.add("bi-bookmark-plus")
    }else if(x.classList.contains("bi-bookmark-plus")){
        x.classList.add("bi-bookmark-plus-fill")
        x.classList.remove("bi-bookmark-plus")
    }
}