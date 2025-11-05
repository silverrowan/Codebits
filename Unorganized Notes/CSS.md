******Syntax(example)******
Selector(div.class) {
    property(font-weight): value(700);
}

******Selector Types******
Universal selector = *
Type or element selectors - name of given element, eg. div, p, ul
Class Selector = .className (in html add class="className" to the element)
        add mult classes to an element by adding a space between them, eg: class="first-class second-class"
ID Selector = #IDName (in html add id="IDName" to the element 
        only 1 ID per element AND needs to be unique on this page!)

Note: selectors are Case Sensitive
Note: selectors should NOT start with a number, or have spaces in them.


******Using Multiple Selectors****** 
Group Selectors: Cuts down on repetition by applying css to multiple classes (apply css if any of list (OR))
        list class names, separated by commas eg: .text-highlight, .list-background {shared css;}

Chaining Selectors: apply css to elements that have BOTH/ALL selectors (AND)
        list class selectors without spaces eg: .text-highlight.list-background
        class & ID as such: .className#IDName
        generally can't chain type or ID selectors with themselves as an element cant be multiple types or have mult IDs

Combinators: 4 different types; they show/reference the relationship btwn selectors
        Descendant Combinator: a single space between selectors
            elements that match the LAST selector will be selected ONLY IF they have 
            an ancestor (parent, grandparent, etc) that matches the previous selector
                eg. ul .text-highlight  selects ONLY items with class text-highlight within an 
                ul element:  may be separated by multiple levels of nesting, not just immediately
                preceeding ancestor.
                

******Common Css Properties******
color - sets element's TEXT color
background-color - sets element's background color
    both can accept multiple types of values, incl color name, transparent keyword, HEX, RGB, HSL values

font-family
font-size
font-weight
text-align - HORIZONTAL alignment

height
width

box-sizing: border-box (size set w width/height/etc includes padding & border thickness, 
    unlike standard behaviour of NOT including the padding & border thickness)
            content-box (standard behaviour of box-sizing. size of content pre-padding/border)

******Applying Css to Pages******
External CSS: in its own document, linked in the html header, most common method
Internal CSS: embeds the CSS in the HTML file itself, inside <style></style> tags 
    inside the html <head> tags.
    Can be useful for applying unique styles to a single page, but has more drawbacks
Inline CSS: added directly to HTML elements with style="css-property: value; css-property2: value;"
    Not recomended.
    if Need to add a *UNIQUE* style to a *SINGLE* element, this method can work, but 
        can get messy if applied to multiple elements
    duplication if style applied elsewhere
    HOWEVER: any inline CSS with override the other 2 methods (can be pos or neg)


******The Cascade******
Factors that determine which rules apply to a certain element, when rules conflict.
CSS only does what we tell it to, WITH ONE EXCEPTION: browser default styles! 

3 OF the Cascade Factors
******Specificity******
    a CSS declaration that is more SPECIFIC will take precidence over less Specific
        inline styles have higher specificity vs selectors. Ea selector has own specificty level
            ID Selector = most specific
            Class Selector
            Type Selector = least specific (of these 3)
    agian, specificity only matters when multiple conflicting declarations could apply
            An ID Selector will ALWAYS beat any num. of class or type selectors, and so on down the list
            when no declaration of higher specificity then rul with greater number of selectors 
                takes precendence over a rule with fewer selectors.
    not everything adds to specificity! Special symbols like *, +, ~, >, empty space
        do NOT add/change specificity in and of themselves
        .class.secondClass has same specificity as .class > .secondClass
******Inheritance******
    certain CSS properties that when applied to an element are inherited by descendants
        even if no rule explicity written for them
    Typography properties are usually inherited, most others aren't
    Exception is when directly targeting an element, which always beats inheritance
******Rule Order******
    Final Cascade Factor (the tie breaker, when all others are equal)
    Whichever rule was the LAST is the one that applies