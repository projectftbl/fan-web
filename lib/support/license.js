import filter from 'lodash/collection/filter';
import { config } from '@ftbl/support';

const license = config('license');

export const missing = members => {
  if (members.length === 0) return false;
  return filter(members, member => member.license == null || member.license === '').length > 0;
};

export const updated = members => {
  if (members.length === 0) return false;
  return filter(members, member => member.license !== license).length > 0;
};
