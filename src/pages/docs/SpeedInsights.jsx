import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, Copy, Check } from 'lucide-react';

const SpeedInsights = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const frameworks = [
    'nextjs',
    'nextjs-app',
    'sveltekit',
    'remix',
    'create-react-app',
    'nuxt',
    'vue',
    'other',
    'astro',
    'html'
  ];

  const [selectedFramework, setSelectedFramework] = useState('nextjs');

  const CodeBlock = ({ code, id, language = 'bash' }) => {
    return (
      <div className="relative bg-gray-950 rounded-lg p-4 my-4 border border-gray-800">
        <button
          onClick={() => copyToClipboard(code, id)}
          className="absolute top-3 right-3 p-2 bg-gray-800 hover:bg-gray-700 rounded transition-colors"
          title="Copy code"
        >
          {copiedCode === id ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-gray-400" />
          )}
        </button>
        <pre className="text-sm text-gray-300 overflow-x-auto pr-8">
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    );
  };

  const FrameworkSection = ({ framework, content }) => {
    if (selectedFramework !== framework) return null;
    return <div className="animate-fadeIn">{content}</div>;
  };

  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute -bottom-[10%] -left-[5%] w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30, filter: 'blur(5px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-12 max-w-4xl"
        >
          <h2 className="text-sm font-bold text-purple-400 tracking-[0.2em] uppercase mb-2">Documentation</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Getting started with <span className="text-purple-400">Speed Insights</span>
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            This guide will help you get started with using Vercel Speed Insights on your project, showing you how to enable it, add the package to your project, deploy your app to Vercel, and view your data in the dashboard.
          </p>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-8">
            <p className="text-blue-300 text-sm">
              💡 <strong>Note:</strong> To view instructions on using the Vercel Speed Insights in your project for your framework, use the <strong>Choose a framework</strong> dropdown below.
            </p>
          </div>
        </motion.div>

        {/* Prerequisites Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Prerequisites</h2>
          <div className="space-y-4">
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">A Vercel account</h3>
              <p className="text-gray-300">
                If you don't have one, you can{' '}
                <a href="https://vercel.com/signup" className="text-blue-400 hover:text-blue-300 underline">
                  sign up for free
                </a>
                .
              </p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">A Vercel project</h3>
              <p className="text-gray-300">
                If you don't have one, you can{' '}
                <a href="https://vercel.com/new" className="text-blue-400 hover:text-blue-300 underline">
                  create a new project
                </a>
                .
              </p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">The Vercel CLI installed</h3>
              <p className="text-gray-300 mb-4">If you don't have it, you can install it using the following command:</p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-400 mb-2">Using pnpm:</p>
                  <CodeBlock code="pnpm i vercel" id="cli-pnpm" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">Using yarn:</p>
                  <CodeBlock code="yarn i vercel" id="cli-yarn" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">Using npm:</p>
                  <CodeBlock code="npm i vercel" id="cli-npm" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">Using bun:</p>
                  <CodeBlock code="bun i vercel" id="cli-bun" />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Setup Steps */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Setup Steps</h2>

          {/* Step 1 */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-purple-400">1.</span> Enable Speed Insights in Vercel
            </h3>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-4">
                On the{' '}
                <a href="/dashboard" className="text-blue-400 hover:text-blue-300 underline">
                  Vercel dashboard
                </a>
                , select your Project followed by the <strong>Speed Insights</strong> tab. Then, select <strong>Enable</strong> from the dialog.
              </p>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <p className="text-blue-300 text-sm">
                  💡 <strong>Note:</strong> Enabling Speed Insights will add new routes (scoped at `/_vercel/speed-insights/*`) after your next deployment.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-purple-400">2.</span> Add @vercel/speed-insights to your project
            </h3>
            <div className="space-y-3">
              <p className="text-gray-300">Using the package manager of your choice, add the `@vercel/speed-insights` package to your project:</p>
              <CodeBlock code="pnpm i @vercel/speed-insights" id="install-pnpm" />
              <CodeBlock code="yarn i @vercel/speed-insights" id="install-yarn" />
              <CodeBlock code="npm i @vercel/speed-insights" id="install-npm" />
              <CodeBlock code="bun i @vercel/speed-insights" id="install-bun" />
            </div>
          </div>

          {/* Step 3 */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">
              <span className="text-purple-400">3.</span> Add the SpeedInsights component to your app
            </h3>

            {/* Framework Selector */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-white mb-3">Choose your framework:</label>
              <div className="relative inline-block">
                <select
                  value={selectedFramework}
                  onChange={(e) => setSelectedFramework(e.target.value)}
                  className="appearance-none bg-gray-900 border border-gray-800 text-white px-4 py-3 pr-10 rounded-lg hover:border-purple-500 focus:outline-none focus:border-purple-500 cursor-pointer"
                >
                  {frameworks.map((fw) => (
                    <option key={fw} value={fw}>
                      {fw === 'nextjs' ? 'Next.js (13.4+)' : fw === 'nextjs-app' ? 'Next.js (App Router)' : fw === 'create-react-app' ? 'Create React App' : fw.charAt(0).toUpperCase() + fw.slice(1)}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-gray-500 pointer-events-none" />
              </div>
            </div>

            {/* Next.js 13.4+ */}
            <FrameworkSection
              framework="nextjs"
              title="Next.js"
              content={
                <div>
                  <p className="text-gray-300 mb-4">The `SpeedInsights` component is a wrapper around the tracking script, offering more seamless integration with Next.js.</p>
                  <p className="text-gray-300 mb-4">Add the following component to your main app file:</p>
                  <p className="text-sm text-gray-400 mb-2">TypeScript:</p>
                  <CodeBlock
                    code={`import type { AppProps } from 'next/app';
import { SpeedInsights } from '@vercel/speed-insights/next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}

export default MyApp;`}
                    id="nextjs-ts"
                    language="typescript"
                  />
                  <p className="text-sm text-gray-400 mb-2">JavaScript:</p>
                  <CodeBlock
                    code={`import { SpeedInsights } from "@vercel/speed-insights/next";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}

export default MyApp;`}
                    id="nextjs-js"
                    language="javascript"
                  />
                </div>
              }
            />

            {/* Next.js App Router */}
            <FrameworkSection
              framework="nextjs-app"
              title="Next.js (App Router)"
              content={
                <div>
                  <p className="text-gray-300 mb-4">The `SpeedInsights` component is a wrapper around the tracking script, offering more seamless integration with Next.js.</p>
                  <p className="text-gray-300 mb-4">Add the following component to the root layout:</p>
                  <p className="text-sm text-gray-400 mb-2">TypeScript:</p>
                  <CodeBlock
                    code={`import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}`}
                    id="nextjs-app-ts"
                    language="typescript"
                  />
                  <p className="text-sm text-gray-400 mb-2">JavaScript:</p>
                  <CodeBlock
                    code={`import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}`}
                    id="nextjs-app-js"
                    language="javascript"
                  />
                </div>
              }
            />

            {/* React/CRA */}
            <FrameworkSection
              framework="create-react-app"
              title="Create React App"
              content={
                <div>
                  <p className="text-gray-300 mb-4">The `SpeedInsights` component is a wrapper around the tracking script, offering more seamless integration with React.</p>
                  <p className="text-gray-300 mb-4">Add the following component to the main app file:</p>
                  <p className="text-sm text-gray-400 mb-2">TypeScript:</p>
                  <CodeBlock
                    code={`import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App() {
  return (
    <div>
      {/* ... */}
      <SpeedInsights />
    </div>
  );
}`}
                    id="cra-ts"
                    language="typescript"
                  />
                  <p className="text-sm text-gray-400 mb-2">JavaScript:</p>
                  <CodeBlock
                    code={`import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
  return (
    <div>
      {/* ... */}
      <SpeedInsights />
    </div>
  );
}`}
                    id="cra-js"
                    language="javascript"
                  />
                </div>
              }
            />

            {/* Remix */}
            <FrameworkSection
              framework="remix"
              title="Remix"
              content={
                <div>
                  <p className="text-gray-300 mb-4">The `SpeedInsights` component is a wrapper around the tracking script, offering a seamless integration with Remix.</p>
                  <p className="text-gray-300 mb-4">Add the following component to your root file:</p>
                  <p className="text-sm text-gray-400 mb-2">TypeScript:</p>
                  <CodeBlock
                    code={`import { SpeedInsights } from '@vercel/speed-insights/remix';

export default function App() {
  return (
    <html lang="en">
      <body>
        {/* ... */}
        <SpeedInsights />
      </body>
    </html>
  );
}`}
                    id="remix-ts"
                    language="typescript"
                  />
                  <p className="text-sm text-gray-400 mb-2">JavaScript:</p>
                  <CodeBlock
                    code={`import { SpeedInsights } from "@vercel/speed-insights/remix";

export default function App() {
  return (
    <html lang="en">
      <body>
        {/* ... */}
        <SpeedInsights />
      </body>
    </html>
  );
}`}
                    id="remix-js"
                    language="javascript"
                  />
                </div>
              }
            />

            {/* Svelte Kit */}
            <FrameworkSection
              framework="sveltekit"
              title="SvelteKit"
              content={
                <div>
                  <p className="text-gray-300 mb-4">Add the following component to your root file:</p>
                  <p className="text-sm text-gray-400 mb-2">TypeScript:</p>
                  <CodeBlock
                    code={`import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

injectSpeedInsights();`}
                    id="sveltekit-ts"
                    language="typescript"
                  />
                  <p className="text-sm text-gray-400 mb-2">JavaScript:</p>
                  <CodeBlock
                    code={`import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

injectSpeedInsights();`}
                    id="sveltekit-js"
                    language="javascript"
                  />
                </div>
              }
            />

            {/* Vue */}
            <FrameworkSection
              framework="vue"
              title="Vue"
              content={
                <div>
                  <p className="text-gray-300 mb-4">The `SpeedInsights` component is a wrapper around the tracking script, offering more seamless integration with Vue.</p>
                  <p className="text-gray-300 mb-4">Add the following component to the main app template:</p>
                  <p className="text-sm text-gray-400 mb-2">TypeScript:</p>
                  <CodeBlock
                    code={`<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<template>
  <SpeedInsights />
</template>`}
                    id="vue-ts"
                    language="typescript"
                  />
                  <p className="text-sm text-gray-400 mb-2">JavaScript:</p>
                  <CodeBlock
                    code={`<script setup>
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<template>
  <SpeedInsights />
</template>`}
                    id="vue-js"
                    language="javascript"
                  />
                </div>
              }
            />

            {/* Nuxt */}
            <FrameworkSection
              framework="nuxt"
              title="Nuxt"
              content={
                <div>
                  <p className="text-gray-300 mb-4">The `SpeedInsights` component is a wrapper around the tracking script, offering more seamless integration with Nuxt.</p>
                  <p className="text-gray-300 mb-4">Add the following component to the default layout:</p>
                  <p className="text-sm text-gray-400 mb-2">TypeScript:</p>
                  <CodeBlock
                    code={`<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<template>
  <SpeedInsights />
</template>`}
                    id="nuxt-ts"
                    language="typescript"
                  />
                  <p className="text-sm text-gray-400 mb-2">JavaScript:</p>
                  <CodeBlock
                    code={`<script setup>
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<template>
  <SpeedInsights />
</template>`}
                    id="nuxt-js"
                    language="javascript"
                  />
                </div>
              }
            />

            {/* Other Frameworks */}
            <FrameworkSection
              framework="other"
              title="Other Frameworks"
              content={
                <div>
                  <p className="text-gray-300 mb-4">Import the `injectSpeedInsights` function from the package, which will add the tracking script to your app. <strong>This should only be called once in your app, and must run in the client</strong>.</p>
                  <p className="text-gray-300 mb-4">Add the following code to your main app file:</p>
                  <p className="text-sm text-gray-400 mb-2">TypeScript:</p>
                  <CodeBlock
                    code={`import { injectSpeedInsights } from "@vercel/speed-insights";

injectSpeedInsights();`}
                    id="other-ts"
                    language="typescript"
                  />
                  <p className="text-sm text-gray-400 mb-2">JavaScript:</p>
                  <CodeBlock
                    code={`import { injectSpeedInsights } from "@vercel/speed-insights";

injectSpeedInsights();`}
                    id="other-js"
                    language="javascript"
                  />
                </div>
              }
            />

            {/* Astro */}
            <FrameworkSection
              framework="astro"
              title="Astro"
              content={
                <div>
                  <p className="text-gray-300 mb-4">Speed Insights is available for both static and SSR Astro apps.</p>
                  <p className="text-gray-300 mb-4">To enable this feature, declare the `&lt;SpeedInsights /&gt;` component from `@vercel/speed-insights/astro` near the bottom of one of your layout components, such as `BaseHead.astro`:</p>
                  <p className="text-sm text-gray-400 mb-2">TypeScript:</p>
                  <CodeBlock
                    code={`---
import SpeedInsights from '@vercel/speed-insights/astro';
const { title, description } = Astro.props;
---
<title>{title}</title>
<meta name="title" content={title} />
<meta name="description" content={description} />

<SpeedInsights />`}
                    id="astro-ts"
                    language="typescript"
                  />
                  <p className="text-gray-300 mt-6 mb-4">Optionally, you can remove sensitive information from the URL by adding a `speedInsightsBeforeSend` function:</p>
                  <CodeBlock
                    code={`---
import SpeedInsights from '@vercel/speed-insights/astro';
const { title, description } = Astro.props;
---
<title>{title}</title>
<meta name="title" content={title} />
<meta name="description" content={description} />

<script is:inline>
  function speedInsightsBeforeSend(data){
    console.log("Speed Insights before send", data)
    return data;
  }
</script>
<SpeedInsights />`}
                    id="astro-beforesend"
                    language="typescript"
                  />
                </div>
              }
            />

            {/* HTML */}
            <FrameworkSection
              framework="html"
              title="HTML"
              content={
                <div>
                  <p className="text-gray-300 mb-4">Add the following scripts before the closing tag of the `&lt;body&gt;`:</p>
                  <CodeBlock
                    code={`<script>
  window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
</script>
<script defer src="/_vercel/speed-insights/script.js"></script>`}
                    id="html-script"
                    language="html"
                  />
                </div>
              }
            />
          </div>
        </motion.section>

        {/* Step 4 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            <span className="text-purple-400">4.</span> Deploy your app to Vercel
          </h3>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 space-y-4">
            <p className="text-gray-300">You can deploy your app to Vercel's global CDN by running the following command from your terminal:</p>
            <CodeBlock code="vercel deploy" id="deploy" />
            <p className="text-gray-300">Alternatively, you can connect your project's git repository, which will enable Vercel to deploy your latest pushes and merges to main.</p>
            <p className="text-gray-300">Once your app is deployed, it's ready to begin tracking performance metrics.</p>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
              <p className="text-blue-300 text-sm">
                💡 <strong>Note:</strong> If everything is set up correctly, you should be able to find the `/_vercel/speed-insights/script.js` script inside the body tag of your page.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Step 5 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            <span className="text-purple-400">5.</span> View your data in the dashboard
          </h3>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 space-y-4">
            <p className="text-gray-300">Once your app is deployed, and users have visited your site, you can view the data in the dashboard.</p>
            <p className="text-gray-300">To do so, go to your dashboard, select your project, and click the <strong>Speed Insights</strong> tab.</p>
            <p className="text-gray-300">After a few days of visitors, you'll be able to start exploring your metrics. For more information on how to use Speed Insights, see the documentation.</p>
          </div>
        </motion.section>

        {/* Next Steps */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Next steps</h2>
          <p className="text-gray-300 mb-6">Now that you have Vercel Speed Insights set up, you can explore the following topics to learn more:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-purple-500/50 transition-colors">
              <h4 className="font-semibold text-white mb-2">Learn the `@vercel/speed-insights` package</h4>
              <p className="text-gray-400 text-sm">Explore all the features and configurations available in the package.</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-purple-500/50 transition-colors">
              <h4 className="font-semibold text-white mb-2">Learn about metrics</h4>
              <p className="text-gray-400 text-sm">Understand what metrics Speed Insights tracks and how to interpret them.</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-purple-500/50 transition-colors">
              <h4 className="font-semibold text-white mb-2">Privacy and compliance</h4>
              <p className="text-gray-400 text-sm">Read about Vercel's privacy and data compliance standards.</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-purple-500/50 transition-colors">
              <h4 className="font-semibold text-white mb-2">Pricing and limits</h4>
              <p className="text-gray-400 text-sm">Explore pricing options and understand usage limits.</p>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default SpeedInsights;
