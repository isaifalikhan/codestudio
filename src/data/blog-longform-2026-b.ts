/**
 * Long-form blog content, September 2026 — second batch.
 *
 * Deliberately spread across four different audiences (site owners, office
 * workers, developers, business owners) and four different tool clusters, so
 * the blog reads as a publication rather than as commentary on one product.
 *
 * Rendering constraints (see app/blog/[slug]/page.tsx): blocks split on a
 * blank line, `## ` starts a heading, `**bold**` works inline, nothing else
 * is parsed — no lists, no inline links.
 */

export const longformNotIndexed = `Submitting a sitemap does not get your pages indexed. This surprises people, and it is the root of most "Google is ignoring my site" panic. A sitemap is a suggestion — it tells Google which URLs exist and when they changed. Whether any of them earn a place in the index is a separate decision, made later, on different grounds.

Google Search Console will tell you which decision was made about each page, if you know where to look and what the wording means. The Pages report under Indexing lists every URL Google knows about, grouped by status, and those status labels are far more specific than they first appear.

## Discovered versus crawled — a crucial difference

Two statuses sound almost identical and mean completely different things.

**Discovered – currently not indexed** means Google knows the URL exists but has not fetched it yet. It found the link, or read it in your sitemap, and put it in a queue. Nothing has been evaluated. This is normal for new pages and for large sites publishing faster than Google chooses to crawl. If it persists for weeks across many URLs, it usually points at crawl capacity — a slow server, or so many URLs that Google is rationing its attention.

**Crawled – currently not indexed** is the one that actually stings. Google fetched the page, read it, evaluated it, and decided not to index it. That is a quality judgement. There is no technical fault to fix and no button to press. The page was found wanting compared to what is already in the index for those queries.

Confusing these two wastes enormous amounts of time. People see "not indexed" on a crawled page and start auditing their robots.txt, when the crawler clearly had no trouble reaching it. The fix for one is technical; the fix for the other is the content.

## Blocked is not the same as excluded

Here is a subtlety that catches out even experienced people: **robots.txt does not prevent indexing**. It prevents crawling.

If Google cannot fetch a page but finds links pointing at it, it may index the URL anyway, with no description — the "indexed, though blocked by robots.txt" status. It knows the page exists and roughly what it is about from the link text, but has never read it.

Worse, the two directives conflict in a way that is genuinely counterintuitive. If you want a page kept out of the index, you use a noindex meta tag. But Google has to **crawl** the page to see that tag. Block the page in robots.txt and Google never reads the noindex, so the URL can sit in the index indefinitely. To remove a page properly, allow crawling and serve noindex — the opposite of what instinct suggests.

## The self-inflicted causes, in the order they usually occur

Most indexing problems on small sites are things the site did to itself, and they are worth checking before concluding Google has judged your content.

A **stray noindex tag** is the most common by a distance, and it is usually left over from staging. A site built behind a noindex, deployed to production with the tag still in place, will never be indexed and gives no obvious symptom. Check the live HTML, not the template.

A **canonical pointing somewhere else** tells Google the page is a duplicate and the other URL is the real one. Google will generally honour it and index the target instead. Misconfigured canonicals — every page canonicalising to the homepage is a classic — can silently deindex an entire site. The Search Console status is "Alternate page with proper canonical tag", which sounds reassuring and is not, if the canonical is wrong.

**Soft 404s** happen when a page returns HTTP 200 but reads as empty or missing — a search results page with no results, a product page for a discontinued item that says nothing else, a category with no entries. Google classifies it as effectively a 404 and declines to index.

**Blocked resources** are subtler. If your CSS and JavaScript are disallowed, Google renders the page without them. On a JavaScript-heavy site this can mean Google sees an empty shell, judges it thin, and moves on. Blocking a framework's asset directory is a surprisingly easy mistake to make and an expensive one.

## What crawl budget actually is, and why it probably is not your problem

Crawl budget gets invoked constantly and applies to very few sites. It is the intersection of how much crawling your server can tolerate and how much Google thinks your content warrants. For a site under a few thousand URLs, it is effectively never the limiting factor, and optimising for it is a distraction.

Where it does matter is on large sites generating many low-value URLs — faceted navigation producing every combination of filters, calendar pages extending indefinitely, session parameters creating infinite variants of the same page. There, Google can spend its attention on junk and never reach the pages you care about. The fix is to stop generating the junk, not to ask for more crawling.

## What to do about "crawled, currently not indexed"

Since this is a quality judgement, the responses that work are the ones that change the judgement.

Ask honestly what the page offers that the pages currently ranking do not. If the answer is "the same information, worded differently", that is precisely the assessment Google made. Thin pages, pages that are near-duplicates of each other, and pages generated from a template at scale are the usual occupants of this status.

Internal linking matters more than people expect. A page reachable only from a sitemap, with no links from anywhere on your own site, signals that you do not consider it important either. Pages linked from relevant places in your content get crawled more often and indexed more readily.

And consolidation frequently beats creation. Three thin pages competing for the same topic often do worse than one substantial page covering it properly. Merging them, and redirecting the old URLs, concentrates the signals instead of splitting them.

## Requesting indexing, and the wait

The URL Inspection tool has a Request Indexing button, with a small daily quota. It is genuinely useful for a handful of important pages — a new landing page, a page you have just substantially rewritten. It is not a way to push a site into the index, and using it on hundreds of URLs achieves nothing.

Two expectations worth setting. Removing a noindex tag does not reindex a page immediately; Google has to crawl it again, which can take days or weeks. And the Pages report in Search Console updates on a delay, so a fix you deployed today will not show there tomorrow. Verify the fix with URL Inspection's live test, which fetches the page right now, and use the report to confirm the trend later.`;

