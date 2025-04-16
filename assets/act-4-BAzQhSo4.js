const e=`#section Act 4\r
➞ {enter|1_4_1} #The Aqueduct\r
➞ {enter|1_4_town} #Highgate\r
➞ {enter|1_4_2} #The Dried Lake\r
Find and kill {kill|Voll, Emperor of Purity}, take {quest_text|Deshret's Banner}\r
    #sub Recommended Level: 30\r
Get {crafting}\r
{logout}\r
Hand in {quest|a4q2} #Breaking the Seal\r
➞ {enter|1_4_3_1} #The Mines Level 1\r
Get {crafting}\r
➞ {enter|1_4_3_2} #The Mines Level 2\r
Free {quest_text|Deshret}\r
➞ {enter|1_4_3_3} #The Crystal Veins\r
Get {crafting}\r
{waypoint|1_4_town} #Highgate\r
Hand in {quest|a4q6} #An Indomitable Spirit\r
{waypoint|1_3_town} #The Sarn Encampment\r
➞ {enter|Labyrinth_Airlock}, get {waypoint_get} #Aspirants' Plaza\r
{ascend|normal}\r
Get {crafting|1_Labyrinth_boss_3}\r
{waypoint|1_4_3_3} #The Crystal Veins\r
➞ {enter|1_4_5_1} #Daresso's Dream\r
➞ {enter|1_4_5_2} #The Grand Arena\r
Get {crafting}\r
{waypoint|1_4_3_3} #The Crystal Veins\r
➞ {enter|1_4_4_1} #Kaom's Dream\r
➞ {enter|1_4_4_3} #Kaom's Stronghold\r
    #sub Go {dir|45}\r
    #sub Follow Bridges\r
Get {crafting}\r
➞ {arena|Caldera of the King}, kill {kill|King Kaom}, take {quest_text|The Eye of Fury}\r
{portal|use}\r
{waypoint|1_4_5_2} #The Grand Arena\r
➞ {arena|The Ring of Blades}, kill {kill|Daresso, King of Swords}, take {quest_text|The Eye of Desire}\r
    #sub Go {dir|225} follow the exits keeping {dir|270}\r
{logout}\r
{waypoint|1_4_3_3} #The Crystal Veins\r
Talk to {generic|Lady Dialla}\r
➞ {enter|1_4_6_1} #The Belly of the Beast Level 1\r
➞ {enter|1_4_6_2} #The Belly of the Beast Level 2\r
➞ {arena|The Bowels of the Beast}, kill {kill|Piety, the Abomination}\r
Talk to {generic|Piety}\r
Get {crafting}\r
➞ {enter|1_4_6_3} #The Harvest\r
Find and kill {kill|Doedre Darktongue}, take {quest_text|Malachai's Lungs}\r
Find and kill {kill|Maligaro, The Inquisitor}, take {quest_text|Malachai's Heart}\r
Find and kill {kill|Shavronne of Umbra}, take {quest_text|Malachai's Entrails}\r
Hand in {quest|a4q5} #Corpus Malachus\r
➞ {arena|The Black Core}, kill {kill|Malachai, The Nightmare}\r
    #sub Recommended Level: 34-35\r
{logout}\r
Hand in {quest|a4q1} #The Eternal Nightmare\r
➞ {enter|1_4_7} #The Ascent\r
Get {crafting}\r
Activate {quest_text|The Resonator}, use {quest_text|Oriath Portal}\r
`;export{e as default};
