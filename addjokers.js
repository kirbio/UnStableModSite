let jokers = [
{
     name: "Lunar Calendar",

     text: [
"Played cards with",
"{C:spades}Spade{} suit have",
"{C:green}1 in 8{} chance to create a",
"random {C:planet}Planet{} card when scored",
"{C:inactive}(Must have room)",
"{s:0.8}Suit changes at the end of the round",
],

     image_url: "img/joker/lunar_calendar.png",

    rarity: "Common"
   },
{
     name: "Dragon Hoard",

     text: [
"Gives {C:mult}+5{} Mult for",
"every {C:attention}2{} {C:attention}consumables{}",
"in your {C:attention}consumable{} area",
"{C:inactive}(Currently {C:mult}+0{C:inactive} Mult)",
],

     image_url: "img/joker/dragon_hoard.png",

    rarity: "Common"
   },
{
     name: "Card Dealer",

     text: [
"{C:chips}+10{} Chips per {C:attention}played{}",
"cards this round",
"{C:attention}Resets{} at the end",
"of the round",
"{C:inactive}(Currently {C:chips}+0{C:inactive} Chips)",
],

     image_url: "img/joker/card_dealer.png",

    rarity: "Common"
   },
{
     name: "Match Three",

     text: [
"{C:mult}+15{} Mult if played hand contains",
"{C:attention}3{} or more adjacent cards",
"with the {C:attention}same base suit{}",
],

     image_url: "img/joker/match_three.png",

    rarity: "Common"
   },
{
     name: "Furry Joker",

     text: [
"Played {C:attention}Wild Cards{} have",
"{C:green}1 in 12{} chance to",
"turn {C:dark_edition}Polychrome{} when scored",
],

     image_url: "img/joker/furry_joker.png",

    rarity: "Uncommon"
   },
{
     name: "Luxurious Handbag",

     text: [
"{C:attention}+2{} consumable slot",
"{C:red}Raises prices{} of everything in the",
"{C:attention}shop{} (except reroll) by {C:gold}$2{}",
],

     image_url: "img/joker/luxurious_handbag.png",

    rarity: "Uncommon"
   },
{
     name: "Portal",

     text: [
"{C:attention}Aces{} can be used in the",
"middle of a {C:purple}Straight{} hand",
"{C:inactive}(Ex: 3, 2, Ace, King, Queen)",
],

     image_url: "img/joker/portal.png",

    rarity: "Rare"
   },
{
     name: "Vainglorious Joker",

     text: [
"Played cards with",
"{C:attention}Suit Seal{} give",
"{C:attention}+2{} Mult when scored",
],

     image_url: "img/joker/vainglorious_joker.png",

    rarity: "Common"
   },
{
     name: "Acedia Joker",

     text: [
"Played cards with",
"{C:attention}Suit Seal{} in the same",
"{C:purple}suit category{} as the card's suit",
"give {C:attention}+6{} Mult when scored",
],

     image_url: "img/joker/acedia_joker.png",

    rarity: "Common"
   },
{
     name: "Cinnabar",

     text: [
"Played cards with {C:attention}Suit Seal{} have",
"{C:green}1 in 6{} chance to create respective",
"{C:auxiliary}Seal Auxiliary{} Card when scored",
"{C:inactive}(Must have room)",
],

     image_url: "img/joker/cinnabar.png",

    rarity: "Uncommon"
   },
{
     name: "Black Jack",

     text: [
"This Joker gains {C:chips}Chips{} equal to {C:attention}total rank{}",
"of the played hand if it is under {C:attention}21{}.",
"Doubles gained chips if the {C:attention}total rank{} is exactly {C:attention}21{}.",
"Resets if the total rank is more than {C:attention}21{}.",
"{C:inactive}(Currently {C:chips}+0{C:inactive} Chips)",
],

     image_url: "img/joker/black_jack.png",

    rarity: "Common"
   },
{
     name: "What",

     text: [
"Played {C:attention}???{}",
"give {C:chips}+420{} Chips and",
"{C:mult}+69{} Mult when scored",
],

     image_url: "img/joker/what.png",

    rarity: "Rare"
   },
{
     name: "Floating-Point Error",

     text: [
"Every played {C:attention}Decimal Rank{} card",
"permanently gains {C:chips}extra chips{}",
"equal to its own {C:attention}rank{}",
],

     image_url: "img/joker/floating_point_error.png",

    rarity: "Uncommon"
   },
{
     name: "Academic Journal",

     text: [
"Adds one random {C:attention}Enhanced Card{}",
"with {C:attention}decimal rank{} to deck if",
"played hand does not have a {C:attention}face{} card",
"{C:inactive}(Once per round. Currently {C:red}0/1{C:inactive})",
],

     image_url: "img/joker/academic_journal.png",

    rarity: "Uncommon"
   },
{
     name: "Engineer",

     text: [
"Cards with {C:attention}decimal ranks{} count as",
"the nearest {C:attention}integer rank{} rounded up when",
"played in non-{C:purple}Straight{} hands",
"{C:inactive}(EX: 3.14 -> 4)",
],

     image_url: "img/joker/engineer.png",

    rarity: "Common"
   },
{
     name: "Thesis Proposal",

     text: [
"Retrigger all played cards",
"with {C:attention}decimal ranks{}",
],

     image_url: "img/joker/thesis_proposal.png",

    rarity: "Uncommon"
   },
{
     name: "Rainbow Flag",

     text: [
"If a hand containing {C:purple}Straight{} has",
"at least 1 {C:attention}decimal rank{} card,",
"{C:green}1 in 8{} chance to turn",
"one of the cards {C:dark_edition}Polychrome{}",
],

     image_url: "img/joker/rainbow_flag.png",

    rarity: "Uncommon"
   },
{
     name: "Dummy Data",

     text: [
"For each {C:attention}unscored card{}",
"{C:green}1 in 2{} chance to",
"convert its rank to {C:attention}0{}",
"(Retains amount of Chips)",
],

     image_url: "img/joker/dummy_data.png",

    rarity: "Uncommon"
   },
{
     name: "Micro SD Card",

     text: [
"If this Joker is in the {C:attention}leftmost position{},",
"take all Chips from discarded base {C:attention}numbered cards{}",
"and strip those cards' ranks to {C:attention}0{}",
"{C:green}0 in 512{} chance to destroy itself at the end of round",
"Chance increases by the amount of Chips stored",
"{C:inactive}(Currently {C:chips}+0{C:inactive} Chips)",
],

     image_url: "img/joker/micro_sd_card.png",

    rarity: "Uncommon"
   },
{
     name: "Social Experiment",

     text: [
"For each played {C:attention}numbered card{},",
"double its Chips, give it to the next card",
"and strip its {C:attention}rank{} to {C:attention}0{}",
],

     image_url: "img/joker/social_experiment.png",

    rarity: "Rare"
   },
{
     name: "Power of One",

     text: [
"Gives {C:mult}+2{} Mult for each",
"{C:attention}1{} in your {C:attention}full deck{}",
"{C:inactive}(Currently {C:mult}+0{C:inactive})",
],

     image_url: "img/joker/power_of_one.png",

    rarity: "Uncommon"
   },
{
     name: "Binary Number",

     text: [
"If played hand contains {C:attention}4{} or fewer cards",
"and only consists of {C:attention}rank 0{} and {C:attention}1{} cards,",
"create a card with {C:attention}rank{} equal",
"to the number represented in binary",
"({C:red}Ex:{} {C:attention}1001{} -> {C:attention}9{})",
"{C:inactive}Jack, Queen, King, Ace is 11-14, respectively{}",
],

     image_url: "img/joker/binary_number.png",

    rarity: "Uncommon"
   },
{
     name: "Quintuplets",

     text: [
"If the winning hand is a {C:attention}Flush Five{}",
"containing all {C:attention}Enhanced cards{},",
"create a {C:dark_edition}Negative Tag{}",
],

     image_url: "img/joker/quintuplets.png",

    rarity: "Rare"
   },
{
     name: "Graphic Card",

     text: [
"Create a {C:attention}Double Tag{}",
"at the end of the round",
"if {C:attention}8{} or more cards with",
"{C:dark_edition}editions{} were scored this round",
"{C:inactive}(Currently {C:attention}0 {C:inactive}cards)",
],

     image_url: "img/joker/graphic_card.png",

    rarity: "Rare"
   },
{
     name: "Connoiseur",

     text: [
"Retrigger all played cards",
"with {C:dark_edition}editions{}",
],

     image_url: "img/joker/connoiseur.png",

    rarity: "Rare"
   },
{
     name: "Jeweler",

     text: [
"{C:green}1 in 4{} chance to downgrade",
"level of played {C:attention}poker hand{}",
"and {C:purple}upgrade{} edition",
"of all scored cards",
],

     image_url: "img/joker/jeweler.png",

    rarity: "Uncommon"
   },
{
     name: "Joker Diffusion",

     text: [
"Converts {C:attention}1{} random {C:attention}non-enhanced{} card",
"in hand to {C:attention}Slop Card{} every time",
"a hand is played with {C:attention}unscored card{}",
],

     image_url: "img/joker/joker_diffusion.png",

    rarity: "Uncommon"
   },
{
     name: "Non-Fungible Joker",

     text: [
"If a discarded hand contains",
"only {C:attention}1 Slop Card{}, destroy it and",
"earn random amount of up to {C:gold}$10",
"{s:0.8,C:red}Maximum Payout and Sell Value drops at the end of the round",
],

     image_url: "img/joker/nonfungible_joker.png",

    rarity: "Uncommon"
   },
{
     name: "Prompt",

     text: [
"Scored {C:attention}Slop Cards{} take",
"the {C:attention}rank{} and {C:attention}suit{} from",
"other scored {C:attention}non-Slop Cards{}",
"instead of random (if possible)",
],

     image_url: "img/joker/prompt.png",

    rarity: "Common"
   },
{
     name: "Uninterested Primate",

     text: [
"Gains {C:chips}+10{} Chips every {C:attention}5",
"{C:attention}Slop Cards{} scored.",
"{C:green}1 in 8{} chance this card is",
"destroyed at end of round",
"{C:inactive}(Currently {C:chips}+50 {C:inactive}Chips)",
],

     image_url: "img/joker/uninterested_primate.png",

    rarity: "Common"
   },
{
     name: "Lethargic Lion",

     text: [
"Gains {X:mult,C:white}X0.02{} Mult every {C:attention}5",
"{C:attention}Slop Cards{} scored.",
"{C:green}1 in 8{} chance this card is",
"destroyed at end of round",
"{C:inactive}(Currently {X:mult,C:white}X2{C:inactive} Mult)",
],

     image_url: "img/joker/lethargic_lion.png",

    rarity: "Common"
   },
{
     name: "Joker Island",

     text: [
"For every scored card",
"with {C:attention}rank{} {C:attention}2{},",
"{C:green1 in 6{} chance to add a",
"{C:attention}Resource Card{} of the same suit to deck",
"{s:0.8}rank changes at end of round",
],

     image_url: "img/joker/joker_island.png",

    rarity: "Uncommon"
   },
{
     name: "Kaiju",

     text: [
"{C:dark_edition}+3{} Joker slot",
"Converts one random card",
"into a {C:attention}Radioactive Card{} when",
"first hand is drawn",
],

     image_url: "img/joker/kaiju.png",

    rarity: "Uncommon"
   },
{
     name: "Poison the Well",

     text: [
"{C:red}+3{} Discards",
"Converts one random card",
"in each discarded hand",
"into a {C:attention}Poison Card{}",
],

     image_url: "img/joker/poison_the_well.png",

    rarity: "Uncommon"
   },
{
     name: "Petri Dish",

     text: [
"{C:blue}+3{} Hands",
"{C:green}1 in 2{} chance of converting",
"one random played card",
"into a {C:attention}Biohazard Card{}",
],

     image_url: "img/joker/petri_dish.png",

    rarity: "Uncommon"
   },
{
     name: "Geiger Counter",

     text: [
"Gives {C:mult}+4{} Mult for",
"each {C:attention}Radioactive Card{}",
"in your {C:attention}full deck{}",
"{C:inactive}(Currently {C:mult}+0{C:inactive} Mult)",
],

     image_url: "img/joker/geiger_counter.png",

    rarity: "Uncommon"
   },
{
     name: "Strych-Nine",

     text: [
"Gives {C:chips}+9{} Chips",
"for each {C:attention}Poison Card{}",
"in your {C:attention}full deck{}",
"{C:inactive}(Currently {C:chips}+0{C:inactive} Chips)",
],

     image_url: "img/joker/strych_nine.png",

    rarity: "Uncommon"
   },
{
     name: "Vaccination Card",

     text: [
"Neutralize all {C:attention}Biohazard Card{} passive effects",
"Gives additional {X:mult,C:white}X0.25{} Mult for each",
"{C:attention}Biohazard Card{} held in hand",
"{C:inactive}(Currently {X:mult,C:white}X1{C:inactive} Mult)",
],

     image_url: "img/joker/vaccination_card.png",

    rarity: "Uncommon"
   },
{
     name: "Vintage Joker",

     text: [
"Scored {C:attention}Vintage Cards{} have",
"{C:green}1 in 4{} chance to reduce",
"their destroy chance by half",
],

     image_url: "img/joker/vintage_joker.png",

    rarity: "Uncommon"
   },
{
     name: "Rules Errata",

     text: [
"{C:attention}Acorn Mark Cards{} give {C:attention}half{} of their",
"{C:attention}rank{}'s value as Mult when scored",
],

     image_url: "img/joker/rules_errata.png",

    rarity: "Uncommon"
   },
{
     name: "Auction Winner",

     text: [
"If a {C:attention}Promo Card{} is",
"destroyed from scoring, this Joker",
"gains {C:gold}money{} equal to",
"the {C:gold}money{} that card gave",
"before its destruction",
],

     image_url: "img/joker/auction_winner.png",

    rarity: "Common"
   },
{
     name: "Free Trial",

     text: [
"{C:green}1 in 4{} chance to create",
"a {C:dark_edition}Negative{} random {C:auxiliary}Auxiliary{} Card",
"when an {C:auxiliary}Auxiliary{} Card is used",
],

     image_url: "img/joker/free_trial.png",

    rarity: "Uncommon"
   },
{
     name: "Extended Warranty",

     text: [
"{C:auxiliary}Auxiliary{} Cards in",
"your {C:attention}consumable{} area",
"give {X:mult,C:white}X1.5{} Mult",
],

     image_url: "img/joker/extended_warranty.png",

    rarity: "Rare"
   },
{
     name: "Technician",

     text: [
"{C:chips}+15{} Chips per",
"{C:auxiliary}Auxiliary{} Card",
"used this run",
"{C:inactive}(Currently {C:chips}+0{C:inactive} Chips){}",
],

     image_url: "img/joker/technician.png",

    rarity: "Common"
   },
{
     name: "Season Pass",

     text: [
"{C:green}1 in 6{} chance to create",
"a random {C:auxiliary}Auxiliary{} Card",
"when discarding a {C:attention}face{} card",
"{C:inactive}(Must have room)",
],

     image_url: "img/joker/season_pass.png",

    rarity: "Uncommon"
   },
{
     name: "Joker2",

     text: [
"{C:mult}+4{} Mult",
"{X:mult,C:white}X2{} Mult",
"{C:green}1 in 4{} chance this",
"card is destroyed",
"at end of round",
],

     image_url: "img/joker/joker2.png",

    rarity: "Common"
   },
{
     name: "Joker Stairs",

     text: [
"Gain {C:mult}+4{} Mult when buying a Joker",
"with {C:attention}\"Joker\"{} in its name",
"{C:inactive}(Currently {C:mult}+0{C:inactive} Mult){}",
],

     image_url: "img/joker/joker_stairs.png",

    rarity: "Uncommon"
   },
{
     name: "Plagiarism",

     text: [
"Copies ability of",
"{C:attention}Joker{} to the",
"left or right at random",
"{s:0.8}Direction changes each hand played",
],

     image_url: "img/joker/plagiarism.png",

    rarity: "Uncommon"
   },
{
     name: "Joker Throwing Card",

     text: [
"Decrease {C:attention}Blind{} size by {C:attention}10%{}",
"{C:green}1 in 4{} chance to destroy",
"one of the scored cards",
"Increases percentage by {C:attention}2%{}",
"if a card is destroyed this way",
],

     image_url: "img/joker/joker_throwing_card.png",

    rarity: "Rare"
   },
{
     name: "Jackhammer",

     text: [
"If the {C:attention}played hand{} has only one {C:attention}Jack{},",
"retrigger it {C:attention}5{} more times",
"and {C:red}destroy it{} afterward",
],

     image_url: "img/joker/jackhammer.png",

    rarity: "Uncommon"
   },
{
     name: "Jack of All Trades",

     text: [
"Played {C:attention}Jacks{} give",
"{C:chips}+15{} Chips, {C:mult}+2{} Mult, ",
"{X:mult,C:white}X1.1{} Mult, and {C:gold}$1",
],

     image_url: "img/joker/jack_of_all_trades.png",

    rarity: "Rare"
   },
{
     name: "Magic Trick Card",

     text: [
"Scored {C:hearts}Queen of Hearts{} cards",
"turn into {C:clubs}7 of Clubs{} cards",
"{s:0.8}On discard, flips over the Joker",
],

     image_url: "img/joker/magic_trick_card.png",

    rarity: "Uncommon"
   },
{
     name: "Queensland",

     text: [
"Scored {C:attention}Queens{} add",
"{C:attention}Resource Cards{} of",
"the corresponding suits to deck",
"{C:inactive}({C:red}3{C:inactive} times per round, {C:red}3 left{C:inactive})",
],

     image_url: "img/joker/queensland.png",

    rarity: "Rare"
   },
{
     name: "Polychrome Red Seal Steel Joker",

     text: [
"{C:green}1 in 8{} chance for scored {C:attention}Kings{} to {C:purple}upgrade{} edition",
"{C:green}1 in 4{} chance for scored {C:attention}Kings{} to {C:attention}retrigger",
"{C:green}1 in 2{} chance for {C:attention}Kings{} held in hand to give {X:mult,C:white}X2{} Mult",
],

     image_url: "img/joker/prssj.png",

    rarity: "Rare"
   },
{
     name: "King of Pop",

     text: [
"Played {C:attention}Enhanced Kings{} have",
"{C:green}1 in 8{} chance to be",
"destroyed and create a {C:dark_edition}Double Tag",
],

     image_url: "img/joker/king_of_pop.png",

    rarity: "Rare"
   },
{
     name: "Master of One",

     text: [
"Adds one {C:attention}Enhanced Rank 1{} card",
"to deck when {C:attention}Blind{} is selected",
],

     image_url: "img/joker/master_of_one.png",

    rarity: "Uncommon"
   },
{
     name: "Spectre",

     text: [
"{X:mult,C:white}X0.25{} Mult per {C:spectral}Spectral{}",
"card used this run",
"{C:inactive}(Currently {X:mult,C:white}X1{C:inactive} Mult){}",
],

     image_url: "img/joker/spectre.png",

    rarity: "Uncommon"
   },
{
     name: "Library Card",

     text: [
"For each scored card's {C:attention}singular",
"{C:attention}suit name{} in English, give:",
"{C:chips}+5{} Chips per {C:attention}Consonant",
"{C:mult}+2{} Mult per {C:attention}Vowel",
"{C:inactive}(Example: Spade = {C:chips}+15{C:inactive} Chips, {C:red}+4{C:inactive} Mult)",
],

     image_url: "img/joker/library_card.png",

    rarity: "Uncommon"
   },
{
     name: "Collector's Album",

     text: [
"Jokers with {C:attention}\"Card\"{} in",
"their name each give",
"{C:chips}+120{} Chips",
],

     image_url: "img/joker/collector_album.png",

    rarity: "Uncommon"
   },
{
     name: "Throwing Hands",

     text: [
"{X:mult,C:white}X5{} Mult if poker hand is {C:attention}High Card{}",
"{X:mult,C:white}X0.5{} Mult otherwise",
"{s:0.8}hand changes at end of round",
],

     image_url: "img/joker/throwing_hands.png",

    rarity: "Rare"
   },
{
     name: "Imperial Bower",

     text: [
"{X:mult,C:white}X3{} Mult if played hand",
"contains a {C:attention}Straight{} and",
"has at least one {C:attention}face{} card",
],

     image_url: "img/joker/imperial_bower.png",

    rarity: "Common"
   },
{
     name: "The \"Jolly Joker\"",

     text: [
"Gains {C:mult}+8{} Mult if",
"played hand contains a {C:attention}Pair{}",
"{C:red}Resets{} if played hand",
"does not contain a {C:attention}Pair{}",
"{C:inactive}(Currently {C:mult}+0{C:inactive} Mult)",
],

     image_url: "img/joker/the_jolly_joker.png",

    rarity: "Uncommon"
   },
{
     name: "Get Out of Jail Free Card",

     text: [
"Sell this Joker to",
"win the blind instantly",
],

     image_url: "img/joker/get_out_of_jail_free_card.png",

    rarity: "Rare"
   },
{
     name: "Tanzaku",

     text: [
"Retrigger played cards with",
"{C:attention}seals{} {C:attention}0{} additional times",
"Amount increases by {C:attention}1{} for",
"every discarded card with a {C:attention}seal{}",
"{s:0.8}Resets after each round",
],

     image_url: "img/joker/tanzaku.png",

    rarity: "Rare"
   },
{
     name: "Glass Cannon",

     text: [
"Retrigger each",
"played {C:attention}Glass Card{}",
"{C:red}Glass Cards are guaranteed",
"{C:red}to break when scored",
],

     image_url: "img/joker/glass_cannon.png",

    rarity: "Rare"
   },
{
     name: "Pity Rate Drop",

     text: [
"When {C:attention}Blind{} is selected,",
"{C:green}1 in 12{} chance to create a {C:red}Rare {C:attention}Joker{}",
"Chance increase by {C:green}1{} if no {C:attention}Joker{} created,",
"resets to {C:green}1{} otherwise",
"{C:inactive}(Must have room)",
],

     image_url: "img/joker/pity_rate_drop.png",

    rarity: "Rare"
   },
{
     name: "Salmon Run",

     text: [
"Each played {C:attention}7{} has a",
"{C:green}1 in 7{} chance of adding a",
"permanent copy to deck when scored",
],

     image_url: "img/joker/salmon_run.png",

    rarity: "Rare"
   },
{
     name: "Cool S",

     text: [
"Played {C:attention}8s{} become",
"a random {C:attention}Enhanced card{}",
],

     image_url: "img/joker/cool_s.png",

    rarity: "Uncommon"
   },
{
     name: "Memoriam Photo",

     text: [
"When a playing card is {C:attention}destroyed{},",
"this Joker gains Chips equal to {C:attention}double{}",
"the rank of the {C:attention}destroyed card{}",
"{C:inactive}(Currently {C:chips}+0{C:inactive} Chips)",
],

     image_url: "img/joker/memoriam_photo.png",

    rarity: "Uncommon"
   },
{
     name: "Schrödinger's Cat",

     text: [
"When a playing card is {C:attention}destroyed{},",
"{C:green}1 in 3{} chance to add",
"a copy of the card to deck",
],

     image_url: "img/joker/schrodinger_cat.png",

    rarity: "Rare"
   },
{
     name: "Cashback Card",

     text: [
"At the end of a {C:attention}Boss Blind{},",
"earn {C:gold}money{} equals to the amount",
"of {C:attention}consumables{} used this {C:attention}Ante",
"{C:inactive}(Currently {C:gold}$0{C:inactive})",
],

     image_url: "img/joker/cashback_card.png",

    rarity: "Rare"
   },
{
     name: "Raffle",

     text: [
"At the end of each {C:attention}shop{},",
"{C:green}0 in 20{} chance to win {C:gold}$20",
"Chance increases by {C:green}1{}",
"for each purchase in the {C:attention}shop",
"{s:0.8, C:red}Resets after exiting the shop",
],

     image_url: "img/joker/raffle.png",

    rarity: "Uncommon"
   },
{
     name: "IC Card",

     text: [
"Gain {C:gold}$3{} to store in this Joker",
"every time a hand is played",
"When spending money, the {C:attention}balance",
"in this Joker is spent first",
"{C:red}Only usable for 9 rounds",
"{C:inactive}(Currently {C:gold}$0{C:inactive}, {C:red}9 Rounds left{C:inactive}){}",
],

     image_url: "img/joker/ic_card.png",

    rarity: "Uncommon"
   },
{
     name: "2048",

     text: [
"If played hand contains a {C:attention}Pair{} with",
"rank of power of two {C:attention}(2, 4, 8){},",
"destroy the left one and give all chips to the other",
"{C:inactive}(Drag to rearrange){}",
],

     image_url: "img/joker/j2048.png",

    rarity: "Uncommon"
   },
{
     name: "Inductor",

     text: [
"For every played card with the same",
"{C:attention}rank{} and suit{C:attention}{} as another played card:",
"{C:green}1 in 4{} chance to copy {C:attention}Enhancement{}",
"{C:green}1 in 8{} chance to copy {C:attention}Edition{}",
"{C:green}1 in 12{} chance to copy {C:attention}Seal{}",
],

     image_url: "img/joker/inductor.png",

    rarity: "Rare"
   },
]

