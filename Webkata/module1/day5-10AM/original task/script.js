let resume=[
    {
        "Name":"Giri",
        "Age":"22",
        "DOB":"11-08-2001",
        "Language_Known":["Tamil","English","Kannada"],
        "Skills":["HTML","CSS","JS"],
    },

    {
    
        "Sex":"Male",
        "Hobbies":["Reading","writting","Planting"]
    }

]

// console.log(resume);

//! for in

for(let i in resume){
    console.log(resume[i].Name);  
}



//! for of

for(let j of resume[0].Hobbies){
    console.log(j);

}

