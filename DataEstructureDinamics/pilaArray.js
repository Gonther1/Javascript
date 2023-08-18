// Pila a manera de array : 
class Stack{
    constructor(){
        this.items=[]
    }

    isEmpty(){//Verificar si esta vacio
        return this.items.length == 0;
    }

    size(){//Retornar tamaño
        return this.items.length;
    }

    clear(){
        this.items = []
    }

    push(item){//Ingresar un dato
        this.items.push(item);
    }

    pop(){//Sacar un dato
        if(this.isEmpty()){
            return "La pila esta vacia";
        }
        return this.items.pop();
    }
    peek(){//Revisar el primer dato encontrado
        if(this.isEmpty()){
            return "La pila esta vacia"
        }
        return this.items[this.items.length - 1];

    }

}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek())
stack.pop()
console.log(stack.peek())
stack.pop()
console.log(stack.peek())
stack.clear()
console.log(stack.peek())