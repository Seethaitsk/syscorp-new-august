const fs = require('fs');
const file = "src/app/services/website-development/graphic-design/GraphicDesignClient.tsx";
let content = fs.readFileSync(file, 'utf-8');

// Remove numbers from the faqs array
content = content.replace(/q: "(\d+)\.\s*/g, 'q: "');

// Change the structure of the FAQ to match the standard boxed UI
// I will replace the 2-column layout wrapper from:
// <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0 max-w-6xl mx-auto">
// to a single column like the others? The screenshot from Google Ads shows 2 columns, but each item is boxed!
// Wait! Google Ads is 2 columns with boxed items.
// Google ads has: <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-0">
// And inside it has: <div key={index} className="mb-4">
// And the button has: className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 ${isOpen ? "bg-[#F4F7FE] border-[#1A5CDD] shadow-sm" : "bg-white border-slate-200 hover:border-slate-300"}`}
// Let's use that structure!

content = content.replace(/className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0 max-w-6xl mx-auto"/, 'className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-0 max-w-7xl mx-auto"');

const oldItemPattern = /<div key=\{index\} className="border-b border-slate-200[^"]*">\s*<button\s*onClick=\{[^}]+\}\s*className="w-full flex items-start justify-between py-6 text-left group cursor-pointer"\s*>\s*<h3 className=\{`text-\[17px\] font-bold pr-8 transition-colors duration-300 \$\{isOpen \? 'text-\[#1A5CDD\]' : 'text-\[#011146\] group-hover:text-\[#1A5CDD\]'\}`\}>\s*\{index \+ 1\}\. \{item\.q\}\s*<\/h3>/gs;

const newItemPattern = `<div key={index} className="mb-4">
                                        <button
                                            onClick={() => setActiveAccordion(isOpen ? null : index)}
                                            className={\`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 \${isOpen ? "bg-[#F4F7FE] border-[#1A5CDD] shadow-sm" : "bg-white border-slate-200 hover:border-slate-300"}\`}
                                        >
                                            <span className="font-bold text-[#011146] text-[16px]">{index + 1}. {item.q}</span>`;

content = content.replace(oldItemPattern, newItemPattern);

// also fix the open body for both
const oldBodyPattern = /<div\s*className=\{`grid transition-all duration-300 ease-in-out \$\{isOpen \? "grid-rows-\[1fr\] opacity-100 pb-6" : "grid-rows-\[0fr\] opacity-0 pb-0"\}`\}\s*>\s*<div className="overflow-hidden">\s*<p className="text-slate-600 text-\[15px\] leading-relaxed pr-12 font-medium">\s*\{item\.a\}\s*<\/p>\s*<\/div>\s*<\/div>/gs;

const newBodyPattern = `<div className={\`overflow-hidden transition-all duration-300 \${isOpen ? "max-h-[500px] mt-2 p-6 bg-slate-50 rounded-2xl border border-slate-100" : "max-h-0"}\`}>
                                            <p className="text-slate-600 text-[14.5px] leading-relaxed">{item.a}</p>
                                        </div>`;

content = content.replace(oldBodyPattern, newBodyPattern);

fs.writeFileSync(file, content, 'utf-8');
