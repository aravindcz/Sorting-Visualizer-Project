let arr=[]
let barArray = document.getElementsByClassName("bar")


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



