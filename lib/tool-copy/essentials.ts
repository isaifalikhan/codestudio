/**
 * Page copy for image, PDF, text, and security tools.
 * See lib/tool-copy-extended.ts for why these exist.
 */

export const LONG_DESCRIPTIONS: Record<string, string> = {
  // ── IMAGE TOOLS ───────────────────────────────────────────
  'image-converter': `The Image Format Converter re-encodes a picture from one format to another — JPG, PNG, WebP, or AVIF — using the browser's own canvas encoder, so the file never leaves your device. Format choice matters more than most people expect: the same photograph saved as PNG can be five to ten times larger than the WebP version at a quality difference nobody can see on a screen.

The short version of when to use what: JPG for photographs when you need maximum compatibility, PNG when you need real transparency or pixel-exact screenshots and diagrams, WebP as the modern default for the web because it handles both photos and transparency at much smaller sizes, and AVIF when you want the smallest file and your audience is on current browsers. Converting a JPG to PNG will not recover detail the JPG already discarded — it just makes a bigger file — so convert in the direction that matches what the image is for.

Common reasons people land here: a CMS or job application form that only accepts JPG, a logo that needs transparency preserved as PNG, or a batch of product photos being moved to WebP to cut page weight before a site launch. Converting a transparent PNG to JPG will flatten the transparency onto a solid background, which is worth knowing before you overwrite the original.

Conversion runs entirely in your browser through the Canvas API — no upload, no queue, and no copy of your image sitting on a server afterwards.`,

  'favicon-generator': `The Favicon Generator takes an image or a piece of text and produces the small icon that represents your site in a browser tab, a bookmark list, and — significantly for anyone doing SEO — next to your result in Google's mobile search listings. It renders the standard sizes at once rather than making you export each one by hand from a design tool.

Favicons are unforgiving about detail because they are usually displayed at 16 or 32 pixels square. A full logo with a wordmark almost always turns to mush at that size; the icons that work are a single letter, a monogram, or one simple shape with high contrast against both light and dark tab bars. If your logo has fine lines or thin text, generating from a cropped symbol rather than the full lockup gives a much better result.

Google requires a site's favicon to be a stable, crawlable URL and at least 48x48 pixels to display it in search results, which is why generating the larger sizes matters even though the browser tab only ever shows a tiny one. The same files double as the app icons a phone uses when someone adds your site to their home screen.

Everything is rendered on canvas in your browser, so the source image you upload is never transmitted anywhere.`,

  // ── PDF TOOLS ─────────────────────────────────────────────
  'pdf-to-jpg': `PDF to JPG rasterizes each page of a PDF into a standalone JPG image, rendering the pages with PDF.js — the same engine Firefox uses to display PDFs — directly in your browser tab. You get one image per page, which you can then use anywhere a PDF would be awkward: a slide, a forum post, a listing photo, or a messaging app that will not preview PDF attachments.

Rasterizing is a one-way conversion, and that is sometimes the point. Text in the resulting JPG is pixels, not characters, so it cannot be selected, searched, or copied, and it will not reflow. That makes the output unsuitable as an archive copy but genuinely useful when you want to show a document without letting someone easily lift the text out of it, or when you need a thumbnail preview of a contract or invoice.

Resolution is the tradeoff to think about. Rendering at a higher scale gives crisper text and larger files; rendering low produces small images where body copy goes fuzzy. For screen use, roughly double the on-page size is usually enough; for anything that will be printed or zoomed into, render higher and accept the file size.

Rendering happens locally in your browser — the PDF is never uploaded, which matters when the document is a signed contract, a bank statement, or anything else you would not email to a stranger.`,

  'split-pdf': `Split PDF pulls selected pages out of a PDF into separate files — either exploding every page into its own document or extracting a specific range such as pages 4 through 9 — using pdf-lib to rewrite the file structure in your browser. The extracted pages keep their original text layer, fonts, and vector graphics rather than being flattened into images, so the output is still a real, selectable, searchable PDF.

The usual reasons are practical rather than technical: sending one section of a long report without attaching the whole thing, separating a scanned bundle back into the individual documents it was combined from, pulling a single signed page out of a contract, or splitting a 200-page manual into chapters that people will actually open.

One thing worth checking on the way out: page-level extraction carries the page content but not necessarily every document-level feature. Bookmarks pointing at pages that are no longer in the file, form field relationships spanning multiple pages, and some annotations can behave differently in the split output than they did in the original. For plain text and image pages — which is most documents — the result is a faithful copy.

The whole operation runs in your browser. Nothing is uploaded, which is the difference that matters when the PDF is a passport scan, medical record, or commercial agreement.`,

  'word-to-pdf': `Word to PDF converts a .docx file into a PDF, reading the document with Mammoth to extract its text and structure and then laying that out as a PDF in your browser. PDF is what most employers, universities, and clients ask for because it renders identically everywhere, while a Word file shifts its layout depending on which fonts the reader happens to have installed.

The conversion is faithful to content and structure — headings, paragraphs, lists, bold and italic, and links come across — rather than being a pixel-perfect reproduction of Word's own rendering engine. Documents that lean on heavy layout features (complex multi-column tables, floating text boxes, embedded charts, custom fonts, precise page-break control) are the ones most likely to look different from what Word showed you, so open the output and check it before sending anything that matters.

The most common use by a wide margin is a CV or cover letter that a job posting insists on receiving as PDF, followed by assignments with a submission format requirement and quotes or proposals a client wants in a form they cannot accidentally edit.

Both the reading and the PDF generation happen locally in your browser, so a document containing your address, salary history, or a client's confidential figures never leaves your machine.`,

  // ── TEXT TOOLS ────────────────────────────────────────────
  'character-counter': `The Character Counter gives you a live character count with and without spaces, plus word, sentence, and line counts, as you type or paste. Character limits are enforced in far more places than word limits — X caps posts at 280, an SMS segment is 160 characters before it splits and gets billed twice, an Instagram bio allows 150, and a meta description is effectively cut off by Google somewhere around 155 to 160 characters.

Counting characters correctly is less obvious than it looks. Emoji and many non-Latin characters occupy more than one unit in some systems, so a post that looks like 275 characters can be rejected at 280 by a platform counting differently. Trailing spaces and line breaks also count against most limits even though they are invisible. Seeing both the with-spaces and without-spaces numbers side by side makes it obvious which limit you are actually up against.

Typical uses: trimming a meta description so Google does not truncate it mid-sentence, fitting a product title into a marketplace's field limit, keeping a text message to a single billed segment, and checking that an ad headline fits before the ad platform rejects it.

Counting runs entirely in your browser as you type — nothing is submitted, stored, or sent anywhere.`,

  'case-converter': `The Case Converter switches text between UPPERCASE, lowercase, Title Case, Sentence case, and developer-oriented forms like camelCase, snake_case, and kebab-case, in one paste-and-click rather than retyping. It is the fastest fix for a block of text that arrived in the wrong shape — a headline someone typed in all caps, a spreadsheet column of names in inconsistent capitalisation, or a list of labels that needs to become variable names.

Title Case is the case that has actual rules rather than a mechanical transformation, and the rules differ by style guide: most keep short articles, conjunctions, and prepositions lowercase unless they are the first or last word, which is why a naive capitalise-every-word conversion produces headlines like "The Best Way To Do It" that read subtly wrong to an editor. If you specifically need APA, MLA, or Chicago title case, the dedicated Title Case Converter applies those rules properly.

The programming cases exist for a different reason: converting a human-readable label such as "User Profile Image" into userProfileImage, user_profile_image, or user-profile-image saves a surprising amount of manual retyping when you are generating variable names, database columns, CSS classes, or URL slugs from a list of copy.

All conversions happen instantly in your browser — nothing is uploaded, and long documents are handled as easily as a single headline.`,

  'lorem-ipsum': `The Lorem Ipsum Generator produces placeholder text by the word, sentence, or paragraph so you can fill a layout before the real copy is written. The pseudo-Latin is deliberately meaningless: designers have used it since the 1500s precisely because text you cannot read forces you to judge the typography, line length, and rhythm of a page rather than getting drawn into the content.

That property is also its main limitation. Lorem ipsum has an unusually even distribution of short words and no long compound terms, no numbers, and no URLs, so a layout that looks balanced full of it can break the moment real copy with a 22-character product name or a long email address goes in. For anything close to launch, testing with realistic sample text — including your longest plausible heading — catches problems placeholder text hides.

The practical uses are the obvious ones: filling a wireframe or a design mockup, checking how a CMS template handles three paragraphs versus thirty, generating a dummy blog post while building a theme, and sizing a text field or card component against content that is not yet available.

Generation runs instantly in your browser, and you can copy any amount straight to the clipboard.`,

  'text-to-slug': `The Text to Slug Converter turns a title into a clean URL slug: lowercase, spaces replaced with hyphens, accents folded to their plain ASCII equivalents, punctuation and symbols stripped, and repeated or trailing hyphens collapsed. "Café Prices in Islamabad (2026)!" becomes cafe-prices-in-islamabad-2026, which is what a URL, a filename, or a CSS class needs to be.

Slugs matter more for SEO than their length suggests. Google reads words in a URL, so a descriptive slug gives a small ranking and click-through signal, while an auto-generated ?p=4172 gives none. Hyphens are the separator Google treats as a word boundary; underscores are not, which is why post_title_here reads as one token and post-title-here reads as three. Keeping slugs short and dropping filler words generally makes them stronger, not weaker.

The one real hazard is changing a slug on a page that is already live and indexed. The old URL becomes a 404 and any links pointing at it stop passing value unless you add a 301 redirect from the old slug to the new one. Getting the slug right before publishing avoids the whole problem.

Conversion happens instantly in your browser as you type — nothing is sent anywhere.`,

  'remove-duplicate-lines': `Remove Duplicate Lines takes a block of text and returns it with repeated lines collapsed to a single occurrence, optionally stripping blank lines and trimming surrounding whitespace at the same time. It is a small operation that is genuinely tedious by hand once a list runs past a few dozen lines.

The detail that catches people out is what counts as "duplicate". Two lines that look identical on screen can differ by a trailing space, a tab, or a capital letter, and a strict comparison treats them as distinct. Trimming whitespace before comparing catches the invisible cases; whether "Ahmed" and "ahmed" should be treated as the same entry depends entirely on your data, which is why the case-sensitivity choice is yours to make rather than being applied silently.

The lists people actually clean here tend to be email addresses exported from two overlapping sources, keyword lists merged from several research tools, URL lists for a redirect map, CSV columns pasted out of a spreadsheet, and log output where the same line repeats hundreds of times around the moment something broke.

Everything runs in your browser, so a list of customer emails or internal URLs is processed on your own machine and never uploaded.`,

  // ── SECURITY TOOLS ────────────────────────────────────────
  'password-strength-checker': `The Password Strength Checker estimates how resistant a password is to being guessed, scoring it on length, the mix of character types, and whether it matches obvious patterns — dictionary words, keyboard runs like qwerty, repeated characters, dates, and the predictable substitutions (@ for a, 3 for e) that people assume are clever and cracking tools check first.

Length is the factor that dominates, and by a wider margin than most password advice implies. Each additional character multiplies the search space, so a long passphrase of ordinary words beats a short string of symbols comfortably — "correct horse battery staple" is genuinely harder to brute-force than "P@ssw0rd!" despite looking less technical. The complexity rules many websites enforce mostly push people toward short, memorable-but-predictable passwords, which is the opposite of what helps.

An important limit on any strength meter: a score only measures resistance to guessing. It cannot tell you whether a password has already appeared in a breach, and a password that leaked from another site is compromised no matter how strong the meter says it is. Unique passwords per site, stored in a password manager, is the part that actually protects you.

The password you type is analysed entirely in your browser using local pattern rules. It is never transmitted, logged, or stored — but as a matter of habit, testing a variation of a real password rather than the password itself is the safer instinct on any site.`,
};