let auxiliary = [
  {
     name: "Essence of Spades",

     text: [
"Add {C:spades}Spade Seal{} to",
"{C:attention}2{} selected cards",
"in your hand",
],

     image_url: "img/auxiliary/aux_spades.png",

    rarity: "Auxiliary"
   },
{
     name: "Essence of Hearts",

     text: [
"Add {C:hearts}Heart Seal{} to",
"{C:attention}2{} selected cards",
"in your hand",
],

     image_url: "img/auxiliary/aux_hearts.png",

    rarity: "Auxiliary"
   },
{
     name: "Essence of Clubs",

     text: [
"Add {C:clubs}Club Seal{} to",
"{C:attention}2{} selected cards",
"in your hand",
],

     image_url: "img/auxiliary/aux_clubs.png",

    rarity: "Auxiliary"
   },
{
     name: "Essence of Diamonds",

     text: [
"Add {C:diamonds}Diamond Seal{} to",
"{C:attention}2{} selected cards",
"in your hand",
],

     image_url: "img/auxiliary/aux_diamonds.png",

    rarity: "Auxiliary"
   },
{
     name: "Possessions",

     text: [
"Add a {C:attention}Face Seal{}",
"to {C:attention}2{} selected cards",
"in your hand",
],

     image_url: "img/auxiliary/aux_face.png",

    rarity: "Auxiliary"
   },
{
     name: "+2",

     text: [
"Creates a {C:attention}2{} card in",
"your hand with a random",
"{C:attention}rank{} and the same {C:attention}suit{}",
"as the selected card",
],

     image_url: "img/auxiliary/aux_plus_two.png",

    rarity: "Auxiliary"
   },
{
     name: "Wild +4",

     text: [
"Creates a {C:attention}4{} card in",
"your hand with a random",
"{C:attention}suit{} and the same {C:attention}rank{}",
"as the selected card",
],

     image_url: "img/auxiliary/aux_plus_four_wild.png",

    rarity: "Auxiliary"
   },
{
     name: "The Past",

     text: [
"{C:red}+3{} discards this round",
],

     image_url: "img/auxiliary/aux_inst_disc.png",

    rarity: "Auxiliary"
   },
{
     name: "The Present",

     text: [
"{C:attention}+3{} hand size this round",
],

     image_url: "img/auxiliary/aux_inst_hsize.png",

    rarity: "Auxiliary"
   },
{
     name: "The Future",

     text: [
"{C:blue}+3{} hands this round",
],

     image_url: "img/auxiliary/aux_inst_hand.png",

    rarity: "Auxiliary"
   },
{
     name: "Seal Exchange",

     text: [
"Swap {C:attention}seals{} between",
"{C:attention}2{} selected cards",
],

     image_url: "img/auxiliary/aux_seal_move.png",

    rarity: "Auxiliary"
   },
{
     name: "All for One",

     text: [
"Converts rank of",
"up to {C:attention}3{} selected",
"cards to {C:attention}1{}",
],

     image_url: "img/auxiliary/aux_conv_1.png",

    rarity: "Auxiliary"
   },
{
     name: "The Twenty-One",

     text: [
"Select up to {C:attention}5{} cards",
"with total rank of {C:attention}21 or more{}.",
"Destroys all selected cards and creates one",
"{C:attention}rank 21{} card of a random suit.",
],

     image_url: "img/auxiliary/aux_21.png",

    rarity: "Auxiliary"
   },
{
     name: "Monkey Paw",

     text: [
"{C:purple}Upgrades {C:attention}1{} selected card's {C:attention}edition{}",
"Turns adjacent cards into {C:attention}Poison Cards{}",
"{C:inactive}(Loops around hand edges){}",
],

     image_url: "img/auxiliary/aux_upgrade.png",

    rarity: "Auxiliary"
   },
{
     name: "Heal Guardian",

     text: [
"Add a {C:attention}Heal Seal{}",
"to {C:attention}1{} selected",
"card in your hand",
],

     image_url: "img/auxiliary/aux_heal.png",

    rarity: "Auxiliary"
   },
{
     name: "Heal Aura",

     text: [
"Heal all",
"{C:red}Unhanced Cards{}",
"in your hand",
],

     image_url: "img/auxiliary/aux_heal_hand.png",

    rarity: "Auxiliary"
   },
{
     name: "Lottery",

     text: [
"{C:green}1 in 4{} chance",
"to win {C:gold}$20{}",
],

     image_url: "img/auxiliary/aux_lottery.png",

    rarity: "Auxiliary"
   },
{
     name: "Blank Card",

     text: [
"Does nothing..?",
],

     image_url: "img/auxiliary/aux_blank.png",

    rarity: "Auxiliary"
   },
{
     name: "Dark Matter",

     text: [
"Permanently gain",
"{C:dark_edition}+1{} Joker slot",
"{C:red}Cannot be Negative",
],

     image_url: "img/auxiliary/aux_dark_matter.png",

    rarity: "Auxiliary"
   },
{
     name: "The Question",

     text: [
"Creates up to {C:attention}2{}",
"random {C:auxiliary}Auxiliary{} cards",
"{C:inactive}(Must have room)",
],

     image_url: "img/auxiliary/aux_random.png",

    rarity: "Auxiliary"
   },

]

