/**
 * Page copy for video/audio downloaders, SEO tools, and the tip calculator.
 * See lib/tool-copy-extended.ts for why these exist.
 */

export const LONG_DESCRIPTIONS: Record<string, string> = {
  // ── VIDEO TOOLS ───────────────────────────────────────────
  'facebook-video-downloader': `The Facebook Video Downloader takes the link to a public Facebook video or Reel and returns direct MP4 download options, usually in both a higher and a lower resolution, so you can save a copy locally instead of relying on the Facebook app's own limited save-for-later feature.

Facebook serves video from its CDN at several encoded qualities, and which ones exist depends on the source upload — a Reel shot vertically on a phone will not have a 1080p landscape version to offer, and an older video may only exist at a low bitrate. The tool reports what is genuinely available rather than promising a resolution it would have to upscale to produce.

The hard limit is privacy scope. Only videos on public posts or public Pages can be resolved, because anything restricted to a friends list, a private group, or a specific audience requires an authenticated session that the tool does not have and should not have. If a link fails, checking whether the post is actually public resolves the great majority of cases.

Please download only content you own or have permission to use. Saving your own uploads, a client's ad creative you are archiving, or a video you have explicit rights to is straightforward; re-uploading someone else's video is a copyright issue regardless of which tool produced the file.

The link you paste is sent to our server to resolve the CDN URL and is discarded immediately — no video is stored on our infrastructure, and nothing about the request is logged against you.`,

  'twitter-video-downloader': `The Twitter/X Video Downloader resolves a post URL into the underlying MP4 files, covering both native video uploads and the looping clips that X displays as GIFs — which are not really GIFs at all. X converts every uploaded GIF into an MP4 on ingest, which is why a "GIF" from a post downloads as a video file and why the resulting file is dramatically smaller than a true GIF of the same clip would be.

Video on X is delivered as an adaptive stream with several encoded variants, so a post typically has more than one resolution available. The highest variant is capped by what was uploaded and by the encoding X applied — a clip that was already compressed before upload will not come back sharper than the copy X stored.

Only posts that are publicly visible can be resolved. Protected accounts, posts from accounts that have blocked the request path, and anything requiring a logged-in session are out of scope by design.

As with any downloader, the rights question sits with the person downloading. Archiving your own posts, saving a clip you have permission to reuse, or keeping a copy of a video before deleting your own account are all normal; redistributing someone else's video without permission is not, whatever tool produced the file.

The URL is sent to our server only to look up the media variants and is discarded straight afterwards.`,

  'pinterest-downloader': `The Pinterest Video Downloader resolves a Pin URL to its underlying media — the MP4 behind a video Pin or Idea Pin, or the full-resolution image behind a static Pin. Pinterest's own interface deliberately makes saving the original file awkward, showing a display-sized rendition rather than the file that was uploaded.

The resolution difference is the main reason people use a tool for this rather than right-clicking. Pinterest generates multiple renditions of every image at different widths and serves whichever fits the layout, so what you see in the feed can be substantially smaller than the original. Pulling the largest available rendition matters when the Pin is a recipe card, an infographic, or a design reference where the text needs to stay legible.

Idea Pins are the awkward case: they are multi-page formats that can combine video, images, and text overlays per page, so what comes back is the media for the page rather than a single flattened file reproducing exactly what the app renders.

Only public Pins can be resolved — anything on a secret board or requiring a logged-in session is out of scope. And the usual rights caveat applies with particular force on Pinterest, where most content is someone's original photography, artwork, or design: saving for personal reference is one thing, republishing is another.

The Pin URL is used server-side only to resolve the media and is not stored.`,

  'vimeo-downloader': `The Vimeo Downloader resolves a public Vimeo video URL to its available MP4 progressive files so you can keep a local copy. Vimeo's audience skews professional — portfolios, client deliverables, festival submissions, documentation — and the platform encodes at noticeably higher bitrates than most social video hosts, so the files that come back tend to be genuinely good quality rather than heavily recompressed.

Availability depends entirely on how the uploader configured the video. Vimeo gives creators granular control: a video can be public but have downloads disabled, be restricted to specific domains, be password-protected, or be unlisted but embeddable. Those settings are deliberate creative-control choices, and a video whose owner has turned downloads off will not resolve — which is the correct outcome rather than a limitation to work around.

The legitimate uses are common on Vimeo specifically because of who uses it: retrieving your own upload when the local master is gone, archiving a client deliverable that was handed over via Vimeo, or keeping an offline copy of a video you have explicit permission to use in a presentation.

Please respect the uploader's settings and licence. Vimeo creators frequently publish under specific terms, and the platform's own download control is the clearest possible signal of intent.

The URL is sent to our server only to resolve the file list and is discarded immediately.`,

  'youtube-thumbnail-downloader': `The YouTube Thumbnail Downloader extracts the thumbnail images from any YouTube video URL and offers each available size, from the 1280x720 maxresdefault image down to the small default rendition. YouTube generates these at fixed sizes and serves them from a predictable path, so pulling them requires no API key and no access to the video itself.

Not every video has every size. The full 1280x720 maxres thumbnail only exists when the uploader provided a custom thumbnail at that resolution or the source video was high definition; older videos and low-resolution uploads often top out at 640x480 hqdefault. When maxres is missing, that is a property of the video rather than a failure, which is why the tool shows which sizes actually resolved instead of presenting a dead link.

The realistic uses are analytical and creative: studying what thumbnail styles are working in a niche before designing your own, collecting reference examples for a channel redesign, grabbing your own thumbnail back when you have lost the original file, or building a mockup of a video grid. Thumbnail design drives click-through rate more than almost any other single factor on YouTube, which is why competitive thumbnail research is a routine part of channel strategy.

Thumbnails remain the copyright of whoever made them — use them as reference rather than republishing them as your own.

The video ID is parsed in your browser and the images are fetched directly from YouTube's image CDN.`,

  'video-to-gif': `The Video to GIF Converter turns a short clip into an animated GIF, letting you pick the segment, the frame rate, and the output width. GIF persists despite being a genuinely bad video format because it plays automatically, loops forever, needs no player, and can be pasted into places that reject video outright — chat apps, documentation, issue trackers, email, and older CMS editors.

The format's cost is worth understanding before you convert a 30-second clip and wonder why the file is 40 MB. GIF stores every frame as a separate image with no inter-frame compression of the kind real video codecs use, and it is limited to a 256-colour palette per frame. Both facts push in the same direction: file size scales roughly with duration multiplied by frame rate multiplied by area, and gradients or film grain dither badly against a limited palette.

That gives three levers, in order of effectiveness. Keep it short — under about five seconds is where GIFs stay reasonable. Drop the frame rate; 10 to 15 fps looks fine for screen recordings and UI demos and roughly halves the size versus 30. Reduce the width; halving the dimensions cuts the pixel count to a quarter. Flat-coloured screen recordings survive all three far better than live-action footage does.

Conversion runs in your browser, so the clip is never uploaded.`,

  'audio-trimmer': `The Audio Trimmer cuts an MP3 or other audio file down to a selected section, letting you set start and end points and export just that portion. It decodes the audio with the Web Audio API in your browser and re-encodes the selected range, so there is no upload, no queue, and no account.

Trimming is the operation people need far more often than full audio editing: removing dead air and throat-clearing from the start of a recording, isolating a quote from a long interview, cutting a ringtone or a notification sound out of a track, shortening a podcast segment for a social clip, or extracting the section of a lecture recording that covers a single topic.

Two practical details. First, trimming with sample-level precision matters at the boundaries — a cut placed mid-word or mid-beat is obvious to a listener, so nudging the start point to a silence or a beat boundary is usually worth the extra few seconds. Second, a hard cut at a non-zero amplitude produces an audible click, because the waveform jumps instantly to silence; a very short fade at each edge removes that entirely and is the single easiest way to make a trimmed clip sound deliberate rather than chopped.

Everything happens locally in your browser, which matters for interview recordings, voice notes, and unreleased audio that should not be sitting on someone else's server.`,

  'spotify-to-mp3': `This page resolves the metadata behind a Spotify link — track title, artist, album, artwork, and duration — from the public Spotify link you paste.

It is worth being direct about what it does not do, because the search term that brings most people here promises something different. Spotify's catalogue is encrypted and DRM-protected, and the audio itself cannot be extracted from Spotify by this or any browser-based tool. Anything claiming otherwise is either matching your track against a copy hosted elsewhere, or is not doing what it says. Stripping DRM from a commercial streaming catalogue is a copyright infringement and a breach of Spotify's terms of service, and it is not something we will build.

What the metadata is genuinely useful for: identifying a track you half-remember from a shared link, exporting a playlist's track list to plan a set or a podcast rundown, building a reference list for licensing enquiries, or finding the exact artist and release so you can buy the track from a store that sells downloads — Bandcamp, Qobuz, Beatport, or the artist's own site — which is the legitimate route to owning an offline copy.

If offline listening is the actual goal, Spotify Premium's own offline mode is the supported way to do it, and it keeps the artist paid.

The link you paste is used only to look up public metadata and is not stored.`,

  // ── SEO & MARKETING ───────────────────────────────────────
  'keyword-density': `The Keyword Density Checker counts how often each word and phrase appears in a piece of content and expresses it as a percentage of the total word count, breaking out single words, two-word phrases, and three-word phrases separately so you can see which terms the page actually emphasises.

The honest framing is important here, because keyword density is a metric whose original purpose no longer exists. Search engines in the early 2000s did weight raw term frequency, which produced a decade of content stuffed to hit a magic percentage. Google has not worked that way for many years — it evaluates meaning, related terminology, and how comprehensively a page covers a topic, not how many times a phrase repeats. There is no target density that improves rankings, and the old advice to aim for two or three percent is obsolete.

What the tool is still genuinely good for is diagnosis in two directions. Unusually high density is a warning sign: if a phrase is at four or five percent, the copy almost certainly reads as repetitive and unnatural to a human, which is itself a ranking problem. And near-zero density for your actual topic reveals the opposite failure — a page about accounting software that never plainly says "accounting software" gives Google very little to work with.

Analysis runs entirely in your browser; the content you paste is never uploaded, which matters for drafts and client work.`,

  'meta-description-generator': `The Meta Description Generator writes the short summary that appears under your page title in search results, taking your page topic and producing options sized to fit before Google truncates them.

The single most misunderstood thing about meta descriptions is that they are not a ranking factor. Google confirmed this years ago and has not wavered. What a description does affect is click-through rate, which is the whole point — you are writing an advertisement for the page, not a keyword container. A description that reads as a reason to click consistently outperforms one that lists terms, even though the keyword-stuffed version might feel more "optimised".

Length is the practical constraint. Google truncates at roughly 155 to 160 characters on desktop and less on mobile, and a description cut off mid-sentence looks careless. Front-loading the specific, concrete part — a number, a price, a location, a clear outcome — means the useful information survives even when the tail gets clipped.

Worth knowing: Google frequently rewrites descriptions anyway, generating its own snippet from page content when it judges that a passage matches the query better than your description does. Writing a good one is still worthwhile — it is what gets used for brand and navigational queries, and for social shares — but a page's own body copy needs to be strong regardless.

Generation uses an AI model server-side; your input is processed to produce the result and is not retained.`,

  'sitemap-generator': `The XML Sitemap Generator produces a sitemap.xml file listing the URLs you want search engines to know about, with optional lastmod dates, change frequency, and priority values, formatted to the sitemaps.org schema that Google and Bing both read.

A sitemap is best understood as a discovery aid, not an indexing instruction. Listing a URL does not guarantee it gets indexed, and omitting one does not prevent indexing if Google finds it through a link. Where a sitemap genuinely helps is on sites where crawling alone would be slow or incomplete: large sites, new sites with few inbound links, pages buried deep in the navigation, and content that is not well linked from elsewhere.

Two fields are worth using carefully. lastmod is the one Google actually pays attention to, and only if it is accurate — a sitemap that stamps every URL with today's date on every regeneration teaches Google to ignore the field entirely, so it should reflect real content changes. priority and changefreq, by contrast, are effectively ignored by Google, so there is no benefit in agonising over them.

Once generated, the file goes at your site root and gets referenced from robots.txt with a Sitemap line, then submitted in Google Search Console, where the coverage report will tell you which submitted URLs were indexed and which were not — usually the more useful signal.

The sitemap is built in your browser from the URLs you enter.`,

  // ── CALCULATORS ───────────────────────────────────────────
  'tip-calculator': `The Tip Calculator works out the gratuity on a bill at whatever percentage you choose and splits the total across any number of people, showing both the per-person share and the total including tip so nobody has to do arithmetic at the table.

Tipping norms vary enough by country that a default percentage is genuinely misleading. In the United States, 18 to 20 percent is standard for restaurant table service and lower rates read as a complaint, largely because tipped wages are legally allowed to be below the standard minimum. Across most of Europe, service is typically included and rounding up or leaving 5 to 10 percent is generous rather than expected. In Japan, tipping is not customary and can cause genuine awkwardness. In Pakistan and much of South Asia, roughly 10 percent is common in restaurants where service is not already added.

Two details that change the number more than people expect. Calculating the tip on the pre-tax subtotal rather than the post-tax total is the conventional approach and makes a real difference on a large bill. And when a party is large enough that the restaurant has already added a service charge — often automatic for groups of six or more — tipping again on top is double-paying, so it is worth reading the bill before reaching for a percentage.

All calculation happens instantly in your browser.`,
};

