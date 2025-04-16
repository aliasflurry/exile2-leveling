const e=`#section Act 9\r
{waypoint|2_9_town} #Highgate\r
➞ {enter|2_9_2} #The Descent\r
➞ {enter|2_9_3} #The Vastiri Desert\r
Get {waypoint_get}\r
    #sub Go {dir|90}\r
Get {crafting}\r
Find and take {quest_text|The Storm Blade}\r
➞ {enter|2_9_5} #The Foothills\r
    #sub Go {dir|315}\r
Get {waypoint_get}\r
    #sub Go {dir|45} until you find the cliff\r
    #sub Go {dir|315}\r
➞ {enter|2_9_6} #The Boiling Lake\r
Find and Kill {kill|The Basilisk}, take {quest_text|Basilisk Acid}\r
    #sub Go {dir|45} look for petrified soldiers\r
Get {crafting}\r
{logout}\r
Talk to {generic|Sin}\r
Hand in {quest|a9q3}\r
Hand in {quest|a9q5|a9q5_offer}, take {quest_text|Bottled Storm}\r
{waypoint|2_9_3} #The Vastiri Desert\r
➞ {enter|2_9_4} #The Oasis\r
    #sub Go {dir|45}\r
➞ {arena|The Sand Pit}, kill {kill|Shakari, Queen of the Sands}\r
{logout}\r
Hand in {quest|a9q5|a9q5} #Queen of the Sands\r
{waypoint|2_9_5} #The Foothills\r
➞ {enter|2_9_7} #The Tunnel\r
    #sub Go {dir|315}\r
#ifdef LEAGUE_START\r
    Before {waypoint}, complete {trial}\r
    Get {crafting}\r
#endif\r
➞ {enter|2_9_8} #The Quarry\r
Get {waypoint_get}\r
    #sub Go {dir|315}\r
Get {crafting}\r
➞ {arena|Shrine of the Winds}, kill {kill|Garukhan, Queen of the Winds}, take {quest_text|Sekhema Feather}\r
    #sub {dir|45} or {dir|225}\r
{logout}\r
Hand in {quest|a9q2} #The Ruler of Highgate\r
{waypoint|2_9_8} #The Quarry\r
➞ {enter|2_9_9} #The Refinery\r
    #sub {dir|315} or {dir|45}\r
Get {crafting}\r
    #sub Look for a sewer grate leading to {arena|Refinery Tunnels}\r
Find and kill {kill|General Adus}, take {quest_text|Trarthan Powder}\r
    #sub Go {dir|45} follow cart tracks\r
{logout}\r
{waypoint|2_9_8} #The Quarry\r
Talk to {generic|Sin}\r
➞ {enter|2_9_10_1} #The Belly of the Beast\r
➞ {enter|2_9_10_2} #The Rotting Core\r
➞ {arena|The Black Core}\r
Talk to {generic|Sin}\r
➞ {arena|Doedre's Despair}, kill {kill|Doedre, Darksoul}\r
➞ {arena|Maligaro's Misery}, kill {kill|Maligaro, The Broken}\r
➞ {arena|Shavronne's Sorrow}, kill {kill|Shavronne, Unbound}\r
Talk to {generic|Sin} ➞ {arena|The Black Heart}, kill {kill|The Depraved Trinity}\r
{portal|use}\r
`;export{e as default};
