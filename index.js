/**
 * @function parseString
 *
 * This function is same pf sprintf php
 * You need pass a string with "%s" and
 * array/string of string(s) to replace
 *
 * Example to call:
 * > translationHelper.string('My name is %s", 'foo');
 * > Output> My name is foo
 *
 * > translationHelper.string('My name is %s and your is %s", 'foo', 'bar');
 * > Output> My name is foo and your is bar
 *
 * @param { string } text
 * @param { array | string } rest
 * @return { string }
 * 
 * @public
 *
*/

const sprintf = (text, ...rest) => {
  if (text) {
    let i = 0;
    return text.replace(/%s/g, () => rest[i++]);
  }

  return;
}

export {
  sprintf
}