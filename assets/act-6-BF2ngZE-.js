const e=`#section Act 6\r
➞ {enter|2_6_town} #Lioneye's Watch\r
➞ {enter|2_6_1} #The Twilight Strand\r
Kill {kill|Everything}\r
{logout}\r
Hand in {quest|a6q4} #Fallen from Grace\r
➞ {enter|2_6_2} #The Coast\r
➞ {enter|2_6_4} #The Mud Flats\r
Find and kill {kill|The Dishonoured Queen}, take {quest_text|Eye of Conquest}\r
    #sub {dir|45} corner of area, normally by a house\r
➞ {enter|2_6_5} #The Karui Fortress\r
➞ {arena|Tukohama's Keep}, kill {kill|Tukohama, Karui God of War}\r
Get {crafting}\r
➞ {enter|2_6_6} #The Ridge\r
    #sub Go {dir|0}\r
➞ {enter|2_6_7_1} #The Lower Prison\r
#ifdef LEAGUE_START\r
    Complete {trial}\r
#endif\r
Get {crafting}\r
➞ {enter|2_6_7_2} #Shavronne's Tower\r
➞ {arena|Prison Rooftop}, kill {kill|Shavronne the Returned} & {kill|Reassembled Brutus}\r
➞ {arena|The Warden's Chambers}\r
Get {crafting}\r
➞ {enter|2_6_8} #Prisoner's Gate\r
➞ {enter|2_6_9} #The Western Forest\r
    #sub Follow the road\r
Get {crafting}\r
➞ {enter|2_6_10} #The Riverways\r
    #sub Follow the road\r
Get {waypoint_get}\r
    #sub Follow the road\r
➞ {enter|2_6_11} #The Wetlands\r
    #sub Look for 2 pillars near {waypoint}, follow the trail\r
➞ {arena|The Spawning Ground}, kill {kill|Ryslatha, the Puppet Mistress}\r
    #sub Go {dir|315}\r
{logout}\r
Hand in {quest|a6q3} #The Father of War\r
Hand in {quest|a6q2} #Essence of Umbra\r
Hand in {quest|a6q6} #The Puppet Mistress\r
{waypoint|2_6_10} #The Riverways\r
➞ {enter|2_6_12} #The Southern Forest\r
    #sub Follow the road until it ends\r
    #sub Go {dir|135}\r
➞ {enter|2_6_13} #The Cavern of Anger\r
Take {quest_text|The Black Flag}\r
➞ {enter|2_6_14} #The Beacon\r
Get {crafting}\r
    #sub Follow the shore\r
Complete {quest_text|Pillar Push}\r
Light the {quest_text|Beacon}, throw in {quest_text|The Black Flag}\r
Talk to {generic|Weylam Roth}, sail to {enter|2_6_15} #The Brine King's Reef\r
➞ {arena|The Bring King's Throne}, kill {kill|Tsoagoth, The Brine King}\r
{logout}\r
Select {generic|Pantheons}\r
`;export{e as default};
