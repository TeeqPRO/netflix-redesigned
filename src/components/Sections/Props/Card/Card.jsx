import React from 'react'
import { assets } from '../../../../assets/assets.js'
import './Card.css'

const Card = ({ id }) => {

    function CardClicked(elem) {
        document.getElementById(elem).classList.toggle('Selected-Red')
    }

  return (
    <div className="Card" id={`Top-Section-Card-${id}`}>
        <a href={`Card${id}.html`} className='CardA'></a>
        <div className="Card-Top">
            <div className="Card-Poster" style={{ backgroundImage: "url('https://image.tmdb.org/t/p/original/dYdcNyQvRdGEAhGist95Uf26h3v.jpg')", backgroundSize: "cover" }}></div>
        </div>
        <div className="Card-Info">
            <div className="Card-Title">
                Star Wars: Solo
            </div>
            <div className="Card-Stats">
                <div className="Card-Left">
                    <div className="Card-Year">
                        2018
                    </div>
                </div>
                <div className="Card-Right">
                    <div className="Card-Add-To-Favorite" id={`Top-Section-CardAddToFavorite-${id}`}>
                        <button onClick={() => CardClicked(`Top-Section-CardAddToFavorite-${id}`)} className='CardBtn'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="4D4C51">
                                <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"/>
                            </svg>
                        </button>
                    </div>
                    <div className="Card-Already-Watched" id={`Top-Section-CardAlreadyWatched-${id}`}>
                        <button onClick={() => CardClicked(`Top-Section-CardAlreadyWatched-${id}`)} className='CardBtn'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="4D4C51">
                                <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Z"/>
                            </svg>
                        </button>
                    </div>
                    <div className="Card-Rating">
                        <img src={assets.Star} alt="Star" /> 8.6
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card;
