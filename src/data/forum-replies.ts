export type ForumReply = {
  author: string
  date: string
  body: string
}

export const FORUM_REPLIES: Record<string, ForumReply[]> = {
  'features-list': [
    {
      author: 'Kestrel_09',
      date: '2026-09-18',
      body: 'The features list finally matched what showed up in menu. Inventory price on ESP is what I bought this for — seeing 80k+ kits through a wall is nuts.',
    },
    {
      author: 'm4rtin.l',
      date: '2026-09-18',
      body: 'Half the modules I expected from a random YouTube vid werent there. Corpse ESP works but dont expect a magic radar mini-map, read the checklist.',
    },
    {
      author: 'ViktorNorth',
      date: '2026-09-19',
      body: 'Team index saved our trio twice on Farm. Worth skimming this before you crank every toggle day one.',
    },
  ],
  'aimbot-settings': [
    {
      author: 'softpeek',
      date: '2026-09-17',
      body: 'Ran FOV tiny + smoothness high like the guide says. Nobody said a word in post-raid chat. Headshots only when I actually lined up scope myself.',
    },
    {
      author: 'ragey_bob',
      date: '2026-09-17',
      body: 'Ignored the advice, wide FOV, got clipped by a streamer friend. Not a ban but embarrassing. Listen to the smoothness section fr.',
    },
    {
      author: 'LenaABI',
      date: '2026-09-18',
      body: 'Visible check ON is non negotiable for me. Stopped locking dudes through metal doors — reports dropped in our discord at least.',
    },
    {
      author: 'duo_six',
      date: '2026-09-19',
      body: 'Akimbo toggle is fun but eats ammo. I keep aimbot off until third party sound then flip on with a side mouse bind.',
    },
  ],
  'esp-wallhack-guide': [
    {
      author: 'PMC_walker',
      date: '2026-09-16',
      body: 'Enabled box + distance only first raid. Already paid for itself when a PMC was camping extract cam I couldnt see without ESP.',
    },
    {
      author: 'ghostloot',
      date: '2026-09-16',
      body: 'Skeleton on + bright colors = every teammate knows lol. Dialed colors down and limited range to 120m, way less obvious.',
    },
    {
      author: 'irritated_panda',
      date: '2026-09-17',
      body: 'Snaplines gave me motion sickness on ultrawide. Turned off, kept health bars. Still good.',
    },
  ],
  'loot-container-esp': [
    {
      author: 'filterking',
      date: '2026-09-15',
      body: 'Min price 15k cleaned my screen. GPU spawn actually visible now instead of 200 grey lines.',
    },
    {
      author: 'newbie_abi',
      date: '2026-09-15',
      body: 'Thought container ESP would auto open safes. It doesnt. Still have to loot normally, just know WHERE. Manage expectations.',
    },
    {
      author: 'RouteRunner',
      date: '2026-09-16',
      body: 'Pair max distance 40m with combat mode off for quiet farms. Made 400k in two runs without firing.',
    },
    {
      author: 'saltyextract',
      date: '2026-09-17',
      body: 'Prices sometimes lag vs flea reality after economy patch. Filters still help, numbers just off by a bit.',
    },
  ],
  hotkeys: [
    {
      author: 'bind_goblin',
      date: '2026-09-14',
      body: 'Insert menu, F7 ESP off panic key. Saved me when squad wanted a screenshot for discord.',
    },
    {
      author: 'capslock_warrior',
      date: '2026-09-14',
      body: 'Rebound combat mode to caps and forgot — nearly wiped squad. Write your binds on paper once.',
    },
  ],
  'complete-setup': [
    {
      author: 'firsttimer_abi',
      date: '2026-09-13',
      body: 'Followed load order exactly, took 12 mins start to raid. Delivery email was instant, loader matched status page Active.',
    },
    {
      author: 'impatient_one',
      date: '2026-09-13',
      body: 'Skipped antivirus step, menu never opened. Support link in thread worked after exclusion — my fault not theirs.',
    },
    {
      author: 'tri_stack',
      date: '2026-09-14',
      body: 'Epic client + this loader fine on Win11 23H2. Close RGB software though, that was my issue not ABI patch.',
    },
    {
      author: 'Mei',
      date: '2026-09-15',
      body: 'Saved config after first run. Second login was two clicks. Wish I did that day one.',
    },
  ],
  'windows-setup': [
    {
      author: 'IT_guy_gaming',
      date: '2026-09-12',
      body: 'HVCI on, still loads with their steps. Took one reboot after exclusion.',
    },
    {
      author: 'laptop_heat',
      date: '2026-09-12',
      body: 'G14 on battery = stutter with ESP on max distance. Plug in + cap distance, smooth again.',
    },
  ],
  'disable-antivirus': [
    {
      author: 'defender_hater',
      date: '2026-09-11',
      body: 'Defender quarantined twice before folder exclude. Restore + exclude fixed inject fail.',
    },
    {
      author: 'kaspersky_user',
      date: '2026-09-11',
      body: 'Kaspersky harder than Defender. Needed full pause during first load only.',
    },
    {
      author: 'paranoid_ok',
      date: '2026-09-12',
      body: 'Yeah its sketchy excluding a folder. Works tho. Scan after session if youre nervous.',
    },
  ],
  'stream-proof-setup': [
    {
      author: 'twitch_abi',
      date: '2026-09-10',
      body: 'Tested OBS game capture — overlays absent on VOD, visible to me. Clipped for proof privately.',
    },
    {
      author: 'clip_farmer',
      date: '2026-09-10',
      body: 'Display capture still caught faint box edges. Game capture only like guide says.',
    },
  ],
  'game-patch-status': [
    {
      author: 'patch_day_survivor',
      date: '2026-09-20',
      body: 'Patch hit Tuesday, status flipped Updating within hours. Waited, Active again Thursday morning. Loaded fine.',
    },
    {
      author: 'didnt_wait',
      date: '2026-09-20',
      body: 'Forced old loader after patch, instant kick. Read the thread, wait for green Active.',
    },
    {
      author: 'monthly_sub',
      date: '2026-09-21',
      body: 'Updates included in sub so far. Discord ping when ready would be nice but site status enough.',
    },
  ],
  'load-status-checklist': [
    {
      author: 'habit_stack',
      date: '2026-09-09',
      body: 'Check status page + in-game menu version every login. Caught one mismatch before raid.',
    },
    {
      author: 'lazy_load',
      date: '2026-09-09',
      body: 'Forgot checklist once, played vanilla raid wondering why ESP dead. Embarrassing.',
    },
  ],
  'combat-assist-settings': [
    {
      author: 'legit_aim',
      date: '2026-09-08',
      body: 'Combat mode + low speed feels like strong aim assist not rage. Won a few dorms fights without sus deaths.',
    },
    {
      author: 'reported_once',
      date: '2026-09-08',
      body: 'Max speed got me reported on kill cam replay per mate. Dialed back, no reports since.',
    },
    {
      author: 'solo_q',
      date: '2026-09-09',
      body: 'Ignore knocked ON so I dont finish downed players on cam. Small thing, less rage whispers.',
    },
  ],
  'extraction-loot-guide': [
    {
      author: 'northridge_main',
      date: '2026-09-07',
      body: 'Corpse ESP + min price route on Northridge is broken good. Extract early when lobby thins.',
    },
    {
      author: 'extract_camper_hater',
      date: '2026-09-07',
      body: 'ESP doesnt stop extract campers. Still have to check angles — lost kit to one anyway.',
    },
    {
      author: 'duo_looter',
      date: '2026-09-08',
      body: 'One runs player ESP, other runs loot filters. Comms easier than solo toggling everything.',
    },
  ],
  'loader-errors': [
    {
      author: 'error_0x_guy',
      date: '2026-09-06',
      body: 'Menu not opening = overlays. Closed GeForce overlay, worked next try.',
    },
    {
      author: 'still_stuck',
      date: '2026-09-06',
      body: 'Tried everything in thread, status was Updating not Active. Support told me wait — annoying but honest.',
    },
    {
      author: 'fresh_install',
      date: '2026-09-07',
      body: 'Moved folder after setup, broke path. Re-extract to original excluded folder fixed inject.',
    },
  ],
}

export function getForumReplies(slug: string): ForumReply[] {
  return FORUM_REPLIES[slug] ?? []
}
