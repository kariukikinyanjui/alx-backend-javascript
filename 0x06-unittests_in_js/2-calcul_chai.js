function calculateNumber(type, a, b) {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  } else if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  } else if (type === 'DIVIDE') {
    const roundedB = Math.round(b);
    if (roundedB === 0) {
      return 'Error';
    } else {
      return Math.round(a) / roundedB;
    }
  } else {
    return 'Invalid type';
  }
}

module.exports = calculateNumber;
