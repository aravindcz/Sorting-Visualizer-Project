function quisort(bars,heights){

    quickSort(bars,heights,0,heights.length-1)
    
    for(index=0;index<heights.length;index++)
    bar_update(bars[index],heights[index],"green")

}



function quickSort(bars,heights,start,end){

    if(start>=end)
    return;

    let pivotIndex = partition(bars,heights,start,end)
    quickSort(bars,heights,start,pivotIndex-1)
    quickSort(bars,heights,pivotIndex+1,end,)

  
}

function partition(bars,heights,start,end){
    let p1=start+1,p2=end

    bar_update(bars[start],heights[start],"blue")

    while(p1<=p2){

        while((p1<=end)&&(heights[p1]<=heights[start]))
        p1++

        while(heights[p2]>heights[start])
        p2--

        if(p1<=p2){
    bar_update(bars[p1],heights[p1],"#E936A7")
    bar_update(bars[p2],heights[p2],"#E936A7")
            swap(heights,p1,p2)
    bar_update(bars[p1],heights[p1],"#E936A7")
    bar_update(bars[p2],heights[p2],"#E936A7")
    bar_update(bars[p1],heights[p1],"rgb(223, 58, 8)")
    bar_update(bars[p2],heights[p2],"rgb(223, 58, 8)")
            p1++
            p2--
        }

    }

    bar_update(bars[start],heights[start],"blue")
    bar_update(bars[p2],heights[p2],"blue")
    swap(heights,start,p2)
    bar_update(bars[start],heights[start],"blue")
    bar_update(bars[p2],heights[p2],"blue")

    bar_update(bars[start],heights[start],"rgb(223, 58, 8)")
    bar_update(bars[p2],heights[p2],"rgb(223, 58, 8)")

   


    return p2
}