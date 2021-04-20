import checkPropTypes from 'check-prop-types';

export const findTestByAttr = (wrapper, val) => {
    return(wrapper.find(`[data-test='${val}']`));
}

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name
    );

    console.log(component.propTypes);
    console.log(conformingProps);

    expect(propError).toBeUndefined();
}