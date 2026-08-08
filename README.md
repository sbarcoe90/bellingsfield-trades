


## Suggest a contact form

The website includes a **+ Suggest a contact** button.

1. Create a Google Form with fields such as:
   - Name / Business
   - Trade / Service
   - Phone number
   - Optional note
   - Recommended by you? (Yes/No)
2. In Google Forms, copy the responder link.
3. Open `app.js`.
4. Replace:

   `const SUGGEST_CONTACT_FORM_URL = "YOUR_GOOGLE_FORM_URL";`

   with your actual Google Form link.
5. In Google Forms → Responses → three-dot menu, enable **Get email notifications for new responses**.
6. Optionally link the form responses to a Google Sheet for a permanent submission queue.
