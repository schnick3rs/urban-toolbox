

export const moves = [
    {
        name: 'Turn to violence',
        type: 'Basic',
        source: { book: 'Urban Shadows', edition: 2, page: 74 },
        text:
            'When you _**turn to violence**_, roll with BLOOD.\n\n' +
            'On a hit, you inflict harm as established and your opposition chooses 1:\n\n' +
            '- they inflict harm on you\n' +
            '- they put you in a bad spot\n' +
            '- they create an opening to flee\n\n' +
            'On a 10++, you also choose 1:\n\n' +
            '- you inflict terrible harm\n' +
            '- you take something from them\n' +
            '- you create an opportunity for an ally'
        ,
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
    }, {
        name: 'Escape a situation',
        type: 'Basic',
        source: { book: 'Urban Shadows', edition: 2, page: 76 },
        text:
            'When you _**take advantage of an opening to escape a situation**_, roll with BLOOD.\n\n' +
            'On a hit, you get away and choose 1.\n\n' +
            'On a 7-9, the MC chooses 1 as well:\n\n' +
            '- you suffer harm during your escape\n' +
            '- you end up in another dangerous situation\n' +
            '- you leave something important behind\n' +
            '- you owe an NPC a Dept for their aid\n' +
            '- you give into your base nature and mark corruption'
        ,
    }, {
        name: 'Persuade an NPC',
        type: 'Basic',
        source: { book: 'Urban Shadows', edition: 2, page: 77 },
        text:
            'When you _**persuade an NPC with seduction, promises, or threat**_, roll with HEART.\n\n' +
            'On a hit, they see your point and do as you ask.\n\n' +
            'On a 7-9, they counter your offer or demand payment - a Dept, a favor, resources - before agreeing o follow through.\n\n' +
            'If you invoke a Dept with the NPC before you roll, add +3 to your total (max +4).'
        ,
    }, {
        name: 'Mislead, distract, and trick',
        type: 'Basic',
        source: { book: 'Urban Shadows', edition: 2, page: 78 },
        text:
            'When you try to _**mislead, distract, or trick**_ someone, roll with MIND.\n\n' +
            'On a hit, they are fooled, at least for a moment.\n\n' +
            'On a 7-9, pick 2.\n\n' +
            'On a 10+, pick 3:\n\n' +
            '- you create an opportunity\n' +
            '- you expose a weakness or flaw\n' +
            '- you confuse them for some time\n' +
            '- you avoid further entanglement'
        ,
    }, {
        name: 'Figure someone out',
        type: 'Basic',
        source: { book: 'Urban Shadows', edition: 2, page: 80 },
        text:
            'When you try to _**figure someone out**_, roll with MIND.\n\n' +
            'On a hit, ask 2.\n\n' +
            'On a 7-9, they ask 1 of you as well.\n\n' +
            'If you\'re in their circle, ask an additional question, even on a miss.\n\n' +
            '- who is pulling your character\'s strings\n' +
            '- what is your character\'s beef with _____?\n' +
            '- what si your character hoping to get from _____?\n' +
            '- what does your character worry is going to happen?\n' +
            '- how could I get your character to _____?\n' +
            '- how could I put your character in my Dept?'
        ,
    }, {
        name: 'Keep your cool',
        type: 'Basic',
        source: { book: 'Urban Shadows', edition: 2, page: 81 },
        text:
            'When things get real and you _**keep your cool**_, tell the MC the situation you want to avoid and roll with SPIRIT.\n\n' +
            'On a 10+, all is well.\n\n' +
            'On a 7-9, the MC will tell you what it is gonna cost you.'
        ,
    }, {
        name: 'Let it out',
        type: 'Basic',
        source: { book: 'Urban Shadows', edition: 2, page: 82 },
        text:
            'When you _**lot out the power within you**_, choose an ability from your playbook and roll with SPIRIT.\n\n' +
            'On a hit, mark corruption and activate the ability; the MC will tell you how the effect is costly, limited, or unstable.\n\n' +
            'On a 10+, ignore the corruption or the complications, your choice.'
        ,
        text2:
            'When you _**lot out the power within you**_, choose an ability from your playbook and roll with SPIRIT.\n\n' +
            'On a hit, you activate the ability.\n\n' +
            'On a 10+ you choose 1.\n\n' +
            'On a 7-9, both apply:\n\n' +
            '- mark corruption\n' +
            '- the effect is costly, limited, or unstable (the MC will tell you how)'
        ,
    }, {
        name: 'Lend a hand or get in the way',
        type: 'Basic',
        source: { book: 'Urban Shadows', edition: 2, page: 84 },
        text:
            'When you _**lend a hand or get in the way**_ after a PC has rolled, roll with their Circle.\n\n' +
            'On a hit, give them a +1 or -2 to their roll.\n\n' +
            'On a 7-9, you expose yourself to danger, entanglement, or cost.'
        ,
    }, {
        name: 'End of session',
        type: 'Basic',
        source: { book: 'Urban Shadows', edition: 2, page: 85 },
        text:
            'At the end of every session, decide if you’ve grown closer to a Circle you engaged with this session: ' +
            'increase your score in that Circle and decrease your score in a different Circle.\n\n' +
            'Tell the MC how your relationships to these communities have changed because of the events of the story, ' +
            'and mark one of the two Circles involved in those changes.\n\n' +
            'In addition, think about any Debts you may owe—or Debts owed to you—as a result of the session.' +
            'Tell the group and note them down for next session.'
        ,
    }, {
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
];
