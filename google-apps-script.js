// ╔══════════════════════════════════════════════════════════════════════╗
// ║  Google Apps Script — TranquiClean Contact Form Handler             ║
// ║                                                                      ║
// ║  SETUP INSTRUCTIONS:                                                 ║
// ║  1. Go to https://script.google.com                                  ║
// ║  2. Click "New project"                                              ║
// ║  3. Delete the default code and paste this entire file               ║
// ║  4. Change YOUR_EMAIL below to your Google Workspace email           ║
// ║  5. Click "Deploy" → "New deployment"                                ║
// ║  6. Choose type: "Web app"                                           ║
// ║  7. Set "Execute as": "Me"                                           ║
// ║  8. Set "Who has access": "Anyone"                                   ║
// ║  9. Click "Deploy" and authorize when prompted                       ║
// ║ 10. Copy the Web App URL                                             ║
// ║ 11. Paste it into config.js → contactForm.googleScriptUrl            ║
// ║ 12. Done! Form submissions will email you directly.                  ║
// ╚══════════════════════════════════════════════════════════════════════╝

// ── IMPORTANT: Since hello@tranquiclean.com is an alias, we log    ──
// ── submissions to a Google Sheet so nothing is ever lost.          ──
// ── The script also sends an email notification via GmailApp.       ──

// ↓↓↓ Set this to your PRIMARY Google login email (not the alias) ↓↓↓
const PRIMARY_EMAIL = "Amedina@tranquiclean.com";

// ── Run this function FIRST to trigger the authorization prompt ──
// 1. Select "authorizeScript" from the function dropdown
// 2. Click ▶ Run
// 3. Click "Review permissions" → choose your account → Allow
function authorizeScript() {
  var quota = MailApp.getRemainingDailyQuota();
  Logger.log("Auth successful! Email quota remaining: " + quota);
  // Test that GmailApp works too
  var drafts = GmailApp.getDrafts();
  Logger.log("GmailApp authorized. Draft count: " + drafts.length);
  // Test Drive/Sheets access
  Logger.log("DriveApp authorized.");
}

// ── Required: handle GET requests ──
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ result: "success", info: "GET received" }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    var data;
    // Form-encoded data comes in e.parameter, JSON comes in e.postData.contents
    if (e.parameter && e.parameter.name) {
      data = e.parameter;
    } else if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        data = e.parameter || {};
      }
    } else {
      data = e.parameter || {};
    }

    // Validate we received at least a name or email
    if (!data.name && !data.email) {
      return ContentService
        .createTextOutput(JSON.stringify({ result: "error", error: "No form data received" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // ── 1. Log to Google Sheet (reliable — never lost) ──
    logToSheet(data);

    // ── 2. Send email notification ──
    var subject = "New Cleaning Request from " + (data.name || "Website Visitor");

    var body = [
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      "   NEW CLEANING REQUEST",
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      "",
      "Name:      " + (data.name || "—"),
      "Email:     " + (data.email || "—"),
      "Phone:     " + (data.phone || "—"),
      "Service:   " + (data.service || "—"),
      "Address:   " + (data.address || "—"),
      "Pref Date: " + (data.date || "—"),
      "",
      "Message:",
      data.message || "(no message)",
      "",
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      "Sent from tranquiclean.com",
    ].join("\n");

    // Send to the primary Google account
    GmailApp.sendEmail(PRIMARY_EMAIL, subject, body, {
      replyTo: data.email || "",
      name: "TranquiClean Website",
    });

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    // Even if email fails, the Sheet log above already captured the data
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ── Log every submission to a Google Sheet (auto-creates if missing) ──
function logToSheet(data) {
  var SHEET_NAME = "TranquiClean Leads";
  var ss;

  // Try to find existing spreadsheet by name
  var files = DriveApp.getFilesByName(SHEET_NAME);
  if (files.hasNext()) {
    ss = SpreadsheetApp.open(files.next());
  } else {
    // Create new spreadsheet
    ss = SpreadsheetApp.create(SHEET_NAME);
    // Add headers
    ss.getActiveSheet().appendRow([
      "Timestamp", "Name", "Email", "Phone", "Service", "Address", "Preferred Date", "Message"
    ]);
  }

  ss.getActiveSheet().appendRow([
    new Date().toLocaleString("en-US", { timeZone: "America/New_York" }),
    data.name || "",
    data.email || "",
    data.phone || "",
    data.service || "",
    data.address || "",
    data.date || "",
    data.message || "",
  ]);
}