let consumables = [
  {
     name: "Time",

     text: [
"Enhances {C:attention}2{} ",
"selected cards to",
"{C:attention}Vintage Cards{}",
],

     image_url: "img/consumable/trt_time.png",

    rarity: "Tarot"
   },
{
     name: "The Acorn",

     text: [
"Enhances {C:attention}1{} selected",
"card into an",
"{C:attention}Acorn Mark Card{}",
],

     image_url: "img/consumable/trt_acorn.png",

    rarity: "Tarot"
   },
{
     name: "Greed",

     text: [
"Enhances {C:attention}2{} ",
"selected cards to",
"{C:attention}Promo Cards{}",
],

     image_url: "img/consumable/trt_greed.png",

    rarity: "Tarot"
   },
{
     name: "The Half",

     text: [
"Splits {C:attention}1{} selected {C:attention}integer-numbered rank{} card",
"into {C:attention}2{} cards with {C:attention}half the rank{} (rounded down).",
"If the initial rank is {C:attention}odd{}, also adds {C:attention}1{}",
"{C:attention}0.5 rank{} card of the same {C:attention}enhancement{}.",
],

     image_url: "img/consumable/trt_half.png",

    rarity: "Tarot"
   },
{
     name: "Knowledge",

     text: [
"Adds one random {C:attention}decimal-rank{} card",
"of {C:attention}1{} selected card's suit to hand",
],

     image_url: "img/consumable/trt_knowledge.png",

    rarity: "Tarot"
   },
{
     name: "Elixir of Life",

     text: [
"Heal all {C:red}Unhanced Cards{} in the deck",
"Reduce money by half {C:inactive}(rounded up){}",
],

     image_url: "img/consumable/spc_elixir.png",

    rarity: "Spectral"
   },
{
     name: "Vessel",

     text: [
"Select {C:attention}2{} cards,",
"destroy the {C:attention}left{} card",
"and give the corresponding {C:red}Suit Seal{}",
"to the {C:attention}right{} card",
"{C:inactive}(Drag to rearrange){}",
],

     image_url: "img/consumable/spc_vessel.png",

    rarity: "Spectral"
   },
{
     name: "Conferment",

     text: [
"Add a {C:attention}Face Seal{}",
"to {C:attention}2{} random cards",
"in your hand,",
"{C:red}-$8{} {C:inactive}(no debt limit){}",
],

     image_url: "img/consumable/spc_conferment.png",

    rarity: "Spectral"
   },
{
     name: "Amnesia",

     text: [
"Converts {C:attention}3{} random",
"cards in your hand",
"to {C:attention}Rank 0{}",
],

     image_url: "img/consumable/spc_amnesia.png",

    rarity: "Spectral"
   },
{
     name: "Altar",

     text: [
"Destroy {C:attention}3{} random",
"cards in your hand,",
"add {C:attention}2{} random {C:attention}Enhanced{}",
"{C:attention}21s{} to your hand",
],

     image_url: "img/consumable/spc_altar.png",

    rarity: "Spectral"
   },
{
     name: "Devil's Contract",

     text: [
"{C:purple}Upgrades {C:attention}1{} random",
"card in your hand",
"Randomly {C:red}unhances {C:attention}3{}",
"random cards in your hand",
],

     image_url: "img/consumable/spc_contract.png",

    rarity: "Spectral"
   },
{
     name: "Poltergeist",

     text: [
"Shuffles all",
"Jokers' {C:dark_edition}editions{}",
],

     image_url: "img/consumable/spc_poltergeist.png",

    rarity: "Spectral"
   },
{
     name: "Astral Projection",

     text: [
"Swap {C:dark_edition}editions{} between",
"the {C:attention}selected Joker{}",
"and the one {C:attention}to its right{}",
"{C:green}1 in 4{} chance that",
"one of the Jokers are {C:red}destroyed{}",
],

     image_url: "img/consumable/spc_projection.png",

    rarity: "Spectral"
   },
{
     name: "Siphon",

     text: [
"Destroys {C:attention}1{} selected {C:attention}Joker{}",
"with an {C:dark_edition}edition{}",
"Gives the {C:attention}Joker's {C:dark_edition}edition{} to",
"{C:attention}4{} random card in your hand",
"{C:inactive}({C:dark_edition}Negative{} excluded){}",
],

     image_url: "img/consumable/spc_siphon.png",

    rarity: "Spectral"
   },


]

