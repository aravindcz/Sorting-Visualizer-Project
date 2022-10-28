let arr=[]
let barArray = document.getElementsByClassName("bar")
let size = parseInt(document.getElementById("ranger").value,10)
let speed = parseInt(document.getElementById("sorter").value,10)
let timer=0
speed=1000-speed


function swap(heightsArray,i,j){
    let temp = heightsArray[i]
    heightsArray[i]=heightsArray[j]
    heightsArray[j]=temp
    }

function bar_update(bar,height,color){

    window.setTimeout(()=>{
        bar.style.height=`${height}px`
        bar.style.backgroundColor=color
    },timer+=speed)

}


function generateAndReturnRandomHeightsArray(size){
    let brr=[]
    for(let i=0;i<size;i++)
    brr[i] = Math.floor(Math.random()*500)
    return brr
}

function displayBarsInitially(heightsArray,size){
    let parentDiv = document.getElementById("bars")
    for(let i=0;i<size;i++){
        let bar = document.createElement("div")
        bar.setAttribute("class","bar")
        bar.style.height=`${heightsArray[i]}px`
        parentDiv.append(bar)
    }
}



function renderPageInitially(){
    arr =generateAndReturnRandomHeightsArray(size)
    displayBarsInitially(arr,size)
    barArray = document.getElementsByClassName("bar")
}




function generateArrayButtonClicked(heightsArray){
    parentDiv = document.getElementById("bars")
    parentDiv.innerHTML=""
    displayBarsInitially(heightsArray,heightsArray.length)
    barArray = document.getElementsByClassName("bar")
}


function disable(){
   
    // document.getElementById("gen").disabled=true
    document.getElementById("bubsort").disabled=true
    document.getElementById("selsort").disabled=true
    document.getElementById("inssort").disabled=true
    document.getElementById("mersort").disabled=true
    document.getElementById("quisort").disabled=true

    document.getElementById("ranger").disabled=true
    document.getElementById("sorter").disabled=true


}

function enable(){
   
    // document.getElementById("gen").disabled=false
    document.getElementById("bubsort").disabled=false
    document.getElementById("selsort").disabled=false
    document.getElementById("inssort").disabled=false
    document.getElementById("mersort").disabled=false
    document.getElementById("quisort").disabled=false 
    document.getElementById("ranger").disabled=false
    document.getElementById("sorter").disabled=false


}

renderPageInitially()



let generateArrayButton = document.getElementById("gen")
generateArrayButton.addEventListener("click",(event)=>{
    event.stopPropagation()
    event.preventDefault()
    enable()
    let arr = generateAndReturnRandomHeightsArray(size)
    generateArrayButtonClicked(arr)
})


let bubbleSortButton = document.getElementById("bubsort")
bubbleSortButton.addEventListener('click',(event)=>{
event.stopPropagation()
event.preventDefault()

disable()
timer=0
bubsort(barArray,arr)


})

let selectionSortButton = document.getElementById("selsort")
selectionSortButton.addEventListener('click',(event)=>{
    event.stopPropagation()
    event.preventDefault()
    timer=0
    selsort(barArray,arr)
})



let insertionSortButton = document.getElementById("inssort")
insertionSortButton.addEventListener('click',(event)=>{
    event.stopPropagation()
    event.preventDefault()
    timer=0
    inssort(barArray,arr)
})

let mergeSortButton = document.getElementById("mersort")
mergeSortButton.addEventListener('click',(event)=>{
    event.stopPropagation()
    event.preventDefault()
    timer=0
    mersort(barArray,arr)
})

let quickSortButton = document.getElementById("quisort")
quickSortButton.addEventListener('click',(event)=>{
    event.stopPropagation()
    event.preventDefault()
    timer=0
    quisort(barArray,arr)
})

let sizeButton=document.getElementById("ranger")
sizeButton.addEventListener("change",(event)=>{
    event.stopPropagation();
    event.preventDefault();
    size=parseInt(event.target.value,10)
    arr = generateAndReturnRandomHeightsArray(size)
    generateArrayButtonClicked(arr)
})

let speedButton = document.getElementById("sorter")
speedButton.addEventListener("change",(event)=>{
    event.stopPropagation();
    event.preventDefault();
    speed=parseInt(event.target.value,10)
    speed=1000-speed

})




