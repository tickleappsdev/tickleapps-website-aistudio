/**
 * TickleApps Contact Form Handler
 * Powered by EmailJS
 */

// --- CONFIGURATION ---
// Replace these with your real EmailJS credentials
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'YOUR_EMAILJS_PUBLIC_KEY',
    SERVICE_ID: 'YOUR_EMAILJS_SERVICE_ID',
    TEMPLATE_ID: 'YOUR_EMAILJS_TEMPLATE_ID',
};

// --- SPAM PREVENTION ---
const MIN_FILL_MS = 2500; // Browsers usually take longer than bots
const startTime = Date.now();

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('tickleContactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // 1. Validation & Spam Checks
        const botCheck = document.getElementById('website_url').value;
        if (botCheck) {
            console.warn('Bot detected (honeypot filled).');
            return;
        }

        const timeTaken = Date.now() - startTime;
        if (timeTaken < MIN_FILL_MS) {
            console.warn('Submission too fast. Potential bot.');
            return;
        }

        // 2. UI State: Loading
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const btnText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';

        // 3. Prepare Payload
        const formData = new FormData(contactForm);
        const templateParams = {
            from_name: formData.get('userName'),
            from_email: formData.get('userEmail'),
            subject: formData.get('userSubject'),
            company: formData.get('userCompany') || 'N/A',
            phone: formData.get('userPhone') || 'N/A',
            message: formData.get('userMessage'),
        };

        try {
            // 4. Send via EmailJS
            if (EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_EMAILJS_PUBLIC_KEY') {
                throw new Error('EmailJS not configured. Please see README.md');
            }

            await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                templateParams,
                EMAILJS_CONFIG.PUBLIC_KEY
            );

            // 5. Success UI
            showFormStatus('success', 'Message sent successfully! We will get back to you soon.');
            contactForm.reset();
        } catch (error) {
            console.error('EmailJS Error:', error);
            showFormStatus('error', 'Failed to send message. Please try again or email support@tickleapps.com directly.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = btnText;
        }
    });

    function showFormStatus(type, message) {
        const statusDiv = document.getElementById('formStatus');
        if (!statusDiv) return;
        
        statusDiv.className = `alert alert-${type === 'success' ? 'success' : 'danger'} mt-3`;
        statusDiv.textContent = message;
        statusDiv.classList.remove('d-none');
        
        // Auto-hide success message after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                statusDiv.classList.add('d-none');
            }, 5000);
        }
    }
});
