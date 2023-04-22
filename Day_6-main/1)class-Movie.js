class  Movie{
    constructor(title,studio,rating){     //constructor is the specialized method used to construct the properties of a class.
         this.title  = title;
         this.studio = studio;
         this.rating = rating;
    }
    getPG(){
         if(this.rating===undefined){     //this if condition will execute if rating is no given and then it take "PG" as default.
            this.rating="PG";
           };
         let data=`
         Movie Title: ${this.title}
         Studio     : ${this.studio}
         Rating     : ${this.rating}
         `;
         return data;
    }
};
let Movie1    =  new Movie("Top Gun: Maverick","Paramount pictures","PG10");
let Movie2    =  new Movie("Casino_Royale","Eon productions","PG13");
let Movie3    =  new Movie("The Batman","Warner Bros.Pictures");
let arr_movie =  [Movie1,Movie2,Movie3];              //this array contains instance of an class.

arr_movie.forEach((a)=>console.log(a.getPG()));       //we are using forEach function to print the class instance properties.


/* The output for the above program is shown below:

         Movie Title: Top Gun: Maverick
         Studio     : Paramount pictures
         Rating     : PG10


         Movie Title: Casino_Royale
         Studio     : Eon productions
         Rating     : PG13


         Movie Title: The Batman
         Studio     : Warner Bros.Pictures
         Rating     : PG
*/
