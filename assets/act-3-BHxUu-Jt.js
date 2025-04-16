const e=`#section Act 3\r
➞ {enter|1_3_1} #The City of Sarn\r
Get {crafting}\r
Help and talk to {generic|Clarissa}\r
➞ {enter|1_3_town} #The Sarn Encampment\r
➞ {enter|1_3_2} #The Slums\r
    #sub Go {dir|0}\r
➞ {enter|1_3_3_1} #The Crematorium\r
    #sub Follow Stairs\r
#ifdef LEAGUE_START\r
    Complete {trial}\r
#endif\r
Find and kill {kill|Piety}, take {quest_text|Tolman's Bracelet}\r
Get {crafting}\r
{logout}\r
Talk to {generic|Clarissa}, take {quest_text|Sewer Keys}\r
Hand in {quest|a3q1} #Lost in Love\r
➞ {enter|1_3_2} #The Slums\r
    #sub Go {dir|0}\r
➞ {enter|1_3_10_1} #The Sewers\r
Find 1x{quest_text|Platinum Bust}\r
Get {waypoint_get}\r
Find 2x{quest_text|Platinum Bust}\r
➞ {enter|1_3_5} #The Marketplace\r
Get {waypoint_get}\r
#ifdef LEAGUE_START\r
    ➞ {enter|1_3_6} #The Catacombs\r
        #sub Look around nearby\r
    Complete {trial}\r
    Get {crafting}\r
#endif\r
{logout}\r
Hand in {quest|a3q11} #Victario's Secrets\r
{waypoint|1_3_5} #The Marketplace\r
➞ {enter|1_3_7} #The Battlefront\r
    #sub Search {dir|0}\r
Get {waypoint_get}\r
    #sub Go {dir|315}\r
Find and take {quest_text|Ribbon Spool}\r
    #sub Go {dir|225}\r
➞ {enter|1_3_8_1} #The Solaris Temple Level 1\r
    #sub Go {dir|45}\r
➞ {enter|1_3_8_2} #The Solaris Temple Level 2\r
➞ {arena|Eternal Laboratory}, get {crafting}\r
{waypoint|1_3_7} #The Battlefront\r
➞ {enter|1_3_9} #The Docks\r
    #sub Go {dir|315}\r
    #sub Recommended Level: 24\r
Find and take {quest_text|Thaumetic Sulphite}\r
{logout}\r
{waypoint|1_3_8_2} #The Solaris Temple Level 2\r
Talk to {generic|Lady Dialla}\r
Hand in {quest|a3q4} #The Ribbon Spool\r
Hand in {quest|a3q5}, take {quest_text|Infernal Talc} #Fiery Dust\r
{waypoint|1_3_10_1} #The Sewers\r
Burn the {quest_text|Undying Blockage}\r
Get {crafting}\r
➞ {enter|1_3_13} #The Ebony Barracks\r
Get {waypoint_get}\r
Kill {kill|General Gravicius}\r
    #sub Go {dir|315}\r
➞ {enter|1_3_14_1} #The Lunaris Temple Level 1\r
➞ {enter|1_3_14_2} #The Lunaris Temple Level 2\r
Find and kill {kill|Piety}, take {quest_text|Tower Key}\r
    #sub Follow stairs that are going up\r
    #sub At the fork in the road with wagons, go the route with 1 wagon, not 2\r
    #sub Recommended Level: 27\r
Get {crafting}\r
{logout}\r
Hand in {quest|a3q9} #Piety's Pets\r
Hand in {quest|a3q8} #Sever the Right Hand\r
{waypoint|1_3_13} #The Ebony Barracks\r
➞ {enter|1_3_15} #The Imperial Gardens\r
    #sub Go {dir|45}\r
Get {waypoint_get}\r
    #sub Follow the road\r
#ifdef LEAGUE_START\r
    Complete {trial}\r
        #sub Go {dir|0}\r
    Get {crafting}\r
    {logout}\r
    {waypoint|1_3_15} #The Imperial Gardens\r
#endif\r
#ifdef LIBRARY\r
    ➞ {enter|1_3_17_1} #The Library\r
        #sub Go {dir|315}\r
    Get {waypoint_get}\r
    Find {generic|Loose Candle} ➞ {enter|1_3_17_2} #The Archives\r
    Get {crafting}\r
    Find 4x{quest_text|Golden Page}\r
    {logout}\r
    {waypoint|1_3_17_1} #The Library\r
        #sub Put currency needed to buy skill gems in inventory\r
    Hand in {quest|a3q12} #A Fixture of Fate\r
    {waypoint|1_3_15} #The Imperial Gardens\r
#endif\r
➞ {enter|1_3_18_1} #The Sceptre of God\r
➞ {enter|1_3_18_2} #The Upper Sceptre of God\r
    #sub The exits can often be found by travelling diagonally.\r
➞ {arena|Tower Rooftop}, Kill {kill|Dominus, High Templar}\r
    #sub Look for barricades\r
    #sub Recommended Level: 28\r
`;export{e as default};
