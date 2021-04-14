import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';


Enzyme.configure({adapter: new EnzymeAdapter()});

test('render without test',()=>{
  const wrapper = shallow(<App />);
  const el = wrapper.find('[data-test="component-app"]');
  expect(el.length).toBe(1);
});