let card_modifications = [
  {
     name: "Acorn Mark Card",

     text: [
"Gives {C:chips}double amount{} of chips when in hand,",
"does not give any chips when scored",
],

     image_url: "img/enhancement/enh_acorn.png",

    rarity: "Enhancement"
   },
{
     name: "Vintage Card",

     text: [
"Gains {C:chips}+4{} extra chips when scored",
"{C:green}0 in 25{} chance to destroy itself",
"{C:inactive}Chance increases by {C:green}+1{C:inactive} when scored{}",
],

     image_url: "img/enhancement/enh_vintage.png",

    rarity: "Enhancement"
   },
{
     name: "Promo Card",

     text: [
"Gives {C:gold}$0{} while this card stays in hand",
"Gains {C:gold}+$1{} when scored",
"{C:green}1 in 8{} chance to destroy when scored",
],

     image_url: "img/enhancement/enh_promo.png",

    rarity: "Enhancement"
   },
{
     name: "Slop Card",

     text: [
"Always scored",
"Random suit and rank after scored",
"Current: {C:attention}2{} of {C:hearts}Hearts{}",
],

     image_url: "img/enhancement/enh_slop.png",

    rarity: "Enhancement"
   },
{
     name: "Resource Card",

     text: [
"Has no rank, always scored.",
"Gives {X:mult,C:white}X5{} Mult",
"if the played hand has at least",
"one card with {C:attention}Corresponding Suit{}",
"{C:red}Destroys itself after scored{}",
"{C:inactive}(Does not count other Resource Cards){}",
],

     image_url: "img/enhancement/enh_resource.png",

    rarity: "Enhancement"
   },
]

