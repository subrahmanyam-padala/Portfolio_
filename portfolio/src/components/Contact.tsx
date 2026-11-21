import { useState, type FormEvent } from 'react';
import { AlertCircle, CheckCircle2, Github, Linkedin, Loader2, Mail, Send } from 'lucide-react';
import { CONTACT, emailHref, hasRealEmail } from '../data/content';
import ExternalLink from './ui/ExternalLink';
import Reveal from './ui/Reveal';
import Section from './ui/Section';

type Status = 'idle' | 'sending' | 'success' | 'error' | 'mailto' | 'unconfigured';
type Field = 'name' | 'email' | 'subject' | 'message';
type Errors = Partial<Record<Field, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Record<Field, string>): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Please enter a valid email address.';
  if (!values.subject.trim()) errors.subject = 'Please enter a subject.';
  if (values.message.trim().length < 10) errors.message = 'Please write at least 10 characters.';
  return errors;
}

const inputClass =
  'mt-2 w-full rounded-lg border border-white/10 bg-ink-950 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/40';

const STATUS_MESSAGES: Record<Exclude<Status, 'idle' | 'sending'>, string> = {
  success: 'Thanks, your message was sent.',
  error:
    'Something went wrong while sending your message. Please try again, or reach out on LinkedIn.',
  mailto:
    "Your email app should have opened with your message ready to send. If it didn't, use the email address above.",
  unconfigured:
    "This form isn't connected to an email service yet, so nothing was sent. Please reach out on LinkedIn or GitHub instead.",
};

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Errors>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: real visitors never see or fill this field.
    if (data.get('company')) return;

    const values: Record<Field, string> = {
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      subject: String(data.get('subject') ?? ''),
      message: String(data.get('message') ?? ''),
    };

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus('idle');
      return;
    }

    if (CONTACT.formEndpoint) {
      setStatus('sending');
      try {
        const response = await fetch(CONTACT.formEndpoint, {
          method: 'POST',
          headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });
        if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
        form.reset();
        setStatus('success');
      } catch {
        setStatus('error');
      }
      return;
    }

    if (hasRealEmail) {
      const body = `${values.message}\n\n- ${values.name} (${values.email})`;
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
        values.subject,
      )}&body=${encodeURIComponent(body)}`;
      setStatus('mailto');
      return;
    }

    setStatus('unconfigured');
  }

  const feedback = status === 'idle' || status === 'sending' ? null : STATUS_MESSAGES[status];
  const isPositive = status === 'success' || status === 'mailto';

  return (
    <Section id="contact" eyebrow="Contact" title={CONTACT.contactHeadline} description={CONTACT.contactDescription}>
      <div className="grid gap-8 lg:grid-cols-5">
        <Reveal className="space-y-4 lg:col-span-2">
          <a href={emailHref} className="btn-primary w-full">
            <Mail size={16} aria-hidden="true" />
            {hasRealEmail ? CONTACT.email : 'Email Me'}
          </a>
          <ExternalLink href={CONTACT.linkedin} className="btn-secondary w-full">
            <Linkedin size={16} aria-hidden="true" />
            LinkedIn
          </ExternalLink>
          <ExternalLink href={CONTACT.github} className="btn-secondary w-full">
            <Github size={16} aria-hidden="true" />
            GitHub
          </ExternalLink>
        </Reveal>

        <Reveal delay={0.06} className="lg:col-span-3">
          <form onSubmit={handleSubmit} noValidate className="card space-y-5 p-6 sm:p-8" aria-label="Contact form">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="text-sm font-medium text-slate-200">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  aria-invalid={errors.name ? true : undefined}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  className={inputClass}
                />
                {errors.name && (
                  <p id="contact-name-error" role="alert" className="mt-1.5 text-xs text-rose-300">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="contact-email" className="text-sm font-medium text-slate-200">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  className={inputClass}
                />
                {errors.email && (
                  <p id="contact-email-error" role="alert" className="mt-1.5 text-xs text-rose-300">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="text-sm font-medium text-slate-200">
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                required
                aria-invalid={errors.subject ? true : undefined}
                aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                className={inputClass}
              />
              {errors.subject && (
                <p id="contact-subject-error" role="alert" className="mt-1.5 text-xs text-rose-300">
                  {errors.subject}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contact-message" className="text-sm font-medium text-slate-200">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                aria-invalid={errors.message ? true : undefined}
                aria-describedby={errors.message ? 'contact-message-error' : undefined}
                className={`${inputClass} resize-y`}
              />
              {errors.message && (
                <p id="contact-message-error" role="alert" className="mt-1.5 text-xs text-rose-300">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Honeypot field, hidden from people and assistive tech. */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="contact-company">Company</label>
              <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button type="submit" disabled={status === 'sending'} className="btn-primary disabled:opacity-60">
                {status === 'sending' ? (
                  <Loader2 size={16} className="motion-safe:animate-spin" aria-hidden="true" />
                ) : (
                  <Send size={16} aria-hidden="true" />
                )}
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>

              <div aria-live="polite" className="text-sm">
                {feedback && (
                  <p className={`flex items-start gap-2 ${isPositive ? 'text-emerald-300' : 'text-amber-300'}`}>
                    {isPositive ? (
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                    ) : (
                      <AlertCircle size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                    )}
                    <span>{feedback}</span>
                  </p>
                )}
              </div>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
