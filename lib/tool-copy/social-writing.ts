/**
 * Page copy for social media and writing tools.
 * See lib/tool-copy-extended.ts for why these exist.
 */

export const LONG_DESCRIPTIONS: Record<string, string> = {
  // ── SOCIAL MEDIA ──────────────────────────────────────────
  'instagram-bio-generator': `The Instagram Bio Generator writes bio options from a description of who you are and what you do, sized to Instagram's 150-character limit so nothing gets cut off mid-word on a profile visit.

That limit is tighter than it sounds once line breaks and an emoji or two are counted, and it has to carry a surprising amount of work: who you are, what someone gets by following, and a reason to tap the link. The bios that convert tend to lead with the specific thing rather than the category — "I teach small cafés to shoot their own food photos" outperforms "Photographer | Creator | Dreamer" because the first tells a visitor whether this account is for them and the second describes a mood.

Two mechanical details are worth knowing. Only the name field is searchable within Instagram, not the bio text, so a keyword you actually want to be found for belongs in the name field rather than buried in the bio. And line breaks render inconsistently when typed on desktop; composing the bio in the app, or pasting text that already contains the breaks, avoids the collapsed single-paragraph result that catches people out.

Generation runs through an AI model server-side; what you type is used to produce the suggestions and is not retained. Treat the output as drafts to edit rather than final copy — the bios that work sound like a person, and a generated line always benefits from being rewritten in your own voice.`,

  'youtube-banner-maker': `The YouTube Banner Maker builds channel art at 2560x1440, the size YouTube requires, with the safe area marked so the important part of your design survives being cropped.

Cropping is the entire difficulty with YouTube banners and the reason most look broken on at least one device. YouTube displays the same single image at wildly different crops: a TV shows nearly the full 2560x1440, a desktop browser shows a wide letterbox strip from the middle, and a phone shows only the central 1546x423. Anything outside that central region — which is barely a quarter of the total height — is invisible to mobile viewers, who are the majority of the audience on most channels.

The practical consequence is that your channel name, tagline, and upload schedule all have to sit inside that central safe area, while the outer region should carry nothing but background, texture, or colour that extends the design gracefully. A banner designed edge-to-edge in a general-purpose image editor almost always ends up with its text sliced in half on a phone.

The other constraint is file size: YouTube caps banner uploads at 6 MB, which a 2560x1440 PNG can exceed easily, so exporting as JPG is usually the right call for photographic backgrounds.

The banner is composed on canvas in your browser and downloads directly — no upload, no watermark, no account.`,

  'engagement-rate-calculator': `The Engagement Rate Calculator works out what percentage of an audience actually interacts with a post, dividing total interactions — likes, comments, saves, shares — by either follower count or reach, and showing the result per post and as an average.

Which denominator you use changes the number substantially, and the two answer different questions. Engagement rate by followers is the standard for comparing accounts and the figure brands quote in influencer deals, but it gets distorted the moment reach diverges from follower count, which on today's algorithmic feeds it always does. Engagement rate by reach measures how compelling the content was to the people who actually saw it, which is the more honest signal of content quality and the one worth optimising against.

Useful benchmarks, with the caveat that they move: on Instagram, 1 to 3 percent by followers is normal, above 3 is strong, and above 6 is exceptional. Rates fall as accounts grow — a 2,000-follower account routinely beats a 200,000-follower account on rate while reaching far fewer people, which is exactly why brands increasingly buy micro-influencer campaigns. An unusually high rate on a large account is also the standard way engagement pods and bought engagement get detected, since real audiences do not behave that uniformly.

One weighting note: saves and shares signal far more intent than likes and are weighted more heavily by the platforms themselves, so a post with modest likes and high saves is often outperforming what a flat engagement rate suggests.

All calculation happens in your browser.`,

  'email-subject-generator': `The Email Subject Line Generator produces subject line options for a campaign or a one-to-one email from a short description of what the message is about and who it is going to.

Subject lines carry more weight than anything else in an email, because they are the only thing that decides whether the rest gets read. Two structural facts shape what works. Length: mobile clients truncate somewhere around 35 to 45 characters, and the majority of email is opened on a phone, so the meaningful part has to land in the first few words. And the preview text — the snippet the client pulls from the top of the body — is effectively a second subject line that most senders waste on "View this email in your browser".

What reliably underperforms is worth naming: ALL CAPS, multiple exclamation marks, "FREE" in caps, and false urgency all trip spam heuristics and, more importantly, train recipients to ignore you. Curiosity gaps that the email does not pay off produce an open followed by a delete and a slow decline in engagement, which mail providers notice and act on by routing more of your sending to the promotions tab.

What works tends to be specific and concrete: a number, a named benefit, a genuine deadline, or a question the recipient actually has. Personalisation beyond a first name — referencing what someone actually did — outperforms merge-tag personalisation by a wide margin.

Generation runs server-side through an AI model; your input produces the suggestions and is not retained. Always A/B test rather than trusting any single line.`,

  'tiktok-bio-generator': `The TikTok Bio Generator writes bio options within TikTok's 80-character limit — roughly half what Instagram allows, which makes it one of the tightest bio fields on any major platform.

Eighty characters forces genuine economy. There is no room for a list of identities, a mission statement, and a call to action; realistically you get one clear line about what the account posts, and maybe an arrow pointing at the link. The accounts that use it well pick a single specific angle — the niche, the format, or the promise — and drop everything else, because a bio that tries to say four things at 80 characters says none of them.

The context matters too: almost nobody arrives at a TikTok profile cold. They watch a video, decide it was worth more, and tap through. So the bio is not an introduction, it is a confirmation — its job is to answer "is there more of what I just watched here?" rather than explain who you are from scratch. That reframing usually produces much better copy than trying to write a conventional bio.

Two practical notes: links in the bio require 1,000 followers on most accounts, so until then the bio carries the whole load; and keywords in the bio and name do feed TikTok's search, which has become a genuine discovery surface rather than an afterthought.

Generation runs server-side; your input is used to produce suggestions and is not retained.`,

  'social-media-calendar': `The Social Media Content Calendar lays out 30 days of posting slots with suggested content types and themes, giving you a fillable plan rather than a blank grid you abandon after four days.

The reason planning matters more than it seems is that consistency, not brilliance, is what compounds on social platforms. Algorithms on every major network reward regular posting because regular posting produces the signal they need to learn who your content should reach. A creator who posts three good pieces a week for a year outperforms one who posts eleven excellent ones in a burst and then goes quiet, almost every time.

The other thing a calendar fixes is the sameness problem. Left to improvise, most accounts post the same format repeatedly — all promotion, or all tips — which flattens reach because the audience learns to expect one thing. Rotating deliberately between educational, behind-the-scenes, social proof, entertaining, and promotional content keeps the feed varied, and putting that rotation on a calendar makes the imbalance visible before you publish it rather than after.

A workable rhythm for most small accounts: batch the creation into one session per week, schedule ahead, and leave a couple of slots open for anything timely. Filling every slot weeks out removes the ability to react, which is where a lot of the best-performing content comes from.

The calendar is generated in your browser and exports for you to fill in.`,

  'link-in-bio-generator': `The Link in Bio Page Generator builds a simple single-page site of stacked links — the kind that sits behind the one clickable URL Instagram and TikTok allow — and exports it as a standalone HTML file you host yourself.

The self-hosting part is the point of difference. Hosted link-in-bio services are convenient, but they put a third party between your audience and everything you are trying to send them to: the page is on someone else's domain, the analytics belong to them, the free tier can change, and if the service disappears every link you have ever published in a bio breaks at once. A plain HTML file on your own domain has none of those dependencies and loads faster than most hosted equivalents, because there is no tracking stack on it.

What makes a links page work is ruthless brevity. Four to six links is the practical ceiling; past that, tap rates on everything fall as visitors scan rather than choose. Ordering matters more than design — the top link gets a large majority of the clicks, so it should be whatever you most want people to do right now rather than a permanent fixture like "About me".

The exported file is a single HTML document with the styles inline, so it can be dropped on any static host, a subdirectory of your existing site, or a free GitHub Pages repository.

Everything is generated in your browser; your links are never uploaded.`,

  // ── WRITING ───────────────────────────────────────────────
  'text-repeater': `The Text Repeater outputs a word, phrase, or block of text a specified number of times, with your choice of separator between repetitions — a space, a comma, a new line, or nothing at all.

It exists because manual copy-paste stops being viable somewhere around the twentieth repetition and becomes error-prone well before that. The uses are mostly technical rather than expressive: generating test data to check how a layout handles a long string, producing a repeated delimiter or divider line, creating filler for a database seed, building a repeated pattern for a CSS or ASCII experiment, or stress-testing a text field's maximum length before a form rejects real input.

The separator choice is what makes it useful across those cases. Newline separation produces a list; comma separation produces something you can paste into a CSV cell or a function argument; no separator at all produces a continuous string, which is what you want when testing whether a container wraps or overflows.

A word of caution on the social-media use case, which is what brings some people here: repeated text in comments or messages is what every major platform's spam detection is explicitly built to catch, and it is one of the faster ways to get an account rate-limited or suspended. The tool will generate it; the platforms will not thank you for it.

Repetition happens instantly in your browser, with no practical limit beyond your device's memory.`,

  'text-reverser': `The Text Reverser flips text in two distinct ways: character reversal, which turns "hello world" into "dlrow olleh", and word-order reversal, which turns it into "world hello". They are different operations that get conflated, and which one you want depends entirely on why you are here.

Character reversal is the one used for puzzles, for checking palindromes, and for a specific practical case — reading text that has been stored or transmitted backwards, which happens more often than you would expect with certain legacy formats and poorly written export scripts. Word-order reversal is more often used in writing and language study, where flipping the sequence of a sentence's words is a way to check phrasing or work with languages that read right to left.

There is one genuine technical caveat with character reversal. Naively reversing a string breaks anything built from multiple Unicode code points: emoji with skin-tone or gender modifiers, flags, family sequences, and accented characters composed from a base letter plus a combining mark. Reversed naively, these either split into their component parts or render as the wrong symbol entirely. Plain Latin text has no such issue.

Reversal happens instantly in your browser as you type, so long passages are handled as easily as a single word, and nothing is transmitted.`,

  'online-notepad': `The Online Notepad is a plain, distraction-free text area that saves what you type to your browser's local storage, so a note survives a closed tab or an accidental refresh without any account, login, or sync service.

Its value is what it deliberately lacks. There is no formatting toolbar, no collaboration sidebar, no comment threads, no autosave-to-cloud spinner, and no sign-in wall. That makes it suited to the category of writing that does not deserve a document — a phone number someone is reading out, a paragraph being drafted before it goes into an email, text being cleaned of formatting on its way between two applications, or a scratch list during a call.

The storage model is worth being precise about, because it has real consequences. Notes live in local storage in the browser you typed them in. They are not synced to a server, not available on your phone, and not recoverable if you clear site data, use a private window, or switch browsers. That is a genuine privacy advantage — nothing you write is transmitted or readable by anyone else — and a genuine risk if you treat it as permanent storage. Anything you would be upset to lose belongs somewhere with real backups.

The other common use is stripping formatting: pasting rich text from a web page or Word document into a plain text area and copying it back out removes the hidden styling that otherwise follows it into your CMS or email.`,

  'signature-generator': `The Digital Signature Generator lets you draw a signature with a mouse, trackpad, or finger, or render your typed name in a handwriting-style font, and exports it as a transparent PNG you can drop into a PDF, a contract, or an email footer.

The transparency is the part that matters practically. A signature saved on a white background sits as a visible white rectangle over whatever is underneath it in a document, which looks obviously pasted. A transparent PNG sits on the page like ink. Drawing at a larger size than you need and scaling down also helps — a signature drawn small has visibly jagged edges once it is placed at document scale.

It is worth being clear about what this produces legally, because the terminology is genuinely confusing. This creates an *electronic signature* — an image of a signature applied to a document. That is legally valid for a wide range of everyday agreements in most jurisdictions, including under the US ESIGN Act and the EU's eIDAS regulation at its basic tier. It is not a *digital signature* in the cryptographic sense: there is no certificate, no key pair, and no tamper-evident binding to the document. For anything high-value, regulated, or likely to be disputed, a service that provides an audit trail and identity verification is the right tool, and for some jurisdictions and document types it is required.

Everything is rendered on canvas in your browser — your signature image is never uploaded, which is exactly as it should be for something this sensitive.`,

  'random-word-generator': `The Random Word Generator produces words at random from a dictionary list, with control over how many you get and, where supported, what kind of word — noun, verb, adjective.

Randomness is doing something specific here rather than just being arbitrary: it defeats the associative rut a brain falls into when it tries to think of something unrelated on demand. Asked for a random word, most people produce something connected to whatever they were just thinking about. A genuinely random prompt forces a connection that would not have occurred otherwise, which is the entire mechanism behind lateral-thinking techniques like random word association, where an unrelated noun is deliberately forced against a stuck problem to generate new angles.

The everyday uses are more prosaic and just as valid: prompts for a writing exercise, words for Pictionary, charades, or a classroom vocabulary game, placeholder names while building something, and seeds for brainstorming sessions where the group has converged too early.

One use worth steering away from: generating a password by picking a few random words here. The idea is sound — multi-word passphrases are strong — but a passphrase should be generated with a cryptographic random source, which this is not necessarily, and it should never be produced on a page you then navigate away from. The Password Generator does this properly using the Web Crypto API.

Generation runs in your browser.`,

  'title-case-converter': `The Title Case Converter applies the actual capitalisation rules of a named style guide — APA, MLA, or Chicago — rather than mechanically capitalising every word, which is what most converters do and what produces headings that read subtly wrong to anyone who edits for a living.

The rules genuinely differ. All three lowercase short prepositions, articles, and coordinating conjunctions unless they begin or end the title, but they disagree on where the cutoff sits. APA capitalises words of four letters or more, so "With" and "From" are capitalised; Chicago lowercases all prepositions regardless of length, so "Through the Looking Glass" keeps "through" capitalised only because it starts the title. MLA sits close to Chicago but handles hyphenated compounds differently. These are not trivia — an academic style guide is enforced by the person marking your work.

Beyond academia, the same rules are what make a headline look professionally set. "How To Write A Good Headline" reads as amateur; "How to Write a Good Headline" reads as edited. The difference is entirely in the small words.

The tool also handles the cases that mechanical conversion breaks: words after a colon start a new capitalised segment, hyphenated compounds capitalise both parts under most guides, and acronyms already in caps should be left alone rather than title-cased into something unrecognisable.

Conversion happens instantly in your browser.`,

  'cover-letter-generator': `The Cover Letter Generator assembles a structured cover letter from your details and the role you are applying for, and exports it as a formatted PDF ready to attach.

The structure it follows is the one that actually gets read, which matters because a recruiter typically spends well under a minute on a cover letter. An opening that names the specific role and one concrete reason you are writing; a middle that connects two or three of your actual accomplishments to what the posting asks for; a close that states what you want next. What kills a cover letter is the generic opening paragraph about being excited by the opportunity, which says nothing and is identical across every application a recruiter reads that day.

The single highest-leverage edit is specificity about the employer. A letter that references something real — a product, a recent announcement, a problem the team has publicly described — immediately separates itself from the template letters, because template letters cannot contain that. It takes ten minutes of reading and is worth more than any amount of polishing the adjectives.

Length is settled: one page, three or four short paragraphs. Anything longer does not get read, and a letter that restates the CV in prose wastes the one chance to say something the CV cannot.

The document is generated and rendered to PDF entirely in your browser, so your employment history and contact details are never uploaded.`,

  'reading-time-calculator': `The Reading Time Calculator estimates how long a piece of text takes to read, dividing the word count by an average reading speed and expressing it in minutes.

The average it uses sits around 200 to 250 words per minute, which is the well-established range for adult silent reading of general prose. That figure is an average across a wide distribution, and the variance is large: reading speed drops considerably for dense technical material, unfamiliar terminology, or text being read for retention rather than gist, and rises for light narrative. Treat the output as an honest estimate rather than a measurement.

The reason to publish one at all is behavioural. A visible "6 min read" measurably affects whether people start an article — it converts an unknown commitment into a known one, which reduces the bounce that comes from a reader scrolling, seeing no end in sight, and leaving. Medium popularised the pattern and most publications adopted it because it works.

For speakers the number is different and worth not confusing: spoken delivery runs at roughly 130 to 150 words per minute, meaningfully slower than silent reading, so a script timed by reading estimate will consistently run long when delivered. A five-minute read is closer to eight minutes spoken.

Calculation happens instantly in your browser as you paste.`,

  'table-of-contents': `The Table of Contents Generator reads the headings in a document or HTML block and builds a nested, linked contents list from the H2, H3, and H4 structure, complete with anchor links to each section.

Two things make this more than a convenience. First, it exposes your heading structure, and a table of contents that looks wrong is almost always telling you the document's hierarchy is wrong — an H4 nested directly under an H2 with no H3 between, or three consecutive sections at the same level that should be grouped. Fixing what the contents list reveals improves the document for readers and for screen reader users navigating by heading.

Second, on a published page a linked contents list is one of the more reliable ways to earn jump links in Google's search results — the indented sub-links that appear under a result and take a searcher directly to a section. Google generates those from on-page anchor structure, and a long article without one forfeits the extra search real estate and the click-through that comes with it.

The anchor slugs it generates matter for stability: once a section link is published and shared, changing the heading text changes the anchor and breaks every existing deep link to it, which is worth knowing before renaming sections in a page that is already live.

Generation runs entirely in your browser; unpublished drafts are never uploaded.`,
};

