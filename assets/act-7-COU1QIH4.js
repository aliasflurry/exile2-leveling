const e=`#section Act 7\r
{waypoint|2_7_town} #The Bridge Encampment\r
➞ {enter|2_7_1} #The Broken Bridge\r
#ifdef LEAGUE_START\r
    Find and take {quest_text|Silver Locket}\r
        #sub Follow the road, look for the broken {waypoint}\r
#endif\r
➞ {enter|2_7_2} #The Crossroads\r
    #sub Follow the road\r
Get {waypoint_get}\r
➞ {enter|2_7_3} #The Fellshrine Ruins\r
    #sub Go {dir|135}\r
➞ {enter|2_7_4} #The Crypt\r
    #sub Follow the road\r
#ifdef LEAGUE_START\r
    Complete {trial}\r
    Get {crafting}\r
#endif\r
Find {generic|Sarcophagus} to next floor\r
Find and take {quest_text|Maligaro's Map}\r
{logout}\r
{waypoint|2_7_2} #The Crossroads\r
➞ {enter|2_7_5_1} #The Chamber of Sins Level 1\r
    #sub Go {dir|315}\r
Get {crafting}\r
Get {waypoint_get}\r
Activate {quest_text|Map Device} with {quest_text|Maligaro's Map}\r
➞ {enter|2_7_5_map} #Maligaro's Sanctum\r
➞ {arena|Maligaro's Workshop}, kill {kill|Maligaro, the Artist}, take {quest_text|Black Venom}\r
    #sub Follow edges of the zone and cross bridges in the corners\r
    #sub Typically bridges spawn in the opposite diagonal corners\r
{logout}\r
Hand in {quest|a7q2} #Essence of the Artist\r
#ifdef LEAGUE_START\r
    Hand in {quest|a7q5} #The Silver Locket\r
#endif\r
{waypoint|2_7_5_1} #The Chamber of Sins Level 1\r
Hand in {quest|a7q3}, take {quest_text|Obsidian Key} #Web of Secrets\r
➞ {enter|2_7_5_2} #The Chamber of Sins Level 2\r
    #sub Go in same direction as {waypoint}\r
#ifdef LEAGUE_START\r
    Complete {trial}\r
    Get {crafting}\r
#endif\r
Open {generic|Secret Passage} ➞ {enter|2_7_6} #The Den\r
➞ {enter|2_7_7} #The Ashen Fields\r
➞ {arena|The Forest Encampment}, kill {kill|Greust, Lord of the Forest}\r
    #sub Go {dir|225}\r
➞ {enter|2_7_8} #The Northern Forest\r
{waypoint|2_7_town} #The Bridge Encampment\r
Hand in {quest|a7q1} #The Master of a Million Faces\r
{waypoint|2_6_8} #Prisoner's Gate\r
➞ {arena|Valley of the Fire Drinker}, kill {kill|Abberath, the Cloven One}\r
    #sub Go down the ledge next to the road\r
{portal|use}\r
Hand in {quest|a6q7} #The Cloven One\r
{waypoint|2_7_8} #The Northern Forest\r
➞ {enter|2_7_10} #The Causeway\r
Get {crafting}\r
Find and take {quest_text|Kishara's Star}\r
➞ {enter|2_7_11} #The Vaal City\r
Find {waypoint_get}\r
{waypoint|2_7_8} #The Northern Forest\r
➞ {enter|2_7_9} #The Dread Thicket\r
Find and take 7x{quest_text|Firefly}\r
Get {crafting}\r
➞ {arena|Den of Despair}, kill {kill|Gruthkul, Mother of Despair}\r
{portal|use}\r
Hand in {quest|a7q9} #Queen of Despair\r
Hand in {quest|a7q6} #Kishara's Star\r
{waypoint|Labyrinth_Airlock} #Aspirants' Plaza\r
{ascend|cruel}\r
Get {crafting|2_Labyrinth_boss_3}\r
{waypoint|2_7_11} #The Vaal City\r
Hand in {quest|a7q7} #Lighting the Way\r
➞ {enter|2_7_12_1} #The Temple of Decay Level 1\r
➞ {enter|2_7_12_2} #The Temple of Decay Level 2\r
Get {crafting}\r
➞ {arena|Arakaali's Web}, kill {kill|Arakaali, Spinner of Shadows}\r
`;export{e as default};
