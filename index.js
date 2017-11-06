import { compose } from 'ramda';
import { wrapDisplayName, setDisplayName } from 'recompose';

export default compose(
  setDisplayName,
  wrapDisplayName,
);
