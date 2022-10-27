let arr=[]
let barArray = document.getElementsByClassName("bar")


function swap(heightsArray,i,j){
    let temp = heightsArray[i]
    heightsArray[i]=heightsArray[j]
    heightsArray[j]=temp
    }

function bar_update(bar,height,color){

    window.setTimeout(()=>{
        bar.style.height=`${height}px`
        bar.style.backgroundColor=color
    },delay+=100)

}


function generateAndReturnRandomHeightsArray(){
    let brr=[]
    for(let i=0;i<100;i++)
    brr[i] = Math.floor(Math.random()*500)
    return brr
}

function displayBarsInitially(heightsArray){
    let parentDiv = document.getElementById("bars")
    for(let i=0;i<100;i++){
        let bar = document.createElement("div")
        bar.setAttribute("class","bar")
        bar.style.height=`${heightsArray[i]}px`
        parentDiv.append(bar)
    }
}



function renderPageInitially(){
    arr =generateAndReturnRandomHeightsArray()
    displayBarsInitially(arr)
}




function generateArrayButtonClicked(heightsArray){
    for(let i=0;i<barArray.length;i++){
        let bar = barArray[i]
        bar.style.height=`${heightsArray[i]}px`
        bar.style.backgroundColor="yellow"
    }
}

renderPageInitially()



let generateArrayButton = document.getElementById("gen")
generateArrayButton.addEventListener("click",(event)=>{
    event.stopPropagation()
    event.preventDefault()
    let arr = generateAndReturnRandomHeightsArray()
    generateArrayButtonClicked(arr)
})


let bubbleSortButton = document.getElementById("bubsort")
bubbleSortButton.addEventListener('click',(event)=>{
event.stopPropagation()
event.preventDefault()
bubsort(barArray,arr)
})

let selectionSortButton = document.getElementById("selsort")
selectionSortButton.addEventListener('click',(event)=>{
    event.stopPropagation()
    event.preventDefault()
    selsort(barArray,arr)
})



let insertionSortButton = document.getElementById("inssort")
insertionSortButton.addEventListener('click',(event)=>{
    event.stopPropagation()
    event.preventDefault()
    inssort(barArray,arr)
})

let mergeSortButton = document.getElementById("mersort")
mergeSortButton.addEventListener('click',(event)=>{
    event.stopPropagation()
    event.preventDefault()
    mersort(barArray,arr)
})

let quickSortButton = document.getElementById("quisort")
quickSortButton.addEventListener('click',(event)=>{
    event.stopPropagation()
    event.preventDefault()
    quisort(barArray,arr)
})




