# Social-Distancing-Yahtzee
Play Yahtzee even while social distancing

This code allows you to roll the dice and score on your computer while still playing with other people.  Whether you are social
distancing on the beach, in a park or while videoconferencing, you can still play Yahtzee together.  This game does not try to remove
social interactions and therefore, is not meant to enforce any rules.  It only lets each person see the dice and score sheet no matter
where he/she is.

This program was written for Google Apps Script, though yahtzee.html can be run as a standalone code and the calls to google script 
functions can easily be commented out.

To set up this game,
  1. Start a new Google Apps Script project and copy Code.gs and yahtzee.html into the project.
  2. Create a new Google Sheets file and import SocialDistanceYahtzee.csv
  3. Copy the Sheet id into the first line of the Code.ps file. 
  4. Share the Google Sheet with 'Anyone with a link' (if you want to let the other players view all scores and dice rolls
  5. Save the script, publish it and share it with family and friends.
  6. Make sure each person playing is assigned a unique column.  The columns refer to the column label where the person's score
     is stored on the Google Sheet you created.  The columns can be changed arbitrarily to whatever is convenient.  The website has
     space for four players so that several family members can share a devise, but it is not necessary.  Columns C, D, E, F, etc. can
     all be on different devices as long as the score table on the webpage is properly labeled.

How to play:
1.  Fill out the players names and assign each player a unique column.  Then press the "Set up local players" button once on each device.
2.  Decide who will roll first, second, etc.
3.  At the beginning of a turn, player should make sure that all the checkboxes under the dice are not checked.
4.  After each roll, player should check the boxes for each dice that her/she does not want to roll again.
5.  Finally, after at most three rolls. decide what category you want to score the dice.
6.  Your dice is scored on your local computer and the Google Sheet only.  If you want to see the scores of players who are not using the same computer as you, you need to open the spreadsheet.  On a mobile device, if you have Google Sheets installed, the spreadsheet will automatically show the dice rolls and update the scores of players using remote devices.  If you open the Google Sheet in a browser, you will have to manually refresh the screen each time the dice are rolled.


Update 5/27/20
I mpodified the program so that you can see what other players are doing on the same webpage.  I added a buttons to each of the score columns to read the most recent dice roll and the scores of any other player.

I also added a button at the bottom to total scores.  It also adds the bonus if the upper section score is >=63.  Also, now each player has a maximum of three dice rolls and then you have to score a category.  Mpw.you can also score zero points if you can't manage
to get each of the categories.  (If you are not familiar, feel free to look up Yahtzee rules.)  The only rule that I can think of
that I am missing is that you don't specifically set another score to zero if you roll a bonus Yahtzee.

Here is how to prepare the game:
1.  Put the names of all the players in your group using the same device in the score table.
2.  Assign a different column letter (C or later) referring to a column in the spreadsheet to each player.
3.  Make sure the player(s) in your group have the correct column listed under his/her name on the score sheet.
    The column letters can be editted.
4.  Make sure the empty columns have correct column letters for people playing the game on other devices.  Columns
can be left empty.

For instance, if Bob and Phil are playing in one house and Jane, John and Julie are playing in another house, Bob could
be assigned column C, Phil, D, Jane, E, John, F, and Julie G.  Then the first two rows in the score sheet for Phil and Bob
should look like this:
Bob   Phil 
  C     D       E       F      G      H
  
  and for Jane, John and Julie, like this:
  Jane   John   Julie
     E     F       G       C      D      H
     
 You do not need to add the names of the people who are not in your house.  The program will get that from the spreadsheet
 and fill it in for you when you press the 'Player' button above that person's column.
     
  5.  Then press the "Set up local players" button.  This puts the players in your house in the main spreadsheet
  6.  Decide who goes first and begin playing.
  7.  When another player is playing, you can press the 'Player' button at the top of that player's column to see the most recent
      dice roll and that person's scores.
  8.  At some point, someone needs to erase old game scores from the spreadsheet
      
 The Google Sheets will still show the last dice roll and scores of all players and it will update automatically on a computer
 or using the Sheets app (on a mobile device browser, I don't think it updates automatically).
 
 As far as I know, I can't get Google Sheets to send data to the browser automatically, so the user needs to request the
 information.  I need a server to store the data for all the players, and I don't know of another one that I can use for free.
 
 
