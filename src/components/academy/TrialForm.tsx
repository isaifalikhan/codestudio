'use client';

import React, { useState } from 'react';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { BRAND, COURSES } from '@/lib/quranAcademyData';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const TUTOR_PREFS = ['No preference', 'Male teacher', 'Female teacher'] as const;

const field =
  'w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-ink placeholder:text-mist/70 ' +
  'focus:border-pine focus:outline-none focus:ring-2 focus:ring-pine/25 transition-colors';
const label = 'mb-2 block text-sm font-bold text-ink';

/**
 * Free-trial booking form. It posts to the shared /api/contact endpoint
 * (Resend + rate limiting already live there) with the academy details
 * folded into the message body, so no new mail plumbing is needed.
 */
export const TrialForm = () => {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const country = String(data.get('country') || '').trim();
    const course = String(data.get('course') || '');
    const tutor = String(data.get('tutor') || '');
    const students = String(data.get('students') || '1');
    const timing = String(data.get('timing') || '').trim();
    const notes = String(data.get('notes') || '').trim();

    setStatus('sending');
    setError('');

    const message = [
      `FREE TRIAL REQUEST — ${BRAND.name}`,
      '',
      `Course: ${course}`,
      `Teacher preference: ${tutor}`,
      `Students: ${students}`,
      `Country / time zone: ${country || 'not given'}`,
      `WhatsApp / phone: ${phone || 'not given'}`,
      `Preferred class times: ${timing || 'not given'}`,
      '',
      `Notes: ${notes || '—'}`,
    ].join('\n');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          projectType: `Quran Academy — ${course}`,
          budget: `${students} student(s)`,
          message,
          website: String(data.get('website') || ''), // honeypot
          privacyConsent: data.get('consent') === 'on',
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json?.error || 'Something went wrong. Please WhatsApp us instead.');
      setStatus('sent');
      form.reset();
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-2xl border border-pine/25 bg-pine/5 p-10 text-center">
        <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-pine" aria-hidden />
        <h3 className="font-display text-2xl font-bold text-ink">
          JazakAllahu khayran — request received
        </h3>
        <p className="mx-auto mt-3 max-w-md text-ink/70">
          A coordinator will contact you within 24 hours to confirm your teacher and the timing of
          your {BRAND.trialClasses} free classes.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 rounded-xl border border-ink/15 px-5 py-3 text-sm font-bold text-ink transition-colors hover:border-pine hover:text-pine"
        >
          Book for another student
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="trial-name">
            Your name <span className="text-gold">*</span>
          </label>
          <input id="trial-name" name="name" required minLength={2} className={field} placeholder="Parent or student name" />
        </div>
        <div>
          <label className={label} htmlFor="trial-email">
            Email <span className="text-gold">*</span>
          </label>
          <input id="trial-email" name="email" type="email" required className={field} placeholder="you@example.com" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="trial-phone">
            WhatsApp number
          </label>
          <input id="trial-phone" name="phone" type="tel" className={field} placeholder="+1 555 000 0000" />
        </div>
        <div>
          <label className={label} htmlFor="trial-country">
            Country / time zone
          </label>
          <input id="trial-country" name="country" className={field} placeholder="e.g. London, UK" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="trial-course">
            Course
          </label>
          <select id="trial-course" name="course" className={field} defaultValue={COURSES[0].title}>
            {COURSES.map((course) => (
              <option key={course.slug} value={course.title}>
                {course.title}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet — please advise</option>
          </select>
        </div>
        <div>
          <label className={label} htmlFor="trial-tutor">
            Teacher preference
          </label>
          <select id="trial-tutor" name="tutor" className={field} defaultValue={TUTOR_PREFS[0]}>
            {TUTOR_PREFS.map((pref) => (
              <option key={pref} value={pref}>
                {pref}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="trial-students">
            Number of students
          </label>
          <input
            id="trial-students"
            name="students"
            type="number"
            min={1}
            max={10}
            defaultValue={1}
            className={field}
          />
        </div>
        <div>
          <label className={label} htmlFor="trial-timing">
            Preferred class times
          </label>
          <input id="trial-timing" name="timing" className={field} placeholder="e.g. weekdays after 6pm" />
        </div>
      </div>

      <div>
        <label className={label} htmlFor="trial-notes">
          Anything we should know?
        </label>
        <textarea
          id="trial-notes"
          name="notes"
          rows={4}
          className={`${field} resize-y`}
          placeholder="Student age, current level, or any questions"
        />
      </div>

      {/* Honeypot — hidden from people, catches bots */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      <label className="flex items-start gap-3 text-sm text-ink/70">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 accent-pine" />
        <span>
          I agree to be contacted about my free trial classes and accept the{' '}
          <a href="/privacy-policy" className="font-semibold text-pine underline">
            privacy policy
          </a>
          .
        </span>
      </label>

      {status === 'error' && (
        <p className="flex items-start gap-2 rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-pine px-6 py-4 font-bold text-paper shadow-lift transition-all hover:-translate-y-0.5 hover:bg-gold disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'sending' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          `Book my ${BRAND.trialClasses} free classes`
        )}
      </button>

      <p className="text-center text-xs text-mist">
        No card details. No obligation. We reply within 24 hours, in shaa Allah.
      </p>
    </form>
  );
};
