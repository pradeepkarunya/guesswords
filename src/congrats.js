const guessCongratsWord = 'Congratulation! You Guessed the Word!!!';

export default (props) => {
    if(props.success){
        return(<div data-test="component-congrats">
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