export const longformPdfCompression = `A PDF that will not fit in an email attachment is one of the most reliably annoying problems in office work, and most of the advice for fixing it quietly destroys something valuable. Understanding what is actually taking up the space tells you which fix to use — and which ones to avoid.

## Two completely different kinds of PDF

PDFs that look identical on screen can be built in fundamentally different ways, and the difference determines everything about compressing them.

A **digitally created PDF** — exported from Word, InDesign, a browser or an accounting package — stores text as text. Characters are real characters, positioned on the page, drawn using embedded font data. Lines and shapes are vectors. You can select the text, search it, and copy it. These files are usually small to begin with, because text is cheap to store.

A **scanned PDF** is a stack of photographs. The scanner produced an image of each page and wrapped the images in a PDF container. There is no text in the file at all, only pixels that happen to look like text. These are the files that arrive at 40 megabytes, because they are essentially a folder of high-resolution photos.

Before compressing anything, try selecting a line of text. If you can highlight individual words, it is a digital PDF. If your cursor draws a box over the whole page, it is a scan. The right approach differs completely from there.

## Where the megabytes actually are

In almost every oversized PDF, **images are the problem**. Text with embedded fonts is remarkably compact — a hundred pages of pure text is often under a megabyte. A single photograph at print resolution can be several times that.

Fonts are the second contributor, and the one people never think about. A PDF can embed complete font files so it renders identically everywhere. A full font family with multiple weights adds up, particularly when the document only ever uses a few dozen characters from each.

The third is accumulated debris: revision history, unused objects from editing, duplicated resources when documents were merged, embedded thumbnails, and metadata. A file that has been merged, split and re-saved several times can carry a surprising amount of material that renders nothing.

## What good compression does

Sensible PDF compression works on those three things without touching the page structure.

It **downsamples images** to a resolution appropriate for the purpose. A photograph at 600 dots per inch is right for professional printing and pointless for a document that will be read on a screen — 150 DPI is generally fine for screen reading, and 300 is more than enough for an office printer. Halving the resolution quarters the pixel count, which is where the large savings come from.

It **re-encodes images** more efficiently, typically as JPEG at a sensible quality for photographs, while leaving line art and screenshots alone because lossy compression damages them badly.

It **subsets fonts**, keeping only the characters the document actually uses rather than the full typeface, and it **removes unreferenced objects and duplicate resources**.

Crucially, all of this leaves the text layer intact. The document stays selectable, searchable, and readable by screen readers.

## The fix that quietly ruins the document

The approach to avoid is **rasterising the whole document** — converting each page into a single flat image and rebuilding the PDF from those.

It does make the file smaller, and it is what some tools do when asked to compress aggressively. It also destroys everything that made the PDF useful as a document. Text stops being selectable and searchable. Copy and paste produces nothing. Screen readers find no content at all, which makes the document inaccessible in a way that carries legal weight in many jurisdictions. Zooming in reveals soft, blurry type rather than crisp vectors, because the text is now pixels.

The giveaway is exactly the test from earlier. Compress a file, then try to select a sentence. If you no longer can, the tool rasterised it, and you should keep the original.

## Scanned documents need a different approach

For a scan, downsampling is the main lever and the tradeoff is directly visible: reduce resolution too far and the text becomes hard to read, especially small print and footnotes.

Colour mode matters more here than anywhere else. A scanned page of black text on white paper scanned in full colour carries three colour channels describing what is essentially a two-tone image. Converting to greyscale typically cuts the size substantially with no meaningful loss, and for clean printed text a bitonal conversion can be dramatic — though it is unforgiving of faint handwriting, highlighter and photographs.

The genuinely valuable step for scans is **OCR**, which analyses the images and adds an invisible text layer behind them. The pages still look like scans, but the document becomes searchable, selectable and accessible. It rarely shrinks the file — it may grow it slightly — but it converts a stack of pictures into something that functions as a document. For any scan you intend to keep, it is worth more than the size reduction.

## Practical habits

Compress once, from the original. PDFs suffer the same generational loss as images: each round of lossy re-encoding degrades the embedded pictures further, and repeatedly compressing the same file produces visible mush.

Export at the right settings in the first place rather than fixing it afterwards. Most applications offer a screen or web export preset that downsamples images appropriately, and using it avoids the problem entirely.

Keep the master. Whatever you send, keep the full-resolution original somewhere — you cannot recover detail from a compressed copy, and the day you need to print something you only have at 96 DPI is genuinely irritating.

And check the result before sending: open it, select some text, zoom to 200 percent, and look at the images. Thirty seconds of checking prevents sending a client a document that looks like a fax.`;

