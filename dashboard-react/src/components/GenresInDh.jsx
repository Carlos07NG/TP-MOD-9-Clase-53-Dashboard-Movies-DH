import GenresCards from "./GenresCards";
import PropTypes from 'prop-types';


const GenresInDh = () => {
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
    <div className="col-lg-6 mb-4">						
    <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
                {"Generos Disponibles"}
            </h5>
        </div>
        <div className="card-body">
            <div className="row">
                {
                    genres.map((genre,index) => <GenresCards key={genre + index} genre={genre}/>)
                
                }
            </div>
        </div>
    </div>
</div>
  )
}
GenresInDh.propTypes = {
    titles : PropTypes.string.isRequired,
    genres : PropTypes.array
}
export default GenresInDh
