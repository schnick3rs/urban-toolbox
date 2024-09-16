<script>
    import { AccordionItem, Heading } from "flowbite-svelte";
    import snarkdown from 'snarkdown';

    export let move;
    export let modifiers;

    let finalMove = move;
    finalMove['conditions'] = [];

    let conditions = {};

    if (modifiers.includes('Weasel Words')) {
        'When you refuse to honor a Debt by fast-talking your way out of the obligation, roll with Mind instead of the ' +
        'dierence in Status. On a hit—in addition to the normal eects—mark your creditor’s Circle as though you had ' +
        'honored the Debt.'
        //conditions['Weasel Words'] = false;
        //finalMove.conditions.push('by fast-talking your way out of the obligation');
        //finalMove.roll = 'Mind';
        //finalMove.onHit = ' Also — in addition to the normal effects — mark your creditor’s Circle as though you had honored the Debt.'
    }


    let weaselWords = {
        condition: 'by fast-talking your way out of the obligation',
        mod: [
            { target: 'roll', substitute: 'Mind', },
            { target: 'hit', append: 'Also — in addition to the normal effects — mark your creditor’s Circle as though you had honored the Debt.' }
        ],
    };

    // Mark corruption to refuse to honor a Debt owed to someone outside your Circle as if you rolled a 10+
    let freeAgent = {
        condition: 'owed to someone outside your Circle',
        corruption: true,
        mods: [
            { target: 'roll', take: 'strong' },
        ],
    };

    // When you refuse to honor a Debt to someone of lesser or equal Status, you may mark corruption to take a 12+ instead of rolling.
    let shrewedNegotiator = {
        condition: 'to someone of lesser or equal Status',
        corruption: true,
        mods: [
            { target: 'roll', take: 'crit' },
        ],
    }

    let chessNotCheckers = {
        name: 'Chess Not Checkers',
        condition: 'with any kind of serious advantage — numbers, position, surprise, etc. — ',
        mods: [
            { target: 'hit', append: '(but tell your opposition which option they cannot choose from their list before they pick)' },
        ],
    };

    if (modifiers.includes('Chess Not Checkers')) {
        conditions[chessNotCheckers.name] = false;
        finalMove.components[finalMove.components.findIndex((c) => c.type === 'when')]['condition'] = 'with any kind of serious advantage — numbers, position, surprise, etc. — ';
        finalMove.components[finalMove.components.findIndex((c) => c.type === 'hit')]['append'] = '(but tell your opposition which option they cannot choose from their list before they pick)'
        console.warn(finalMove)
    }

    let infernalAffairs = {
        corruption: true,
        mods: [
            { target: 'roll', take: 'strong' },
        ],
    };

    let gunToAKnifeFight = {
        condition: 'against someone by seriously escalating the conflict',
        mods: [
            { target: 'roll', substitute: 'Mind', },
        ],
    };

    let eldritchBlast = {
        source: 'The Wizard',
        type: 'Corruption Move',
        corruption: true,
        mods: [
            { target: 'roll', substitute: 'Spirit', },
            { target: 'hit', type: 'inline', append: 'harm as established', content: 'using raw magical force (3-harm close or 2-harm close area)' },
        ],
    };

    let advanceTurnToViolence = {
        mods: [
            {
                target: 'crit',
                content: 'On a 12+, you overwhelm your foe; they pick 1 in the face of your superior prowess:',
                list: [
                    'they cower, terrified; you have them at your mercy until you release them... or kill them',
                    'they offer to parley, impressed; you take a +1 ongoing against them until time passes',
                    'they fight on, foolishly; take all 3 options from the 10+ list and choose 1 for double effect',
                ]
            }
        ],
    }

    if (modifiers.includes('Free Agent')) {
        conditions['Free Agent'] = false;
        finalMove.conditions.push('owed to someone outside your circle and mark corruption');
        finalMove.take = '10+';
    }
</script>

<AccordionItem>
    <div slot="header">
        <Heading tag="h4">{ finalMove.name }</Heading>
        <span>{ finalMove.type } Moves: { finalMove.source.book }, page { finalMove.source.page }</span>
    </div>

    <div class="content">
        <p class="mb-2">
            {#each finalMove.conditions as condition, i}
                <span class="urban conditional" class:active={conditions['Free Agent']}>
                    <input type="checkbox" bind:checked={conditions['Free Agent']} />
                    { condition }
                </span>
            {/each}
            , roll with
            {#if finalMove.roll && conditions['Weasel Words']}
                <span class="font-bold uppercase urban">Mind</span>.
            {/if}
            <span
                    class:opacity-20={conditions['Weasel Words']}
                    class:line-through={conditions['Weasel Words']}
            >
                the difference in Status between you and your creditor.
            </span>
        </p>
    {#each finalMove.components as component}

        {#if component.type === 'when'}
            <p>
                { component.prepend }
                [corrupt]
                {@html snarkdown(component.content) }
                {#each conditions as condition}
                    <span class="urban conditional" class:active={condition}>
                        <input type="checkbox" bind:checked={condition} />
                        { condition }
                    </span>
                {/each}
            </p>
        {/if}

        {#if typeof component === 'string'}
            <p class="mb-2" class:conditional={!component.startsWith('On a hit') && conditions['Free Agent']}>
                {@html snarkdown(component) }
                {#if component.startsWith('On a hit')}
                    <span class="urban conditional" class:active={conditions['Weasel Words']}>{ finalMove.onHit }</span>
                {/if}
            </p>
        {:else if Array.isArray(component) }
            <ul class="mb-2 pl-5">
                {#each component as item}
                    <li>{ item }</li>
                {/each}
            </ul>
        {/if}
    {/each}
    </div>
</AccordionItem>

<style>
    li {
        list-style: disc;
    }
    .urban {
             color: var(--color-theme-1);
         }
    .conditional {
        opacity: 0.3;
    }
    .active {
        opacity: 1;
    }
</style>