export const longformCharacterEncoding = `Every developer eventually meets a string of text that has turned into garbage — curly apostrophes replaced by â€™, accented names rendered as Ã¤, or a name in the database that came back as a row of question marks. These are not random glitches. They are a specific, diagnosable class of bug, and the pattern of corruption tells you exactly what went wrong.

## Bytes do not know what they mean

A computer stores text as numbers. An encoding is the agreement about which number means which character. Nothing in a file records that agreement — the bytes are just bytes, and the encoding is an assumption made by whatever reads them.

ASCII, the original agreement, covered 128 characters: English letters, digits, punctuation, control codes. Enough for American English and nothing else. Everyone else needed more, and what followed was decades of incompatible national codepages, each claiming the same byte values for different characters. Byte 233 meant é in one codepage and something else entirely in another. A document was only readable if the reader guessed the same codepage the writer used.

**Unicode** fixed the disagreement by assigning every character in every writing system a unique number, called a code point. **UTF-8** is the way those numbers are written as bytes, and it won for two excellent reasons: it is backwards compatible with ASCII, so plain English text is byte-identical and every old tool still works, and it is variable width, so common characters stay compact while the rarer ones expand to two, three or four bytes as needed.

The practical rule that follows is simple and worth being dogmatic about: **use UTF-8 everywhere, and declare it explicitly**, in the HTTP header, the HTML meta charset, the database, the connection, and the editor. Most encoding bugs are a mismatch at exactly one of those points.

## Reading the corruption

The good news is that mojibake is diagnostic. The shape of the mess tells you which mistake was made.

**â€™ where an apostrophe should be** is the signature case. A curly apostrophe in UTF-8 is three bytes. Read those three bytes as if each were a separate Windows-1252 character and you get exactly those three symbols. So this pattern means UTF-8 text was read as Windows-1252 — almost always a missing or wrong charset declaration on the reading side. The text is intact; it is being misinterpreted.

**A single replacement character, the black diamond with a question mark**, means the opposite kind of failure. The reader was using UTF-8 correctly but hit a byte sequence that is not valid UTF-8, so it substituted the official "I cannot decode this" character. The original byte is gone.

**Plain question marks** are the worst outcome, because they indicate real data loss. Something converted text into an encoding that had no representation for those characters and substituted a question mark for each. That is destructive and irreversible — the information no longer exists. This is what happens when Unicode text is written into a database column that cannot hold it.

## The MySQL trap

That last case has a famous instance worth knowing specifically. In MySQL, the encoding named **utf8 is not UTF-8**. It is a three-byte-maximum implementation, created before anyone expected four-byte characters to matter. It handles most European and Asian text and cannot store anything needing four bytes.

Emoji need four bytes. So do many less common characters, including a good deal of historical script. Store an emoji into a MySQL utf8 column and, depending on configuration, you get either an error or silent truncation.

The correct encoding is **utf8mb4** — the same standard, with the full four-byte range. Any new MySQL schema should use it, and legacy schemas using utf8 are carrying a latent bug that surfaces the first time a user puts an emoji in their display name.

## Excel, CSV and the byte order mark

The other encoding problem most people meet is exporting a CSV, opening it in Excel, and finding every accented character mangled — while the same file looks perfect in a text editor.

Excel, on Windows, has historically assumed the system codepage rather than UTF-8 when opening a CSV by double-click. The file is fine; Excel is guessing wrong.

The workaround is a **byte order mark**: three specific bytes at the start of the file that signal UTF-8. Excel recognises them and switches. This is why CSV export code often deliberately writes a BOM that would otherwise be unnecessary.

The catch is that the BOM is not universally welcome. Many Unix tools treat it as content, so a BOM can appear as stray characters at the start of the first field, break a shell script, or confuse a parser expecting the file to begin with a specific header. If you are generating CSV for Excel users, include it; if you are generating it for a machine, do not.

## Encoding in URLs, and double encoding

Percent-encoding is a separate layer that sits on top of all this. A URL can only contain a restricted set of ASCII characters, so anything else is written as a percent sign followed by the hexadecimal value of each byte — and those bytes are the UTF-8 bytes of the character.

The bug to recognise here is **double encoding**. Encode a space once and you get %20. Encode that result again and the percent sign itself gets encoded, producing %2520. If you see %2520 in a URL or a log, something in the chain encoded an already-encoded value — usually a redirect, or two layers of code each being careful.

The related mistake is choosing the wrong scope. Encoding a whole URL must leave the structural characters alone, because the slashes and the question mark need to keep their meaning. Encoding a single parameter value must escape those same characters, or a value containing an ampersand will be read as the start of a new parameter and quietly split your data. In JavaScript that is the difference between encodeURI and encodeURIComponent, and picking the wrong one is the reason an API works until someone searches for something containing a plus sign.

## Why string length lies

One last surprise. In several languages, including JavaScript, strings are sequences of UTF-16 code units rather than characters. Characters outside the basic range — most emoji among them — occupy two units, called a surrogate pair.

The consequence is that the length of a string containing an emoji is larger than the number of visible characters, and slicing a string can cut a surrogate pair in half, producing an invalid fragment that renders as a replacement character. Emoji built from several code points joined together — skin tone modifiers, family sequences, flags — make this worse: what looks like one glyph can be half a dozen code points, and naive reversing or truncating breaks it apart into its components.

If you are validating input lengths, truncating for display, or reversing text, this is the detail that turns a working function into a bug report from the one user whose name contains an accent.`;

