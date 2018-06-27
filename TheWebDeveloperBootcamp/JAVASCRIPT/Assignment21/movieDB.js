var movies = [
    {
        title: "Judaai",
        reading: 1,
        hasWatched: true,
        rating: 5
    },
    {
        title: "Ishq",
        reading: 0,
        hasWatched: false,
        rating: 3.2
    },
    {
        title: "Hiss",
        reading: 1,
        hasWatched: true,
        rating: 0
    }
    
];
for(i=0; i <= movies.length-1; i++){
    if(movies[i].hasWatched == true){
        document.write("You have watched" + movies[i].title + "with rating -" + movies[i].title +"\n" );
    }
}