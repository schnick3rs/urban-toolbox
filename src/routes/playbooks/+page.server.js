import { playbooks } from './playbooks.js';

export function load() {
    return {
        summaries: playbooks.map((playbook) => ({
            slug: playbook.slug,
            title: playbook.title,
            gist: playbook.gist,
        }))
    };
}
