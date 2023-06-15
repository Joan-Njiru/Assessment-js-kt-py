// 1. **Ancestral Stories:** In many African cultures, the art of storytelling is passed
// down from generation to generation. Imagine you're creating an application that
// records these oral stories and translates them into different languages. The
// stories vary by length, moral lessons, and the age group they are intended for.
// Think about how you would model `Story`, `StoryTeller`, and `Translator`
// objects, and how inheritance might come into play if there are different types of
// stories or storytellers.

// pseudo code 
// 1. record stories as objects(length,moral lessons,age-group)
// 2.Create another class with more attributes for storyteller and translator
 
class AncestralStories{
    constructor(length,lessons,agegroup){
        this.length=length;
        this.lessons=lessons;
        this.agegroup=agegroup;
    }

}

let warStory=new AncestralStories("long","courage","young people")
console.log(warStory);

class StoryTeller extends AncestralStories{
    constructor(length,lessons,agegroup,speed,languages){
        super(length,lessons,agegroup);
        this.speed=speed;
        this.languages=languages;
        

    }
    languagesSpoken(){
        if(this.languages.length>=2){
            console.log("This storyteller has translator capabilities");
        }
        else{
            console.log("This storyteller does not have translator capablities");
        }

    }
}

let Mwenda=new StoryTeller("short","happiness","oldpeople","fast",["English","Swahili","Kimeru"])
console.log(Mwenda);
Mwenda.languagesSpoken()

// 2. **African Cuisine:** You're creating a recipe app specifically for African cuisine.
// The app needs to handle recipes from different African countries, each with its
// unique ingredients, preparation time, cooking method, and nutritional
// information. Consider creating a `Recipe` class, and think about how you might
// create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
// `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
// methods.


class Recipe{
    constructor(ingredients,preparationtime,cookingmethod,nutritionalinfo){
        this.ingredients=ingredients;
        this.preparationtime=preparationtime;
        this.cookingmethod=cookingmethod;
        this.nutritionalinfo=nutritionalinfo;

    }
    timeForPreparation(){
        if(this.preparationtime>=3){
            console.log("this cuisine takes a long time to prepare")
        }
        else{
            console.log("This cuisine can be prepared within a reasonable amount of time");
        }
    }
}
 let MoroccanRecipe=new Recipe(["dhania","onions","cinammon"],2,"frying","Rich in vitamins")
 let EthiopianRecipe=new Recipe(["chilli","wheat","cumin"],4,"baking","Rich in protein")
 let NigerianRecipe=new Recipe(["tomatoes","cassava","cardamon"],2,"boiling","Rich in iron")

 console.log(MoroccanRecipe);
console.log(EthiopianRecipe);
console.log(NigerianRecipe);
MoroccanRecipe.timeForPreparation();
EthiopianRecipe.timeForPreparation();
NigerianRecipe.timeForPreparation();


// 3. **Wildlife Preservation:** You're a wildlife conservationist working on a
// program to track different species in a national park. Each species has its own
// characteristics and behaviors, such as its diet, typical lifespan, migration
// patterns, etc. Some species might be predators, others prey. You'll need to

// create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
// these classes might relate to each other through inheritance.

class Species{
    constructor(diet,lifespan,migrationpattern){
        this.diet=diet;
        this.lifespan=lifespan;
        this.migrationpattern
    }
}


// 4. **African Music Festival:** You're in charge of organizing a Pan-African music
// festival. Many artists from different countries, each with their own musical style
// and instruments, are scheduled to perform. You need to write a program to
// manage the festival lineup, schedule, and stage arrangements. Think about how
// you might model the `Artist`, `Performance`, and `Stage` classes, and consider
// how you might use inheritance if there are different types of performances or
// stages.


// 5. Create a class called Product with attributes for name, price, and quantity.
// Implement a method to calculate the total value of the product (price * quantity).
// Create multiple objects of the Product class and calculate their total values.

class Product{
    constructor(name,price,quantity){
        this.name=name;
        this.price=price;
        this.quantity=quantity;

    }
    totalValue(){
        let total= this.price*this.quantity
        return total
    }
}
let soap = new Product("geisha",25,5)
soap.totalValue()
let flour = new Product("exe",120,6)
flour.totalValue()
let fish = new Product("tuna",60,3)
fish.totalValue()
let fruits = new Product("pears",20,8)
fruits.totalValue()

// Implement a class called Student with attributes for name, age, and grades (a
//     list of integers). Include methods to calculate the average grade, display the
//     student information, and determine if the student has passed (average grade >=
//     60). Create objects for the Student class and demonstrate the usage of these
//     methods.

class Student{
    constructor(name,age,grades){
        this.name=name;
        this.age=age;
        this.grades=grades;
    }
    averageGrade(){
        let total=0;
        for(g in this.grades){
            total+=g;
            console.log(total);
        }
        let average=total/(this.grades.length)
        console.log(average);
        
    }
    displayInfo(){
       console.log(`This student's name is ${this.name} and they are ${this.age} years old and they have an average grade of ${this.averageGrade()}`);
    }
    passMark(){
        if(this.averageGrade()>=60){
            console.log("The student has passed");
        }
        else{
            "The student has failed"
        }
    }
}
let Joan=new Student("Njiru",23,[80,85,74,90])
Joan.averageGrade()
Joan.displayInfo()
Joan.passMark()

// 7. Create a FlightBooking class that represents a flight booking system. Implement
// methods to search for available flights based on destination and date, reserve
// seats for customers, manage passenger information, and generate booking
// confirmations.

class FlightBooking{
    constructor(destination, date){
        this.destination=destination;
        this.date=date;

    }
    searchFlights(){

    }
    reserveSeats(){

    }
    manageInfo(){

    }
    generateBookingConfirmation(){

    }
}

// 8. Create a LibraryCatalog class that handles the cataloging and management of
// books in a library. Implement methods to add new books, search for books by
// title or author, keep track of available copies, and display book details.
class LibraryCatalog{
    constructor(title,author,number){
        this.title=title;
        this.author=author;
        this.number=number;
    }
    
    searchForBooks(title){
        if(this.title===title){
            console.log("This books is available");
        }
        else{
            console.log("This book is not available");
        }

    }
    keepTrack(){
        console.log(`The number of copies remaining for ${this.title} are ${this.number}`);

    }
    addNewBooks(){

    }
}