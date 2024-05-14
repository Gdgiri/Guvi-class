class Movie{
    constructor(title,studio,rating){

        this.title=title;
        this.studio=studio;
        this.rating=rating;

    }
}

const obj=new Movie("Leo","7-Studio","8.2");
const obj2=new Movie("Vikram","RK-Films","9.5");

console.log(obj.title,obj.studio,obj.rating);
console.log(obj2.title,obj2.studio,obj2.rating);

