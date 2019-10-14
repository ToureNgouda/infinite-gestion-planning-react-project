export const typeEmployeService ={
    typeEmploye,
    genre
}
 function typeEmploye(){
   return [
    {id:1,nom:"Superviseur"},
    {id:2,nom:"Commis Cuisine"},
    {id:3,nom:"Hotesses"},
    {id:4,nom:"Barman"}
] 
}
function genre(){
    return [
       {id:1,nom:"Homme"},
         {id:2,nom:"Femme"}
    ]
}