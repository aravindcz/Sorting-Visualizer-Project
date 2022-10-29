
function selsort(barArray,heightsArray){

    for(height1 = 0;height1<heightsArray.length;height1++){

        smallestHeightIndex=height1
        smallestHeight=heightsArray[height1]

        for(height2=height1+1;height2<heightsArray.length;height2++){

            bar_update(barArray[smallestHeightIndex],smallestHeight,"blue")
            bar_update(barArray[height2],heightsArray[height2],"blue")

            bar_update(barArray[smallestHeightIndex],smallestHeight,"rgb(223, 58, 8)")
            bar_update(barArray[height2],heightsArray[height2],"rgb(223, 58, 8)")


            if(heightsArray[height2]<smallestHeight){
                smallestHeight=heightsArray[height2]
                smallestHeightIndex=height2
            }
        }

        bar_update(barArray[height1],heightsArray[height1],"red")
        bar_update(barArray[smallestHeightIndex],smallestHeight,"red")

   
        swap(heightsArray,height1,smallestHeightIndex)
        bar_update(barArray[height1],smallestHeight,"red")
        bar_update(barArray[smallestHeightIndex],height1,"red")

        bar_update(barArray[height1],smallestHeight,"rgb(223, 58, 8)")
        bar_update(barArray[smallestHeightIndex],height1,"rgb(223, 58, 8)")

        bar_update(barArray[height1],smallestHeight,"green")

    }

}