export const HOW_TO_STEPS: Record<string, [string, string, string]> = {
  'instagram-bio-generator': [
    'Describe who you are, what you post, and who it is for.',
    'Generate options and pick one that fits 150 characters including emoji and line breaks.',
    'Rewrite it in your own voice, and put any keyword you want to be found for in the name field, not the bio.',
  ],
  'youtube-banner-maker': [
    'Choose a background and add your channel name and tagline.',
    'Keep all text inside the marked 1546x423 safe area — that is all a phone shows.',
    'Export at 2560x1440 and keep the file under YouTube’s 6 MB upload limit.',
  ],
  'engagement-rate-calculator': [
    'Enter follower count (or reach) and the interactions on a post — likes, comments, saves, shares.',
    'Compare the rate by followers against the rate by reach; the second is the better quality signal.',
    'Benchmark against 1-3 percent as typical on Instagram, remembering rates fall as accounts grow.',
  ],
  'email-subject-generator': [
    'Describe the email’s purpose and who is receiving it.',
    'Pick options where the meaningful words land in the first 35-45 characters.',
    'Write the preview text deliberately as a second subject line, then A/B test rather than trusting one.',
  ],
  'tiktok-bio-generator': [
    'Describe your niche and the format of content you post.',
    'Choose a line that fits 80 characters and says one thing clearly.',
    'Write it as confirmation for someone who just watched a video, not as a cold introduction.',
  ],
  'social-media-calendar': [
    'Set your start date and how many times per week you will post.',
    'Fill the slots, deliberately rotating between educational, behind-the-scenes, proof, entertaining, and promotional.',
    'Batch-create a week at a time and leave a couple of slots open for timely content.',
  ],
  'link-in-bio-generator': [
    'Add your page title and four to six links, ordered with the most important first.',
    'Preview the page — the top link will take most of the clicks.',
    'Download the HTML file and host it on your own domain or a free static host.',
  ],
  'text-repeater': [
    'Enter the text you want repeated and how many times.',
    'Choose a separator — newline for a list, comma for CSV, none for a continuous test string.',
    'Copy the output; avoid pasting repeated text into social platforms, which flag it as spam.',
  ],
  'text-reverser': [
    'Paste your text into the input.',
    'Choose character reversal or word-order reversal — they do different things.',
    'Copy the result, noting that character reversal can break emoji and accented characters.',
  ],
  'online-notepad': [
    'Start typing — the note saves to your browser automatically.',
    'Reopen the page in the same browser to find it again.',
    'Copy anything you need to keep elsewhere: clearing site data or switching browsers loses the note.',
  ],
  'signature-generator': [
    'Draw your signature with a mouse, trackpad, or finger, or type your name in a handwriting font.',
    'Draw larger than you need and scale down, so the edges stay smooth at document size.',
    'Download the transparent PNG and place it in your PDF or email footer.',
  ],
  'random-word-generator': [
    'Choose how many words you want and, if available, the word type.',
    'Generate, and use the result as a prompt, a game word, or a forced association against a stuck problem.',
    'Do not build a password from these — use the Password Generator, which uses a cryptographic random source.',
  ],
  'title-case-converter': [
    'Paste your title or headline.',
    'Pick the style guide you need — APA, MLA, or Chicago; their rules genuinely differ on short words.',
    'Copy the result, checking that acronyms were left in caps and any subtitle after a colon starts capitalised.',
  ],
  'cover-letter-generator': [
    'Enter your details, the role, and two or three accomplishments relevant to the posting.',
    'Replace the generic opening with something specific about this employer — it is the highest-value edit.',
    'Download the PDF, keeping it to one page and three or four short paragraphs.',
  ],
  'reading-time-calculator': [
    'Paste your article or script.',
    'Read the estimate, based on roughly 200-250 words per minute for silent reading.',
    'For spoken delivery, expect it to run longer — speech is closer to 130-150 words per minute.',
  ],
  'table-of-contents': [
    'Paste your document or HTML containing H2, H3, and H4 headings.',
    'Review the generated hierarchy — gaps or odd nesting usually mean the document structure needs fixing.',
    'Copy the linked list into your page, and avoid renaming headings later since that breaks existing deep links.',
  ],
};
