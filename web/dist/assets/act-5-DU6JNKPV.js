const e=`#section Act 5\r
➞ {enter|1_5_1} #The Slave Pens\r
Find and kill {kill|Overseer Krow}\r
    #sub Go {dir|180} as much as possible\r
    #sub Go {dir|270}\r
➞ {enter|1_5_town} #Overseer's Tower\r
Hand in {quest|a5q1b} #Return to Oriath\r
➞ {enter|1_5_2} #The Control Blocks\r
Find and take {quest_text|Miasmeter}\r
    #sub Go {dir|270} as much as possible\r
Find and kill {kill|Justicar Casticus}, take {quest_text|Eyes of Zeal}\r
    #sub Go {dir|45} from {quest_text|Miasmeter}\r
➞ {enter|1_5_3} #Oriath Square\r
➞ {enter|1_5_4} #The Templar Courts\r
    #sub Go {dir|45}\r
➞ {enter|1_5_5} #The Chamber of Innocence\r
    #sub Loop around clockwise\r
    #sub Recommended Level: 37+\r
    #sub Farm Level: 40-42\r
Get {crafting}\r
➞ {arena|Sanctum of Innocence}, kill {kill|High Templar Avarius}\r
    #sub Go {dir|315} counter-clockwise spiral\r
{logout}\r
Hand in {quest|a5q2} #The Key to Freedom\r
Hand in {quest|a5q3} #In Service to Science\r
Hand in {quest|a5q4} #Death to Purity\r
{waypoint|1_5_5} #The Chamber of Innocence\r
➞ {enter|1_5_4b} #The Torched Courts\r
➞ {enter|1_5_3b} #The Ruined Square\r
    #sub Loop around counter-clockwise\r
Get {waypoint_get}\r
    #sub Go {dir|315}\r
➞ {enter|1_5_6} #The Ossuary\r
Find and take {quest_text|Sign of Purity}\r
Get {crafting}\r
{logout}\r
{waypoint|1_5_3b} #The Ruined Square\r
➞ {enter|1_5_7} #The Reliquary\r
    #sub Go {dir|225} find the plaza\r
    #sub Go {dir|180}\r
Find 3x{quest_text|Kitava's Torment}, search in the corners of the map\r
Get {crafting}\r
{logout}\r
Hand in {quest|a5q7} #Kitava's Torments\r
{waypoint|1_5_3b} #The Ruined Square\r
➞ {enter|1_5_8} #The Cathedral Rooftop\r
    #sub Go {dir|225}\r
➞ {arena|Cathedral Apex}, kill {kill|Kitava, the Insatiable}\r
Talk to {generic|Lilly Roth}, Sail to Wraeclast\r
`;export{e as default};
