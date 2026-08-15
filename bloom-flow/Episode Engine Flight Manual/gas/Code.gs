/**
 * The Episode Engine — Flight Manual (Bloom Flow Ecosystem)
 * Google Apps Script backend — serves the single-file manual with iframing
 * allowed so it can be embedded into a Notion page.
 */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('The Episode Engine — Flight Manual')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
