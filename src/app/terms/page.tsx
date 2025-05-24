// app/terms/page.tsx
export default function TermsOfService() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-indigo-700">Terms and Conditions</h1>
      <p className="mb-4">Last updated: May 21, 2025</p>

      <p className="mb-4">
        Welcome to <strong>AI Fintech Blog</strong>. By using our website, you agree to these terms. Please read them carefully.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Intellectual Property</h2>
      <p className="mb-4">All content is owned by AI Fintech Blog. You may not copy, reproduce, or use it without permission.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">User Responsibilities</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Do not use the site for illegal purposes.</li>
        <li>Do not attempt to disrupt or exploit our systems.</li>
        <li>Respect all intellectual property rights.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">External Links</h2>
      <p className="mb-4">We may link to other websites. We are not responsible for their content or policies.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Limitation of Liability</h2>
      <p className="mb-4">While we strive to provide accurate content, we do not guarantee completeness or accuracy. Use at your own risk.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Changes to Terms</h2>
      <p className="mb-4">We may update these terms at any time. Continued use of the site means you accept the changes.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Governing Law</h2>
      <p className="mb-4">These terms are governed by the laws of your country of residence.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Contact Us</h2>
      <p>If you have any questions, email us at <a href="mailto:contact@yourdomain.com" className="text-indigo-600 underline">contact@yourdomain.com</a>.</p>
    </main>
  );
}
