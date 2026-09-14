/**
 * Long-form blog content, September 2026 batch.
 *
 * Written to address the AdSense "low value content" review: the blog was 13
 * posts averaging ~400 words, with one at 64 words. These are 1,300+ words
 * each and answer the question behind a tool search rather than advertising
 * the tool.
 *
 * Rendering constraints (see app/blog/[slug]/page.tsx): blocks are split on a
 * blank line, `## ` starts a heading, `**bold**` works inline, and nothing
 * else is parsed — no lists, no inline links.
 */

export const longformImageCompression = `Almost every "compress your images" guide stops at the point where it should start. Upload a file, move a slider, download something smaller. That works until the day it doesn't — the logo develops a grey halo, the product photo goes blotchy in the shadows, or the file you compressed twice looks visibly worse than the one you left alone. Understanding why those things happen takes about ten minutes and saves a lot of re-exporting.

## Lossy and lossless are not quality settings

The first distinction is the one that explains most surprises. Lossless compression stores the same pixels in fewer bytes — unpack it and you get back exactly what you put in. PNG works this way. Lossy compression throws information away permanently and stores an approximation. JPEG works this way, and so do WebP and AVIF in their default modes.

That difference has a consequence people run into constantly: **lossy compression is not repeatable without cost**. Every time you save a JPEG, it is re-analysed and re-approximated from whatever the previous save left behind. Do it five times and you are approximating an approximation of an approximation. This is why an image that has been through a few rounds of upload, download and re-save looks soft and blocky even though nobody ever chose a low quality setting. If you are going to compress, compress once, from the best original you have.

## The quality slider is not a percentage of anything

A JPEG quality setting of 80 does not mean "80% of the original quality". It is an index into a table of quantisation values that control how aggressively fine detail gets discarded. The relationship between that number and both file size and visible quality is steeply non-linear, and that is what makes it useful.

Going from quality 100 to quality 90 typically removes a very large share of the file size while producing a difference almost nobody can see on a screen. Going from 90 to 80 usually removes a lot more size for a difference that is still hard to spot on photographic content. Going from 80 to 70 starts to show, and below about 60 the artefacts become obvious — blocky 8x8 squares in flat areas, and coloured fringing around hard edges.

This is why **the 80 to 85 range is the standard recommendation** for photographs on the web. It is not a magic number, it is the region where the curve has already given you most of the savings and has not yet started charging you in visible damage. If you only remember one thing, remember that quality 100 is almost always a waste: it can easily double the file size versus quality 90 for no perceptible gain.

## Match the format to the content, not to habit

Format choice usually matters more than the quality slider, and the right answer depends on what is actually in the image.

**Photographs** — continuous tone, lots of gradual colour variation, no hard edges — are what JPEG was designed for and what it still handles efficiently. WebP does the same job at roughly 25 to 35 percent smaller for equivalent perceived quality. AVIF does better again, often around half the size of a comparable JPEG, and handles dark gradients noticeably better, which matters for night photography and moody product shots where JPEG tends to band.

**Screenshots, diagrams, logos and anything with text or flat colour** are the opposite case. These have hard edges and large uniform areas, which is exactly what lossy compression handles worst — you get ringing artefacts around every letter. PNG is lossless and compresses flat colour extremely well, so a screenshot saved as PNG is frequently both smaller and dramatically sharper than the same screenshot saved as JPEG. Saving a screenshot as JPEG is one of the most common and most visible compression mistakes.

**Anything needing transparency** rules out JPEG entirely, since it has no alpha channel. Save a transparent PNG as JPEG and the transparency is flattened onto a solid background — usually black or white — which is generally discovered after the original has been overwritten.

## Dimensions do more than compression ever will

Here is the thing that dwarfs every other consideration, and the one most sites get wrong: **the fastest way to shrink an image is to stop serving one that is far larger than it is displayed**.

A 4000 pixel wide photograph displayed in a 600 pixel wide column is carrying nearly 45 times more pixel data than the screen can use. No quality setting rescues that. Resizing to roughly twice the displayed width — enough to stay sharp on high-density screens — and then compressing typically produces a file a fraction of the size of the original at any quality setting, with no visible difference at all.

The practical order of operations is therefore: resize first, then choose the format, then set the quality. Doing it in the other order means you are carefully optimising a file that should not have been that size in the first place.

## What actually changes your page speed

Images are usually the largest thing a page downloads, which makes them the usual culprit behind a poor Largest Contentful Paint score. But the relationship is not simply "smaller files are faster".

What matters most is the one image the visitor sees first — typically the hero. Getting that image small and getting it to start downloading early affects the measured experience far more than shaving kilobytes off images further down the page, which a visitor may never scroll to. Images below the fold should be lazy-loaded so they do not compete for bandwidth with the content that is actually on screen.

The other half is layout stability. An image without width and height attributes has no reserved space, so the page reflows when it arrives and everything below it jumps. That shows up as Cumulative Layout Shift, and it is one of the more irritating things a page can do to someone who has already started reading. Setting explicit dimensions costs nothing and fixes it completely.

## A workflow that holds up

Start from the largest original you have, not a copy that has already been through a messaging app. Resize to about twice the display width. Pick the format by content type — WebP or AVIF for photographs, PNG for anything with text or transparency. Compress once at quality 80 to 85 and compare against the original at full size before accepting it. Set width and height in your markup. Lazy-load everything below the fold.

Do that and the typical result is a page whose images are a small fraction of their original weight with no quality complaint from anyone — which is the entire point of the exercise.`;