let card_unhanced = [
  {
     name: "Radioactive Card",

     text: [
"{C:chips}+13{} Chips, no rank or suit",
"When played, {C:green}1 in 2{} chance to",
"convert other played cards to {C:attention}Radioactive Cards{}",
"",
"When held in hand, {C:green}1 in 3{} chance to give",
"{X:mult,C:white}X1.75{} Mult, otherwise gives {X:mult,C:white}X0.5{} Mult",
],

     image_url: "img/enhancement/enh_radioactive.png",

    rarity: "Unhancement"
   },
{
     name: "Biohazard Card",

     text: [
"{X:mult,C:white}X0.9{} Mult, no rank or suit",
"Lose {C:red}-$1{} while this card stays in hand",
"When discarded, {C:green}1 in 2{} chance to turn one random",
"card in the deck into {C:attention}Biohazard Card{}",
],

     image_url: "img/enhancement/enh_biohazard.png",

    rarity: "Unhancement"
   },
{
     name: "Poison Card",

     text: [
"Gives {C:red}negative amount{} of Chips",
"Goes back into deck",
"when discarded",
],

     image_url: "img/enhancement/enh_poison.png",

    rarity: "Unhancement"
   },
]

let card_seal = [
  {
     name: "Spade Seal",

     text: [
"This card also",
"counts as {C:spades}Spades{}",
],

     image_url: "img/seal/seal_spades.png",

    rarity: "Seal"
   },
{
     name: "Heart Seal",

     text: [
"This card also",
"counts as {C:hearts}Hearts{}",
],

     image_url: "img/seal/seal_hearts.png",

    rarity: "Seal"
   },
{
     name: "Club Seal",

     text: [
"This card also",
"counts as {C:clubs}Clubs{}",
],

     image_url: "img/seal/seal_clubs.png",

    rarity: "Seal"
   },
{
     name: "Diamond Seal",

     text: [
"This card also",
"counts as {C:diamonds}Diamonds{}",
],

     image_url: "img/seal/seal_diamonds.png",

    rarity: "Seal"
   },
{
     name: "Face Seal",

     text: [
"This card also",
"counts as {C:attention}face{} card",
],

     image_url: "img/seal/seal_face.png",

    rarity: "Seal"
   },
{
     name: "Heal Seal",

     text: [
"Removes {C:red}Unhancement{} from one",
"random card held in hand when scored.",
"This card also cannot be {C:red}Unhanced{}.",
],

     image_url: "img/seal/seal_heal.png",

    rarity: "Seal"
   },

]

