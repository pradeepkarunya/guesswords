import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Congrats from './congrats';
import { findTestByAttr } from '../test/testUtils';


Enzyme.configure({adapter: new EnzymeAdapter()});


const setup = (props = {}) =>{
    return(shallow(<Congrats {...props} />))
}

test('Run without errors', ()=>{
    const wrapper = setup();
    const component = findTestByAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
});

test('Run with props with success false property', ()=>{
    const wrapper = setup({success: false});
    const component = findTestByAttr(wrapper,'component-congrats');
    expect(component.text()).toBe('Error');
});

test('Run with props with success true property', ()=>{
    const wrapper = setup({success: true});
    const component = findTestByAttr(wrapper,'component-congrats');
    expect(component.text()).toBe('Congratulation! You Guessed the Word!!!');
});