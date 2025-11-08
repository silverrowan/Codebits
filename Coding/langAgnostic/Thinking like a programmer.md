---
tags:
  - meta-learning
---
lecture: https://www.youtube.com/watch?v=azcrPFhaY9k
- lots about *teaching* coding

Coding *isnt*:....

- Coding has only ~ 8 main concepts that work almost the same in every language.
- Learn how to use these concepts in English.
    - Secret is algorithms and data not code.
    - write out concepts first and THEN convert to code.
- if stuck, try explaining/break it down (how to do) BEFORE touching the code (how)
- Comments are there to:
    - explain code to other programmers (lol)
    - and yourself XD
    - NO!
    - code explains the #comments to the computer!
    - comments *are* code. (at least for beginners)
    - ==this conflicts with the idea that clean code doesn't explain what the code is doing, but why.==

- new variables (a place in memory to hold data)
- concept: make a new variable (approx 8 of these)
    - Name: what do we call it
    - Type: what type of data does it hold
    - initial starting value
        - questions need to be answered
    - Algorithm: Create a variable called NAME of TYPE that starts with VALUE

- concept: output
    - eg. message: text to write *to user*.
    - output algorithm: output the text MESSAGE
- concept: input
    - Now we start having dependencies! 
        - need to already have a message
        - need to already have a variable
    - variable: where answer from user will be stored
    - message: question being asked of the user
    - input algo: ask the user MESSAGE and store the answer in VARIABLE
- thats enough for a super simple program!
    - eg. (PSEUDOCODE (ISH))
        - create an integer variable for x
        - create an integer variable for y
        - create an integer variable for sum
        - ask the user: "x = " and put answer in x
        - ask the user: "y = " and put answer in y
        - put x + y in sum
        - tell user 'answer is' sum
    - now convert above to comments
    - "flesh out" the comments
        - into code (eg is python)
            - create an integer variable for x
                - x = 0
            - create an integer variable for y
                - y = 0
            - create an integer variable for sum
                - sum = 0
            - ask the user: "x = " and put answer in x
                - x = input("X: ")
            - ask the user: "y = " and put answer in y
                - y = input("Y: ")
            - put x + y in sum
                - sum = x + y
            - tell user 'answer is' sum
                - print ("Answer is: ")
                - print (sum)
        - now time to test!
            - python online enviros: pythonanywhere.com, cloud9, python.org
        - oh no, problem! it gave 35!
        - This is a normal part of programming.
            - begin debugging
            - Did you tell it what do incorrectly?
            - Did you tell it to do the wrong thing?
            - begginers usually think its a *implementation* problem (typed wrong), when usually its a *algorithm* problem (wrong thing/forgot a step)
                - bad implementation can be googled. it its not giving you the right answer.....
                - its probably a bad algorithm or understanding of the problem space.
                    - what are you not understanding?
                    - what tools can you use?
                    - DON'T start with a solution (when teaching people)
        - what happened here?
            - easy to assume '+' is broken
            - That's not really the problem
            - try: print("python " + "meetup") => python meetup, not error!
            - hmmmm. we can add text!
            - does it think 2 & 3 are text?
            - type function tells us what type a variable is!
            - oh look it is
        - convert to integer algorithm.
            - convert oldVariable to integer and store in intVariable
            - add these lines after user input lines:
                - convert x to integer
                - convert y to integer
        - actually put it in wrong order!
        - x = 0
        - y = 0
        - sum = 0
        - x = input("X: ")
        - y = input("Y: ") 
        - sum = x + y
        - print("sum is ")
        - print (sum)
more concepts...
- Branching
- #for-loop
    - #sentry: integer variable that will control loop
    - start: integer value of sentry at beginning
    - finish: integer value of sentry at end
    - change: integer to add to sentry at each pass
    - for algorithm
        - begin with **sentry** at **start** and add **change** to **sentry** on each pass until **sentry** is larger than or equal to **finish**
- #while-loop
    - sentry: variable that will control loop
    - initialization code: code that initializes sentry
    - condition: loop repeats if condition is true
    - change code: code to change sentry so condition can be triggered
- but while loop (in python?) has only 1 parameter!?
- the problem with while loops is they *imply* a lot they don't *require*
- for algorithm
    - initialize **sentry** with **initialization code** then continue loop as long as **condition** is true. Inside loop, change **sentry** with **change code**
        - note syntax only requires a ***condition***.
        - good logic requires much more. This is why while loops can be a notorious problem for beginners.
    - must:
        - think about what the **sentry** is
        - **initialize** the sentry before you get to the loop
            - have to plan ahead
        -  **change** the sentry somewhere inside the loop, such that it guarantees it will trigger the **condition**
- Consider basic password loop:
    - exits with a positive result if user enters correct password
    - exits with a neg result if user is wrong 3x
    - how will you write this loop?
- Multiple exits (boolean variables are amazing, boolean operators that bug presenter because 0 = no... etc.)
    - Use a compound condition
        - (tries >=3 and guess != correct)
        - wait
        - if it its a not should it be 
        - tries >= 3 or guess != correct
        - Screw it, make it a for loop.
        - if they guess correctly just promote the couter to exit
        - no make it an endless loop and throw in some break statements
        - .....
    - alternative! the #keep-going-loop'
        - correct = "IndyPy"
        - tries = 0
    - keepGoing = True
    - while(keepGoing):
        - tries = tries + 1
        - print (try #, of tries)

            guess = input(what is the password)
            if guess == correct:
            print(correct!)
            keepgoing = false

            elseif tries >=3
            print(too many tries, goodbye)
            keepGoing = False

Other concepts to teach
- lists and tuples
- string manipulation (using pre-existing object)
- working with built-in help
- list iterations
- functions, and scope parameters & return
- objects
- ...
The art of #teaching is knowing what NOT to teach
    learn it and do it before learning something else
    this is NOT a spectator sport
    teaching yourself means you have an amateur teacher
    you don't have to know anything