export const longformCoreWebVitals = `Core Web Vitals get discussed as though they were three numbers to be gamed. They are better understood as three specific complaints a visitor might have about a page: it took too long to show me anything useful, it did not respond when I touched it, and it moved while I was reading. Each metric measures one of those complaints, and each has a different cause and a different fix.

## The three metrics and what they actually measure

**Largest Contentful Paint** measures how long it takes for the biggest element in the viewport — usually a hero image, a video poster or a block of heading text — to finish rendering. The threshold for "good" is 2.5 seconds. It is a proxy for the moment a page stops looking empty.

**Interaction to Next Paint** replaced First Input Delay in March 2024, and the change matters. FID measured only the delay before the browser began processing your first interaction, which flattered pages that responded quickly and then did nothing useful. INP measures the full duration from interaction to the next visual update, across the whole page visit, and reports close to the worst one. The threshold is 200 milliseconds. It is much harder to score well on, and much more honest.

**Cumulative Layout Shift** measures how much content moves around after it has been painted, scored by how much of the viewport moved and how far. The threshold is 0.1. It is the metric behind the experience of reaching for a link and having an advert push it out from under your finger.

All three are assessed at the **75th percentile of real visits**, which is the detail most people miss. Your fast laptop on office wifi is not the measurement. Three quarters of your actual visitors have to hit the threshold, and that population includes mid-range Android phones on mobile networks.

## Lab data and field data disagree for a reason

Running Lighthouse gives you lab data: a single simulated load, on a modelled device, under throttled network conditions. It is reproducible and it is useful for diagnosis, because it tells you what a page does.

Field data — the Chrome User Experience Report, and the "Core Web Vitals" section in Search Console — is what Google actually uses. It is collected from real Chrome users over a rolling 28-day window. Those two sources routinely disagree, and when they do, the field data is right and the lab data is a model.

The 28-day window has a practical consequence worth planning around: **fix something today and the field metric will not fully reflect it for about a month**. Teams regularly ship a genuine improvement, check Search Console three days later, see nothing, and conclude it did not work. Lighthouse is the right tool for confirming a fix landed; Search Console is the right tool for confirming it mattered.

## What actually moves LCP

LCP problems are usually not slow images. They are usually late-starting images.

The sequence that causes most bad LCP scores is: the browser downloads the HTML, discovers a stylesheet, blocks on it, builds the layout, discovers the hero image is needed, and only then starts fetching it. The image itself may download quickly. It just started two seconds too late.

The fixes follow from that. Preload the hero image so the browser starts fetching it immediately rather than after the CSS resolves. Do not lazy-load anything above the fold — applying lazy loading to the hero is a spectacularly common own goal, because it guarantees the most important image is requested last. Serve it at an appropriate size in a modern format. And keep the critical CSS small, because the stylesheet is the thing blocking discovery in the first place.

Server response time sets the floor under all of this. If the HTML takes 800 milliseconds to arrive, you are spending a third of the budget before the browser has seen anything at all.

## What actually moves INP

INP is a main-thread problem. JavaScript runs on the same single thread that handles rendering and input, so while a script is executing, nothing else can happen — including responding to a tap.

The usual causes are long tasks: a large bundle parsing and executing during hydration, an event handler doing heavy work synchronously, or a third-party script running whenever it feels like it. The measurement covers the whole visit, so a page that loads fast and then locks up when someone opens a menu scores badly, correctly.

The most effective fixes are about doing less rather than doing it faster. Ship less JavaScript. Break long tasks into smaller pieces so the browser can respond between them. Move genuinely heavy computation off the main thread. And audit third-party scripts honestly — analytics, chat widgets, ad tags and tag managers frequently account for more main-thread time than the site's own code, and each one was added by someone who assumed it was free.

**Unminified JavaScript deserves a specific mention**, because it is invisible in a way file size is not. Minification does not only reduce bytes; it reduces the work the browser does parsing and compiling. Shipping unminified bundles to production can easily double the parse cost, and on a mid-range phone that is real interaction delay rather than a rounding error.

## What actually moves CLS

CLS has the simplest causes and the simplest fixes, which is why a bad CLS score is usually a sign nobody has looked.

Images and videos without dimensions reserve no space, so the page reflows when they arrive. Set width and height, or use an aspect-ratio box. Ad slots and embeds do the same thing, more violently, because they tend to sit in the middle of content — reserve their space in advance, and accept a blank area rather than a jump.

Web fonts cause a subtler version. When a fallback font is swapped for the real one, text reflows if the two have different metrics. Using font-display: swap keeps text visible during loading, and choosing a fallback with similar metrics limits how far things move when the swap happens.

The one that catches people out is content injected at the top of the page after load — a cookie banner, a promotional bar, a notification. Anything inserted above existing content pushes all of it down, and that is a large shift by definition. Overlay it, or reserve its space.

## How much of this affects rankings

Honestly: less than the amount of discussion suggests. Core Web Vitals are part of the page experience signals, and Google has been consistent that relevance and content quality dominate. A fast page about nothing will not outrank a slow page that answers the question.

What they reliably affect is everything downstream of the visit. Slow pages lose visitors before the content loads, and a page nobody waits for cannot convert, rank on engagement, or earn a link. The argument for fixing Core Web Vitals is not that Google will reward you. It is that the 75th percentile of your visitors is having a worse time than you think, and the metrics are simply telling you so.`;

