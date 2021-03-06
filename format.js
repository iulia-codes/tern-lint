/**
 * json
 *
 * @param {Object} data
 * @param {Object[]} data.messages
 * @return {String}
 */
exports.json = function (data) {
  return JSON.stringify(data);
}

/**
 * pretty
 *
 * @param {Object} data
 * @param {Object[]} data.messages
 * @return {String}
 */
exports.pretty = function (data) {
  return JSON.stringify(data, null, ' ');
};

/**
 * vim
 *
 * @param {Object} data
 * @param {Object[]} data.messages
 * @return {String}
 */
exports.vim = function (data) {
  if (!data || !data.messages) {
    return '';
  }

  return data.messages.map(function (m) {
    return [
      m.file + ':' + (m.from),
      m.severity,
      m.message,
    ].join(': ');
  }).join('\n');
};
