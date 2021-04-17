import {shallow} from 'enzyme';
//import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Congrats from './congrats';
import { findTestByAttr, checkProps } from '../test/testUtils';

const defaultProps = {success: false};

const setup = (props = {}) =>{
    const setupProps = {...defaultProps, ...props};
    return(shallow(<Congrats {...setupProps} />))
}

test('Run without errors', ()=>{
    const wrapper = setup({success: false});
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

test('does not throw warning without expected props', ()=>{
    const expectedProps = {success: true};
    checkProps(Congrats, expectedProps);
});