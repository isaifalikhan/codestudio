'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';

export type ContactFormFields = {
  name: string;
  email: string;
  budget: string;
  projectType: string;
  message: string;
  company?: string;
  website?: string; // honeypot
};

const projectTypeOptions = [
  'Website Development',
  'Web Application',
  'E-commerce',
  'UI/UX Design',
  'SEO / Marketing',
  'Mobile App',
  'Other',
];

const budgetOptions = ['$1k – $5k', '$5k – $15k', '$15k – $50k', '$50k+'];

type Variant = 'light' | 'dark';

const inputClassLight = 'w-full bg-[#FDF8EC] border border-[#2F281D]/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#997F6C] transition-colors text-[#2F281D]';
const inputClassDark = 'w-full bg-[#FDF8EC]/5 border border-[#FDF8EC]/10 rounded-2xl px-6 py-4 text-[#FDF8EC] focus:outline-none focus:border-[#997F6C] transition-colors';
const labelClassLight = 'text-xs font-bold uppercase tracking-widest text-[#2F281D]/40 ml-2';
const labelClassDark = 'text-xs font-bold uppercase tracking-widest text-[#FDF8EC]/40';

export function ContactFormWithEmailJS({ variant = 'light', showCompany = true }: { variant?: Variant; showCompany?: boolean }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const isDark = variant === 'dark';
  const inputClass = isDark ? inputClassDark : inputClassLight;
  const labelClass = isDark ? labelClassDark : labelClassLight;

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormFields>({
    defaultValues: { name: '', email: '', budget: '', projectType: '', message: '', company: '', website: '' },
  });

  const onSubmit = async (data: ContactFormFields) => {
    if (data.website) return; // honeypot
    setStatus('sending');
    setErrorMessage('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          budget: data.budget,
          projectType: data.projectType,
          message: data.message,
          company: data.company || '',
          website: data.website || '',
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus('error');
        setErrorMessage(typeof json?.error === 'string' ? json.error : 'Something went wrong. Please try again or WhatsApp us directly.');
        return;
      }
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection or WhatsApp us directly.');
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} aria-label="Contact form">
      {/* Honeypot: leave empty; bots often fill it */}
      <div className="absolute -left-[9999px] top-0" aria-hidden>
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="contact-name" className={labelClass}>Name</label>
          <input
            id="contact-name"
            type="text"
            placeholder="Your name"
            autoComplete="name"
            className={inputClass}
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1" role="alert">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="contact-email" className={labelClass}>Email</label>
          <input
            id="contact-email"
            type="email"
            placeholder="you@company.com"
            autoComplete="email"
            className={inputClass}
            {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address' } })}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1" role="alert">{errors.email.message}</p>}
        </div>
      </div>
      {showCompany && (
        <div className="space-y-2">
          <label htmlFor="contact-company" className={labelClass}>Company (optional)</label>
          <input
            id="contact-company"
            type="text"
            placeholder="Company name"
            autoComplete="organization"
            className={inputClass}
            {...register('company')}
          />
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="contact-project-type" className={labelClass}>Project Type</label>
          <select
            id="contact-project-type"
            className={inputClass}
            aria-label="Project type"
            {...register('projectType', { required: 'Please select a project type' })}
          >
            <option value="">Select type</option>
            {projectTypeOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {errors.projectType && <p className="text-red-500 text-sm mt-1" role="alert">{errors.projectType.message}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="contact-budget" className={labelClass}>Budget range</label>
          <select
            id="contact-budget"
            className={inputClass}
            aria-label="Budget range"
            {...register('budget', { required: 'Please select a budget range' })}
          >
            <option value="">Select range</option>
            {budgetOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {errors.budget && <p className="text-red-500 text-sm mt-1" role="alert">{errors.budget.message}</p>}
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="contact-message" className={labelClass}>Message</label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="Tell us about your project..."
          className={`${inputClass} resize-none`}
          aria-label="Your message"
          {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Message must be at least 10 characters' } })}
        />
        {errors.message && <p className="text-red-500 text-sm mt-1" role="alert">{errors.message.message}</p>}
      </div>
      {status === 'success' && (
        <div className={`rounded-2xl px-6 py-4 font-medium ${isDark ? 'bg-green-500/20 border border-green-400/40 text-green-300' : 'bg-green-500/15 border border-green-500/30 text-green-700'}`} role="status">
          ✓ Message sent! We&apos;ll reply within 24 hours.
        </div>
      )}
      {status === 'error' && errorMessage && (
        <p className="text-red-500 font-medium" role="alert">{errorMessage}</p>
      )}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full py-5 bg-[#2F281D] text-[#FDF8EC] rounded-2xl font-bold text-lg hover:bg-[#997F6C] transition-all flex items-center justify-center gap-3 group shadow-lg disabled:opacity-70"
      >
        {status === 'sending' ? 'Sending…' : 'Send Message'}
        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden />
      </button>
    </form>
  );
}
