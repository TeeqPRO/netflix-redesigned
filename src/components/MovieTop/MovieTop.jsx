import React from 'react';
import './MovieTop.css';

const MovieTop = () => {
    return (
        <div className="MovieTopContainer">
            <div className="Movie-Info">
                <div className="Movie-Info-Top">
                    <div className="Movie-Info-Duration">
                        <p>1h 59m</p>
                    </div>
                    <div className="Movie-Info-More">
                        <div className="Movie-Info-Rating">
                            <p>8.6</p>
                        </div>
                        <div className="Movie-Info-Category">
                            <p>Horror, Science Fiction</p>
                        </div>
                        <div className="Movie-Info Quote">
                            <p>No one will hear you in space.</p>
                        </div>
                    </div>
                </div>
                <div className="Movie-Info-Middle">
                    <div className="Movie-Info-Title">
                        <p>Alien: Romulus</p>
                    </div>
                    <div className="Movie-Info-Description">
                        <p>While scavenging the deep ends of a derelict space station, a group of young space colonizers come face to face with the most terrifying life form in the universe.</p>
                    </div>
                </div>
                <div className="Movie-Info-Bottom">
                    <div className="Movie-Info-Button-Watch">
                        <button>Watch</button>
                    </div>
                    <div className="Movie-Info-Button-Add-List">
                        <button>Add list</button>
                    </div>
                </div>
            </div>
            <div className="Image">
                <div className="Movie1">
                    <div className="Movie1Image" style={{ backgroundImage: "url('https://image.tmdb.org/t/p/original/nu9RRatx8IjEUq6V20HiineymuO.jpg')", backgroundSize: "cover"}}></div>
                </div>
                <div className="Movie2"></div>
                <div className="Movie3"></div>
            </div>
        </div>
    );
};

export default MovieTop;
