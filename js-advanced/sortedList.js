function createSortedList(){
    let arr = [];
    return {
        add(el){
            arr.push(el);
            this.size++;
            arr.sort((a, b) => a - b);
        },
        remove(index){
            if(index >= arr.length || index < 0){
                throw new RangeError('Index out of range');
            }
            arr.splice(index, 1);
            this.size--;
        },
        get(index){
            if(index >= arr.length || index < 0){
                throw new RangeError('Index out of range');
            }
            return arr[index];
        
        },
        size:0

    }
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
