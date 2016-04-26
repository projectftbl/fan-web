import { fetchAccountsOnFetchMember, fetchAccountsOnSetPrimary, connect } from './accounts';
import { fetchUsersOnFetchMember, fetchUsersOnSetPrimary } from './users';
import { update, signedOn, reloaded, signUp, signedUp, verified, setPrimary, createFailed } from './members';

export default [ 
  fetchAccountsOnFetchMember, fetchAccountsOnSetPrimary, connect
, fetchUsersOnFetchMember, fetchUsersOnSetPrimary
, update, signedOn, reloaded, verified, signUp, signedUp, setPrimary, createFailed 
];