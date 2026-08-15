/**
 * Bloom Flow (Creator) · Media Matrix — Google Apps Script backend.
 * Serves the single-file Index.html app with iframing allowed so it can be
 * embedded into a Notion page.
 */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Bloom Flow (Creator) · Media Matrix')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
