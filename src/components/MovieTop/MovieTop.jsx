import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import './MovieTop.css';

const MovieTop = () => {
    const [descriptionWidth, setDescriptionWidth] = useState('auto');

    useEffect(() => {
        const titleElement = document.querySelector('.Movie-Info-Title');
        const minDescriptionWidth = 200;

        if (titleElement) {
            const titleWidth = titleElement.offsetWidth;
            const calculatedWidth = titleWidth + 210;

            setDescriptionWidth(`${Math.max(calculatedWidth, minDescriptionWidth)}px`);
        }
    }, []);

    return (
        <div className="MovieTopContainer">
            <div className="Movie-Info">
                <div className="Movie-Info-Placement">
                    <div className="Movie-Info-Content">
                        <div className="Movie-Info-Top">
                            <div className="Movie-Info-Duration">
                                1h 59m
                            </div>
                            <div className="Movie-Info-More">
                                <div className="Movie-Info-Rating">
                                    <img src={assets.Star} alt="Star" /> 8.6
                                </div>
                                <div className="Movie-Info-Category">
                                    Horror Science Fiction
                                </div>
                                <div className="Movie-Info-Decoration">
                                    -
                                </div>
                                <div className="Movie-Info-Quote">
                                    No one will hear you in space.
                                </div>
                            </div>
                        </div>
                        <div className="Movie-Info-Middle">
                            <div className="Movie-Info-Title">
                                Alien: Romulus
                            </div>
                            <div className="Movie-Info-Description" style={{ width: descriptionWidth }}>
                                While scavenging the deep ends of a derelict space station, a group of young space colonizers come face to face with the most terrifying life form in the universe.
                            </div>
                        </div>
                        <div className="Movie-Info-Bottom">
                            <button className='Watch-btn Movie-Info-Button'><img src={assets.Play} alt="Play" /> <p>Watch</p></button>
                            <button className='Add-list-btn Movie-Info-Button'><img src={assets.Add} alt="Add" /> <p>Add list</p></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Image">
                <div className="Movie">
                    <div className="MovieImage" style={{ backgroundImage: "url('https://image.tmdb.org/t/p/original/nu9RRatx8IjEUq6V20HiineymuO.jpg')", backgroundSize: "cover" }}></div>
                </div>
            </div>
        </div>
    );
};

export default MovieTop;
