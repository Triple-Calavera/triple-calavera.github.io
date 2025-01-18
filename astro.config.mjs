// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import expressiveCode from "astro-expressive-code"
import remarkMermaid from 'remark-mermaidjs'
import wikiLinkPlugin from "@portaljs/remark-wiki-link";

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [expressiveCode(), mdx(), sitemap()],
	markdown: {
		remarkPlugins: [
			remarkMermaid,
			[wikiLinkPlugin, {
				pathFormat: 'obsidian-absolute',
				wikiLinkResolver: (slug) => [slug] 
			}]
		]
	},
	redirects:{
		'/skeleton-hell-2/gdd': '/skeleton-hell-2'
	}
});
