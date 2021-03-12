import './quote.css';
const movieQuotes = require('movie-quotes');

export default function Quote() {
    return (
        <div className='quote'>
            {movieQuotes.random()}
        </div>
    );
}