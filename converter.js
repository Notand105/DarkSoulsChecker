let string = `Dragon King Greataxe
The Depths. Cut off the tail of the Gaping Dragon.
Dragon Greatsword
Cut the tail off of the Ancient Dragon in Ash Lake. As long as you don't attack the body, this will not anger the dragon or break the covenant.
Drake Sword
Undead Burg. Use arrows to shoot the tail of the Red Drake, or Bridge Wyvern, from underneath the bridge. It can also be cut off from on top of the bridge, if the Bridge Wyvern has landed to attack you. 
Moonlight Greatsword
Crystal Cave. Cut off the tail of Seath The Scaleless, once the immortality crystal has been broken. (Seath's tail cannot be cut off in your first encounter)
Priscilla's Dagger
Painted World of Ariamis. Cut off the tail of Priscilla - this can be difficult to do considering her ability to turn invisible, so consider careful strikes or weak weapons. Tag her with a throwing knife so you can track her while invisible. use weak weapons or the Force spell to break her poise, then go for her
Gargoyle Tail Axe
Undead Parish. During the boss fight, cut off the tail of the first Bell Gargoyle. Easier if focused down before 2nd Gargoyle comes into the fight. It can also be obtained from the two gargoyles near the beginning of Anor Londo. 
`




let strings = string.split('\n')
for (let i = 0; i < strings.length - 1; i++) {
    console.log(`{ "name": "${strings[i]}" , "description": "${strings[i + 1]}" , "obtained": false },`)
    i++
}
