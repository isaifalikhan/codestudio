/**
 * Page copy for developer tools.
 * See lib/tool-copy-extended.ts for why these exist.
 */

export const LONG_DESCRIPTIONS: Record<string, string> = {
  'css-minifier': `The CSS Minifier strips everything a browser does not need in order to apply your styles — comments, indentation, line breaks, the final semicolon in a block, and redundant whitespace around colons and braces — leaving a stylesheet that is byte-for-byte smaller but renders identically. Typical savings on hand-written CSS land somewhere between 20 and 40 percent before compression.

Minification is not the same thing as gzip or Brotli, and the two stack rather than compete. Your server compresses CSS on the way out regardless, but compression works better on shorter input, and the browser still has to parse whatever arrives. On top of that, CSS is render-blocking: the browser will not paint until it has fetched and parsed your stylesheet, which is why stylesheet size shows up directly in First Contentful Paint rather than being hidden the way a late-loading script can be.

The one rule worth respecting is to keep the readable source as the file you actually edit and treat the minified output as a build artefact. Editing minified CSS by hand is miserable, and pasting it back over your source is a mistake people only make once.

Minification runs entirely in your browser, so proprietary stylesheets from a client project are not uploaded anywhere.`,

  'js-minifier': `The JavaScript Minifier removes comments and whitespace and shortens local variable names so a script downloads and parses faster while behaving exactly as before. On unminified source the size reduction is usually somewhere between 30 and 60 percent, and because JavaScript costs far more to parse and execute per byte than CSS or HTML does, that reduction converts fairly directly into a faster interactive page on mid-range phones.

It is worth being precise about what minification does and does not touch. Local variable names inside a function can be safely shortened because nothing outside can see them; anything reachable by name from elsewhere — global functions, exported symbols, object properties accessed as strings, code called from inline HTML attributes — must keep its name. Minifiers are conservative about this, which is why heavy use of eval, with, or dynamically constructed property names limits how much a minifier can safely do.

The practical caveat is debugging: a stack trace from minified code points at column 4,812 of one line and tells you nothing. Production builds normally ship a source map alongside so errors can be mapped back to the original source, and any real build pipeline handles minification for you. This tool is for the cases in between — a standalone script, an inline snippet, a widget you are handing to someone else.

Everything runs in your browser; your source is never uploaded.`,

  'html-formatter': `The HTML Formatter goes both ways: it takes tangled, inconsistently indented markup and re-indents it into a readable nesting structure, or it strips the formatting back out to minify a page for production. Both directions run through js-beautify, so the output follows the same conventions most editors and linters expect.

Beautifying is the direction people reach for most, and usually because they are reading markup they did not write — output from a CMS, a scraped page, an email template, or a snippet pasted out of dev tools as one enormous line. Correct indentation is what makes an unclosed tag or a div nested one level deeper than intended visible at a glance, which is why formatting is often the fastest first step in debugging a layout that is behaving strangely.

Minifying HTML is a smaller win than minifying CSS or JavaScript, since markup compresses well and is usually not the bottleneck — but it is not nothing on a large page, and it removes comments, which sometimes contain notes you would rather not ship. Whitespace inside inline elements is meaningful in HTML, so a minifier has to be careful around text content; collapsing it aggressively can visibly change spacing between words and inline links.

Formatting happens in your browser — client markup and unreleased templates are not sent anywhere.`,

  'url-encoder': `The URL Encoder / Decoder converts text to and from percent-encoding, the scheme that lets a URL carry characters it could not otherwise contain. A space becomes %20, an ampersand becomes %26, and any non-ASCII character is encoded as its UTF-8 bytes — so a name with an accent survives being put in a query string instead of truncating the URL at the first character something along the way did not like.

The distinction that trips people up is between encoding a whole URL and encoding one value inside it. Encoding an entire URL leaves the structural characters — the slashes, the ?, the & between parameters — intact, because those need to keep their meaning. Encoding a single parameter value must escape those same characters, because a search term containing "&" would otherwise be read as the start of a new parameter and silently split your data in half. In JavaScript that is the difference between encodeURI and encodeURIComponent, and choosing the wrong one is one of the more common sources of "the API works until someone searches for something with a plus sign in it".

Decoding is the other half: turning a logged or copied URL back into readable text so you can see what was actually submitted, which is routinely how you find out that a value got double-encoded somewhere in a redirect chain.

Encoding and decoding run instantly in your browser — tokens or query strings you paste are never transmitted.`,

  'meta-tag-generator': `The Meta Tag Generator produces the head markup that controls how a page appears in search results and in link previews on social platforms: the title and description, the canonical URL, robots directives, Open Graph tags for Facebook and LinkedIn, and Twitter Card tags for X. Getting these right is the difference between a shared link showing a headline and an image and showing a bare grey URL.

A few length realities are worth designing around. Google truncates titles at roughly 580 pixels — about 55 to 60 characters for typical text — and descriptions at around 155 to 160. The description is not a ranking factor, but it is the sales pitch that decides whether someone clicks, so writing it as a reason to click rather than a keyword list is what actually moves traffic. Open Graph images should be 1200x630; a smaller image gets rendered as a small square thumbnail instead of a full-width card.

The canonical tag is the one with real consequences. It tells Google which URL is the authoritative version when the same content is reachable through several addresses — with and without a trailing slash, with tracking parameters attached, or on both a www and non-www hostname. A canonical pointing at the wrong page can quietly deindex the right one, so it is worth checking rather than assuming.

Tags are generated in your browser from what you type; copy the block straight into your page head.`,

  'markdown-preview': `The Markdown Preview renders your Markdown next to the source as you type, so you can see the finished headings, lists, links, tables, and code blocks without committing, saving, or refreshing anything. It uses the marked parser, which follows the CommonMark rules that GitHub, most static site generators, and most documentation tools also follow.

Live preview mainly earns its keep on the parts of Markdown that are easy to get subtly wrong. Nested lists depend on exact indentation and silently flatten if you are one space off. A code fence needs a blank line before it in some renderers. Tables need their pipes and separator row lined up in a way that is hard to verify by squinting at the source. Reference-style links fail silently when the definition has a typo. All of these show up instantly in a preview and are nearly invisible in raw text.

The usual reasons people are here: drafting a README before pushing, checking a documentation page, writing a long comment or issue body somewhere with no preview button, or converting notes into something a static site generator will accept.

Everything is parsed and rendered locally in your browser — an unpublished README or internal documentation is never uploaded.`,

  'css-gradient-generator': `The CSS Gradient Generator builds linear and radial gradients visually — pick your colours, drag the stops, set the angle — and gives you the CSS to paste, with a live preview updating as you adjust. Writing gradient syntax by hand and reloading to see the result is a slow loop for something so visual.

The thing that separates a gradient that looks expensive from one that looks like a 2010 web template is usually colour distance rather than technique. Two colours far apart on the wheel blended directly pass through a muddy desaturated middle, because interpolation in sRGB cuts straight through the middle of the colour space. Gradients between hues that are near each other, or between two shades of the same hue, avoid that entirely — which is why so much modern UI uses gradients that are almost subtle enough to miss.

Angle and colour-stop position are the other two controls that matter. A stop pushed to 80% keeps most of the area in the first colour with a fast transition at the end, which reads very differently from an even 50/50 blend at the same angle. Adding a third stop is usually where a gradient starts looking deliberate rather than default.

The preview renders live in your browser and the generated CSS is standard, with no vendor prefixes needed for any browser still in use.`,

  'css-box-shadow': `The CSS Box Shadow Generator gives you sliders for horizontal and vertical offset, blur radius, spread, colour, and the inset flag, with a live preview of the result and the CSS ready to copy. Box-shadow has five numeric values whose interaction is genuinely hard to predict from the numbers alone, which is what makes a visual editor worth using.

A shadow reads as realistic when it behaves like a real one: light comes from above, so vertical offset should be positive and larger than the horizontal offset, which is usually zero. Blur should be roughly two to three times the vertical offset — a large offset with little blur produces the hard drop shadow that instantly dates a design. Spread is the least used and most useful for the opposite job: a negative spread tightens a shadow so it does not bleed out from under a small element.

Two details worth stealing from well-made design systems. First, opacity beats darkness — a black shadow at 8 to 15 percent alpha looks far better than a grey shadow at full opacity, because a real shadow darkens whatever is beneath it rather than painting grey over it. Second, layering two or three shadows at different offsets and blurs in a single declaration produces depth that no single shadow achieves, and box-shadow accepts a comma-separated list precisely for that.

The preview and the generated CSS are produced entirely in your browser.`,

  'ip-lookup': `The IP Address Lookup resolves an IPv4 or IPv6 address to the information registered against it: the owning network, the ISP or hosting provider, the autonomous system number, and an approximate geographic location. Enter nothing and it looks up the address you are currently connecting from.

The accuracy question is the one worth understanding before acting on the result. IP geolocation is inference from registration records and network routing data, not measurement. Country-level accuracy is typically very good; city-level is a reasonable guess that is frequently wrong, particularly on mobile networks where traffic can egress hundreds of kilometres from the handset, and on any connection behind a VPN or corporate proxy, where you are seeing the exit node rather than the person. Treat a city as a hint and never as identification.

Where the data is genuinely reliable is the network side. The ISP, hosting provider, and ASN come from registry records, and those are what make the tool useful in practice: confirming which provider an address belongs to, checking whether traffic in your logs is coming from a residential ISP or a datacentre range, verifying that a server resolves to the host you think it does, or working out whether your own connection is going out through a VPN.

Lookups query a public IP information API; the address you enter is used only to fetch that result and is not stored.`,

  'dns-lookup': `The DNS Lookup Tool queries the public DNS records for a domain — A and AAAA records that point at server addresses, MX for mail routing, TXT for verification strings and SPF policies, NS for the authoritative nameservers, and CNAME aliases — and shows the answers with their TTL values.

The TTL is the field people ignore and then get caught by. It is how long a resolver is allowed to cache an answer, so after you change a record the old value keeps being served to some of the internet for up to that duration. This is exactly why a site "still points at the old server" for hours after a migration that you know you completed. Dropping the TTL to a few minutes a day before a planned change, then raising it again afterwards, is the standard way to avoid that window.

The records map onto real failure modes. A missing or wrong A record means the site does not resolve at all. Broken MX records mean mail silently bounces while the website carries on working perfectly, which is why email outages are often discovered late. TXT records carry SPF and DKIM policies, and a malformed SPF string is one of the most common reasons legitimate mail lands in spam. Checking what is actually published, rather than what you believe you configured, is usually the fastest way to find the discrepancy.

Queries run against public DNS resolvers; the domain you look up is not stored.`,

  'unix-timestamp': `The Unix Timestamp Converter translates between epoch timestamps and human-readable dates in both directions. A Unix timestamp counts seconds since 1 January 1970 UTC, which is how essentially every database, log file, API response, and JWT expiry field stores a moment in time — a single integer with no timezone or formatting ambiguity attached.

The first thing to check when a converted date lands decades away from where you expected is the unit. JavaScript's Date.now() returns milliseconds; most other systems return seconds. Feeding a millisecond value into a seconds-based converter puts you somewhere around the year 56,000, and feeding seconds into a millisecond parser puts you in January 1970 — both errors are instantly recognisable once you know to look for them.

The second is the timezone. The timestamp itself is always UTC, but the readable date you are comparing against is usually in local time, so a value that looks five hours off is very often correct and simply being displayed in a different zone. Showing both UTC and local time side by side is the fastest way to confirm which one you are actually looking at.

The other well-known consideration is the 2038 problem: a signed 32-bit timestamp overflows on 19 January 2038, which still affects some embedded and legacy systems even though modern platforms use 64-bit values.

Conversion happens instantly in your browser.`,

  'json-to-csv': `The JSON to CSV Converter flattens an array of JSON objects into a comma-separated table with a header row, so data from an API response or an export can be opened in Excel, Google Sheets, or any tool that expects tabular input. Keys across the objects are collected into columns and each object becomes a row.

The interesting part is what happens to data that does not fit a flat table, because JSON is a tree and CSV is a grid. Nested objects have to be flattened into dotted column names such as address.city, and arrays inside a record have to be either joined into one cell or expanded into numbered columns — neither is lossless in the way a round trip back to JSON would need. If your records have deeply nested or variable-length structures, expect the CSV to be a usable view of the data rather than a perfect representation of it.

Records that do not share the same keys are the other common case: the converter takes the union of all keys as the header and leaves cells empty where a record did not have that field, which is usually what you want from an API returning optional fields.

Escaping is handled for you — values containing commas, quotes, or line breaks are quoted properly, which is the detail that most hand-rolled conversions get wrong and only discover when a spreadsheet column shifts halfway down the file.

Conversion runs in your browser; the data you paste is never uploaded.`,

  'http-status-checker': `The HTTP Status Code Checker requests a URL and reports the status code it returns, following the redirect chain so you can see each hop rather than only the final destination. That chain is usually the part you actually need.

Status codes divide into ranges that mean quite different things for SEO. A 200 is a normal successful page. A 301 is a permanent redirect and passes ranking signals to the target, while a 302 is temporary and tells Google to keep the original URL indexed — using a 302 for a permanent move is a common and costly mistake. A 404 means not found and a 410 means deliberately gone, which Google removes from the index faster. A 500 is a server error, and unlike a 404 it signals a broken site rather than a missing page, so repeated 500s can slow crawling across the whole domain.

Redirect chains matter more than a single code. Every extra hop adds latency for real users, and a chain that loops or ends in a 404 wastes crawl budget and drops whatever authority the original URL had. Checking the full chain after a site migration, a domain change, or an HTTPS rollout catches the redirects that were configured to the wrong target.

Requests are made server-side so the check is not limited by browser cross-origin rules; the URL is used only to perform the lookup and is not stored.`,

  'jwt-decoder': `The JWT Token Decoder splits a JSON Web Token into its three parts — header, payload, and signature — and Base64URL-decodes the first two so you can read the claims. Since a JWT is only encoded rather than encrypted, this is the fastest way to see what a token from an auth flow actually contains.

That last point deserves emphasis because it is misunderstood constantly: anyone holding a JWT can read its payload. Base64 is an encoding, not a secret. The signature guarantees that the token has not been altered since it was issued — it does not hide anything. Putting personal data, internal identifiers, or anything sensitive in a JWT payload is effectively publishing it to whoever has the token, which is a real and recurring mistake in production systems.

What you are usually checking here are the standard claims. exp is the expiry as a Unix timestamp, and an expired token is by far the most common cause of a login that worked five minutes ago and now returns 401. iat is when it was issued, iss identifies who issued it, aud identifies who it was meant for, and sub is the subject, usually a user id. Comparing exp against the current time answers most "why is this request being rejected" questions immediately.

Decoding happens entirely in your browser using local Base64 decoding. The token is never transmitted — which matters, because a valid token is a credential.`,

  'port-scanner': `The Open Port Checker tests whether a specific TCP port on a host you specify is accepting connections from the public internet. A port that responds means a service is listening and reachable; a port that times out means it is either closed or being dropped by a firewall in front of it.

The distinction between "closed" and "filtered" is the useful part. A closed port typically refuses the connection immediately, while a firewalled port silently swallows the packet, so the request hangs until it times out. That difference tells you whether nothing is listening or whether something is listening but blocked — which is exactly the question when a service works locally but not from outside, the usual symptom of a security group, NAT rule, or host firewall that was never opened.

The ports people check most are the ones tied to a specific symptom: 80 and 443 when a site is unreachable, 22 when SSH from a new network stops working, 3306 or 5432 when an application cannot reach its database, and 25 or 587 when outbound mail fails — many hosting providers block those two by default, which surprises people every time.

Please only check hosts you own or are authorised to test. Scanning infrastructure you have no relationship with is, depending on jurisdiction, a violation of the operator's terms and potentially of computer misuse law. This tool checks individual ports on a host you name — it is a connectivity diagnostic, not a reconnaissance tool.`,
};

