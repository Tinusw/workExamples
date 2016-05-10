Example 1 - Sidebar Toggle using pure CSS!  
====================
https://jsfiddle.net/0esfLscc/4/

Implimented here :   
---------------------
https://ancient-ocean-10077.herokuapp.com/  
https://github.com/Tinusw/RubyEcommerceSite  


- Just a cool example of how you can use the toggle state of a checkbox to trigger css position changes! Well....any changes actually. No jquery needed!

- Only niggle I had to deal with is that you generally have to wrap the rest of your page content inside of one 'page-content' div so that content will shift to the side when you open the sidebar instead of covering content. Kinda irritating especially when you have a large project.

- Thanks to Travis Neilson for turning me onto this though. (Check his youtube channel DevTips, honestly.)

Example 2 - Using jquery to simplify adding html elements
====================  
http://designer-cut-30258.bitballoon.com/#workCont    

Implimented here :  
---------------------
http://designer-cut-30258.bitballoon.com/#workCont  
https://github.com/Tinusw/ResponsiveWebsite  

- Using a jquery varialbes to add content, and to add new divs with said content simply by adding to the var

- Saves you having to manually add html elements for each new item on a site. Instead you can simply save them in an array, and jquery will populate it for you!

- Combo that with bootstrap classes and you'll be able to update an informational site relatively stress free.

Example 3 - Data Validation (Email form example)
====================  
https://jsfiddle.net/uw188pdg/7/  

Implimented here :  
--------------------- 
http://designer-cut-30258.bitballoon.com/#contactCont  
https://github.com/Tinusw/ResponsiveWebsite  

- So really just a few more muscle flexing jquery ideas:

- A running charachter count for the email message body, just ensuring there is content, and also turning red to notify user once he's gone over an acceptable threshold

- Input validation to show a user what needs to be completed for an email to be successfully sent.

- I'm also using a really funky little email validation method that kinda befuddles me. But as far as I can determine it's a version of the addr-spec, which is an internet specific email identifier, and all email addresses need to adhere to it.

- I think there are more hardcore versions of the regular expression out there, but for my purposes that did the job. More here :
https://tools.ietf.org/html/rfc2822#section-3.4.1

- Confirmation message is then shown to a user and input fields are hidden once the message/name/email subscribes to our needs.

