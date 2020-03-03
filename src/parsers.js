import yaml from 'js-yaml';
import ini from 'ini';
import _ from 'lodash';

const parsers = {
  json: JSON.parse,
  yml: yaml.safeLoad,
  ini: ini.parse,
};

const parseData = (format, data) => {
  switch (true) {
    case _.has(parsers, format):
      return parsers[format](data);
    default:
      throw new Error(`Ooops, parser for "${format}" wasn't found :(`);
  }
};

export default parseData;
