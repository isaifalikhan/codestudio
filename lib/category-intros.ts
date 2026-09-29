/**
 * On-page introductions for the blog and resources category listings.
 *
 * Those pages were 67–251 words of main content — a heading, a filter row and
 * a grid of cards. A listing page is allowed to be shorter than an article, but
 * at that length it carries no information a search result does not already
 * show, which is what "thin" means in practice.
 *
 * Each intro says what the category covers and who it is for, in terms that
 * would not be true of a different category on the same site.
 */

/** Keyed by the label on the post, lower-cased (see toCategorySlug). */
export const BLOG_CATEGORY_INTROS: Record<string, string[]> = {
  business: [
    'Articles for the person deciding whether to spend money, rather than the person writing the code. What a website actually costs and why quotes differ so widely, how to brief an agency so you get what you expected, and how to tell whether the thing you already have is holding the business back.',
    'The recurring theme is that most website decisions are business decisions wearing technical clothing. Choosing a platform, setting a budget, deciding whether to rebuild or repair — none of those are really about technology, and treating them as though they are is how projects end up expensive and disappointing at the same time.',
    'If you are about to commission a site, two articles here are worth reading before you take a call with anyone: the one on what drives a quote, and the one on margin versus markup. Between them they cover the two numbers most commonly misunderstood on both sides of that conversation.',
  ],
  design: [
    'Design writing aimed at the point where visual decisions meet measurable outcomes. How layout, hierarchy and interaction affect whether someone finishes what they came to do, rather than whether a page wins awards.',
    'Much of it is about restraint. The changes that move conversion tend to be unglamorous — clearer hierarchy, fewer competing calls to action, forms that ask for less — while the ones that feel most satisfying to make are often invisible to the person using the site.',
    'Where design and search overlap, the overlap is mostly about layout stability and speed. An image without reserved space shifts the page as it loads, a hero that starts downloading late delays the moment the page looks finished, and both are design decisions as much as engineering ones. The Core Web Vitals article covers what actually moves those numbers.',
  ],
  development: [
    'Technical articles for developers and for the technically curious people who manage them. Framework and architecture decisions, the trade-offs behind them, and the specific mistakes that are common enough to be worth naming.',
    'These lean towards explaining mechanisms rather than listing steps. Knowing that a JWT payload is readable, or why re-saving a JPEG degrades it, changes how you build things far more durably than a tutorial you follow once and forget.',
    'Topics range across the stack — front-end frameworks, APIs and authentication, data formats and encoding, build tooling and performance. Where something has a well-known failure mode, we name it rather than leaving it implied: the JWT that anyone can read, the MySQL column that silently truncates emoji, the URL parameter that breaks the first time a customer types an ampersand.',
  ],
  seo: [
    'Search articles focused on what actually moves rankings and indexing, written against Google\'s current documented behaviour rather than folklore that stopped being true years ago.',
    'A recurring correction here: several things widely treated as ranking factors are not. Meta descriptions do not affect rankings, keyword density has no target, and domain age is correlation rather than cause. Knowing which levers are real saves a great deal of wasted effort.',
    'The other recurring theme is that technical SEO problems are usually self-inflicted and invisible. A staging noindex left in production, a canonical tag pointing at the homepage, a robots.txt rule blocking the CSS Google needs to render the page — each will quietly suppress a site while everything looks fine to a human visitor.',
  ],
  tools: [
    'Practical guides to the tasks our free tools exist for — compressing images, shrinking PDFs, generating passwords, handling text and data. Written to answer the question behind the task rather than to advertise the tool.',
    'The useful version of "how do I make this file smaller" is not a list of buttons. It is understanding what is taking up the space, which fix damages the file and which does not, and how to tell the difference afterwards.',
    'All the tools referenced here are free, need no account, and where the work can be done locally they run entirely in your browser so files and text never reach a server. Where a tool does need to send data somewhere to work, the articles say so rather than glossing over it.',
  ],
};

/** Keyed by the resources category id. */
export const RESOURCE_CATEGORY_INTROS: Record<string, string[]> = {
  design: [
    'Free design tools that hold up for real client work, not just for a first draft. Interface and graphic design, colour palette generators, icon and illustration libraries, and typefaces you can legally use in commercial projects.',
    'Licensing is the detail that catches people out. A font or illustration being free to download is not the same as being free to use in something a client pays for, and the distinction matters most on exactly the projects where getting it wrong is expensive. Where a tool has meaningful licence restrictions, we say so.',
  ],
  writing: [
    'Tools for producing and improving written work: grammar and clarity checking, paraphrasing, translation, and the note-taking and organisation software that holds a long piece of writing together.',
    'Most of these are genuinely useful for the mechanical parts of writing — catching the correctly-spelled wrong word, tightening a paragraph that runs long, working in a second language. None of them decide what is worth saying, which remains the part that takes the time.',
  ],
  'dev-tools': [
    'Developer utilities that earn a permanent bookmark: code editors and playgrounds, API clients, version control interfaces, and the small format-and-inspect tools you reach for several times a day without thinking about it.',
    'The selection favours things that work in a browser or install cleanly, and that do not require an account to be useful. A tool you have to sign into before it will format a JSON blob is not saving you time.',
  ],
  images: [
    'Image tools for the whole path from raw file to published asset: compression, format conversion, resizing and cropping, background removal, and stock photography you can actually use commercially.',
    'Two things determine whether an image hurts your page speed, and neither is the compression slider. Serving an image far larger than it is displayed, and choosing a format that fights the content — a screenshot saved as JPEG, a photograph saved as PNG — cost more than any quality setting will recover.',
  ],
  ai: [
    'AI tools with a practical business use rather than a novelty one: writing assistance, image generation, transcription, summarisation and research support.',
    'Worth holding onto one habit with all of them. Generated output states facts, figures and citations with complete confidence regardless of whether they are correct, so anything you would be embarrassed to be wrong about needs checking against a real source before it goes anywhere near a client.',
  ],
  seo: [
    'Search tools covering the work in the order you actually do it: keyword research, technical auditing, rank tracking, and backlink analysis.',
    'Google Search Console belongs at the top of any list like this and costs nothing. It is the only source that reports what Google actually did with your pages — which were indexed, which were crawled and rejected, and what people searched before clicking. Third-party tools estimate; Search Console reports.',
  ],
  convert: [
    'File conversion between the formats that refuse to cooperate: documents to PDF, PDF back to editable text, images between formats, and the audio and video containers that every platform wants differently.',
    'The thing to check on any conversion is what got lost. Converting a PDF to images destroys the selectable text layer, converting a transparent PNG to JPG flattens the transparency onto a solid background, and both are usually discovered after the original has been overwritten. Keep the source file.',
  ],
  video: [
    'Video tools for people making content rather than films: trimming and cutting, format conversion, compression for platform upload limits, screen recording and subtitling.',
    'File size is the constraint most of this work runs into, and resolution and length drive it far more than any quality setting. A shorter clip at sensible dimensions beats a long one compressed hard, both for the upload and for the person watching on mobile data.',
  ],
  utilities: [
    'The small single-purpose tools that solve one problem completely: generators, converters, encoders, validators and inspectors. Individually unremarkable, collectively the things that stop a five-minute task becoming an hour.',
    'Where one of these can run entirely in your browser, that is the version worth using. Anything involving a password, an access token, a client document or personal data should not be pasted into a page that sends it to somebody else\'s server when a local equivalent exists.',
  ],
};
