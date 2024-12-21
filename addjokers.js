let jokers = [
  {
    name: "Lunar Calendar",

    text: [
"Played cards with",
"{V:1}#1#{} suit has",
"{C:green}#2# in #3#{} chance to create",
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
"Gives {C:mult}+#1#{} Mult for",
"every {C:attention}#2#{} consumables",
"held in hand",
"{C:inactive}(Currently {C:mult}+#3#{C:inactive} Mult)",
],

    image_url: "img/joker/dragon_hoard.png",

   rarity: "Common"
  },
{
    name: "Card Dealer",

    text: [
"{C:chips}+#1#{} Chips per {C:attention}played{}",
"cards this round",
"{C:attention}Resets{} at the end",
"of the round",
"{C:inactive}(Currently {C:chips}+#2#{C:inactive} Chips)",
],

    image_url: "img/joker/card_dealer.png",

   rarity: "Common"
  },
{
    name: "Match Three",

    text: [
"{C:mult}+#1#{} Mult if the scoring hand has",
"{C:attention}#2#{} or more adjacent cards",
"with the {C:attention}same base suit{}",
],

    image_url: "img/joker/match_three.png",

   rarity: "Common"
  },
{
    name: "Furry Joker",

    text: [
"Played {C:attention}Wild Card{} has",
"{C:green}#1# in #2#{} chance to",
"turns {C:dark_edition}Polychrome{} when scored",
],

    image_url: "img/joker/furry_joker.png",

   rarity: "Common"
  },
{
    name: "Luxurious Handbag",

    text: [
"{C:attention}+#1#{} Consumable Slot",
"{C:red}Raises price{} of everything in",
"shop (except reroll) by {C:gold}$#2#{}",
],

    image_url: "img/joker/luxurious_handbag.png",

   rarity: "Common"
  },
{
    name: "Portal",

    text: [
"{C:attention}Aces{} can be used in a",
"middle of a {C:purple}Straight{} hand",
"{C:inactive}(Ex: 3 2 Ace King Queen)",
],

    image_url: "img/joker/portal.png",

   rarity: "Common"
  },
{
    name: "Vainglorious Joker",

    text: [
"Played cards with",
"{C:attention}Suit Seal{} gives",
"{C:attention}+#1#{} Mult when scored",
],

    image_url: "img/joker/vainglorious_joker.png",

   rarity: "Common"
  },
{
    name: "Acedia Joker",

    text: [
"Played cards with",
"{C:attention}Suit Seal{} in the same",
"{C:purple}suit category{} of the cards suit gives",
"{C:attention}+#1#{} Mult when scored",
],

    image_url: "img/joker/acedia_joker.png",

   rarity: "Common"
  },
{
    name: "Cinnabar",

    text: [
"Played cards with",
"{C:attention}Suit Seal{} has",
"{C:green}#1# in #2#{} chance to create respective",
"{C:auxiliary}Seal Auxiliary{} Card when scored",
"{C:inactive}(Must have room)",
],

    image_url: "img/joker/cinnabar.png",

   rarity: "Common"
  },
{
    name: "Black Jack",

    text: [
"This Joker gains {C:chips}Chips{} equals to total rank",
"of the played hand if it is under {C:attention}#1#{}.",
"Doubled the amount of gained chips if the total rank is exactly {C:attention}#1#{}.",
"Resets if the total rank is more than {C:attention}#1#{}.",
"{C:inactive}(Currently {C:chips}+#2#{C:inactive} Chips)",
],

    image_url: "img/joker/black_jack.png",

   rarity: "Common"
  },
{
    name: "What",

    text: [
"Each played {C:attention}???{}",
"gives {C:chips}+#1#{} Chips and",
"{C:mult}+#2#{} Mult when scored",
],

    image_url: "img/joker/what.png",

   rarity: "Common"
  },
{
    name: "Floating-Point Error",

    text: [
"Scored cards with {C:attention}Decimal Rank{}",
"Gains {C:chips}extra chips{} equal to its own {C:attention}rank{}",
],

    image_url: "img/joker/floating_point_error.png",

   rarity: "Common"
  },
{
    name: "Academic Journal",

    text: [
"Adds one random {C:attention}Enhanced Card{}",
"with {C:attention}decimal rank{} to deck if",
"the played hand does not have {C:attention}face card{}",
"{C:inactive}(Once per round. Currently {C:red}#1#/#2#{C:inactive})",
],

    image_url: "img/joker/academic_journal.png",

   rarity: "Common"
  },
{
    name: "Engineer",

    text: [
"Card with {C:attention}decimal ranks{} counts as",
"the nearest {C:attention}integer rank{} rounded up when",
"played in non-{C:purple}Straight{} hands.",
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

   rarity: "Common"
  },
{
    name: "Rainbow Flag",

    text: [
"If a hand containing {C:purple}Straight{} has",
"at least 1 {C:attention}decimal rank{} cards",
"{C:green}#1# in #2#{} chance to turns",
"one of the card {C:dark_edition}Polychrome{}",
],

    image_url: "img/joker/rainbow_flag.png",

   rarity: "Common"
  },
{
    name: "Dummy Data",

    text: [
"For each {C:attention}unscored cards{}",
"{C:green}#1# in #2#{} chance to",
"Converts rank to {C:attention}0{}",
"(Retains amount of chips)",
],

    image_url: "img/joker/dummy_data.png",

   rarity: "Common"
  },
{
    name: "Micro SD Card",

    text: [
"If this Joker is in the {C:attention}leftmost position{}",
"take all {C:chips}chips{} from discarded base {C:attention}numbered cards{}",
"Strips cards rank to {C:attention}0{}",
"{C:green}#1# in #2#{} chance to destroy itself at the end of round",
"Chance increases by the amount of chip stored",
"{C:inactive}(Currently {C:chips}+#4#{C:inactive} Chips)",
"{C:inactive}Status: {V:1}#5#{}",
],

    image_url: "img/joker/micro_sd_card.png",

   rarity: "Common"
  },
{
    name: "Social Experiment",

    text: [
"For each {C:attention}Numbered Cards{}",
"Double all chips and give it to next card",
"Strips cards rank to {C:attention}0{}",
],

    image_url: "img/joker/social_experiment.png",

   rarity: "Common"
  },
{
    name: "Power of One",

    text: [
"Gains {C:mult}+#1#{} Mult for each",
"{C:attention}1{} in your {C:attention}full deck{}",
"{C:inactive}(Currently {C:mult}+#2#{C:inactive})",
],

    image_url: "img/joker/power_of_one.png",

   rarity: "Common"
  },
{
    name: "Binary Number",

    text: [
"If the {C:attention}full played hand{} only have {C:attention}four or less{} cards",
"and only consists of {C:attention}rank 0{} and {C:attention}1{} cards",
"Creates a card with rank equal",
"to number represented in binary",
"({C:red}Ex:{} {C:attention}1001{} -> {C:attention}9{})",
"{C:inactive}Jack Queen King Ace is 11-14 respectively{}",
],

    image_url: "img/joker/binary_number.png",

   rarity: "Common"
  },
{
    name: "Quintuplets",

    text: [
"If the winning hand is {C:attention}Flush Five{}",
"with all {C:attention}Enhanced cards{}",
"Create {C:dark_edition}Negative Tag{}",
],

    image_url: "img/joker/quintuplets.png",

   rarity: "Common"
  },
{
    name: "Graphic Card",

    text: [
"Create {C:attention}Double Tag{}",
"at the end of the round",
"if scored {C:attention}#1#{} or more cards",
"with {C:dark_edition}editions{} this round",
"{C:inactive}(Current: {C:attention}#2#{C:inactive})",
],

    image_url: "img/joker/graphic_card.png",

   rarity: "Common"
  },
{
    name: "Connoiseur",

    text: [
"Retrigger all played cards",
"with {C:dark_edition}editions{}",
],

    image_url: "img/joker/connoiseur.png",

   rarity: "Common"
  },
{
    name: "Jeweler",

    text: [
"{C:green}#1# in #2#{} chance to downgrade",
"level of played {C:attention}poker hand{}",
"and {C:attention}upgrade{} edition",
"of all scored cards",
],

    image_url: "img/joker/jeweler.png",

   rarity: "Common"
  },
{
    name: "Joker Diffusion",

    text: [
"Converts {C:attention}#1#{} random {C:attention}non-enhanced{} card",
"in hand to {C:attention}Slop Card{} every time",
"a hand is played with {C:attention}unscored card{}",
],

    image_url: "img/joker/joker_diffusion.png",

   rarity: "Common"
  },
{
    name: "Non-Fungible Joker",

    text: [
"If the discarded hand contains",
"only {C:attention}#1# Slop Card{} destroy it and",
"earn random amount up to {C:gold}$#2#",
"{s:0.8C:red}Maximum Payout and Sell Value drops at the end of the round",
],

    image_url: "img/joker/nonfungible_joker.png",

   rarity: "Common"
  },
{
    name: "Prompt",

    text: [
"Scored {C:attention}Slop Card{} takes {C:attention}rank{} and {C:attention}suit",
"from other scored {C:attention}non-Slop Card{}",
"instead of random if possible",
],

    image_url: "img/joker/prompt.png",

   rarity: "Common"
  },
{
    name: "Uninterested Primate",

    text: [
"Gains {C:chips}+#1#{} Chips every {C:attention}#2# {C:inactive}#6#",
"{C:attention}Slop Cards{} scored.",
"{C:green}#3# in #4#{} chance to destroy",
"itself at the end of the round",
"{C:inactive}(Currently: {C:chips}+#5# {C:inactive}Chips)",
],

    image_url: "img/joker/uninterested_primate.png",

   rarity: "Common"
  },
{
    name: "Lethargic Lion",

    text: [
"Gains {X:mult, C:white}X#1#{} Mult every {C:attention}#2# {C:inactive}#6#",
"{C:attention}Slop Cards{} scored.",
"{C:green}#3# in #4#{} chance to destroy",
"itself at the end of the round",
"{C:inactive}(Currently: {X:mult, C:white}X#5#{C:inactive} Mult)",
],

    image_url: "img/joker/lethargic_lion.png",

   rarity: "Common"
  },
{
    name: "Joker Island",

    text: [
"For every played card",
"with rank {C:attention}#1#{}",
"{C:green}#2# in #3#{} chance to create",
"a new {C:attention}Resource Card{} of the same scored suit",
],

    image_url: "img/joker/joker_island.png",

   rarity: "Common"
  },
{
    name: "Kaiju",

    text: [
"{C:dark_edition}+#1#{} Joker Slot",
"Turns one random card",
"into {C:attention}Radioactive Card{} when",
"first hand is drawn",
],

    image_url: "img/joker/kaiju.png",

   rarity: "Common"
  },
{
    name: "Poison the Well",

    text: [
"{C:red}+#1#{} Discards",
"Turns one random card in each discarded hand",
"into {C:attention}Poison Card{}",
],

    image_url: "img/joker/poison_the_well.png",

   rarity: "Common"
  },
{
    name: "Petri Dish",

    text: [
"{C:blue}+#1#{} Hands",
"{C:green}#2# in #3#{} chance of turning",
"one random played card",
"into {C:attention}Biohazard Card{}",
],

    image_url: "img/joker/petri_dish.png",

   rarity: "Common"
  },
{
    name: "Geiger Counter",

    text: [
"Gives {C:mult}+#1#{} Mult for each",
"{C:attention}Radioactive Card{} in your {C:attention}full deck{}",
"{C:inactive}(Currently {C:mult}+#2#{C:inactive} Mult)",
],

    image_url: "img/joker/geiger_counter.png",

   rarity: "Common"
  },
{
    name: "Strych-Nine",

    text: [
"Gives {C:chips}+#1#{} Chips for each",
"{C:attention}Poison Card{} in your {C:attention}full deck{}",
"{C:inactive}(Currently {C:chips}+#2#{C:inactive} Chips)",
],

    image_url: "img/joker/strych_nine.png",

   rarity: "Common"
  },
{
    name: "Vaccination Card",

    text: [
"Neutralize all {C:attention}Biohazard Card{} passive effects",
"Gives additional {X:mult, C:white}X#1#{} Mult for each",
"{C:attention}Biohazard Card{} held in hand.",
"{C:inactive}(Currently {X:mult, C:white}X#2#{C:inactive} Mult)",
],

    image_url: "img/joker/vaccination_card.png",

   rarity: "Common"
  },
{
    name: "Vintage Joker",

    text: [
"Scored {C:attention}Vintage Cards{} have",
"{C:green}#1# in #2#{} chance to reduce",
"the destroyed chance by half",
],

    image_url: "img/joker/vintage_joker.png",

   rarity: "Common"
  },
{
    name: "Rules Errata",

    text: [
"{C:attention}Acorn Mark Cards{} give {C:attention}half{} of a",
"ranks value as Mult when scored",
],

    image_url: "img/joker/rules_errata.png",

   rarity: "Common"
  },
{
    name: "Auction Winner",

    text: [
"If {C:attention}Promo Card{} is destroyed after scored",
"gains {C:gold}money{} equals to amount the card",
"gives before breaks",
],

    image_url: "img/joker/auction_winner.png",

   rarity: "Common"
  },
{
    name: "Free Trial",

    text: [
"{C:green}#1# in #2#{} chance to create",
"a {C:dark_edition}negative{} random {C:auxiliary}Auxiliary{} Card",
"when an {C:auxiliary}Auxiliary{} Card is used",
],

    image_url: "img/joker/free_trial.png",

   rarity: "Common"
  },
{
    name: "Extended Warranty",

    text: [
"{C:auxiliary}Auxiliary{} Cards held in hand",
"give {X:mult, C:white}X#1#{} Mult",
],

    image_url: "img/joker/extended_warranty.png",

   rarity: "Common"
  },
{
    name: "Technician",

    text: [
"{C:chips}+#1#{} Chips per {C:auxiliary}Auxiliary{}",
"card used this run",
"{C:inactive}(Currently {C:chips}+#2#{C:inactive} Chips){}",
],

    image_url: "img/joker/technician.png",

   rarity: "Common"
  },
{
    name: "Season Pass",

    text: [
"{C:green}#1# in #2#{} chance to create",
"a random {C:auxiliary}Auxiliary{} Card",
"when discard a {C:attention}face{} card",
"{C:inactive}(Must have room)",
],

    image_url: "img/joker/season_pass.png",

   rarity: "Common"
  },
{
    name: "Joker2",

    text: [
"{C:mult}+#1#{} Mult",
"{X:mult, C:white}X#2#{} Mult",
"{C:green}#3# in #4#{} chance of destroying itself",
"at the end of round",
],

    image_url: "img/joker/joker2.png",

   rarity: "Common"
  },
{
    name: "Joker Stairs",

    text: [
"Gain {C:mult}+#1#{} Mult when buying a joker",
"with {C:attention}Joker{} in the name.",
"{C:inactive}(Currently {C:mult}+#2#{C:inactive} Mult){}",
],

    image_url: "img/joker/joker_stairs.png",

   rarity: "Common"
  },
{
    name: "Plagiarism",

    text: [
"Copies ability of",
"{C:attention}Joker{} to the",
"left or right at random",
"{s:0.8}Direction changes each hands played",
"{C:inactive}(Currently: {C:red}#1#{C:inactive})",
],

    image_url: "img/joker/plagiarism.png",

   rarity: "Common"
  },
{
    name: "Joker Throwing Card",

    text: [
"Decrease blind size by {C:attention}#1#%{}",
"{C:green}#2# in #3#{} chance to destroy",
"one of the scored card",
"Increases percentage by {C:attention}#4#%{}",
"if a card is destroyed this way",
],

    image_url: "img/joker/joker_throwing_card.png",

   rarity: "Common"
  },
{
    name: "Jackhammer",

    text: [
"If the {C:attention}scoring hand{} has only one {C:attention}Jack{}",
"retrigger it {C:attention}#1#{} more times",
"and {C:red}destroy it{} afterward",
],

    image_url: "img/joker/jackhammer.png",

   rarity: "Common"
  },
{
    name: "Jack of All Trades",

    text: [
"Played {C:attention}Jack{} gives",
"{C:chips}+#1#{} Chips {C:mult}+#2#{} Mult",
"{X:mult, C:white}X#3#{} XMult and {C:gold}$#4#",
],

    image_url: "img/joker/jack_of_all_trades.png",

   rarity: "Common"
  },
{
    name: "Magic Trick Card",

    text: [
"Scored {V:1}#1#",
"turns into {V:2}#2#",
"{s:0.8}On discard flips over the Joker",
],

    image_url: "img/joker/magic_trick_card.png",

   rarity: "Common"
  },
{
    name: "Queensland",

    text: [
"Played {C:attention}Queen{} creates",
"{C:attention}Resource Card{} of",
"the corresponding suit.",
"{C:inactive}({C:red}#1#{C:inactive} times per round {C:red}#2# left{C:inactive})",
],

    image_url: "img/joker/queensland.png",

   rarity: "Common"
  },
{
    name: "Polychrome Red Seal Steel Joker",

    text: [
"{C:green}#1# in #2#{} chance for scored {C:attention}Kings{} to upgrade {C:dark_edition}edition",
"{C:green}#1# in #3#{} chance for scored {C:attention}Kings{} to {C:attention}retrigger",
"{C:green}#1# in #4#{} chance for {C:attention}Kings{} held in hand to give {X:mult, C:white}X#5#{} Mult",
],

    image_url: "img/joker/prssj.png",

   rarity: "Common"
  },
{
    name: "King of Pop",

    text: [
"Played {C:attention}Enhanced Kings{} have",
"{C:green}#1# in #2#{} chance to be",
"destroyed and create 1 {C:dark_edition}Double Tag",
],

    image_url: "img/joker/king_of_pop.png",

   rarity: "Common"
  },
{
    name: "Master of One",

    text: [
"Adds one {C:attention}Enhanced Rank 1{} Card",
"to the deck when {C:attention}Blind{} is selected",
],

    image_url: "img/joker/master_of_one.png",

   rarity: "Common"
  },
{
    name: "Spectre",

    text: [
"{X:mult, C:white}X#1#{} Mult per {C:spectral}Spectral{}",
"card used this run",
"{C:inactive}(Currently {X:mult, C:white}X#2#{C:inactive} Mult){}",
],

    image_url: "img/joker/spectre.png",

   rarity: "Common"
  },
{
    name: "Library Card",

    text: [
"For each scoring cards {C:attention}singular",
"{C:attention}suit name{} in English. Give:",
"{C:chips}+#1#{} Chips per {C:attention}Consonant",
"{C:mult}+#2#{} Mult per {C:attention}Vowel",
"{C:inactive}(Example: Spade",
],

    image_url: "img/joker/library_card.png",

   rarity: "Common"
  },
{
    name: "Collectors Album",

    text: [
"Jokers with {C:attention}Card{} in",
"the name each gives",
"{C:chips}+#1#{} Chips",
],

    image_url: "img/joker/collector_album.png",

   rarity: "Common"
  },
{
    name: "Throwing Hands",

    text: [
"{X:mult, C:white}X#1#{} Mult if the played hand is {C:attention}#3#{}",
"{X:mult, C:white}X#2#{} Mult otherwise",
"{s:0.8}Hand changes at the end of round",
],

    image_url: "img/joker/throwing_hands.png",

   rarity: "Common"
  },
{
    name: "Imperial Bower",

    text: [
"{X:mult, C:white}X#1#{} Mult if the played hand",
"contains a {C:attention}Straight{} and",
"has at least one {C:attention}face card{}",
],

    image_url: "img/joker/imperial_bower.png",

   rarity: "Common"
  },
{
    name: "The Jolly Joker",

    text: [
"Gains {C:mult}+#1#{} Mult if",
"played hand contains {C:attention}Pair{}",
"{C:red}Resets{} if played hand",
"does not contain {C:attention}Pair{}",
"{C:inactive}(Currently {C:mult}+#2#{C:inactive} Mult)",
],

    image_url: "img/joker/the_jolly_joker.png",

   rarity: "Common"
  },
{
    name: "Get Out of Jail Free Card",

    text: [
"Sell this Joker to",
"win the blind instantly",
"{C:inactive}Status: {V:1}#1#{}",
],

    image_url: "img/joker/get_out_of_jail_free_card.png",

   rarity: "Common"
  },
{
    name: "Tanzaku",

    text: [
"Retrigger played card",
"with {C:attention}seal{} additional {C:attention}#1#{} times",
"Amount increase by {C:attention}#2#{} for",
"every discarded card with {C:attention}seal{}",
"{s:0.8}Reset after each round",
],

    image_url: "img/joker/tanzaku.png",

   rarity: "Common"
  },
{
    name: "Glass Cannon",

    text: [
"Retrigger each",
"played {C:attention}Glass Card{}",
"{C:red}Glass Cards are guaranteed",
"{C:red}breaking after scored",
],

    image_url: "img/joker/glass_cannon.png",

   rarity: "Common"
  },
{
    name: "Pity Rate Drop",

    text: [
"When {C:attention}Blind{} is selected",
"{C:green}#1# in #2#{} chance to create {C:red}Rare {C:attention}Joker{}",
"Chance increase by {C:green}#3#{} if no {C:attention}Joker{} created",
"resets to {C:green}#4#{} otherwise.",
"{C:inactive}(Must have room)",
],

    image_url: "img/joker/pity_rate_drop.png",

   rarity: "Common"
  },
{
    name: "Salmon Run",

    text: [
"{C:green}#1# in #2#{} chance of",
"duplicating any scored {C:attention}7{}",
],

    image_url: "img/joker/salmon_run.png",

   rarity: "Common"
  },
{
    name: "Cool S",

    text: [
"Played {C:attention}8s{} became",
"a random {C:attention}enhanced card{}",
],

    image_url: "img/joker/cool_s.png",

   rarity: "Common"
  },
{
    name: "Memoriam Photo",

    text: [
"When a playing card is {C:attention}destroyed{}",
"gains {C:chips}Chips{} equal to {C:attention}double{}",
"the rank of the {C:attention}destroyed card{}",
"{C:inactive}(Current: {C:chips}+#1#{C:inactive} Chips)",
],

    image_url: "img/joker/memoriam_photo.png",

   rarity: "Common"
  },
{
    name: "Schrödingers Cat",

    text: [
"When a playing card is {C:attention}destroyed{}",
"{C:green}#1# in #2#{} chance to add",
"a copy of the card to your deck",
],

    image_url: "img/joker/schrodinger_cat.png",

   rarity: "Common"
  },
{
    name: "Cashback Card",

    text: [
"At the end of {C:attention}Boss Blind{}",
"earn {C:gold}money{} equals to amount",
"of {C:attention}consumables{} used this Ante",
"{C:inactive}(Current: {C:gold}$#1#{C:inactive})",
],

    image_url: "img/joker/cashback_card.png",

   rarity: "Common"
  },
{
    name: "Raffle",

    text: [
"At the end of shop",
"{C:green}#1# in #2#{} chance to win {C:gold}$#3#",
"Chance increases by {C:green}#4#{}",
"per each purchase in the shop",
"{s:0.8 C:red}Resets after rolling the prize",
],

    image_url: "img/joker/raffle.png",

   rarity: "Common"
  },
{
    name: "IC Card",

    text: [
"Gain {C:gold}$#1#{} to store in this card",
"every time a hand is played",
"When spending money the {C:attention}balances",
"in this card are used first.",
"{C:red}Only usable for #2# rounds",
"{C:inactive}(Current: {C:gold}$#3#{C:inactive} {C:red}#4# Rounds left{C:inactive}){}",
],

    image_url: "img/joker/ic_card.png",

   rarity: "Common"
  },
{
    name: "2048",

    text: [
"If played hand contains {C:attention}Pair{} of rank",
"with power of two {C:attention}(2 4 8){}",
"destroy the left one and gives all chips to another",
"{C:inactive}(Drag to rearrange){}",
],

    image_url: "img/joker/j2048.png",

   rarity: "Common"
  },
{
    name: "Inductor",

    text: [
"For every played card with",
"the same rank and suits",
"{C:green}#1# in #2#{} chance to copy {C:attention}Enhancement{}",
"{C:green}#1# in #3#{} chance to copy {C:attention}Edition{}",
"{C:green}#1# in #4#{} chance to copy {C:attention}Seal{}",
],

    image_url: "img/joker/inductor.png",

   rarity: "Common"
  },
]

// works the same. 

let auxiliary = [
  {
    name: "Essence of Spades",

    text: [
"Adds {V:1}#2#{} onto",
"{C:attention}#1#{} selected cards.",
],

    image_url: "img/auxiliary/aux_spades.png",

   rarity: "Auxiliary"
  },
{
    name: "Essence of Hearts",

    text: [
"Adds {V:1}#2#{} onto",
"{C:attention}#1#{} selected cards.",
],

    image_url: "img/auxiliary/aux_hearts.png",

   rarity: "Auxiliary"
  },
{
    name: "Essence of Clubs",

    text: [
"Adds {V:1}#2#{} onto",
"{C:attention}#1#{} selected cards.",
],

    image_url: "img/auxiliary/aux_clubs.png",

   rarity: "Auxiliary"
  },
{
    name: "Essence of Diamonds",

    text: [
"Adds {V:1}#2#{} onto",
"{C:attention}#1#{} selected cards.",
],

    image_url: "img/auxiliary/aux_diamonds.png",

   rarity: "Auxiliary"
  },
{
    name: "Possessions",

    text: [
"Adds {C:attention}Face Seal{} onto",
"{C:attention}#1#{} selected cards.",
],

    image_url: "img/auxiliary/aux_face.png",

   rarity: "Auxiliary"
  },
{
    name: "+2",

    text: [
"Adds {C:attention}#1#{} cards of any ranks",
"with same suit of selected card to hand",
],

    image_url: "img/auxiliary/aux_plus_two.png",

   rarity: "Auxiliary"
  },
{
    name: "Wild +4",

    text: [
"Adds {C:attention}#1#{} cards of any suits",
"with same rank of selected card to hand",
],

    image_url: "img/auxiliary/aux_plus_four_wild.png",

   rarity: "Auxiliary"
  },
{
    name: "The Past",

    text: [
"{C:red}+#1#{} discards this round",
],

    image_url: "img/auxiliary/aux_inst_disc.png",

   rarity: "Auxiliary"
  },
{
    name: "The Present",

    text: [
"{C:attention}+#1#{} hand size this round",
],

    image_url: "img/auxiliary/aux_inst_hsize.png",

   rarity: "Auxiliary"
  },
{
    name: "The Future",

    text: [
"{C:blue}+#1#{} hands this round",
],

    image_url: "img/auxiliary/aux_inst_hand.png",

   rarity: "Auxiliary"
  },
{
    name: "Seal Exchange",

    text: [
"Swaps {C:attention}seal{} between two selected cards",
],

    image_url: "img/auxiliary/aux_seal_move.png",

   rarity: "Auxiliary"
  },
{
    name: "All for One",

    text: [
"Selects up to {C:attention}#1#{} cards",
"to converts into rank 1",
],

    image_url: "img/auxiliary/aux_conv_1.png",

   rarity: "Auxiliary"
  },
{
    name: "The Twenty-One",

    text: [
"Selects up to {C:attention}#1#{} cards",
"with total ranks of {C:attention}21 or more{}.",
"Destroys all selected cards and gets one",
"{C:attention}rank 21{} card of a random suit.",
],

    image_url: "img/auxiliary/aux_21.png",

   rarity: "Auxiliary"
  },
{
    name: "Monkey Paw",

    text: [
"Selects {C:attention}1{} card to {C:attention}upgrade edition{}",
"Turns adjacent cards into {C:attention}Poison Card{}",
"{C:inactive}(Loops around){}",
],

    image_url: "img/auxiliary/aux_upgrade.png",

   rarity: "Auxiliary"
  },
{
    name: "Heal Guardian",

    text: [
"Adds {C:attention}Heal Seal{} onto",
"{C:attention}#1#{} selected cards.",
],

    image_url: "img/auxiliary/aux_heal.png",

   rarity: "Auxiliary"
  },
{
    name: "Heal Aura",

    text: [
"Heal all {C:attention}Unhanced Cards{}",
"holding in hand",
],

    image_url: "img/auxiliary/aux_heal_hand.png",

   rarity: "Auxiliary"
  },
{
    name: "Lottery",

    text: [
"{C:green}#1# in #2#{} chance",
"to win {C:gold}$#3#{}",
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
"{C:dark_edition}+#1#{} Joker Slot",
"{C:red}Cannot be Negative",
],

    image_url: "img/auxiliary/aux_dark_matter.png",

   rarity: "Auxiliary"
  },
{
    name: "The Question",

    text: [
"Create {C:attention}#1#{} random",
"{C:auxiliary}Auxiliary{} Card",
"{C:inactive}(Must have room)",
],

    image_url: "img/auxiliary/aux_random.png",

   rarity: "Auxiliary"
  },

]

let consumables = [
  {
    name: "The Time",

    text: [
"Enhances {C:attention}#1#{}",
"selected cards to",
"{C:attention}Vintage Cards{}",
],

    image_url: "img/consumable/trt_time.png",

   rarity: "Tarot"
  },
{
    name: "The Acorn",

    text: [
"Enhances {C:attention}#1#{}",
"selected cards to",
"{C:attention}Acorn Mark Cards{}",
],

    image_url: "img/consumable/trt_acorn.png",

   rarity: "Tarot"
  },
{
    name: "The Greed",

    text: [
"Enhances {C:attention}#1#{}",
"selected cards to",
"{C:attention}Promo Cards{}",
],

    image_url: "img/consumable/trt_greed.png",

   rarity: "Tarot"
  },
{
    name: "The Half",

    text: [
"Splits the {C:attention}integer-numbered rank{} cards",
"into two cards with {C:attention}half a rank{} (rounded down)",
"If the initial rank is {C:attention}odd{}",
"adds one {C:attention}0.5 rank{} card {C:attention}of the same enhancement{} as well",
],

    image_url: "img/consumable/trt_half.png",

   rarity: "Tarot"
  },
{
    name: "The Knowledge",

    text: [
"Adds one random {C:attention}decimal-rank{} card",
"of the selected suit to hand",
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
"Selects {C:attention}2{} card",
"destroy the {C:attention}left{} card",
"and gives corresponding {C:red}Suit Seal{}",
"to the {C:attention}right{} card",
"{C:inactive}(Drags to rearrange){}",
],

    image_url: "img/consumable/spc_vessel.png",

   rarity: "Spectral"
  },
{
    name: "Conferment",

    text: [
"Add a {C:attention}Face Seal{}",
"to {C:attention}#1#{} random cards",
"in your hand",
"{C:red}-$#2#{} {C:inactive}(no debt limit){}",
],

    image_url: "img/consumable/spc_conferment.png",

   rarity: "Spectral"
  },
{
    name: "Amnesia",

    text: [
"Converts {C:attention}#1#{} random",
"cards in your hand",
"to {C:attention}Rank 0{}",
],

    image_url: "img/consumable/spc_amnesia.png",

   rarity: "Spectral"
  },
{
    name: "Altar",

    text: [
"Destroy {C:attention}#1#{} random",
"cards in your hand",
"add {C:attention}#2#{} random {C:attention}Enhanced{}",
"{C:attention}21s{} to your hand",
],

    image_url: "img/consumable/spc_altar.png",

   rarity: "Spectral"
  },
{
    name: "Devil's Contract",

    text: [
"{C:purple}Upgrades {C:attention}#1#{} random",
"card in your hand",
"converts {C:attention}#2#{} random",
"cards in your hand into",
"{C:attention}random {C:red}Unhancement{}",
],

    image_url: "img/consumable/spc_contract.png",

   rarity: "Spectral"
  },
{
    name: "Poltergeist",

    text: [
"Shuffles all",
"Jokers {C:dark_edition}edition{}",
],

    image_url: "img/consumable/spc_poltergeist.png",

   rarity: "Spectral"
  },
{
    name: "Astral Projection",

    text: [
"Swap {C:dark_edition}editions{} between",
"the {C:attention}selected Joker{}",
"and the one {C:attention}on the right{}",
"{C:green}#1# in #2#{} chance that",
"one of the Jokers are {C:red}destroyed{}",
],

    image_url: "img/consumable/spc_projection.png",

   rarity: "Spectral"
  },
{
    name: "Siphon",

    text: [
"Destroy a selected {C:attention}Joker{}",
"with {C:dark_edition}edition{}",
"Gives the {C:attention}Jokers {C:dark_edition}edition{} to",
"{C:attention}#1#{} random card in your hand",
],

    image_url: "img/consumable/spc_siphon.png",

   rarity: "Spectral"
  },

]

let card_modifications = [
  {
     name: "Acorn Mark Card",

     text: [
"Give {C:chips}+#1#{} chips when in hand",
"Does not give any chips when scored",
],

     image_url: "img/enhancement/enh_acorn.png",

    rarity: "Enhancement"
   },
{
     name: "Vintage Card",

     text: [
"Gains {C:chips}+#1#{} extra chips when scored",
"{C:green}#2# in #3#{} chance to destroy itself",
"{C:inactive}Chance increases by {C:green}+#4#{C:inactive} when scored{}",
],

     image_url: "img/enhancement/enh_vintage.png",

    rarity: "Enhancement"
   },
{
     name: "Promo Card",

     text: [
"Gives {C:gold}$#1#{} when in hand",
"Gains {C:gold}+$#2#{} when scored",
"{C:green}#3# in #4#{} chance to destroy when scored",
],

     image_url: "img/enhancement/enh_promo.png",

    rarity: "Enhancement"
   },
{
     name: "Slop Card",

     text: [
"{C:chips}+#1#{} chips",
"Always scored",
"Random suit and rank after scored",
"Current: {C:attention}#3#{} of {V:1}#2#{}",
],

     image_url: "img/enhancement/enh_slop.png",

    rarity: "Enhancement"
   },
{
     name: "Resource Card",

     text: [
"Has no rank always scored.",
"Give {X:mult, C:white}X#1#{} Mult",
"if the played hand has at least",
"one card with {V:1}#2#{} suit",
"{C:red}Destroy itself after scored{}",
"{C:inactive}(Does not count another Resource Card){}",
],

     image_url: "img/enhancement/enh_resource.png",

    rarity: "Enhancement"
   },
]

let card_unhanced = [
  {
    name: "Radioactive Card",

    text: [
"{C:chips}+#1#{} Chips no rank or suit",
"When played {C:green}#2# in #3#{} chance to",
"convert other played cards to {C:attention}Radioactive Card{}",
"",
"When held in hand {C:green}#2# in #4#{} chance to give",
"{X:mult, C:white}X#5#{} Mult otherwise give {X:mult, C:white}X#6#{} Mult",
],

    image_url: "img/enhancement/enh_radioactive.png",

   rarity: "Unhancement"
  },
{
    name: "Biohazard Card",

    text: [
"{X:mult, C:white}X#1#{} Mult no rank or suit",
"Lose {C:red}-$#2#{} on hand",
"When discarded {C:green}#3# in #4#{} chance to turns one random",
"card in the deck into {C:attention}Biohazard Card{}",
],

    image_url: "img/enhancement/enh_biohazard.png",

   rarity: "Unhancement"
  },
{
    name: "Poison Card",

    text: [
"{C:red}-#1#{} chips",
"Discarded {C:attention}Poison Cards{}",
"goes back into the deck",
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
"counts as {C:attention}face card{}",
],

     image_url: "img/seal/seal_face.png",

    rarity: "Seal"
   },
{
     name: "Heal Seal",

     text: [
"Removes {C:red}Unhancement{} from one of random cards held in hand when scored.",
"",
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
"and one copy of {C:auxiliary}The Question.",
"{C:auxiliary}Auxiliary Card{} can appear",
"in the shop more often.",
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
"{C:attention}ranks{} inbetween",
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
"{C:auxiliary}Auxiliary{} cards can",
"spawn in the shop",
],

     image_url: "img/voucher/v_aux1.png",

    rarity: "Voucher"
   },
{
     name: "Heavy Duty Tools",

     text: [
"{C:auxiliary}Auxiliary{} card in the",
"{C:attention}Expansion Pack{} can sometimes",
"has {C:dark_edition}negative{} edition.",
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