const fs = require('fs');

const filesToFix = [
    { file: "src/app/services/seo-services/google-ads/GoogleAdsClient.tsx", search: /\{item\.q\}/g, replace: "{index + 1}. {item.q}" },
    { file: "src/app/services/website-development/erp-development/ERPDevelopmentClient.tsx", search: /\{faq\.q\}/g, replace: "{index + 1}. {faq.q}" },
    { file: "src/app/services/website-development/graphic-design/GraphicDesignClient.tsx", search: /\{item\.q\}/g, replace: "{index + 1}. {item.q}" },
    { file: "src/app/services/website-development/ui-ux/UIUXClient.tsx", search: /\{faq\.q\}/g, replace: "{idx + 1}. {faq.q}" },
    { file: "src/app/services/website-development/crm-development/CRMDevelopmentClient.tsx", search: /\{faq\.q\}/g, replace: "{idx + 1}. {faq.q}" },
    { file: "src/app/services/website-development/cloud-server/CloudServerClient.tsx", search: /\{faq\.q\.replace\(\/\^\\d\+\\\.\\s\*\/\,\s*""\)\}/g, replace: "{index + 1}. {faq.q}" },
    { file: "src/app/services/website-development/web-development/WebDevelopmentClient.tsx", search: /\{faq\.q\.replace\(\/\^\\d\+\\\.\\s\*\/\,\s*''\)\}/g, replace: "{index + 1}. {faq.q}" },
    { file: "src/app/services/website-development/web-development/page copy.tsx", search: /\{faq\.q\.replace\(\/\^\\d\+\\\.\\s\*\/\,\s*''\)\}/g, replace: "{index + 1}. {faq.q}" }
];

for (const task of filesToFix) {
    if (!fs.existsSync(task.file)) continue;
    let content = fs.readFileSync(task.file, 'utf-8');
    content = content.replace(task.search, task.replace);
    fs.writeFileSync(task.file, content, 'utf-8');
}
