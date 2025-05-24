// app/privacy/page.tsx
export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-indigo-700">Privacy Policy</h1>
      <p className="mb-4">Last updated: May 21, 2025</p>

      <p className="mb-4">
        At <strong>AI Fintech Blog</strong>, accessible from <a href="https://yourdomain.com" className="text-indigo-600 underline">https://yourdomain.com</a>,
        your privacy is one of our top priorities. This Privacy Policy explains how we collect, use, and safeguard your information.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Information We Collect</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Personal Information:</strong> Name and email if you subscribe or comment.</li>
        <li><strong>Usage Data:</strong> Pages visited, browser info, and usage behavior.</li>
        <li><strong>Cookies:</strong> For analytics and improving your experience.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-4">
        <li>To operate and maintain the website.</li>
        <li>To personalize your experience.</li>
        <li>To send newsletters (only if subscribed).</li>
        <li>To analyze site usage and detect fraud.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Third-Party Services</h2>
      <p className="mb-4">We use trusted third-party services like Google Analytics to understand usage. They may collect data in accordance with their own policies.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Your Rights</h2>
      <p className="mb-4">You may request to access, correct, or delete your data. Contact us to make a request.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Contact</h2>
      <p>If you have any questions, contact us at <a href="mailto:contact@yourdomain.com" className="text-indigo-600 underline">contact@yourdomain.com</a>.</p>
    </main>
  );
}
