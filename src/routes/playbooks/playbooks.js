export const playbooks = [
    {
        slug: 'the-aware',
        title: 'The Aware',
        circle: 'Mortalis',
        gist: 'Inquisitive and clever, the Aware is a mortal investigator who has seen the truth of the city’s supernatural streets.',
        description:
            '<p>Inquisitive, resourceful, naive, lucky. The Aware is a mortal investigator who has come to see the truth of the supernatural world. They know humanity isn’t alone in the city...and they’re enthralled by the shadows.</p>' +
            '<p>Play the Aware if you want to dig up the city’s secrets…and build messy relationships with the supernatural creatures you meet along the way.</p>',
        presentations: [
            {
                type: 'Name',
                picks: 1,
                options: ['Alisa', 'Anthony', 'Cam', 'Cleo', 'Cole', 'Datu', 'Devon', 'Galina', 'Hairi', 'Hans', 'Julius', 'Kim', 'Kirsten', 'Laasya', 'Lara', 'Miguel', 'Philip', 'Rashid', 'Veronica'],
            },
            {
                type: 'Look',
                picks: 'any',
                options: [
                    ['androgynous', 'conforming', 'shifting', 'nonconforming'],
                    ['Asian','South Asian', 'Black', 'Hispanic', 'Latinx', 'Indigenous', 'Middle Eastern', 'White', '___'],
                    ['brand name clothing', 'business casual', 'forgettable clothing', 'uniformed'],
                ],
            },
            {
                type: 'Demeanor',
                picks: 1,
                options: ['aggressive', 'charming', 'composed', 'paranoid'],
            },
        ],
        moves: [
            {
                name: 'I know a guy',
                text:
                    '<p>When you {hit the streets} to get what you need {from a member of your Circle}, roll with @Heart instead of their Circle. On a 7-9, add this option to the list:</p>' +
                    '<ul><li>however you find them requires you to offer a Debt to an intermediary</li></ul>',
                mods: [
                    {
                        type: 'modify-circle-move',
                        target: 'hit the streets',
                        condition: 'to get what you need from a member of your Circle',
                        substitute: 'heart',
                        add: {
                            result: '7-9',
                            option: 'however you find them requires you to offer a Debt to an intermediary',
                        }
                    }
                ],
            },
        ],
    },
    {
        slug: 'the-fae',
        title: 'The Fae',
        circle: 'Wild',
        gist: 'Fickle and enigmatic, the Fae is a creature from a distant faerie homeland who values promises and oaths above all else.',
        description:
            '<p></p>',
    },
    {
        slug: 'the-hunter',
        title: 'The Hunter',
        circle: 'Mortalis',
        gist: 'Determined and deadly, the Hunter is a mortal who has joined a secret order to “protect” humanity from the monsters.',
        description:
            '<p></p>',
    },
    {
        slug: 'the-imp',
        title: 'The Imp',
        circle: 'Wild',
        gist: 'Driven and scheming, the Imp owns an establishment in the city that caters to supernatural clientele.',
        description:
            '<p></p>',
    },
    {
        slug: 'the-oracle',
        title: 'The Oracle',
        circle: 'Power',
        gist: 'Prophetic and cursed, the Oracle is a seer whose benefactor protects them in exchange for the use of their psychic powers.',
        description:
            '<p></p>',
    },
    {
        slug: 'the-spectre',
        title: 'The Spectre',
        circle: 'Night',
        gist: 'Shattered and alone, the Spectre is a ghost who is anchored to this world, searching for meaning in life after death.',
        description:
            '<p></p>',
    },
    {
        slug: 'the-sworn',
        title: 'The Sworn',
        circle: 'Power',
        gist: 'Loyal and capable, the Sworn has taken a sacred oath to serve an influential faction within Power.',
        description:
            '<p></p>',
    },
    {
        slug: 'the-tainted',
        title: 'The Tainted',
        circle: 'Wild',
        gist: 'Brutal and manipulative, the Tainted is a foolish mortal who sold their soul to the dark patron they must now serve.',
        description:
            '<p></p>',
    },
    {
        slug: 'the-vamp',
        title: 'The Vamp',
        circle: 'Night',
        gist: 'Seductive and merciless, the Vamp is a creature that must feed on humanity to survive from night-to-night.',
        description:
            '<p></p>',
    },
    {
        slug: 'the-veteran',
        title: 'The Vamp',
        circle: 'Mortalis',
        gist: 'Experienced and clever, the Veteran was retired...until something dragged them back into the city’s deadly politics.',
        description:
            '<p></p>',
    },
    {
        slug: 'the-wizard',
        title: 'The Wizard',
        circle: 'Power',
        gist: 'Potent and skilled, the Wizard can channel intense magics in the service of their obligations...and their ambition.',
        description:
            '<p></p>',
    },
    {
        slug: 'the-wolf',
        title: 'The Wolf',
        circle: 'Night',
        gist: 'Primal and unstoppable, the Wolf has claimed a territory in the city, but must now confront the troubles of their holdings.',
        description:
            '<p></p>',
    },
];