export const HOW_TO_STEPS: Record<string, [string, string, string]> = {
  'facebook-video-downloader': [
    'Copy the link to a public Facebook video or Reel from the post’s share menu.',
    'Paste it above and let the tool resolve the available MP4 qualities.',
    'Pick a resolution and download — only content you own or have permission to use.',
  ],
  'twitter-video-downloader': [
    'Copy the URL of the X post containing the video or GIF.',
    'Paste it in and review the resolutions the post actually has available.',
    'Download the variant you need; X GIFs come back as MP4 because that is how X stores them.',
  ],
  'pinterest-downloader': [
    'Copy the Pin URL from Pinterest’s share menu or your browser address bar.',
    'Paste it above to resolve the underlying video or full-resolution image.',
    'Download the largest rendition — useful when the Pin is an infographic or recipe card with small text.',
  ],
  'vimeo-downloader': [
    'Paste the URL of a public Vimeo video.',
    'Review the progressive MP4 files the uploader has made available.',
    'Download your chosen quality; if nothing resolves, the creator has disabled downloads deliberately.',
  ],
  'youtube-thumbnail-downloader': [
    'Paste any YouTube video URL or video ID.',
    'Compare the sizes that resolved — maxres 1280x720 only exists if the uploader provided one.',
    'Download the size you need, and treat thumbnails as reference rather than material to republish.',
  ],
  'video-to-gif': [
    'Upload a short video clip from your device.',
    'Set the start and end points, then lower the frame rate to 10-15 fps and reduce the width to control file size.',
    'Export the GIF — keep it under about five seconds or the file gets very large.',
  ],
  'audio-trimmer': [
    'Upload an MP3 or other audio file.',
    'Drag the start and end handles to the section you want, nudging cuts to a silence or beat boundary.',
    'Add a very short fade at each edge to avoid clicks, then export the trimmed audio.',
  ],
  'spotify-to-mp3': [
    'Paste a public Spotify track, album, or playlist link.',
    'Read the resolved metadata — title, artist, album, duration, artwork.',
    'Use it to identify and buy the track from a download store; Spotify audio itself is DRM-protected and cannot be extracted.',
  ],
  'keyword-density': [
    'Paste your page copy or article draft into the input.',
    'Review the one-, two-, and three-word phrase frequencies.',
    'Treat anything above roughly three percent as a readability warning, and check your main topic actually appears at all.',
  ],
  'meta-description-generator': [
    'Enter your page topic, target keyword, and what makes the page worth clicking.',
    'Generate options and pick one that fits under about 155 characters.',
    'Front-load the concrete detail — a number, price, or location — so it survives truncation.',
  ],
  'sitemap-generator': [
    'Enter the URLs you want listed, or your site root to build the list.',
    'Set lastmod dates that reflect real content changes — stamping every URL with today teaches Google to ignore the field.',
    'Download sitemap.xml, upload it to your site root, reference it from robots.txt, and submit it in Search Console.',
  ],
  'tip-calculator': [
    'Enter the bill amount — use the pre-tax subtotal, which is the conventional base for a tip.',
    'Set the tip percentage for where you are, and the number of people splitting.',
    'Check the bill for an automatic service charge first, so you do not tip twice on a large party.',
  ],
};
