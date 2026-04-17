import * as icons from 'lucide-react';
const keys = Object.keys(icons);
console.log('Mail check:', keys.find(k => k.toLowerCase() === 'mail'));
console.log('Linkedin check:', keys.find(k => k.toLowerCase() === 'linkedin'));
console.log('Twitter check:', keys.find(k => k.toLowerCase() === 'twitter'));