export const longformJwtExplained = `JSON Web Tokens are used by almost every modern web application and misunderstood by a remarkable number of the people using them. The single most consequential misunderstanding is the belief that a JWT hides its contents. It does not, it never has, and a surprising amount of production data has been exposed by teams who assumed otherwise.

## Three parts, separated by dots

A JWT is a string with three sections divided by full stops: header, payload and signature.

The **header** declares the token type and the algorithm used to sign it, typically something like HS256 or RS256.

The **payload** carries the claims — the actual data. Standard claims have short registered names: sub for the subject, usually a user ID; exp for the expiry time; iat for when it was issued; iss for the issuer; and aud for the intended audience. Applications add their own claims alongside these.

The **signature** is computed over the header and payload together, using a secret or a private key. It is what makes the token trustworthy.

## Encoded is not encrypted

The header and payload are Base64URL encoded. **Base64 is an encoding, not a form of protection.** It exists to represent binary data safely in a URL or an HTTP header, and it is trivially reversible — any decoder, including a browser console, will turn it straight back into readable JSON. There is no key involved and no secret required.

This means anyone who obtains a token can read everything in it. Not a determined attacker with tooling — anyone, in about three seconds.

The practical consequence is a rule worth stating plainly: **never put anything sensitive in a JWT payload**. No personal data beyond an opaque identifier, no internal system details, no roles you would rather competitors not enumerate, and obviously no credentials. Tokens travel through browsers, get written into logs, appear in error reports and sit in local storage. Everything in the payload should be treated as published.

## What the signature does and does not do

If the payload is readable, what is the signature for? **Integrity, not confidentiality.** It proves that the token was issued by someone holding the signing key and has not been altered since.

Change a single character of the payload — flip a role from user to admin, push the expiry out a year — and the signature no longer matches the content. A server that verifies properly rejects it. That is the entire security model: you can read the token, but you cannot forge or modify one.

Which makes verification the part that has to be right. A server that decodes a token without checking the signature has no security at all, because the token is just user-supplied JSON at that point.

The classic failure here is the **alg: none attack**. The spec permits a "none" algorithm meaning unsigned, and some libraries historically honoured whatever the token's own header requested. An attacker could set the algorithm to none, strip the signature, write any payload they liked, and be believed. A related attack switches RS256 to HS256 so the library verifies using the public key as if it were a shared secret. Both are fixed in maintained libraries, and both are reasons to specify the expected algorithm server-side rather than trusting the header.

## Why your token stopped working

By a wide margin, the most common JWT problem in practice is an expired token producing a 401 that seems to come from nowhere — everything worked five minutes ago and now nothing does.

The exp claim is a Unix timestamp, seconds since 1 January 1970 UTC. Two things about it cause repeated confusion. First, it is in **seconds**, while JavaScript's Date.now returns **milliseconds** — mixing them up produces expiry dates either in 1970 or tens of thousands of years from now, both of which are immediately recognisable once you know to look. Second, verification compares against the server's clock, so a server whose time has drifted will reject perfectly valid tokens or accept expired ones.

When debugging an authentication problem, decoding the token and comparing exp against the current time answers the question most of the time, before you look at anything else.

## Short-lived access, long-lived refresh

That leads to the design pattern most systems settle on, and the reason it exists.

A signed JWT cannot be revoked. Once issued, it is valid until it expires, because verification is a local computation — the server checks the signature and the expiry and needs to consult nothing. That statelessness is precisely why JWTs scale well, and it is also the problem: if a token is stolen, or a user logs out, or an account is suspended, any already-issued token keeps working.

The standard answer is two tokens. A short-lived **access token**, often fifteen minutes, is sent with every request and carries the authorisation. A long-lived **refresh token** is stored more carefully, sent only to the endpoint that issues new access tokens, and can be tracked and revoked server-side because that endpoint is consulted rarely enough to afford a database lookup.

This bounds the damage. A stolen access token is useful for minutes rather than weeks, and revoking the refresh token stops new ones being issued. It is a compromise between stateless scalability and the ability to actually revoke access, and understanding it as a compromise makes the design choices clearer.

## Where to store them

Browser storage for tokens is a genuine trade-off rather than a solved problem, and both common answers have real weaknesses.

Local storage is readable by any JavaScript running on the page, which means a single cross-site scripting vulnerability, including one in a third-party script you did not write, exposes the token.

HttpOnly cookies cannot be read by JavaScript, which removes that risk, but cookies are attached automatically to requests and therefore introduce cross-site request forgery exposure unless you set SameSite appropriately and use anti-CSRF measures.

The generally preferred approach is HttpOnly, Secure, SameSite cookies with CSRF protection, because XSS is both more common and more damaging than CSRF. But "preferred" is doing real work in that sentence — neither option is free, and choosing one means accepting the mitigation burden that comes with it.

## A short debugging checklist

Decode the token and read the claims. Check exp against the current time, minding seconds versus milliseconds. Confirm iss and aud match what the server expects. Verify the algorithm is what you intended and not whatever the header asked for. Check the server's clock. And confirm nothing sensitive is sitting in the payload, because if it is, it has already been readable to everyone who has ever held the token.`;

