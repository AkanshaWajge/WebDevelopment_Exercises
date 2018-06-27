var movies = [
    {
        title: "Frozen",
        reading: 1,
        hasWatched: true,
        rating: 5
    },
    {
        title: "Inside Out",
        reading: 0,
        hasWatched: false,
        rating: 3.2
    },
    {
        title: "How I met your mother",
        reading: 1,
        hasWatched: true,
        rating: 0
    }
    
];
for(i=0; i <= movies.length-1; i++){
    if(movies[i].hasWatched == true){
        document.write("You have watched " + movies[i].title + " with rating - " + movies[i].rating +" stars\n" );
    }
    else{
        document.write("You have not seen " + movies[i].title + " with rating - " + movies[i].rating +"stars yet \n" );

    }
}