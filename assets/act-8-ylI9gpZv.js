const e=`#section Act 8\r
➞ {enter|2_8_1} #The Sarn Ramparts\r
➞ {enter|2_8_town} #The Sarn Encampment\r
➞ {enter|2_8_2_1} #The Toxic Conduits\r
    #sub Go {dir|270}\r
➞ {enter|2_8_2_2} #Doedre's Cesspool\r
    #sub Black splashes of paint on ground points to the right direction to go\r
➞ {arena|The Cauldron}, kill {kill|Doedre the Vile}\r
➞ {arena|Sewer Outlet}\r
Get {crafting}\r
➞ {enter|2_8_8} #The Quay\r
    #sub Go {dir|45}\r
Find and take {quest_text|Ankh of Eternity}\r
    #sub Follow {dir|270} wall\r
➞ {arena|Resurrection Site}\r
    #sub Go {dir|135}\r
Talk to {generic|Clarissa}, kill {kill|Tolman}\r
➞ {enter|2_8_9} #The Grain Gate\r
Find and kill {kill|Gemling Legionnaires}\r
    #sub Follow the dead guards by doorways\r
➞ {enter|2_8_10} #The Imperial Fields\r
    #sub Follow the dead guards by doorways\r
➞ {enter|2_8_12_1} #The Solaris Temple Level 1\r
    #sub Follow the road until {waypoint}\r
    #sub Go {dir|315}\r
Get {waypoint_get}\r
➞ {enter|2_8_12_2} #The Solaris Temple Level 2\r
Find and kill {kill|Dawn, Harbinger of Solaris}, take {quest_text|Sun Orb}\r
Get {crafting}\r
{logout}\r
Hand in {quest|a8q1} #Essence of the Hag\r
Hand in {quest|a8q7} #The Gemling Legion\r
Hand in {quest|a8q6} #Love is Dead\r
{waypoint|2_8_12_1} #The Solaris Temple Level 1\r
➞ {enter|2_8_11} #The Solaris Concourse\r
➞ {enter|2_8_13} #The Harbour Bridge\r
    #sub Go {dir|225}\r
➞ {enter|2_8_6} #The Lunaris Concourse\r
Get {waypoint_get}\r
    #sub Go {dir|315}\r
➞ {enter|2_8_7_1_} #The Lunaris Temple Level 1\r
➞ {enter|2_8_7_2} #The Lunaris Temple Level 2\r
Find and kill {kill|Dusk, Harbinger of Lunaris}, take {quest_text|Moon Orb}\r
Get {crafting}\r
{logout}\r
{waypoint|2_8_6} #The Lunaris Concourse\r
➞ {enter|2_8_13} #The Harbour Bridge\r
    #sub Go {dir|135}\r
➞ {arena|The Sky Shrine}, activate {generic|Statue of the Sisters}\r
Kill {kill|Lunaris, Eternal Moon} & {kill|Solaris, Eternal Sun}\r
➞ {enter|2_9_1} #The Blood Aqueduct\r
    #sub Recommended Level: 54+\r
    #sub Farm Level: 58-62\r
➞ {enter|2_9_town} #Highgate\r
{waypoint|2_8_6} #The Lunaris Concourse\r
➞ {enter|2_8_5} #The Bath House\r
    #sub Go {dir|180}\r
#ifdef LEAGUE_START\r
    Complete {trial}\r
        #sub Search {dir|270} side\r
    Get {crafting}\r
#endif\r
➞ {enter|2_8_4} #The High Gardens\r
    #sub Search {dir|270} side\r
➞ {arena|The Pools of Terror}, kill {kill|Yugul, Reflection of Terror}\r
{portal|use}\r
Hand in {quest|a8q4} #Reflection of Terror\r
`;export{e as default};
