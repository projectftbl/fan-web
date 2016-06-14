import memoize from 'lru-memoize';
import { createValidator, isChecked } from '@ftbl/validation';

export default memoize(10)(createValidator({
  accepted: [ isChecked() ]
}));
