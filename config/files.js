/**
 * File options
 * Options which relate to filesystem storage of assets
 */
module.exports.files = {
  // Maximum allowed file size in bytes
  // Defaults to 500MB
  maxBytes: process.env['MAX_SIZE_FILE'] || 524288000,
  // The fs directory name at which files will be kept
  dirname: process.env['PATH_FOR_ASSETS'] || '/tmp/'
};
