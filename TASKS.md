# Landing page tasks

## Open before publishing
- [ ] Contact form has no backend: `js/main.js` opens a `mailto:`. Pick a form service or endpoint, then replace. (Technical debt, see below)
- [ ] Privacy policy and legal notice pages: the form collects personal data (GDPR) and the consent checkbox has no link to a policy.
- [ ] Confirm the contact details: two emails (pol@, marina@northstonecredit.com) and the WhatsApp number +34 639 482 478 (shown only as the floating button, not as text). The form's `mailto:` goes to both addresses (`js/main.js`).
- [ ] Confirm legal positioning with a lawyer: footer says "no es una entidad bancaria ni concede créditos" and the process describes derivation to "entidades habilitadas". The plan marks the regulatory scope as pending validation.
- [ ] Confirm headline and copy (Spanish). Tagline is still undecided in BRAND.txt.
- [ ] Confirm values section (BRAND.txt marks values as [TO CONFIRM]).
- [ ] Font licence and hosting (Baskerville, Helvetica Neue). See BRAND.txt section 6.
- [ ] Hero photo (`assets/hero.jpg`, Asunción aerial, Unsplash, Anton Lukin): confirm licence/credit and that an Asunción image is the intended message (the site also covers Spain and Luxembourg).
- [ ] Add Open Graph image and a real domain/canonical URL.

- [ ] Team (now in the Contact section, Pol first, then Marina): no job titles yet (none supplied). Add them, and confirm both people agree to their photo and LinkedIn link being public.
- [ ] Floating WhatsApp button uses Graphite/Tan, not WhatsApp green, to stay on brand. Switch only if recognition matters more.

## Technical debt
- `mailto:` form (why: no backend decided). Fix: replace submit handler in `js/main.js`.

## Later
- English version (content is inline in `index.html`; add `en/` or a content layer only when needed).
- Fourth service ("servicios corporativos", fideicomisos) left out: plan marks it "por confirmar".
