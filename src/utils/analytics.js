/**
 * Sends an event to Google Analytics.
 * @param {string} action - The value that will appear as the event action (e.g., 'submit', 'click').
 * @param {string} category - The category for the event (e.g., 'Contact', 'Engagement').
 * @param {string} label - The label for the event (e.g., 'Phone Link', 'Quote Button').
 * @param {object} [value] - Optional value or additional parameters.
 */
export const trackEvent = (action, category, label, value = null) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    } else {
        console.log('Extensions Analytics Event (Dev Mode):', { action, category, label, value });
    }
};