export const HOW_TO_STEPS: Record<string, [string, string, string]> = {
  'image-converter': [
    'Upload a JPG, PNG, WebP, or AVIF image from your device.',
    'Pick the output format — WebP for the web, PNG when you need transparency, JPG for maximum compatibility — and set the quality.',
    'Download the converted file, checking the new size against the original before you replace it.',
  ],
  'favicon-generator': [
    'Upload a square image, or type a letter or short monogram to render one.',
    'Check the preview at 16 and 32 pixels — if the detail disappears, crop tighter to a single symbol.',
    'Download the icon set and place the files at your site root, then reference them from your HTML head.',
  ],
  'pdf-to-jpg': [
    'Upload the PDF you want to turn into images.',
    'Choose the render scale — higher for print or zooming, lower for quick screen previews.',
    'Download the JPG for each page once rendering finishes.',
  ],
  'split-pdf': [
    'Upload the PDF you want to break apart.',
    'Choose whether to extract a page range or split every page into its own file.',
    'Download the resulting PDFs and open one to confirm the pages you expected came through.',
  ],
  'word-to-pdf': [
    'Upload your .docx file.',
    'Wait for the document to be parsed and laid out as a PDF.',
    'Download the PDF and check the formatting before sending it, especially if the document uses tables or custom fonts.',
  ],
  'character-counter': [
    'Paste or type your text into the input area.',
    'Watch the character count with and without spaces update live, alongside word, sentence, and line counts.',
    'Trim against whichever limit applies — 280 for X, 160 per SMS segment, about 155 for a meta description.',
  ],
  'case-converter': [
    'Paste your text into the input field.',
    'Choose a case: UPPER, lower, Title, Sentence, or a programming style such as camelCase or snake_case.',
    'Copy the converted text straight to your clipboard.',
  ],
  'lorem-ipsum': [
    'Choose how much placeholder text you need, by words, sentences, or paragraphs.',
    'Generate the text and copy it into your mockup, template, or CMS draft.',
    'Before launch, swap in realistic copy — including your longest plausible heading — to catch layout breaks placeholder text hides.',
  ],
  'text-to-slug': [
    'Paste or type your page title into the input.',
    'The slug updates live: lowercased, hyphenated, accents folded, punctuation stripped.',
    'Copy the slug into your CMS before publishing — changing it after a page is indexed needs a 301 redirect.',
  ],
  'remove-duplicate-lines': [
    'Paste your list into the text area, one entry per line.',
    'Choose whether to ignore case and trim whitespace before comparing, so near-identical lines are matched too.',
    'Copy the deduplicated list, and check the removed count against what you expected.',
  ],
  'password-strength-checker': [
    'Type a candidate password — ideally a variation of the real one rather than the password itself.',
    'Read the score and the specific weaknesses flagged, such as dictionary words, keyboard runs, or predictable substitutions.',
    'Lengthen it until the score stops improving; a long passphrase beats a short complex string.',
  ],
};
