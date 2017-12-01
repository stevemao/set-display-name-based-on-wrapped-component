const setDisplayNameBasedOnWrappedComponent = require('./')
const { wrapDisplayName, setDisplayName, compose } = require('recompose');

test('this should work', () => {
  const WrappedComponent = () => {}
  const Component = () => {}
  WrappedComponent.displayName = 'WrappedComponent'
  setDisplayNameBasedOnWrappedComponent(WrappedComponent, 'DisplayName')(Component)

  expect(Component.displayName).toEqual('DisplayName(WrappedComponent)')
});