export const longformMarginMarkup = `There is a pricing mistake so common that entire small businesses run on it for years without noticing. It comes from treating two numbers as interchangeable when they are not: margin and markup. They describe the same profit from different directions, they produce different percentages, and confusing them means systematically charging less than you think.

## The same money, two denominators

**Markup** is profit expressed as a percentage of what the thing cost you. **Margin** is profit expressed as a percentage of what you sold it for.

Take something that costs 100 and sells for 150. The profit is 50 either way. As a markup, that 50 is measured against the cost of 100, giving 50 percent. As a margin, it is measured against the selling price of 150, giving 33 percent. Same transaction, same profit, two legitimate numbers that are not equal — and margin is always the smaller of the two.

The error is applying one while believing you have the other. A business that marks everything up by 30 percent, thinking it earns a 30 percent margin, is actually earning about 23 percent. Across a year, that gap is the difference between a healthy business and one that never quite has money.

## Converting between them

Going from markup to margin: divide the markup by one plus the markup. A 50 percent markup becomes 0.5 divided by 1.5, which is 33 percent margin.

Going the other way, from a target margin to the markup you need: divide the margin by one minus the margin. To achieve a 40 percent margin you need 0.4 divided by 0.6, a 67 percent markup.

The most useful formula is the one that skips the intermediate step. To price for a target margin, **divide the cost by one minus the margin**. Want 40 percent margin on something that cost 60? Divide 60 by 0.6 and price it at 100. This is the calculation to internalise, because it goes directly from what you know to what you need.

Notice how quickly the required markup climbs. A 50 percent margin needs a 100 percent markup. A 60 percent margin needs 150 percent. A 75 percent margin needs a 300 percent markup. Anyone who has assumed that a high margin and a high markup are roughly the same number is in for an unpleasant recalculation.

## Gross margin and net margin answer different questions

Margin alone is ambiguous until you say which costs it accounts for.

**Gross margin** subtracts only the direct cost of what you sold — materials, the wholesale price, the hours billed on a project. It tells you whether the thing itself makes money. If gross margin is negative, you are losing money on every sale and volume makes it worse.

**Net margin** subtracts everything: rent, salaries, software, marketing, insurance, tax. It tells you whether the business makes money.

A healthy gross margin alongside a negative net margin is an extremely common pattern and a specific diagnosis: the product is fine, the overheads are too big for the current volume. That points at cutting fixed costs or selling more, not at raising prices. Reading only one of the two numbers hides which problem you actually have.

Benchmarks only mean anything within an industry. Grocery retail runs on very thin net margins at enormous volume; software can run high because serving one more customer costs almost nothing. Comparing your margin to a number from a different sector tells you nothing useful.

## What discounting really costs

Here is the calculation that changes how people think about sales, and it is worth doing once properly.

Suppose you work on a 30 percent gross margin. Something costs you 70 and sells for 100, earning 30. Now offer 10 percent off. The price drops to 90, the cost is still 70, and the profit is 20.

The discount was 10 percent of the price. The profit fell by a third.

To earn the same total profit at the discounted price you need to sell **fifty percent more units** — 30 divided by 20. A "small" 10 percent discount requires half as many sales again just to stand still, and that is before accounting for the extra work of fulfilling them.

The lower your margin, the more violent this becomes. At a 20 percent margin, a 10 percent discount halves your profit and needs double the volume. This is why discounting is dangerous in low-margin businesses and why "we will make it up on volume" is usually wrong — it requires far more volume than intuition suggests.

## The costs that quietly eat the margin

Several real costs get left out of margin calculations, and each one makes the true figure worse than the spreadsheet says.

**Payment processing** takes a few percent of every transaction, straight off the top. On a 20 percent margin, a 3 percent fee is 15 percent of your profit.

**Returns and refunds** cost you the outbound and return shipping, the handling, and sometimes the whole item. A business with a 25 percent return rate has a materially different effective margin from one with 2 percent.

**Your own time**, if you are a freelancer or run a small business, is routinely valued at zero. A project priced at a good margin against materials can be a poor one against the hours actually spent, including the unbilled ones — quoting, revisions, chasing payment.

**Currency movement** matters for anyone buying in one currency and selling in another. A margin calculated at one exchange rate can quietly compress as the rate moves.

## Price against value, sanity-check against cost

One closing point, because cost-plus pricing is the natural consequence of thinking in markups and it is often the wrong approach.

Cost-plus prices your work relative to what it cost you to produce, which has no necessary relationship to what it is worth to the buyer. A change that takes an hour and saves a client thousands is not worth an hour of your time — it is worth some fraction of what it saves them. Equally, something expensive to produce that nobody values much cannot be rescued by adding a markup to its cost.

The sensible pattern is to set the price from what the outcome is worth to the customer and what comparable options cost, then use the margin calculation as a check: does this price clear the costs with enough left over to run the business? Margin arithmetic is how you verify a price is survivable. It is a poor way to decide what the price should be.`;
