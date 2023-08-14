function (array,target) {
    let arreglo=[]
    let suma
    for (i=0,i<=array.lenght, i++) {
        for (y=0, y<=array.lenght, y++) {
            numero=array[i]
            if ((numero+array[y+1])==target){
                arreglo[y]=[]
            }
        }
    }
}
//array=[2,4,3,6,9,8]