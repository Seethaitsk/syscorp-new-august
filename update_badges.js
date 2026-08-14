const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'src/app/ai-service');

// Recursive function to get all Client.tsx files
function getFiles(dir, files = []) {
    const fileList = fs.readdirSync(dir);
    for (const file of fileList) {
        const name = path.join(dir, file);
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, files);
        } else if (name.endsWith('Client.tsx')) {
            files.push(name);
        }
    }
    return files;
}

const files = getFiles(targetDir);

let changedFiles = 0;

for (const file of files) {
    let content = fs.readFileSync(file, 'utf-8');
    let originalContent = content;

    // Regular expression to find small badges
    // We look for inline-flex/inline-block items-center rounded-full uppercase/font-semibold/font-bold
    const badgeRegex = /className="[^"]*?inline-(?:flex items-center|block)[^"]*?rounded-full[^"]*?"/g;

    content = content.replace(badgeRegex, (match) => {
        // Only target small badges
        if (!match.includes('text-xs') && !match.includes('text-[13px]') && !match.includes('text-[12px]') && !match.includes('text-[11px]')) return match;
        
        // Keep margin-bottom if it exists
        const mbMatch = match.match(/mb-\d+|mb-\[\d+px\]/);
        const mb = mbMatch ? mbMatch[0] : '';
        
        // Determine if dark mode badge
        const isDark = match.includes('bg-sky-500/10') || match.includes('bg-white/10') || match.includes('text-sky-300') || match.includes('text-[#38bdf8]') || match.includes('text-white');
        
        // Base classes
        let newClasses = `inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-sm`;
        
        if (isDark) {
            newClasses += ` bg-white/10 border border-white/20 text-white backdrop-blur-md`;
        } else {
            // Check if it's the specific green one or just use standard blue
            if (match.includes('text-green-600') || match.includes('text-emerald')) {
                newClasses += ` bg-green-50 border border-green-100 text-green-600`;
            } else {
                newClasses += ` bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 text-[#1A5CDD]`;
            }
        }
        
        if (mb) {
            newClasses += ` ${mb}`;
        }
        
        // Add justify-center if it originally had it
        if (match.includes('justify-center')) {
             newClasses = newClasses.replace('inline-flex items-center', 'inline-flex items-center justify-center');
        }

        // Some specific overrides for corner cases
        if (match.includes('w-fit')) newClasses += ' w-fit';

        return `className="${newClasses}"`;
    });

    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf-8');
        changedFiles++;
        console.log(`Updated badges in ${file}`);
    }
}

console.log(`Finished updating ${changedFiles} files.`);
