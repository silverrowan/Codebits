---
tags:
  - Ruby
source: https://ruby-for-beginners.rubymonstas.org/bonus/good_names.html
---
- Choosing good names (for your variables, methods, and classes) is important.
- Good names make your code more expressive and *easy to read*
- Ruby is particularly great for writing expressive, readable code

- using the 'type' of an object as a variable name or part thereof is not a very good idea!
    - eg. *string, array, hash* are bad names *except* in contexts where the type of object is *all* that matters. (eg. method definition of `encrypt(string)`)
- Avoid abbreviations!

[https://github.com/rubocop/ruby-style-guide | ruby style guide]

*strong suggestions*
- never use a metaphore/simile/figure of speach you are used to seeing in print
    - dont use a name jsut because you're used to seeing them in code
- never use a long word where a short one will do
    - prefer concise variable names, use longer names for good reason
        - eg. *company_person_collection* vs. *staff*
- if it is possible to cut a word out, always cut it out
    - avoid additional words that dont add meaning
>         - 'This is like homeopathy. What you've done is you've diluted the meaning until it's all gone.' - @KevlinHenney
- Never use the passive where you can use the active
    - eg. class planEvents vs class eventPlanner (or even better class Scheduler)
- Never use a foreign phrase, a sci word, or jargon if you can think of an everyday english equivalent
    - dont let technical jargon from a library pollute your domain model (???)
    - beware libraries that import 'foreign' nameing from one language to another
- Break any of these rules sooner than say anything outright barbarous
    - context matters / dont use the rules to make confusing code