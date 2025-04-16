const e=`#section Act 2\r
➞ {enter|1_2_1} #The Southern Forest\r
➞ {enter|1_2_town} #The Forest Encampment\r
➞ {enter|1_2_2} #The Old Fields\r
    #sub Go {dir|45}\r
#ifdef LEAGUE_START\r
    Find {area|1_2_2a}, place {portal|set} #The Den\r
#endif\r
➞ {enter|1_2_3} #The Crossroads\r
    #sub Follow the road\r
#ifdef LEAGUE_START\r
    {waypoint|1_2_town} #The Forest Encampment\r
        #sub Follow the road\r
    Take {portal|use}\r
    ➞ {enter|1_2_2a} #The Den\r
    Find and kill {kill|The Great White Beast}\r
    {logout}\r
    Hand in {quest|a2q10} #The Great White Beast\r
    {waypoint|1_2_3} #The Crossroads\r
#endif\r
#ifndef LEAGUE_START\r
    Get {waypoint_get}\r
#endif\r
➞ {enter|1_2_6_1} #The Chamber of Sins Level 1\r
    #sub Go {dir|315}\r
➞ {enter|1_2_6_2} #The Chamber of Sins Level 2\r
    #sub Go in same direction as {waypoint}\r
#ifdef LEAGUE_START\r
    Complete {trial}\r
#endif\r
Kill {kill|Fidelitas, the Mourning}, take {quest_text|Baleful Gem}\r
    #sub Look for the long hallway\r
    #sub Recommended Level: 14-15\r
{logout}\r
Hand in {quest|a2q6} #Intruders in Black\r
{waypoint|1_2_3} #The Crossroads\r
➞ {enter|1_2_15} #The Fellshrine Ruins\r
    #sub Go {dir|135}\r
➞ {enter|1_2_5_1} #The Crypt Level 1\r
    #sub Follow the road\r
#ifdef LEAGUE_START\r
    Complete {trial}\r
#endif\r
➞ {enter|1_2_5_2} #The Crypt Level 2\r
Find {quest_text|Altar}, take {quest_text|Golden Hand}\r
{logout}\r
Hand in {quest|a2q5} #Through Sacred Ground\r
➞ {enter|1_2_7} #The Riverways\r
    #sub Go {dir|225}\r
Get {waypoint_get}\r
    #sub Follow the road\r
➞ {enter|1_2_9} #The Western Forest\r
    #sub Follow the road\r
Get {waypoint_get}\r
    #sub Follow the road\r
➞ {enter|1_2_10} #The Weaver's Chambers\r
    #sub Search the side of road opposite {waypoint}\r
➞ {arena|The Weaver's Nest}, kill {kill|The Weaver}, take {quest_text|Maligaro's Spike}\r
    #sub Try go {dir|270}, if it's blocked go {dir|45}\r
    #sub Recommended Level: 16\r
{logout}\r
Hand in {quest|a2q4} #Sharp and Cruel\r
#ifdef BANDIT_KILL\r
    {waypoint|1_2_3} #The Crossroads\r
    ➞ {enter|1_2_4} #The Broken Bridge\r
        #sub Go {dir|45}\r
    Kill {kill|Kraityn, Scarbearer}, take {quest_text|Kraityn's Amulet}\r
        #sub Follow the road\r
    {logout}\r
    {waypoint|1_2_7} #The Riverways\r
    ➞ {enter|1_2_12} #The Wetlands\r
        #sub Look for 2 pillars near {waypoint}, follow the trail\r
    Find and kill {kill|Oak, Skullbreaker}, take {quest_text|Oak's Amulet}\r
    {waypoint|1_2_9} #The Western Forest\r
        #sub Search opposite direction of the encampment entrance\r
    Kill {kill|Alira Darktongue}, take {quest_text|Alira's Amulet}\r
        #sub Go {dir|180} look for the torch touching the road\r
        #sub Follow the trail in the direction of the torch\r
    Kill {kill|Captain Arteri}\r
        #sub Follow the road {dir|225}\r
    Take {quest_text|Thaumetic Emblem}, activate {quest_text|Thaumetic Seal}\r
    {logout}\r
    Hand in {quest|a2q7}, take {quest_text|The Apex} #Deal with the Bandits\r
    {waypoint|1_1_town} #Lioneye's Watch\r
    Hand in {quest|a1q9} #The Way Forward\r
    {waypoint|1_2_12} #The Wetlands\r
    Poison the {quest_text|Tree Roots} ➞ {enter|1_2_11} #The Vaal Ruins\r
#endif\r
#ifdef BANDIT_ALIRA\r
    {waypoint|1_2_3} #The Crossroads\r
    ➞ {enter|1_2_4} #The Broken Bridge\r
        #sub Go {dir|45}\r
    Kill {kill|Kraityn, Scarbearer}, take {quest_text|Kraityn's Amulet}\r
        #sub Follow the road\r
    {logout}\r
    {waypoint|1_2_7} #The Riverways\r
    ➞ {enter|1_2_12} #The Wetlands\r
        #sub Look for 2 pillars near {waypoint}, follow the trail\r
    Find and kill {kill|Oak, Skullbreaker}, take {quest_text|Oak's Amulet}\r
    {waypoint|1_2_9} #The Western Forest\r
        #sub Search opposite direction of the encampment entrance\r
    Help {kill|Alira Darktongue}, take {quest_text|The Apex}\r
        #sub Go {dir|180} look for the torch touching the road\r
        #sub Follow the trail in the direction of the torch\r
    Kill {kill|Captain Arteri}\r
        #sub Follow the road {dir|225}\r
    Take {quest_text|Thaumetic Emblem}, activate {quest_text|Thaumetic Seal}\r
    {logout}\r
    {waypoint|1_1_town} #Lioneye's Watch\r
    Hand in {quest|a1q9} #The Way Forward\r
    {waypoint|1_2_12} #The Wetlands\r
    Poison the {quest_text|Tree Roots} ➞ {enter|1_2_11} #The Vaal Ruins\r
#endif\r
#ifdef BANDIT_KRAITYN\r
    {waypoint|1_2_7} #The Riverways\r
    ➞ {enter|1_2_12} #The Wetlands\r
        #sub Look for 2 pillars near {waypoint}, follow the trail\r
    Find and kill {kill|Oak, Skullbreaker}, take {quest_text|Oak's Amulet}\r
    {waypoint|1_2_9} #The Western Forest\r
        #sub Search opposite direction of the encampment entrance\r
    Kill {kill|Alira Darktongue}, take {quest_text|Alira's Amulet}\r
        #sub Go {dir|180} look for the torch touching the road\r
        #sub Follow the trail in the direction of the torch\r
    Kill {kill|Captain Arteri}\r
        #sub Follow the road {dir|225}\r
    Take {quest_text|Thaumetic Emblem}, activate {quest_text|Thaumetic Seal}\r
    {logout}\r
    {waypoint|1_1_town} #Lioneye's Watch\r
    Hand in {quest|a1q9} #The Way Forward\r
    {waypoint|1_2_3} #The Crossroads\r
    ➞ {enter|1_2_4} #The Broken Bridge\r
        #sub Go {dir|45}\r
    Help {kill|Kraityn, Scarbearer}, take {quest_text|The Apex}\r
        #sub Follow the road\r
    {logout}\r
    {waypoint|1_2_12} #The Wetlands\r
    Poison the {quest_text|Tree Roots} ➞ {enter|1_2_11} #The Vaal Ruins\r
#endif\r
#ifdef BANDIT_OAK\r
    {waypoint|1_2_3} #The Crossroads\r
    ➞ {enter|1_2_4} #The Broken Bridge\r
        #sub Go {dir|45}\r
    Kill {kill|Kraityn, Scarbearer}, take {quest_text|Kraityn's Amulet}\r
        #sub Follow the road\r
    {logout}\r
    {waypoint|1_2_9} #The Western Forest\r
    Kill {kill|Alira Darktongue}, take {quest_text|Alira's Amulet}\r
        #sub Go {dir|180} look for the torch touching the road\r
        #sub Follow the trail in the direction of the torch\r
    Kill {kill|Captain Arteri}\r
        #sub Follow the road {dir|225}\r
    Take {quest_text|Thaumetic Emblem}, activate {quest_text|Thaumetic Seal}\r
    {logout}\r
    {waypoint|1_1_town} #Lioneye's Watch\r
    Hand in {quest|a1q9} #The Way Forward\r
    {waypoint|1_2_7} #The Riverways\r
    ➞ {enter|1_2_12} #The Wetlands\r
        #sub Look for 2 pillars near {waypoint}, follow the trail\r
    Find and help {kill|Oak, Skullbreaker}, take {quest_text|The Apex}\r
    Poison the {quest_text|Tree Roots} ➞ {enter|1_2_11} #The Vaal Ruins\r
        #sub Search opposite direction of the encampment entrance\r
#endif\r
➞ {enter|1_2_8} #The Northern Forest\r
    #sub S shape or L shape leads to exit\r
➞ {enter|1_2_14_2} #The Caverns\r
Get {crafting}\r
➞ {enter|1_2_14_3} #The Ancient Pyramid\r
➞ {arena|Pyramid Apex}, kill {kill|Vaal Oversoul}\r
    #sub First floor exit will be in one of the 3 corners\r
    #sub Remaining floors will have the exit diagonally across from the entrance\r
    #sub Recommended Level: 20-22\r
Get {crafting}\r
`;export{e as default};
