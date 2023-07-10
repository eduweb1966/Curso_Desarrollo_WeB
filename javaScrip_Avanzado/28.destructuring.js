const batman= {
    SuperHeroName:"Batman",
    real name:"Bruce Wayne",
    age:50,
    city:"Gothan"
    friends: ["Barbara", "Alfred", "Selina", "Tim"]
    gadgets: {
        graplingHook:"El gancho para subir cornisas",
        batmovile: "El mejor coche",
        batplane: false,
        radio:"asi se puede comunicar con sus amigos",
    }
};

/* const name =batman.name; 
cont realName = batman.realName; */

const { superHeroName, realName, city, friends}
= batman;
console.log(realName);

const { graplingHook, batmovile } = batman.gadgets;
console.log(graplingHook);