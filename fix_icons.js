const fs = require('fs');

const files = [
    "src/app/services-1/seo-services/page.tsx",
    "src/app/services-1/website-development/page.tsx",
    "src/app/services/seo-services/content-marketing/ContentMarketingClient.tsx",
    "src/app/services/seo-services/email-marketing/EmailMarketingClient.tsx",
    "src/app/services/seo-services/google-ads/GoogleAdsClient.tsx",
    "src/app/services/seo-services/meta-ads/MetaAdsClient.tsx",
    "src/app/services/seo-services/seo/SEOClient.tsx",
    "src/app/services/seo-services/Social-Media/SocialMediaClient.tsx",
    "src/app/services/website-development/cloud-server/CloudServerClient.tsx",
    "src/app/services/website-development/crm-development/CRMDevelopmentClient.tsx",
    "src/app/services/website-development/erp-development/ERPDevelopmentClient.tsx",
    "src/app/services/website-development/graphic-design/GraphicDesignClient.tsx",
    "src/app/services/website-development/ui-ux/UIUXClient.tsx",
    "src/app/services/website-development/web-development/page copy.tsx",
    "src/app/services/website-development/web-development/WebDevelopmentClient.tsx"
];

for (const file of files) {
    if (!fs.existsSync(file)) continue;
    
    let content = fs.readFileSync(file, 'utf-8');
    
    // Pattern 1: SVG paths
    // Look for: <span className={`...`}> {isOpen ? <svg...> : <svg...>} </span>
    // Note: the classNames might be on a <span> or <div>, and the condition might be isOpen, activeFaq === index, etc.
    const svgPattern = /<(span|div)[^>]*className=\{`[^`]*rounded-full[^`]*`\}[^>]*>\s*\{\s*([a-zA-Z0-9_=\s]+)\s*\?\s*\(\s*<svg[^>]*>.*?<\/svg>\s*\)\s*:\s*\(\s*<svg[^>]*>.*?<\/svg>\s*\)\s*\}\s*<\/\1>/gs;
    content = content.replace(svgPattern, (match, tag, condition) => {
        return `<div className="flex-shrink-0 ml-4">\n    <svg className={\`w-5 h-5 transition-transform duration-300 \${${condition.trim()} ? "text-[#1A5CDD] rotate-180" : "text-slate-400 group-hover:text-[#1A5CDD] rotate-0"}\`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">\n        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />\n    </svg>\n</div>`;
    });

    // Pattern 2: Lucide Plus/Minus components
    const lucidePattern = /<(span|div)[^>]*className=\{`[^`]*rounded-full[^`]*`\}[^>]*>\s*\{\s*([a-zA-Z0-9_=\s]+)\s*\?\s*\(\s*<Minus[^>]*>\s*\)\s*:\s*\(\s*<Plus[^>]*>\s*\)\s*\}\s*<\/\1>/gs;
    content = content.replace(lucidePattern, (match, tag, condition) => {
        return `<div className="flex-shrink-0 ml-4">\n    <svg className={\`w-5 h-5 transition-transform duration-300 \${${condition.trim()} ? "text-[#1A5CDD] rotate-180" : "text-slate-400 group-hover:text-[#1A5CDD] rotate-0"}\`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">\n        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />\n    </svg>\n</div>`;
    });

    // Pattern 3: Lucide without parentheses (like in CRMDevelopmentClient.tsx)
    const lucideNoParensPattern = /<(span|div)[^>]*className=\{`[^`]*rounded-full[^`]*`\}[^>]*>\s*\{\s*([a-zA-Z0-9_=\s]+)\s*\?\s*<Minus[^>]*>\s*:\s*<Plus[^>]*>\s*\}\s*<\/\1>/gs;
    content = content.replace(lucideNoParensPattern, (match, tag, condition) => {
        return `<div className="flex-shrink-0 ml-4">\n    <svg className={\`w-5 h-5 transition-transform duration-300 \${${condition.trim()} ? "text-[#1A5CDD] rotate-180" : "text-slate-400 group-hover:text-[#1A5CDD] rotate-0"}\`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">\n        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />\n    </svg>\n</div>`;
    });

    // Pattern 4: some are rounded-[10px] instead of rounded-full!
    const rounded10Pattern = /<(span|div)[^>]*className=\{`[^`]*rounded-\[10px\][^`]*`\}[^>]*>\s*\{\s*([a-zA-Z0-9_=\s]+)\s*\?\s*\(\s*<svg[^>]*>.*?<\/svg>\s*\)\s*:\s*\(\s*<svg[^>]*>.*?<\/svg>\s*\)\s*\}\s*<\/\1>/gs;
    content = content.replace(rounded10Pattern, (match, tag, condition) => {
        return `<div className="flex-shrink-0 ml-4">\n    <svg className={\`w-5 h-5 transition-transform duration-300 \${${condition.trim()} ? "text-[#1A5CDD] rotate-180" : "text-slate-400 group-hover:text-[#1A5CDD] rotate-0"}\`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">\n        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />\n    </svg>\n</div>`;
    });
    
    fs.writeFileSync(file, content, 'utf-8');
}
