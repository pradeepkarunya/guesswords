import PropTypes from 'prop-types';
const guessCongratsWord = 'Congratulation! You Guessed the Word!!!';

const Congrats = (props) => {
    if(props.success){
        return(<div data-test="component-congrats" className="alert alert-success">
            <span data-test="congrats-message">
                {guessCongratsWord}
            </span>
        </div>)
    }else{
        return(<div data-test="component-congrats">
            Error
        </div>)
    }
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
};

export default Congrats;