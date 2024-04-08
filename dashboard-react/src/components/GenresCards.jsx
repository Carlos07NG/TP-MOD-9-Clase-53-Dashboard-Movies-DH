import PropTypes from 'prop-types';
const GenresCards = ({genre}) => {
  return (
    <div className="col-lg-6 mb-4">
    <div className="card bg-dark text-white shadow">
        <div className="card-body">
            {genre}
        </div>
    </div>
</div>
  )
}
GenresCards.propTypes = {
    genre : PropTypes.string
}
export default GenresCards
