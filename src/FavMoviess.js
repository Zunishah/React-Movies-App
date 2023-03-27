import React from 'react';

const FavMoviess = ({movies,favouritescomponent,handFaavouritesClick}) => {

    const FavouritesComp = favouritescomponent
  return (
    <>

    <div className="movie-list-main2">

            <h1 className='m-h1'>FAVOURITES</h1>
        <div className="content">
            {
                movies.map((movie)=>
                    <>
                    
                    <div className="cards">

                        <img className='movies-pic' src={movie.Poster} alt="" />


                        <div className="fav">

                            <p></p>

                            <h1 className='fav-h1'>{movie.Title}</h1>

                            <p className='Reselead'>Reselead : {movie.Year}</p>

                                <div className="favv-div" onClick={()=> handFaavouritesClick(movie)}>
                    
                                <FavouritesComp/>
                                </div>

                            {/* <button className='btn-fav'>Add To Favarate</button> */}
                        </div>

                    </div>
                    
                    
                    
                    </>
            )
        }
        </div>


    </div>
    
    
    
    
    </>
  );
}

export default FavMoviess;
