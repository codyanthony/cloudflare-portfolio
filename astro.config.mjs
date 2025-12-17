// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server", // Enable SSR for Cloudflare Pages Functions
  adapter: cloudflare(),

  integrations: [
    starlight({
      title: "Cody Anthony",
      description:
        "Senior Technical Writer specializing in cloud infrastructure and developer tools. Portfolio includes API documentation, architecture guides, console UX, and scalable documentation systems.",
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:title",
            content: "Cody Anthony — Senior Technical Writer",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:description",
            content:
              "Senior Technical Writer specializing in cloud infrastructure and developer tools. API documentation, architecture guides, console UX, and documentation systems.",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:type",
            content: "website",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:url",
            content: "https://codyanthony.dev/",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://cloudflare-portfolio-1tl.pages.dev/og.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:card",
            content: "summary_large_image",
          },
        },
      ],
      social: [
        {
          icon: "linkedin",
          label: "LinkedIn",
          href: "https://linkedin.com/in/codyanthony",
        },
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/codyanthony",
        },
        {
          icon: "email",
          label: "Email",
          href: "mailto:codyjanthony@gmail.com",
        },
      ],

      customCss: ["./src/styles/custom.css"],

      sidebar: [
        { label: "Home", link: "/" },
        { label: "About", link: "/about/" },
        {
          label: "API Documentation",
          items: [
            {
              label: "EVS CreateEnvironment API",
              link: "/api-documentation/evs-createenvironment/",
            },
          ],
        },
        {
          label: "Architecture & Deployment Guides",
          items: [
            {
              label: "EVS Network Architecture & Getting Started",
              link: "/architecture-guides/evs-getting-started/",
            },
          ],
        },
        {
          label: "Console UX & Developer Experience",
          items: [
            {
              label: "Console & API Design",
              link: "/console-ux/console-api-design/",
            },
          ],
        },
        {
          label: "Documentation Systems & Strategy",
          items: [
            {
              label: "AsciiDoc Modernization Program",
              link: "/systems-strategy/",
            },
            {
              label: "ROSA Jobs-to-be-Done Content Redesign",
              link: "/systems-strategy/rosa-jtbd-redesign/",
            },
          ],
        },
        { label: "About This Site", link: "/colophon/" },
        { label: "Contact", link: "/contact/" },
      ],

      components: {
        Footer: "./src/components/Footer.astro",
      },
    }),
    react(),
  ],
});
