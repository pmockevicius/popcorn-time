import Movies from "../Components/data/movies.json"

import "./Main.css"



function Main(){
    
      return(
        <div className="Main">
            {Movies.map( (movieObj) => {
                return (
                    <div key={movieObj.id} className="card">
                        <p>{movieObj.title}</p>
                        <p>Rating: {movieObj.rating}</p>
                        <p>Year created: {movieObj.year}</p>

                    </div>
                )
                
            })}
            
        </div>
        
    )
}

export default Main