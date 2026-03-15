'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Send } from 'lucide-react';

export type ContactFormFields = {
  name: string;
  email: string;
  budget: string;
  projectType: string;
  message: string;
  company?: string;
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
  const isDark = variant === 'dark';
  const inputClass = isDark ? inputClassDark : inputClassLight;
  const labelClass = isDark ? labelClassDark : labelClassLight;

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormFields>({
    defaultValues: { name: '', email: '', budget: '', projectType: '', message: '', company: '' },
  });

  const onSubmit = async (data: ContactFormFields) => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          budget: data.budget,
          project_type: data.projectType,
          message: data.message,
          company: data.company || '',
        },
        publicKey
      );
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} aria-label="Contact form">
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
            {...register('email', { required: 'Email is required' })}
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
          {...register('message', { required: 'Message is required' })}
        />
        {errors.message && <p className="text-red-500 text-sm mt-1" role="alert">{errors.message.message}</p>}
      </div>
      {status === 'success' && <p className="text-green-500 font-medium" role="status">Thanks! We&apos;ll get back to you within 24 hours.</p>}
      {status === 'error' && <p className="text-red-500 font-medium" role="alert">Something went wrong. Please email us at hello@codexstudio.com.</p>}
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
