import { useState } from "react";
import { useForm, ValidationError} from "@formspree/react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        content: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        setSubmitStatus('');

        
        if (!formData.name.trim() || !formData.email.trim() || !formData.content.trim()) {
            setSubmitStatus('validation');
            setIsSubmitting(false);
            return;
        }

        try {
            
            const response = await fetch('https://formspree.io/f/xzzgowjr', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', content: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] py-12 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Contact
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Fill out the form below to get in touch with me!
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <div className="space-y-6">
                        
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                placeholder="Your full name"
                            />
                        </div>


                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                placeholder="your.email@example.com"
                            />
                        </div>


                        <div>
                            <label htmlFor="content" className="block text-sm font-medium text-gray-300 mb-2">
                                Message
                            </label>
                            <textarea
                                id="content"
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                required
                                rows={6}
                                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                                placeholder="Your message here..."
                            />
                        </div>


                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                        >
                            {isSubmitting ? (
                                <div className="flex items-center justify-center">
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                    Sending...
                                </div>
                            ) : (
                                'Send Message'
                            )}
                        </button>


                        {submitStatus === 'validation' && (
                            <div className="p-4 bg-yellow-900 border border-yellow-700 rounded-lg">
                                <p className="text-yellow-300 text-center">
                                    Please fill in all required fields.
                                </p>
                            </div>
                        )}

                        {submitStatus === 'success' && (
                            <div className="p-4 bg-green-900 border border-green-700 rounded-lg">
                                <p className="text-green-300 text-center">
                                    Thank you! Your message has been sent successfully.
                                </p>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="p-4 bg-red-900 border border-red-700 rounded-lg">
                                <p className="text-red-300 text-center">
                                    Sorry, there was an error sending your message. Please try again.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}