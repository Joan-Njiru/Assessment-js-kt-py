class AncestralStories():
    def__init__(self,length,lessons,agegroup)
    self.length=length
    self.lessons=lessons
    self.agegroup=agegroup
    



warStory=AncestralStories("long","courage","young people")
print(warStory)

class StoryTeller(AncestralStories):
    def__init__(self,length,lessons,agegroup,speed,languages)
    super(self,length,lessons,agegroup)
    self.speed=speed
    self.languages=languages
        

    languagesSpoken(self):
        if(this.languages.length>=2):
            print("This storyteller has translator capabilities");
        
        else:
            print("This storyteller does not have translator capablities");
        



Mwenda=StoryTeller("short","happiness","oldpeople","fast",["English","Swahili","Kimeru"])
print(Mwenda)
Mwenda.languagesSpoken()

#2

class Recipe():
    def__init__(self,ingredients,preparationtime,cookingmethod,nutritionalinfo):
        self.ingredients=ingredients
        self.preparationtime=preparationtime
        self.cookingmethod=cookingmethod
        self.nutritionalinfo=nutritionalinfo

    
    timeForPreparation():

    if(this.preparationtime>=3):
            print("this cuisine takes a long time to prepare")
        
    else:
            print("This cuisine can be prepared within a reasonable amount of time")
    
    

MoroccanRecipe=Recipe(["dhania","onions","cinammon"],2,"frying","Rich in vitamins")
EthiopianRecipe=Recipe(["chilli","wheat","cumin"],4,"baking","Rich in protein")
NigerianRecipe=Recipe(["tomatoes","cassava","cardamon"],2,"boiling","Rich in iron")

print(MoroccanRecipe)
print(EthiopianRecipe)
print(NigerianRecipe)
MoroccanRecipe.timeForPreparation()
EthiopianRecipe.timeForPreparation()
NigerianRecipe.timeForPreparation()

class Product():
    constructor(name,price,quantity)
        self.name=name;
        self.price=price;
        self.quantity=quantity;

    
    totalValue()
        total= this.price*this.quantity
        return total
    
soap = Product("geisha",25,5)
soap.totalValue()
flour = Product("exe",120,6)
flour.totalValue()
fish = Product("tuna",60,3)
fish.totalValue()
fruits = Product("pears",20,8)
fruits.totalValue()

class Student
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