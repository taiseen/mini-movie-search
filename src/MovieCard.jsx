
const MovieCard = ({ movie: { Title, Type, Poster, Year } }) => {

    const placeHolderImg = 'https://via.placeholder.com/400';

    return (

        <div className="movie">

            <div>
                <p>{Year}</p>
            </div>
            <div>
                <img
                    src={Poster !== 'N/A'
                        ? Poster
                        : placeHolderImg}
                    alt={Title}
                />
            </div>
            <div>
                <span>{Type}</span>
                <h3>{Title}</h3>
            </div>
        </div>

    )
}

export default MovieCard;