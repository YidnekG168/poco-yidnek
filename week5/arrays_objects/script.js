const food = {
    calories: 250,
    vitamins: ["B12","C","A"],
    name: ["Banana", ],
    containss: ["nuts","gluten"],
    vegetarian: true,
    halal: true,
    expiray_date: "2023-10-18",
    catagory: "fruit",
    price: 5.59,
    isEdible:  function(){
        let today = new Date();//object constuctur that's why we start by new. new create the instance
        //toISOString().split('T')[0] to format date to string
        if(today.toISOString().split('T')[0] < this.expiray_date){
            return true;
        }
        return false;
    }

}
console.table(food);
console.log(food.name);
console.log(food["expiray_date"]);// 

console.log(`Is my ${food.na,
me} still  edible?`);
console.log(food.isEdible());

//object constructor 
//objects must start by capital letter
function Food2(calories, vitamins = [], name, containss, halal, expiray_date, catagory,price, vegetarian = true){
        this.calories = calories,
        this.vitamins = vitamins,
        this.name = name,
        this.contains =containss,
        this.vegetarian =vegetarian,
        this.halal =true,
        this.expiray_date="2023-10-18",
        this.catagory=catagory,
        this.price= 5.90,
        this.isEdible= function(){
            let today = new Date();//object constuctur that's why we start by new. new create the instance
            //toISOString().split('T')[0] to format date to string
            if(today.toISOString().split('T')[0] < this.expiray_date){
                return true;
            }
            return false;
        }
    
    }
   const Banana = new Food2(600,["B12","C","A"],"Banana",["nuts","gluten"],"fruit",5.90);

   Banana.mushy = true;
   Banana.expiray_date ="2023-10-16";
   console.log(Banana.isEdible());
   //if i want to eat anyway i can set it to null
   //Banana = null;

   console.table(food);
   console.table(Banana);

//class
   //every class has a constructor
class Food{
    constructor (calories, vitamins = [], name, containss, vegetarian, halal, expiray_date, catagory,price ){
        this.calories = calories,
        this.vitamins = vitamins,
        this.name = name,
        this.contains =containss,
        this.vegetarian =vegetarian,
        this.halal =halal,
        this.expiray_date="2023-10-18",
        this.catagory=catagory,
        this.price= 5.90
    }
    
        isEdible(){
            let today = new Date();//object constuctur that's why we start by new. new create the instance
            //toISOString().split('T')[0] to format date to string
            if(today.toISOString().split('T')[0] < this.expiray_date){
                return true;
            }
            return false;
        }
    }

    let apple = new Food(500,["B12","C","A"],"Banana",["nuts","gluten"],true,true,"fruit",1.90);

    console.table(apple);