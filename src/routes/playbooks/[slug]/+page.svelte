<script>
    import {Accordion, AccordionItem, Blockquote, Card, Checkbox, Heading, Radio} from "flowbite-svelte";
    import AccordionItemMove from "./AccordionItemMove.svelte";
    import snarkdown from "snarkdown";

    export let data;

    let hitTheStreets = data.moves[0];
    let refuseToHonorADept = data.moves[1];
    let iKnowAGuyMove = data.playbook.moves[0];

    let adjusted =     {
        name: 'Hit the streets',
        type: 'circle',
        text:
            '<p>' +
                'When you hit the streets to get what you need, name who you’re going to and roll with their Circle. ' +
                'On a hit, they’re available and have the stuff! On a 7-9, choose 1:' +
            '</p>' +
            '<ul>' +
                '<li>whoever you’re going to is juggling their own problems</li>' +
                '<li>whatever you need is more costly than anticipated</li>' +
            '</ul>',
        lists: {
            result: '7-9',
            options: [
                'whoever you’re going to is juggling their own problems',
                'whatever you need is more costly than anticipated',
                'however you find them requires you to offer a Debt to an intermediary',
            ],
        },
    };

    let turnToViolence = data.moves[2];

    let iKnowAGuy = false;
    let inSheepsClothing = false;
    let tonguedAndSilver = false;
    let worseThingsOutTunight = false;
    let keepYourFriendsClose = false;
    let streetHound = false;
    let chessNotCheckers = false;
    let gunToaKnifeFight = false;
    let eldritchBlast = false;
    let wontBeIgnored = false;
    let inOurBlood = false;

    let playbookMoves = [
        {
            checked: false,
            name: 'Chess Not Checkers',
            text: 'When you _**turn to violence**_ with any kind of serious advantage—numbers, position, surprise, etc.—' +
                'and get a hit, tell your opposition which option they cannot choose from their list before they pick.',
        },
        {
            checked: false,
            name: 'Infernal Affairs',
            text: 'When you _**turn to violence**_, you may <u>mark corruption</u> to take a 10+ instead of rolling.',
        },
        {
            checked: false,
            name: 'Gun to a Knife Fight',
            text: 'When you _**turn to violence**_, against someone by seriously escalating the conflict, ' +
                'roll with Mind instead of Blood',
        },
        {
            checked: false,
            name: 'Eldritch Blast',
            text: '<u>Mark corruption</u> to _**turn to violence**_ with SPIRIT instead of Blood ' +
                'using raw magical force (3-harm close or 2-harm close area).',
        },
    ]

</script>

<h1>{ data.playbook.title }</h1>

