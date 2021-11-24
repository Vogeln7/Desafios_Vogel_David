//Definicion de Clase
class Usuario {
    constructor(name,lastname){
        this.name=name
        this.lastname=lastname
        this.books=[]
        this.pets=[]
    }
    

    getFullName(){
        let fullName=`${this.name} ${this.lastname}`;
        console.log(fullName);
        return fullName;
    }
    addPet(petName){
        this.pets.push(petName);
    }
    countPets(){
        return this.pets.length;
    }
    addBook(bookName,autorName){
        this.books.push({book:bookName,autor:autorName});
    }
    getBooksNames(){
        let booknames=[];
        this.books.forEach((el)=>{
            booknames.push(el.book)
        });
        return booknames;
    }
}

//Pruebas
const David= new Usuario('David','Vogel');
David.getFullName();
David.addPet('Dante');
David.addPet('Alma');
let cantMascotas=David.countPets();
console.log(`Mascotas: ${cantMascotas}`);
David.addBook('El senor de los anillos','JRR Tolkien');
David.addBook('El hobbit','JRR Tolkien');
let nombresLibros=David.getBooksNames();
console.log(`Libros: ${nombresLibros}`);