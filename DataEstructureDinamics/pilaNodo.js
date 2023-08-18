// Pila a nivel de nodo  
class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class Stack{
    constructor(){
        this.top=null;
        this.size=0;
    }
    push(value){
        const newNode = new Node(value)
        newNode.next = this.top;
        this.top=newNode;
        this.size++;
    }
    isEmpty(){
        return this.size ===0;
    }

    pop(){
        if(!this.top){
            return "Is Empty"
        }
        const poppedValue = this.top.value;
        this.top=this.top.next;  
        this.size--;
        return this.top.value;
    }

}