export const HOW_TO_STEPS: Record<string, [string, string, string]> = {
  'css-minifier': [
    'Paste your stylesheet into the input field.',
    'Minify it, and compare the before and after byte counts shown.',
    'Copy the minified CSS into your production build — keep editing the readable source, never the minified output.',
  ],
  'js-minifier': [
    'Paste your JavaScript source into the input area.',
    'Run the minifier and check the size reduction.',
    'Test the minified script before shipping it, particularly if the code uses dynamic property names or eval.',
  ],
  'html-formatter': [
    'Paste your HTML into the input field.',
    'Choose Beautify to re-indent unreadable markup, or Minify to strip whitespace and comments for production.',
    'Copy the result — beautified markup makes an unclosed or misnested tag obvious at a glance.',
  ],
  'url-encoder': [
    'Paste the text or URL you want to convert.',
    'Choose Encode or Decode, and pick whether you are encoding a whole URL or a single parameter value.',
    'Copy the result — if a value came back with %2520 in it, it was double-encoded upstream.',
  ],
  'meta-tag-generator': [
    'Fill in your page title, description, canonical URL, and the 1200x630 image URL for social previews.',
    'Watch the character counts — roughly 60 for the title and 155 for the description before Google truncates.',
    'Copy the generated tag block into your page head, and double-check the canonical points at the right URL.',
  ],
  'markdown-preview': [
    'Type or paste Markdown into the left pane.',
    'Watch the rendered output update live on the right, checking nested lists, tables, and code fences.',
    'Copy the source once it renders correctly, or copy the rendered HTML if that is what you need.',
  ],
  'css-gradient-generator': [
    'Pick your colours and drag the stops along the gradient bar.',
    'Set the angle or switch to radial, and adjust stop positions until the blend looks deliberate.',
    'Copy the generated CSS straight into your stylesheet.',
  ],
  'css-box-shadow': [
    'Adjust the offset, blur, spread, and colour sliders and watch the live preview.',
    'Keep the horizontal offset near zero and the blur two to three times the vertical offset for a natural shadow.',
    'Copy the CSS — for real depth, paste two or three shadows as a comma-separated list.',
  ],
  'ip-lookup': [
    'Enter an IPv4 or IPv6 address, or leave the field blank to look up your own.',
    'Read the ISP, hosting provider, and ASN — these come from registry records and are reliable.',
    'Treat the city as an approximation; only the country is dependable, and neither is valid on a VPN.',
  ],
  'dns-lookup': [
    'Enter the domain you want to inspect.',
    'Pick the record type — A, AAAA, MX, TXT, NS, or CNAME — depending on what you are debugging.',
    'Check the TTL alongside the value: after a change, the old answer stays cached for that long.',
  ],
  'unix-timestamp': [
    'Paste a timestamp to convert to a date, or pick a date to convert to a timestamp.',
    'Confirm the unit — seconds or milliseconds — if the result lands in 1970 or the far future.',
    'Compare the UTC and local readings side by side before concluding a value is wrong.',
  ],
  'json-to-csv': [
    'Paste a JSON array of objects into the input.',
    'Review the detected columns, including any nested keys flattened into dotted names.',
    'Download the CSV and open it in a spreadsheet to confirm the columns landed where you expected.',
  ],
  'http-status-checker': [
    'Enter the full URL, including https://.',
    'Read the whole redirect chain, not just the final code — every hop costs latency and crawl budget.',
    'Confirm permanent moves return 301 rather than 302, and that no chain ends in a 404.',
  ],
  'jwt-decoder': [
    'Paste the JWT into the input field.',
    'Read the decoded header and payload — check exp against the current time first if requests are returning 401.',
    'Remember the payload is only encoded, not encrypted: never put sensitive data in a token.',
  ],
  'port-scanner': [
    'Enter a hostname or IP address you own or are authorised to test.',
    'Enter the port number — 443 for HTTPS, 22 for SSH, 3306 for MySQL, 587 for mail submission.',
    'Read the result: refused means nothing is listening, timed out usually means a firewall is dropping the packet.',
  ],
};