<div class="flex flex-row">

    <section class="grow">
        {#each data.playbook.presentations as { type, picks, options }}
            <div class="hidden">
                <h2>{ type }</h2>
                <div >
                    {#each options as item}
                        <Radio class="p-3" value="{item}">{item}</Radio>
                    {/each}
                </div>
            </div>
        {/each}

        <div>
            <h2>Moves</h2>

            {#each playbookMoves as move, i}
                <Card>
                    <Heading tag="h5">
                        <input type="checkbox" bind:checked={playbookMoves[i].checked}> {move.name}
                    </Heading>
                    <p>{@html snarkdown(move.text) }</p>
                </Card>
            {/each}
        </div>
    </section>

    <section class="basis-1/2">
        <Accordion>

            <AccordionItemMove move="{turnToViolence}" modifiers="{['Chess Not Checkers']}"/>

            <AccordionItem class="bg-green-500" activeClass="bg-green-500">
                <div slot="header">
                    <Heading tag="h4">Turn to violence</Heading>
                    <span>Basic Moves: Urban Shadows Rulebook, page 74</span>
                </div>

                <p class="mb-2">
                    When you
                    <span class="urban conditional" class:active={eldritchBlast}>
                            <input type="checkbox" bind:checked={eldritchBlast} /> mark Corruption to
                    </span>
                    <span class="font-bold italic">turn to violence</span>
                    <span class="urban conditional" class:active={gunToaKnifeFight}>
                            <input type="checkbox" bind:checked={gunToaKnifeFight} /> against someone by seriously escalating the conflict
                    </span>
                    <span class="urban conditional" class:active={chessNotCheckers}>
                            <input type="checkbox" bind:checked={chessNotCheckers} /> with any kind of serious advantage—numbers, position, surprise, etc.
                    </span>
                    roll with
                    {#if eldritchBlast}
                        <span class="font-bold uppercase urban">Spirit</span>
                    {/if}
                    {#if gunToaKnifeFight}
                        <span class="font-bold uppercase urban">Mind</span>
                    {/if}
                    <span
                            class="uppercase urban"
                            class:font-bold={!(gunToaKnifeFight || eldritchBlast)}
                            class:opacity-20={gunToaKnifeFight || eldritchBlast}
                            class:line-through={gunToaKnifeFight || eldritchBlast}
                    >
                        Blood
                    </span>.
                </p>

                <p class="mb-2">
                    On a hit, you inflict harm as established
                    {#if eldritchBlast}<span class="urban">using raw magical force (3-harm close or 2-harm close area)</span>{/if}
                    and your opposition chooses 1 <span class="urban conditional" class:active={chessNotCheckers}>(tell your opposition which option they cannot choose from their list before they pick)</span>:
                </p>

                <ul class="pl-5 mb-2">
                    <li>they inflict harm on you</li>
                    <li>they put you in a bad spot</li>
                    <li>they create an opening to flee</li>
                </ul>

                <p class="mb-2">
                    On a 10+, you also choose 1:
                </p>

                <ul class="pl-5 mb-2">
                    <li>you inflict terrible harm</li>
                    <li>you take something from them</li>
                    <li>you create an opportunity for an ally</li>
                </ul>

                <p class="mb-2">
                    On a 12+, you overwhelm your foe; they pick 1 in the face of your superior prowess:
                </p>

                <ul class="pl-5 mb-2">
                    <li>they cower, terrified; you have them at your mercy until you release them...or kill them</li>
                    <li>they offer to parley, impressed; you take a +1 ongoing against them until time passes</li>
                    <li>they fight on, foolishly; take all 3 options from the 10+ list and choose 1 for double effect</li>
                </ul>

            </AccordionItem>

            <AccordionItem>
                <div slot="header">
                    <Heading tag="h4">Escape a situation</Heading>
                    <span>Basic Moves: Urban Shadows Rulebook, page 76</span>
                </div>

                <p class="mb-2">
                    When you <span class="font-bold italic">take advantage of an opening to escape a situation</span>
                    roll with <span class="font-bold uppercase urban">Blood</span>.
                    On a hit, you get away and choose 1.
                    On a 7-9, the MC chooses 1 as well:
                </p>
                <ul class="pl-5">
                    <li>you suffer harm during your escape</li>
                    <li>you end up in another dangerous situation</li>
                    <li>you leave something important behind</li>
                    <li>you owe an NPC a Debt for their aid</li>
                    <li>you give into your base nature and mark corruption</li>
                    <li class="urban">you escape to your homeland, for better or worse</li>
                </ul>
            </AccordionItem>

            <AccordionItem>
                <div slot="header">
                    <Heading tag="h4">Persuade an NPC</Heading>
                    <span>Basic Moves: Urban Shadows Rulebook, page 77</span>
                </div>

                <p class="mb-2">
                    When you <span class="font-bold italic">
                        persuade an NPC with seduction, promises, or threats,
                        <span class="urban conditional">
                            <input type="checkbox" bind:checked={worseThingsOutTunight} />
                            or by promising to protect them from harm
                        </span>,
                    </span>
                    roll with
                    {#if worseThingsOutTunight}
                        <span class="font-bold uppercase urban">Blood</span>
                    {/if}
                    <span
                            class="uppercase urban"
                            class:font-bold={!worseThingsOutTunight}
                            class:opacity-20={worseThingsOutTunight}
                            class:line-through={worseThingsOutTunight}
                    >
                        Heart
                    </span>.
                    On a hit, they see
                    your point and do as you ask. On a 7-9, they counter
                    your offer or demand payment—a Debt, a favor,
                    resources—before agreeing to follow through. If you
                    invoke a Debt with the NPC before you roll, add +3 to
                    your total (max+4).
                </p>
            </AccordionItem>

            <AccordionItem>
                <div slot="header">
                    <Heading tag="h4">Mislead, distract, or trick</Heading>
                    <span>Basic Moves: Urban Shadows Rulebook, page 79</span>
                </div>

                <p class="mb-2">
                    When you try to <span class="font-bold italic">mislead, distract, or trick</span> someone
                    <span class="urban conditional" class:active={inSheepsClothing}><input type="checkbox" bind:checked={inSheepsClothing} /> you’ve previously shared a moment of intimacy with</span>
                    <span class="urban conditional" class:active={wontBeIgnored}><input type="checkbox" bind:checked={wontBeIgnored} /> with an obvious supernatural display</span>
                    <span class="urban conditional" class:active={inOurBlood}><input type="checkbox" bind:checked={inOurBlood} /> from a different Circle through lies of
omission or clever misdirection</span>

                    roll with

                    {#if inSheepsClothing || inOurBlood}
                        <span class="font-bold uppercase urban">Heart</span>
                    {:else if wontBeIgnored}
                        <span class="font-bold uppercase urban">Spirit</span>
                    {/if}
                    <span
                            class="uppercase urban"
                            class:font-bold={!(inSheepsClothing || inOurBlood || wontBeIgnored)}
                            class:opacity-20={inSheepsClothing || inOurBlood || wontBeIgnored}
                            class:line-through={inSheepsClothing || inOurBlood || wontBeIgnored}
                    >Mind</span>.

                </p>

                <p class="mb-2">
                    On a hit, they are fooled, at least for a moment.
                </p>

                <p class="mb-2">
                    On a 10+, pick 3.
                </p>

                <p class="mb-2">
                    On a 7-9, pick 2:
                </p>

                <ul class="pl-5">
                    <li>you create an opportunity</li>
                    <li>you expose a weakness or flaw</li>
                    <li>you confuse them for some time</li>
                    <li>you avoid further entanglement</li>
                </ul>
            </AccordionItem>

            <AccordionItem>
                <div slot="header">
                    <Heading tag="h4">Figure someone out</Heading>
                    <span>Basic Moves: Urban Shadows Rulebook, page 80</span>
                </div>

                <p class="mb-2">
                    When you try to <span class="font-bold italic">figure someone out</span>
                    (
                    <span class="urban conditional" class:active={tonguedAndSilver}><input type="checkbox" bind:checked={tonguedAndSilver} /> by tempting them with power</span>
                    <span class="urban conditional" class:active={keepYourFriendsClose}><input type="checkbox" bind:checked={keepYourFriendsClose} /> by helping them indulge a true hunger</span>
                    <span class="urban conditional" class:active={streetHound}><input type="checkbox" bind:checked={streetHound} /> while transformed into a coyote or dog</span>
                    )
                    ,
                    {#if keepYourFriendsClose}
                        take a 10+ <span class="italic text-gray-600">(instead of rolling)</span>.
                    {:else}
                        roll with
                        {#if tonguedAndSilver}
                            <span class="font-bold uppercase urban">Heart</span>
                        {:else if streetHound}
                            <span class="font-bold uppercase urban">Spirit</span>
                        {/if}
                        <span
                                class="uppercase urban"
                                class:font-bold={!(tonguedAndSilver || streetHound)}
                                class:opacity-20={tonguedAndSilver || streetHound}
                                class:line-through={tonguedAndSilver || streetHound}
                        >
                        Mind.
                    </span>
                    {/if}
                </p>
                <p class="mb-2" class:urban={keepYourFriendsClose}>
                    On a hit, ask 2.
                </p>
                <p class="mb-2" class:opacity-20={keepYourFriendsClose}>
                    <span>On a 7-9, they ask 1 of you as well.</span>
                </p>
                <p class="mb-2" class:opacity-20={keepYourFriendsClose}>
                    <span class="urban">On a miss, ask 1 from this list, but you come of as suspicious or sleazy, your choice.</span>
                </p>
                <p class="mb-2">
                    If you’re in their Circle, ask an additional question, even on a miss.
                </p>
                <ul class="pl-5 mb-2">
                    <li>who’s pulling your character’s strings?</li>
                    <li>what’s your character’s beef with _____?</li>
                    <li>what’s your character hoping to get from _____?</li>
                    <li>what does your character worry is going to happen?</li>
                    <li>how could I get your character to _____?</li>
                    <li>how could I put your character in my Debt?</li>
                    <li class="urban">What pressing need do you have that I might be able to address?</li>
                    <li class="urban">What’s the most valuable thing you’d offer for sale?</li>
                </ul>
                <p class="urban">Mark corruption ☣ to ask any questions you’d like, not limited to the lists</p>
            </AccordionItem>

            <AccordionItem>
                <div slot="header">
                    <Heading tag="h4">Let it out</Heading>
                    <span>Basic Moves: Urban Shadows Rulebook, page 82</span>
                </div>

                <p class="mb-2">
                    When you
                    <span class="font-bold italic">let it out
                    </span>,
                    choose an ability from below:
                </p>

                <ul class="pl-5 mb-2">
                    <li>deflect or redirect an oncoming blow before it strikes</li>
                    <li>perform a feat of telekinetic strength or precision</li>
                    <li>detect the presence and function of magical items or spells</li>
                    <li>reshape the essence or nature of an exposed object or magical spell</li>
                </ul>

                <p class="mb-2">
                    and roll with <span class="font-bold uppercase urban">Spirit</span>.
                </p>

                <p class="mb-2">
                    On a hit, mark corruption and activate the ability; the MC will tell you how the effect is costly, limited, or unstable.
                </p>

                <p class="mb-2">
                    On a 10+, ignore the corruption or the complications, your choice.
                </p>

                <p class="mb-2 urban">
                    On a 12+, your powers or abilities manifest in an unexpectedly useful way. Mark corruption to make that manifestation a new ability.
                </p>
            </AccordionItem>

            <AccordionItem>
                <div slot="header">
                    <Heading tag="h4">Hit the streets</Heading>
                    <span>Circle Moves: Urban Shadows Rulebook, page 87</span>
                </div>

                <p class="mb-2">
                    When you
                    <span class="font-bold italic">hit the streets to get what you need
                            <span class="urban conditional" class:active={iKnowAGuy}>(<input type="checkbox" bind:checked={iKnowAGuy} /> from a member of your circle)</span>
                    </span>,
                    name who you’re going to and roll
                    {#if iKnowAGuy}
                        with <span class="font-bold uppercase urban">Heart</span>.
                    {:else}
                        with their Circle.
                    {/if}
                    On a hit, they’re available and have the stuff! On a
                    7-9, choose 1:
                </p>
                <ul class="pl-5">
                    <li>whoever you’re going to is juggling their own problems</li>
                    <li>whatever you need is more costly than anticipated</li>
                    <li class="urban conditional" class:active={iKnowAGuy}>however you find them requires you to offer a Debt to an intermediary</li>
                </ul>
            </AccordionItem>



        </Accordion>
    </section>

</div>

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