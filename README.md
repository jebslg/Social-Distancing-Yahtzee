# Social-Distancing-Yahtzee
Play Yahtzee even while social distancing

This code allows you to roll the dice and score on your computer while still playing with other people.  Whether you are social
distancing on the beach, in a park or while videoconferencing, you can still play Yahtzee together.  This game does not try to remove
social interactions and therefore, is not meant to enforce any rules.  It only lets each person see the dice and score sheet no matter
where he/she is.

This program was written for Google Apps Script, though yahtzee.html can be run as a standalone code and the calls to google script 
functions can easily be commented out.

To set up this game,
  1. Start a new Google Scripts project and copy Code.ga and yahtzee.html into the project.
  2. Create a new Google Sheets file and import SocialDistanceYahtzee.csv
  3. Copy the Sheet id into the first line of the Code.ps file. 
  4. Share the Google Sheet with 'Anyone with a link' (if you want to let the other players view all scores and dice rolls
  5. Save the script, publish it and share it with family and friends.
  6. Make sure each person playing is assigned a unique column.  The columns refer to the column label where the person's score
     is stored on the Google Sheet you created.  The columns can be changed arbitrarily to whatever is convenient.  The website has
     space for four players so that several family members can share a devise, but it is not necessary.  Columns C, D, E, F, etc. can
     all be on different devices as long as the score table on the webpage is properly labeled.

How to play:
1.  Fill out the players names and assign each player a unique column.  Then press the "Add Players to Main Score Sheet" button once on each device.
2.  Decide who will roll first, second, etc.
3.  At the beginning of a turn, player should make sure that all the checkboxes under the dice are not checked.
4.  After each roll, player should check the boxes for each dice that her/she does not want to roll again.
5.  Finally, after at most three rolls. decide what category you want to score the dice.
6.  Your dice is scored on your local computer and the Google Sheet only.  If you want to see the scores of players who are not using the same computer as you, you need to open the spreadsheet.  On a mobile device, if you have Google Sheets installed, the spreadsheet will automatically show the dice rolls and update the scores of players using remote devices.  If you open the Google Sheet in a browser, you will have to manually refresh the screen each time the dice are rolled.
