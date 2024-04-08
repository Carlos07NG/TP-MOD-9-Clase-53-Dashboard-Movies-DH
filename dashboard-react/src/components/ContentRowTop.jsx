import ContentRowMovies from "./ContentRowMovies"
import GenresInDh from "./GenresInDh"
import LastMovieInDh from "./LastMovieInDh"

export const ContentRowTop = () => {
    const genres = [
        "Acción",
        "Animación",
        "Aventura",
        "Ciencia Ficción",
        "Comedia",
        "Documental",
        "Drama",
        "Fantasia",
        "Infantiles",
        "Musical",
      ];
    return (
        <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>
    
        <ContentRowMovies/>
        

        <div className="row">
        <LastMovieInDh/>

        <GenresInDh genres={genres} titles={'Generos en la base de datos'}/>
        
        </div>
    </div>
    )
}