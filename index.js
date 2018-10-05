/**
 * @function sprintf
 *
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