//! Person Detail

class Person{
    constructor(Name="Giri",Age="Nil",Gender="Nil",Martial_Status="Nil",Contact="Nil",Email="Nil"){

        this.Name=Name;
        this.Age=Age;
        this.Gender=Gender;
        this.Martial_Status=Martial_Status;
        this.Contact=Contact;
        this.Email=Email;

    }
}

const per = new Person("22","","Male","","9715424895","giridharan831@gmail.com");

console.log(per.Name,per.Age,per.Gender,per.Martial_Status,per.Contact,per.Email);

//! Car Detail

class Car{
    constructor(Brand,Color,Model,TYpe,Price,Section){


        this.Brand=Brand;
        this.Color=Color;
        this.Model=Model;
        this.TYpe=TYpe;
        this.Price=Price;
        this.Section=Section;
    }
}

const obj1 = new Car("BMW","WHITE","Diesel","LUXURY","20-Lakhs","Nil");

console.log(`
Brand: ${obj1.Brand}
Color: ${obj1.Color}
Model: ${obj1.Model}
Type: ${obj1.Type}
Price: ${obj1.Price}
Section: ${obj1.Section}
`);

//! Movie

class Movie{
    constructor(Title,Studio="Elon musk",Rating="pg13") {

        this.Title=Title;
        this.Studio=Studio;
        this.Rating=Rating;

        
    }
}

const Padam = new Movie("Casino Royale");

console.log(Padam.Title,Padam.Studio,Padam.Rating);

