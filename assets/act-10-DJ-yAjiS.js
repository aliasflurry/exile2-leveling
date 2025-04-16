const n=`#section Act 10\r
{waypoint|2_10_town} #Oriath Docks\r
➞ {enter|2_10_1} #The Cathedral Rooftop\r
➞ {arena|Cathedral Apex}, kill {kill|Plaguewing}\r
    #sub Go {dir|0}\r
➞ {enter|2_10_2} #The Ravaged Square\r
Place {portal|set} in the plaza\r
➞ {enter|2_10_7} #The Control Blocks\r
    #sub Go {dir|180}\r
{waypoint|2_10_town} #Oriath Docks\r
Hand in {quest|a10q1} #Safe Passage\r
Take {portal|use}\r
Get {waypoint_get}\r
    #sub Go {dir|45}\r
#ifdef LEAGUE_START\r
    ➞ {enter|2_10_9} #The Ossuary\r
    Get {crafting}\r
    Complete {trial}\r
#endif\r
{logout}\r
{waypoint|Labyrinth_Airlock}\r
{ascend|merciless}\r
Get {crafting|3_Labyrinth_boss_3}\r
{waypoint|2_10_7} #The Control Blocks\r
Find and kill {kill|Vilenta}\r
{logout}\r
Hand in {quest|a10q6} #Vilenta's Vengeance\r
{waypoint|2_10_2} #The Ravaged Square\r
➞ {enter|2_10_3} #The Torched Courts\r
    #sub Go {dir|135}\r
➞ {enter|2_10_4} #The Desecrated Chambers\r
    #sub Loop around clockwise\r
Get {crafting}\r
➞ {arena|Sanctum of Innocence}, kill {kill|Avarius, Reassembled}, take {quest_text|The Staff of Purity}\r
    #sub Go {dir|315} counter-clockwise spiral\r
{logout}\r
Talk to {generic|Bannon}\r
Hand in {quest|a10q2} #Death and Rebirth\r
{waypoint|2_10_2} #The Ravaged Square\r
Talk to {generic|Innocence}\r
    #sub Go {dir|45}\r
➞ {enter|2_10_5} #The Canals\r
➞ {enter|2_10_6} #The Feeding Trough\r
Get {crafting}\r
Talk to {generic|Sin}\r
➞ {arena|Altar of Hunger}, kill {kill|Kitava, the Insatiable}\r
Talk to {generic|Sin} ➞ {enter|2_10_town} #Oriath Docks\r
Talk to {generic|Lilly Roth}, Set Sail from Oriath\r
➞ {enter|2_11_endgame_town} #Karui Shores\r
Get {crafting}\r
#ifdef BANDIT_KILL\r
    Hand in {quest|a10q3} #An End to Hunger\r
        #sub Type {generic|/passives} in chat to confirm that you have all 24 passives from quests\r
#endif\r
#ifndef BANDIT_KILL\r
    Hand in {quest|a10q3} #An End to Hunger\r
        #sub Type {generic|/passives} in chat to confirm that you have all 22 passives from quests\r
#endif`;export{n as default};
