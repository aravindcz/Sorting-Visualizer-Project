



function bubsort(barArray,heightsArray){

let n = barArray.length

for(let i=0;i<n-1;i++){


    for(let j=0;j<n-1-i;j++){
        let b1 = barArray[j]
        let b2 = barArray[j+1]

        bar_update(b1,heightsArray[j],"blue")
        bar_update(b2,heightsArray[j+1],"blue")

        let b1h = heightsArray[j]
        let b2h = heightsArray[j+1]


        if(b1h>=b2h){
            bar_update(b1,heightsArray[j],"red")
            swap(heightsArray,j,j+1)
            bar_update(b1,heightsArray[j],"blue")
            bar_update(b2,heightsArray[j+1],"blue")
        }
        else
        bar_update(b2,heightsArray[j+1],"red")
        
        bar_update(b1,heightsArray[j],"yellow")
        bar_update(b2,heightsArray[j+1],"yellow")

    }

    bar_update(barArray[barArray.length-1-i],heightsArray[heightsArray.length-1-i],"green")
}

bar_update(barArray[0],heightsArray[0],"green")

}