import React from 'react';
import propTypes from 'prop-types';

const GuessedWords = (props)=>{
    let contents;
    if(props.guessedWords.length ===0){
        return contents = (
            <span data-test="guess-instructions">
                Try to Guess the Word
            </span>
        );
    } else {
        const guessedWordsRows = props.guessedWords.map((word, index)=>(
            <tr data-test="guessed-words" key={index}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
            </tr>
        ));
        return contents = (
            <div data-test="guessed-words">
                <h3>Guessed Words</h3>
                <table className="table table-sm">
                    <thead className="thead-light">
                        <tr><th>Guess</th><th>Matched Letters</th></tr>
                    </thead>
                    <tbody>
                        {guessedWordsRows}
                    </tbody>
                </table>
            </div>
        );
    }
    return(
        <div data-test="component-guessed-words">
        
        </div>
    );
};

GuessedWords.propTypes = {
    guessedWords: propTypes.arrayOf(
        propTypes.shape({
            guessedWord: propTypes.string.isRequired,
            letterMatchCount: propTypes.number.isRequired
        })
    ).isRequired
};

export default GuessedWords;