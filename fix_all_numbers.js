const fs = require('fs');

const filesToCheck = [
    "src/app/services/seo-services/google-ads/GoogleAdsClient.tsx",
    "src/app/services/website-development/erp-development/ERPDevelopmentClient.tsx",
    "src/app/services/website-development/ui-ux/UIUXClient.tsx",
    "src/app/services/website-development/crm-development/CRMDevelopmentClient.tsx",
    "src/app/services/website-development/cloud-server/CloudServerClient.tsx",
    "src/app/services/website-development/web-development/WebDevelopmentClient.tsx",
    "src/app/services/website-development/web-development/page copy.tsx",
    // Also graphic design but I already fixed the data there and the JSX
];

for (const file of filesToCheck) {
    if (!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf-8');
    
    // Remove numbers from the 'q' strings in the data arrays:
    // e.g. q: "1. What is..." -> q: "What is..."
    content = content.replace(/q:\s*"(\d+)\.\s*/g, 'q: "');
    
    // Remove any hardcoded spans for numbers that were there before
    content = content.replace(/<span[^>]*>\{idx\s*\+\s*1\}\.<\/span>/g, '');
    content = content.replace(/<span[^>]*>\{index\s*\+\s*1\}\.<\/span>/g, '');

    // Some files might have multiple "{index + 1}. " from my script or original
    // In WebDevelopmentClient.tsx:
    // <span className="text-[#1A5CDD] font-black mr-2">{index + 1}.</span>
    // {index + 1}. {faq.q}
    
    // I'll just clean up specifically for WebDevelopment and CloudServer since they had the span
    // and I added the extra string.
    
    fs.writeFileSync(file, content, 'utf-8');
}
