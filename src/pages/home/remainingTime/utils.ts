export const discharge = (value: string | number, separator?: string) => {
  let _value = value;

  if(typeof _value === 'number') {
    _value = _value.toString();
  }

  _value = _value.replace(/ /g, '');

  const discharged = separator ? `$1${separator}` : '$1\u00A0'

  return _value.replace(/(\d)(?=(\d{3})+(\D|$))/g, discharged);
}
