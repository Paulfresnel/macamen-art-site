import Layout from '../../components/Layout';

export default function Contact() {
  return (
    <Layout
      title="Contact Us"
      description="Get in touch with us for inquiries about our art or custom commissions."
    >
      <div className="responsive-container max-w-3xl">
        <h1>Contact Us</h1>
        <form className="space-y-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input type="text" id="name" name="name" className="input" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input type="email" id="email" name="email" className="input" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea id="message" name="message" rows={4} className="input"></textarea>
          </div>
          <div>
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
