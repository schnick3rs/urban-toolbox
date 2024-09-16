export const moves = [
    {
        name: 'Hit the streets',
        type: 'circle',
        text:
            '<p>When you hit the streets to get what you need, name who you’re going to and roll with their Circle. On a hit, they’re available and have the stuff! On a 7-9, choose 1:</p>' +
            '<ul>' +
            '<li>whoever you’re going to is juggling their own problems</li>' +
            '<li>whatever you need is more costly than anticipated</li>' +
            '</ul>',
        lists: {
            result: '7-9',
            options: [
                'whoever you’re going to is juggling their own problems',
                'whatever you need is more costly than anticipated',
            ],
        },
    },
    {
        name: 'Refuse to honor a Dept',
        type: 'Dept',
        source: { book: 'Urban Shadows 2ed', page: 95 },
        trigger: 'When you _**refuse to honor a Debt**_',
        then: 'roll with the difference in Status between you and your creditor.',
        components: [
            { type: 'when', prepend: 'When you', content: '_**refuse to honor a Dept**_' },
            { type: 'roll', prepend: 'Roll with', content: 'the difference in Status between you and your creditor.'},
            { type: 'hit', content: 'On a hit, you weasel out of the obligation for now, but you still owe the Debt.'},
            { type: 'weak', content: 'On a 7-9, you owe them an additional Debt or mark corruption, your choice.' },
            { type: 'miss', content: 'On a miss, you can’t avoid the hammer, pick one:', list: [
                    'honor the Debt in full',
                    'erase all the Debts owed to you by their Circle and take a -1 ongoing to Status with their Circle until after time passes',
            ] },
        ],
        effect: 'roll with the difference in Status between you and your creditor. ' +
            'On a hit, you weasel out of the obligation for now, but you still owe the Debt. ' +
            'On a 7-9, you owe them an additional Debt or mark corruption, your choice. ' +
            'On a miss, you can’t avoid the hammer: ' +
            'either honor the Debt in full or ' +
            'erase all the Debts owed to you by their Circle and take a -1 ongoing to Status with their Circle until after time passes.',
        effecty: [
            //'When you _**refuse to honor a Debt**_ roll with the difference in Status between you and your creditor.',
            'On a hit, you weasel out of the obligation for now, but you still owe the Debt.',
            'On a 7-9, you owe them an additional Debt or mark corruption, your choice.',
            'On a miss, you can’t avoid the hammer, pick one:',
            [
                'honor the Debt in full',
                'erase all the Debts owed to you by their Circle and take a -1 ongoing to Status with their Circle until after time passes',
            ],
        ],
    },
    {
        name: 'Turn to violence',
        type: 'Basic',
        source: { book: 'Urban Shadows 2ed', page: 95 },
        components: [
            {type: 'when', prepend: 'When you', content: 'turn to violence'},
            {type: 'roll', prepend: 'Roll with', content: 'Blood'},
            {
                type: 'hit',
                content: 'On a hit, you inflict harm as established and your opposition chooses 1',
                list: [
                    'they inflict harm on you',
                    'they put you in a bad spot',
                    'they create an opening to flee',
                ],
            },
            {
                type: 'strong',
                content: 'On a 10+, you also choose 1',
                list: [
                    'you inflict terrible harm',
                    'you take something from them',
                    'you create an opportunity for an ally',
                ],
            },
        ],
    }
];
