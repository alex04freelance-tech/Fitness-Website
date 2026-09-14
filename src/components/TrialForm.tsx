import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { brand, classes, scheduleDays } from '@/data/brand';
import { supabase } from '@/lib/supabase';
import { useReducedMotion } from '@/hooks/useReducedMotion';

type FormState = {
  name: string;
  email: string;
  phone: string;
  preferred_activity: string;
  preferred_day: string;
  message: string;
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  preferred_activity: '',
  preferred_day: '',
  message: '',
};

export function TrialForm() {
  const reduced = useReducedMotion();
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const { error } = await supabase.from('trial_requests').insert({
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        preferred_activity: form.preferred_activity || null,
        preferred_day: form.preferred_day || null,
        message: form.message || null,
      });

      if (error) throw error;

      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or call us directly.');
    }
  };

  return (
    <section id="trial" className="relative bg-charcoal py-24 md:py-40">
      <div className="container-edge">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: statement */}
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500 font-medium mb-4">
              12 — Visit
            </p>
            <motion.h2
              initial={reduced ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-ivory text-display-sm font-light leading-tight mb-8"
            >
              Come feel
              <br />
              <span className="text-sage-300 italic">the difference.</span>
            </motion.h2>

            <p className="text-ivory/60 text-base font-light leading-relaxed mb-10 max-w-sm">
              Experience a class, meet the trainers, and see the space. Your first visit
              is on us — no obligation, no pressure.
            </p>

            <div className="space-y-2">
              <a
                href={`mailto:${brand.email}`}
                className="block text-ivory/70 text-sm font-light hover:text-sage-300 transition-colors"
              >
                {brand.email}
              </a>
              <a
                href={`tel:${brand.phone.replace(/[^0-9+]/g, '')}`}
                className="block text-ivory/70 text-sm font-light hover:text-sage-300 transition-colors"
              >
                {brand.phone}
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-stone-700">
              <p className="text-ivory/50 text-xs uppercase tracking-wider mb-2">Prefer to talk?</p>
              <a
                href={`tel:${brand.phone.replace(/[^0-9+]/g, '')}`}
                className="group inline-flex items-center gap-2 text-ivory text-sm font-medium hover:text-sage-300 transition-colors"
              >
                Book a Free Trial
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={reduced ? {} : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? {} : { opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-stone-800/50 rounded-sm p-12 flex flex-col items-center justify-center text-center min-h-[400px]"
                >
                  <CheckCircle2 size={48} className="text-sage-300 mb-6" />
                  <h3 className="font-display text-ivory text-2xl font-light mb-3">
                    Request received.
                  </h3>
                  <p className="text-ivory/60 text-sm font-light max-w-sm mb-8">
                    We'll be in touch within 24 hours to schedule your visit. Check your
                    email for confirmation.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-sage-300 text-sm font-medium hover:text-sage-200 transition-colors"
                  >
                    Send another request
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={reduced ? {} : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduced ? {} : { opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="bg-stone-800/30 rounded-sm p-6 md:p-10"
                >
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <FormField
                      label="Name"
                      required
                      value={form.name}
                      onChange={(v) => updateField('name', v)}
                      placeholder="Your full name"
                    />
                    <FormField
                      label="Email"
                      required
                      type="email"
                      value={form.email}
                      onChange={(v) => updateField('email', v)}
                      placeholder="you@email.com"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <FormField
                      label="Phone"
                      type="tel"
                      value={form.phone}
                      onChange={(v) => updateField('phone', v)}
                      placeholder="Optional"
                    />
                    <FormSelect
                      label="Preferred activity"
                      value={form.preferred_activity}
                      onChange={(v) => updateField('preferred_activity', v)}
                      options={classes.map((c) => c.name)}
                      placeholder="Select a discipline"
                    />
                  </div>

                  <div className="mb-5">
                    <FormSelect
                      label="Preferred day"
                      value={form.preferred_day}
                      onChange={(v) => updateField('preferred_day', v)}
                      options={scheduleDays}
                      placeholder="Select a day"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-ivory/50 text-xs uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      rows={3}
                      placeholder="Tell us about your goals..."
                      className="w-full bg-transparent border-b border-stone-600 text-ivory text-sm font-light py-2 focus:border-sage-400 outline-none transition-colors resize-none placeholder:text-stone-600"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-terracotta-400 text-sm mb-4">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-sage-400 text-ivory rounded-full text-sm font-medium tracking-wide hover:bg-sage-300 transition-colors duration-300 disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Request a Visit
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  value,
  onChange,
  required,
  type = 'text',
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-ivory/50 text-xs uppercase tracking-wider mb-2">
        {label} {required && <span className="text-terracotta-400">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-stone-600 text-ivory text-sm font-light py-2 focus:border-sage-400 outline-none transition-colors placeholder:text-stone-600"
      />
    </div>
  );
}

function FormSelect({
  label,
  value,
  onChange,
  options,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-ivory/50 text-xs uppercase tracking-wider mb-2">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-b border-stone-600 text-ivory text-sm font-light py-2 focus:border-sage-400 outline-none transition-colors appearance-none cursor-pointer"
        style={{ color: value ? undefined : 'transparent' }}
      >
        <option value="" className="bg-charcoal text-stone-500">
          {placeholder || 'Select...'}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-charcoal text-ivory">
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
