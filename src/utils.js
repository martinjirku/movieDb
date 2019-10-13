import { isEmpty } from 'lodash';

export const isEmptyInformation = (value) => value === 'N/A' || isEmpty(value);
