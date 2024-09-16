import { error } from '@sveltejs/kit';
import { playbooks } from '../playbooks.js';
import { moves } from '../moves.js';

export function load({ params }) {
    const playbook = playbooks.find((playbook) => playbook.slug === params.slug);

    if (!playbook) throw error(404);

    return {
        playbook,
        moves
    };
}