let decks = [
  {
     name: "Utility Deck",

     text: [
"Start run with the",
"{C:auxiliary}Hardware Store{} voucher",
"and {C:attention}1{} copy of {C:auxiliary}The Question{},",
"{C:auxiliary}Auxiliary Cards{} can appear",
"in the {C:attention}shop{} more often",
],

     image_url: "img/deck/deck_util.png",

    rarity: "Deck"
   },
{
     name: "Lowkey Deck",

     text: [
"Start run with only",
"{C:attention}rank 0-5{} cards",
"and all {C:attention}decimal",
"{C:attention}ranks{} in between",
],

     image_url: "img/deck/deck_lowkey.png",

    rarity: "Deck"
   },
]

let stickers = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/sticker_example.png",
  //   rarity: "Sticker"
  // },
]

let blinds = [
  // {
  //   name: "The Wall",
  //   text: [
  //     "Extra large blind",
  //     "{C:inactive}({C:red}4x{C:inactive} Base for {C:attention}$$$$${C:inactive})",
  //     "{C:inactive}(Appears from Ante 2)"
  //   ],
  //   image_url: "img/the_wall.png",
  //   rarity: "Boss Blind"
  // },
  // {
  //   name: "Violet Vessel",
  //   text: [
  //     "Very large blind",
  //     "{C:inactive}({C:red}6x{C:inactive} Base for {C:attention}$$$$$$$${C:inactive})",
  //     "{C:inactive}(Appears from Ante 8)"
  //   ],
  //   image_url: "img/violet_vessel.png",
  //   rarity: "Showdown"
  // },
]

