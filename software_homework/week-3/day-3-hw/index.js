class Governor {
    constructor(name, legislator, appointer, networker) {
      this.name = name;
      this.legislator = legislator;
      this.pardoner = appointer;
      this.networker = networker;
   }
  static legislate() {
      console.log("I am going to veto this bill.");
    }
  static appoint() {
      console.log("Congratulations! You are now a judge!");
    }
  static shakeHands() {
      console.log("Shaking hands is my favorite part of the job.")
    }
  }
  Governor.legislate();
  /*const jones = new Governor("Gov. Jones", "Bill 49A3", "Judge Judy", "Black-tie dinner");
  const smith = new Governor("Gov. Smith", "Bill 55B1", "Judge Clark", "Gala");*/
  
  //console.log(jones);
  //console.log(smith);
  
  /*Think of three properties all people share, set them with the constructor
  Think of three methods all people share
  Create a PostalWorker class that inherits from person, add some methods
  Create a Chef class that inherits from person, add some methods
  Create 2 PostalWorkers and 2 Chefs, log them and test all their methods*/
  
  class Person {
  //create 3 properites all people share. Use constructor.
    constructor(name, age, weight) {
      this.name = name;
      this.age = age;
      this.weight = weight;
    }
  //create 3 methods all people share
    greet(otherPerson) {
      console.log("HI " + otherPerson + "!")
    }
  
    work() {
      console.log('Whistle while you work!');
    }
  
    sleep() {
      console.log('ZZZZZZZ');
    }
  }
  //Create a PostalWorker class that inherits from Person
    class PostalWorker extends Person {
      constructor(name, shoes, hat) {
        super(name, shoes, hat);
   //     this.shield = shield;
  //      this.bag = bag;
      }
  //Add some methods
      walk() {
        console.log('Here is your mail.');
    }
      run() {
        console.log('Hurry, before he bites!');
      }
    }
  //Create a Chef class that inherits from person
    class Chef extends Person {
      constructor(name, shoes, hat, eyes) {
        super(name, shoes, hat, eyes);
   //     this.apron = apron;
   //     this.tool = ['knife', 'spatula', 'pan'];
        
      }
  //add some methods
      cook() {
        console.log('My famous enchiladas!');
      }
      chop() {
        console.log('I like my butcher knife.');
      }
    }
  //Create 2 PostalWorkers and 2 Chefs, 
      const PostalWorker1 = new PostalWorker('Andy', 'sneakers', 'blue cap');
      const PostalWorker2 = new PostalWorker('Annette', 'pumps', 'straw hat');
      const Chef1 = new Chef('Jacques', 'flip flops', 'chef hat', 'blue');
      const Chef2 = new Chef('Marcie', 'loafers', 'hairnet', 'brown');
  
  //log them and test all their methods
    Chef2.chop();
    PostalWorker1.run();
    Chef1.cook();
    PostalWorker2.walk();
  
  
    // console.log(Chef1);
    // console.log(PostalWorker2);
   // console.log(PostalWorker1);
    //console.log(Chef2);