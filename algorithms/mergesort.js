function mersort(bars,heights){

    bars=[...bars]
    heights = mergesort(heights,bars)
    
    let index = 0 
    for(index=0;index<heights.length;index++)
    bar_update(barArray[index],heights[index],"blue")

    for(index=0;index<heights.length;index++)
    bar_update(barArray[index],heights[index],"green")
}

function mergesort(heights,bars){

    if(heights.length<=1)
    return heights

    let mid = heights.length/2

    let left = mergesort(heights.slice(0,mid),bars)
    let right = mergesort(heights.slice(mid),bars)
    return merge(left,right,bars) 
}

function merge(left,right,bars){
    
    let temp = []
    let p1 = 0,p2=0

    let leftsize=left.length
    let rightsize=right.length

    while((p1<leftsize)&&(p2<rightsize)){
        
        bar_update(bars[p1],left[p1],"red")
        bar_update(bars[p1+left.length],right[p1],"red")

        bar_update(bars[p1],left[p1],"yellow")
        bar_update(bars[p1+left.length],right[p1],"yellow")


        if(left[p1]<=right[p2]){

            temp.push(left[p1])
            p1++
        }
        else{
            temp.push(right[p2])
            p2++
        }

    }

    while(p1<leftsize){
        bar_update(bars[p1],left[p1],"red")
        bar_update(bars[p1],left[p1],"yellow")
        temp.push(left[p1])
        p1++
    }

    while((p2<rightsize)){
        bar_update(bars[p1+left.length],right[p1],"red")
        bar_update(bars[p1+left.length],right[p1],"yellow")
        temp.push(right[p2])
        p2++
    }

   
    console.log(temp)
    return temp

}