let shop_items = [
  {
     name: "Hardware Store",

     text: [
"{C:auxiliary}Auxiliary{} cards",
"can be purchased",
"from the {C:attention}shop{}",
],

     image_url: "img/voucher/v_aux1.png",

    rarity: "Voucher"
   },
{
     name: "Heavy Duty Tools",

     text: [
"{C:auxiliary}Auxiliary{} cards in",
"{C:attention}Expansion Packs{} can",
"sometimes be {C:dark_edition}Negative{}",
],

     image_url: "img/voucher/v_aux2.png",

    rarity: "Voucher"
   },
]

let cols = {
  
  MULT: "#FE5F55",
  CHIPS: "#009dff",
  MONEY: "#f3b958",
  XMULT: "#FE5F55",
  FILTER: "#ff9a00",
  ATTENTION: "#ff9a00",
  BLUE: "#009dff",
  RED: "#FE5F55",
  GREEN: "#4BC292",
  PALE_GREEN: "#56a887",
  ORANGE: "#fda200",
  IMPORTANT: "#ff9a00",
  GOLD: "#eac058",
  YELLOW: "#ffff00",
  CLEAR: "#00000000", 
  WHITE: "#ffffff",
  PURPLE: "#8867a5",
  BLACK: "#374244",
  L_BLACK: "#4f6367",
  GREY: "#5f7377",
  CHANCE: "#4BC292",
  JOKER_GREY: "#bfc7d5",
  VOUCHER: "#cb724c",
  BOOSTER: "#646eb7",
  EDITION: "#ffffff",
  DARK_EDITION: "#5d5dff",
  ETERNAL: "#c75985",
  INACTIVE: "#ffffff99",
  HEARTS: "#f03464",
  DIAMONDS: "#f06b3f",
  SPADES: "#403995",
  CLUBS: "#235955",
  ENHANCED: "#8389DD",
  JOKER: "#708b91",
  TAROT: "#a782d1",
  PLANET: "#13afce",
  SPECTRAL: "#4584fa",
  VOUCHER: "#fd682b",
  EDITION: "#4ca893",
  AUXILIARY: "#00a669",
}