export const longformPasswordSecurity = `Most password advice is a decade out of date, and some of it actively makes things worse. The rules many organisations still enforce — a symbol, a number, a capital, changed every ninety days — were formalised in guidance that the body responsible has since publicly retracted. Understanding what replaced it changes how you should think about your own accounts.

## Length beats complexity, by a very large margin

The strength of a password against brute force depends on how many possibilities an attacker has to work through. Every additional character multiplies that number by the size of the character set, which means length compounds while complexity merely adds.

Work it through and the result is counterintuitive. An eight-character password using every character type sits in a search space smaller than a sixteen-character password made only of lowercase letters. Complexity requirements buy a little; length buys enormously more.

This is why **a passphrase of several unrelated words beats a short scrambled string** on both counts — it is harder to crack and easier to remember. Four or five random words produce something genuinely difficult to brute force that you can actually type. The words do need to be genuinely random, though. A memorable phrase from a song or a book is not random; attackers have wordlists built from exactly that material.

## What complexity rules did to human behaviour

The deeper problem with complexity requirements is that they were designed around how machines crack passwords and not around how people respond to rules.

Told to include a capital, a number and a symbol, people overwhelmingly produce the same shapes: a capital at the start, a number at the end, and an exclamation mark after it. Password becomes Password1!. Told to substitute characters cleverly, they produce P@ssw0rd — and every cracking tool has tried those substitutions since the 1990s, because they are the first thing anyone thinks of.

The result was passwords that satisfied a policy, felt secure, were painful to remember, and were not meaningfully harder to crack. Meanwhile the rules pushed people toward shorter passwords, because long ones with mandatory symbols are miserable to type.

## Forced rotation makes things worse

Ninety-day expiry had the same problem. Faced with changing a password four times a year, people do not generate a new strong password each time — they iterate. Summer2026 becomes Autumn2026. The pattern is obvious, and an attacker who obtained one password can usually guess the next.

Current NIST guidance in SP 800-63B says explicitly that passwords should **not** be subject to arbitrary periodic expiry. They should be changed when there is evidence of compromise. The same document recommends dropping composition rules and instead checking new passwords against lists of known-breached values — because that is the threat that actually matters.

## Reuse is the real risk

Here is the uncomfortable part: for most people, password strength is not the thing that will cause a breach. Reuse is.

The dominant attack is credential stuffing. A site with weak security is breached and its credentials are dumped. Attackers take those email and password pairs and try them, automatically, against banks, email providers, retailers and everything else. The attack does not crack anything — it does not need to, because the password is already known. It simply relies on the same combination working elsewhere.

Against this, password strength is irrelevant. A thirty-character random password reused on two sites is fully compromised the moment either one leaks. **Uniqueness matters more than strength**, and the two are often confused because strength is the thing meters measure.

This is also why breach-checking services are worth using. If a password appears in a known corpus, it is compromised regardless of how strong it looks, and no strength meter can tell you that — meters analyse structure, not history.

## Generators and what they should be doing

A password generator's job is to produce values with genuine unpredictability, which requires a cryptographically secure random source rather than an ordinary pseudorandom one. In a browser that means the Web Crypto API. The distinction is not academic: ordinary random number generators are deterministic given their internal state, and that is fine for shuffling a playlist and not fine for something an adversary has a reason to predict.

Two practical points. First, prefer a generator that runs **entirely in your browser**, so the generated value is never transmitted anywhere — a password that travelled over the network before you used it has already had more exposure than it should. Second, do not test a real password in a strength checker on a site you do not control. Test a structurally similar variation instead. Good checkers analyse locally and send nothing, but the habit is the right one regardless.

## Where passwords should live

If every account needs a long unique password, you cannot remember them, and that is the point — you are not supposed to. A password manager generates and stores them, leaving you one strong passphrase to remember for the vault itself.

The common objection is that this puts everything in one place. It does, and that is still a substantially better position than reuse across dozens of sites, because the alternative is not perfect recall — the alternative is the same password everywhere. Reputable managers encrypt the vault locally, so the provider cannot read the contents even if their own systems are breached.

## Two-factor is what actually stops the attack

Everything above reduces the chance of a password being guessed or reused successfully. Two-factor authentication changes what happens when one is compromised anyway, which is why it is the single highest-value thing on this page.

The methods are not equivalent. **SMS codes are the weakest**, because SIM-swap attacks — where someone persuades a mobile operator to move your number — are a real and routine technique. An authenticator app generating time-based codes is substantially better, since the secret lives on your device. Hardware security keys are the strongest option available, and are the only widely deployed method that resists phishing outright, because the key checks the site's domain before responding and simply will not authenticate to a convincing fake.

If you do one thing after reading this, enable app-based or hardware two-factor on your email account. Email is the recovery channel for nearly everything else, which makes it the account whose compromise cascades furthest.`;
