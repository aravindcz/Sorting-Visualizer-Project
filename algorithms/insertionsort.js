function inssort(barArray,heightsArray){


    for(index1 = 1;index1<heightsArray.length;index1++){

        currentHeight = heightsArray[index1]
        currentHeightIndex = index1

        bar_update(barArray[currentHeightIndex],heightsArray[currentHeightIndex],"green")

        index2=index1-1
        while(index2>=0){

            if(heightsArray[currentHeightIndex]<heightsArray[index2]){
                swap(heightsArray,index2,currentHeightIndex)
                
                bar_update(barArray[index2],heightsArray[index2],"red")
                bar_update(barArray[currentHeightIndex],heightsArray[currentHeightIndex],"red")
                

            bar_update(barArray[index2],heightsArray[index2],"rgb(223, 58, 8)")
            bar_update(barArray[currentHeightIndex],heightsArray[currentHeightIndex],"rgb(223, 58, 8)")

            currentHeightIndex=index2
            currentHeight=heightsArray[index2]

            }
            else{
            break
            }

            index2--
        }

        bar_update(barArray[currentHeightIndex],heightsArray[currentHeightIndex],"rgb(223, 58, 8)")

    }

    for(index1=0;index1<heightsArray.length;index1++)
    bar_update(barArray[index1],heightsArray[index1],"green")



}