let rarities = {
  "Common": "#009dff", 
  "Uncommon": "#4BC292",
  "Rare": "#fe5f55",
  "Legendary": "#b26cbb",
  "Joker": "#708b91",
  "Tarot": "#a782d1",
  "Planet": "#13afce",
  "Spectral": "#4584fa",
  "Voucher": "#fd682b",
  "Pack": "#9bb6bd",
  "Enhancement": "#8389DD",
  "Edition": "#4ca893",
  "Seal": "#4584fa",
  "Deck": "#9bb6bd",
  "Sticker": "#5d5dff",
  "Boss Blind": "#5d5dff",
  "Showdown": "#4584fa",
  "Auxiliary": "#00a669",
  "Unhancement": "#FE5F55",
}

regex = /{([^}]+)}/g;

let add_cards_to_div = (jokers, jokers_div) => {
  for (let joker of jokers) {
    console.log("adding joker", joker.name);
  
    joker.text = joker.text.map((line) => { return line + "{}"});
  
    joker.text = joker.text.join("<br/>");
    joker.text = joker.text.replaceAll("{}", "</span>");
    joker.text = joker.text.replace(regex, function replacer(match, p1, offset, string, groups) {
      let classes = p1.split(",");
  
      let css_styling = "";
  
      for (let i = 0; i < classes.length; i++) {
        let parts = classes[i].split(":");
        if (parts[0] === "C") {
          css_styling += `color: ${cols[parts[1].toUpperCase()]};`;
        } else if (parts[0] === "X") {
          css_styling += `background-color: ${cols[parts[1].toUpperCase()]}; border-radius: 5px; padding: 0 5px;`;
        }
      }
  
      return `</span><span style='${css_styling}'>`;
    });
  
    let joker_div = document.createElement("div");
    joker_div.classList.add("joker");
    if (joker.rarity === "Sticker" || joker.rarity == "Seal") {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <img src="${joker.image_url}" alt="${joker.name}" class="hasback" />
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    } else if (joker.soul) {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <span class="soulholder">
          <img src="${joker.image_url}" alt="${joker.name}" class="soul-bg" />
          <img src="${joker.image_url}" alt="${joker.name}" class="soul-top" />
        </span>
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    } else {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <img src="${joker.image_url}" alt="${joker.name}" />
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    }
  
    jokers_div.appendChild(joker_div);
  }
}

if (jokers.length === 0) {
  document.querySelector(".jokersfull").style.display = "none"
} else {
  let jokers_div = document.querySelector(".jokers");
  add_cards_to_div(jokers, jokers_div);
}

if (auxiliary.length === 0) {
  document.querySelector(".auxiliaryfull").style.display = "none"
} else {
  let auxiliary_div = document.querySelector(".auxiliary");
  add_cards_to_div(auxiliary, auxiliary_div);
}

if (consumables.length === 0) {
  document.querySelector(".consumablesfull").style.display = "none"
} else {
  let consumables_div = document.querySelector(".consumables");
  add_cards_to_div(consumables, consumables_div);
}

if (card_modifications.length === 0) {
  document.querySelector(".cardmodsfull").style.display = "none"
} else {
  let cardmods_div = document.querySelector(".cardmods");
  add_cards_to_div(card_modifications, cardmods_div);
}

if (card_unhanced.length === 0) {
  document.querySelector(".carddisenfull").style.display = "none"
} else {
  let cardmods_div = document.querySelector(".disench");
  add_cards_to_div(card_unhanced, cardmods_div);
}

if (card_seal.length === 0) {
  document.querySelector(".cardsealsfull").style.display = "none"
} else {
  let cardseal_div = document.querySelector(".cardseals");
  add_cards_to_div(card_seal, cardseal_div);
}

if (decks.length === 0) {
  document.querySelector(".decksfull").style.display = "none"
} else {
  let decks_div = document.querySelector(".decks");
  add_cards_to_div(decks, decks_div);
}

if (stickers.length === 0) {
  document.querySelector(".stickersfull").style.display = "none"
} else {
  let stickers_div = document.querySelector(".stickers");
  add_cards_to_div(stickers, stickers_div);
}

if (blinds.length === 0) {
  document.querySelector(".blindsfull").style.display = "none"
} else {
  let blinds_div = document.querySelector(".blinds");
  add_cards_to_div(blinds, blinds_div);
}

if (shop_items.length === 0) {
  document.querySelector(".shopitemsfull").style.display = "none"
} else {
  let shopitems_div = document.querySelector(".shopitems");
  add_cards_to_div(shop_items, shopitems_div);
}