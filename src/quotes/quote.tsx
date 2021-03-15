import './quote.css';
const movieQuotes = require('movie-quotes');

export default function Quote() {
    return (
        <div data-testid="container" className='quote'>
            {movieQuotes.random()}
        </div>
    );
}