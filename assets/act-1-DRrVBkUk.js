const e=`#section Act 1\r
Find and kill {kill|Hillock}\r
➞ {enter|1_1_town} #Lioneye's Watch\r
Hand in {quest|a1q1} #Enemy at the Gate\r
➞ {enter|1_1_2} #The Coast\r
#ifdef LEAGUE_START\r
    Get {waypoint_get}\r
#endif\r
➞ {enter|1_1_3} #The Mud Flats\r
Find 3x{quest_text|Glyph}\r
    #sub Little streams connect the 3 Rhoa nests\r
    #sub Usually form a triangle, but will rarely form a line\r
➞ {enter|1_1_4_1} #The Submerged Passage\r
#ifdef LEAGUE_START\r
    {waypoint|1_1_2} #The Coast\r
    ➞ {enter|1_1_2a} #The Tidal Island\r
    Find and kill {kill|Hailrake}, take {quest_text|Medicine Chest}\r
        #sub Go {dir|270}\r
        #sub If you find a ledge, turn around and go {dir|90}\r
        #sub Recommended Level: 4\r
    {logout}\r
    Hand in {quest|a1q4} #Breaking Some Eggs\r
    Hand in {quest|a1q5} #Mercy Mission\r
#endif\r
#ifndef LEAGUE_START\r
    {waypoint|1_1_town} #Lioneye's Watch\r
    Hand in {quest|a1q4} #Breaking Some Eggs\r
#endif\r
{waypoint|1_1_4_1} #The Submerged Passage\r
Find bridge, place {portal|set}\r
➞ {enter|1_1_5} #The Ledge\r
➞ {enter|1_1_6} #The Climb\r
➞ {enter|1_1_7_1} #The Lower Prison\r
{waypoint|1_1_town} #Lioneye's Watch\r
Take {portal|use}\r
➞ {enter|1_1_4_0} #The Flooded Depths\r
    #sub Go right of the bridge\r
Find and kill {kill|The Dweller of the Deep}\r
    #sub Search opposite the entrance\r
    #sub Look for the large empty room\r
{logout}\r
Hand in {quest|a1q7} #The Dweller of the Deep\r
Hand in {quest|a1q2|a1q2b} #The Caged Brute\r
{waypoint|1_1_7_1} #The Lower Prison\r
#ifdef LEAGUE_START\r
    Complete {trial}\r
        #sub Usually {dir|45}\r
#endif\r
➞ {enter|1_1_7_2} #The Upper Prison\r
#ifdef LEAGUE_START\r
    Find {generic|Chemist's Strongbox}\r
        #sub Look for map icon, access with nearby switch\r
        #sub High chance for {generic|Quicksilver Flask}\r
        #sub Vendor {generic|Quicksilver Flask} + {generic|Orb of Augmentation} + Normal {generic|Boots}\r
        #sub Vendor {generic|Quicksilver Flask} + {generic|Orb of Augmentation} + Movement Speed {generic|Boots}\r
#endif\r
➞ {arena|The Warden's Quarters}, kill {kill|Brutus, Lord Incarcerator}\r
    #sub Recommended Level: 8-10\r
{logout}\r
Hand in {quest|a1q2|a1q2} #The Caged Brute\r
{waypoint|1_1_8} #Prisoner's Gate\r
➞ {enter|1_1_9} #The Ship Graveyard\r
    #sub Go down the ledge next to the road\r
Find {area|1_1_9a}, place {portal|set} #The Ship Graveyard Cave\r
➞ {enter|1_1_11_1} #The Cavern of Wrath\r
{waypoint|1_1_town} #Lioneye's Watch\r
Take {portal|use}\r
➞ {enter|1_1_9a} #The Ship Graveyard Cave\r
Find {quest_text|Slave Girl}, take {quest_text|Allflame}\r
    #sub Search opposite the entrance\r
➞ {enter|1_1_9}, kill {kill|Captain Fairgraves} #The Ship Graveyard\r
{logout}\r
Hand in {quest|a1q6} #The Marooned Mariner\r
Hand in {quest|a1q3} #The Siren's Cadence\r
{waypoint|1_1_11_1} #The Cavern of Wrath\r
➞ {enter|1_1_11_2} #The Cavern of Anger\r
    #sub Follow the water\r
➞ {arena|Merveil's Lair}, kill {kill|Merveil, the Siren}\r
    #sub Follow the water\r
    #sub Recommended Level: 11-13\r
`;export{e as default};
