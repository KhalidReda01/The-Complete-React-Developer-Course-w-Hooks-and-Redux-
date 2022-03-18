/**
 * yarn add redux@3.7.2
 */
import { createStore } from 'redux';
const store = createStore((state={count:0}) => {
  return state;
});
// this.setState((prevState) => {
//   return prevState;
// })
console.log(store.getState())// Object {count:0}
console.log('101')
/**
 * yarn add redux@3.7.2                                                    s comm
yarn add v1.22.5
[1/4] Resolving packages...
info There appears to be trouble with your network connection. Retrying...ct-Dev
                                                                          in)   
info There appears to be trouble with your network connection. Retrying...
yarn add v1.22.5
[1/4] Resolving packages...
info There appears to be trouble with your network connection. Retrying...      
                                                                                
info There appears to be trouble with your network connection. Retrying...      
                                                                                
info There appears to be trouble with your network connection. Retrying...      

info There appears to be trouble with your network connection. Retrying...
info There appears to be trouble with your network connection. Retrying...
info There appears to be trouble with your network connection. Retrying...info There appears to be trouble with your network connection. Retrying...error An unexpected error occurred: "https://registry.yarnpkg.com/redux: ESOCKETTIMEDOUT".
info If you think this is a bug, please open a bug report with the information provided in "C:\\Users\\khalid\\Desktop\\Current Projects\\The-Complete-React-Developer-Course-w-Hooks-and-Redux-\\10.Redux\\CAP Section 10\\expensify-app\\yarn-error.log".
info Visit https://yarnpkg.com/en/docs/cli/add for documentation about this command.
 */