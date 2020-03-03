import _ from 'lodash';

const objectStringify = (object, depth) => {
  const indent1 = _.repeat(' ', depth * 4 + 8);
  const indent2 = _.repeat(' ', depth * 4 + 4);
  const keys = Object.keys(object);
  const mapper = (key) => `${indent1}${key}: ${object[key]}`;
  const currentString = keys.map(mapper).join('\r\n'); // os.EOL
  return `{\r\n${currentString}\r\n${indent2}}`; // os.EOL
};

export default objectStringify;
