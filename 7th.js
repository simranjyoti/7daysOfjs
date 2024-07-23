let books={
    title: "no title",
    author: "komal sharma",
    year:2003,
    newfun : function(){
return(`ashu sharma title is ${books.title} and author is  ${books.author}`)
    },
    newyear: function(years){
        return(this.year=years)
    },
    newMethod:function(){
        return(this['title'])
    }

}
console.log(books.newMethod());

console.log(books.newfun());

console.log(books);
books.newyear(2024)
console.log(books);



console.log(` title is ${books.title} and author is  ${books.author}`);



let library={
    
       name:"komal",
       books:["web", "cloud", "aws"],
       new:  {
        name:"ashu",
       books:["web", "cloud", "aws"],

       }
    }
    console.log(library);
    console.log(library.new.name);
   library.books.forEach((val)=>{
        if(val=="cloud"){
            console.log(library.books);
        }
    })




