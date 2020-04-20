# Becoming an accessibility-focused developer. 

[View the YouTube video](https://youtu.be/FzQBi2_TWo8)

00:00
My name is Suzanne and this talk is called becoming an accessibility-focused developer - or it's at least about beginning on the journey towards becoming one. 

00:10
This is a talk that I originally gave at the React Edinburgh meet-up. I was planning to share it at some other meet ups, but those have sort of fallen through because of the current situation. So I just want to share it online basically. 

00:23
I'll add in the description a link to the slides and some resources - it's bit.ly/a11y-focused-developer. It has links to things I speak about in the presentation and some other resources, and of course the slides themselves. 

00:42
If you haven't come across the term 'a11y' before - or 'ally' as you'll sometimes hear it called - it's just a short form for the word accessibility. So it's the 'a' and the 'y' from the beginning and the end of the word, and the 11 represents the middle eleven letters that are missing - so there we have it!

01:01
So we'll just dive right in, and I want to start by pointing out that accessibility is everyone's responsibility. And by that I don't mean everyone listening to this talk, or every developer. I mean everyone in an organization that makes a tech product.

01:19
For an app to be usable and accessible by the most number of people, it really needs to be thought about at every stage of the process. So everything from what the app is in the first place, to the planning, the analyzing, the user research, the designing, the coding, the testing... all of it. But that is a lot of people to try to convince if you're just starting to talk about this in your organization and you will hear a lot of bad takes if you do start talking about this in your organization for the first time. 

01:53
So you might hear things like: "well I'm sorry but accessibility isn't part of the MVP". You'll definitely hear "just put a ticket in the backlog" - the subtext for which is "where it will live forever", and my personal favourite of "oh we don't have any disabled users so this isn't a problem for us". Which is... yeah there's a lot to unpack there. I mean on a very basic level you're not going to have any disabled users if they can't use your app. 

02:24
These sort of quotes, they're all real things that have been said to me. They're very common and they're incredibly ablist. You know it is a true privilege to be able to be so dismissive of accessibility concerns. But that's not to say that we shouldn't do anything and while I definitely encourage you to go out and be an advocate for accessibility in your organization - I definitely do - this talk is more about what we as developers can control, and that is that small piece of the puzzle - the implementation. 

03:00
We have control over the code that we write, the code that we review, how we choose to program. So that's what this talk is about. Not to get bogged down in the wider battle but more about what we individually can do to start becoming better at accessibility. 

03:21
I'm going to talk about some key habits that we can build for our day-to-day work life. We'll look at how we can use our ESLint to help detect common accessibility issues. We'll look at some low effort, high-reward refactoring that we can make a standard part of our process, and finally we'll look at how we can learn about accessibility by just finding our own bugs and solving them.

03:50
First up, if you're using React or Vue or another popular JSX framework you're probably using ESLint in your projects, so I encourage you to add this accessibility plugin for your ESLint, which is eslint-plugin-jsx-a11y. It's an NPM package. That sort of addition to your codebase in your workplace will require a review and people to get on board, but hopefully it should be quite non-controversial. 

04:21
What it's going to do is it's going to help you catch some really common errors before they make it anywhere near code review, let alone production. So things like: did you accidentally forget some alternative text on your images? did you accidentally not associate a label with an input? and things like have you put an onClick listener on a div for example that isn't accessible by the keyboard and not interactive. All really useful things and of course it does much more as well. 

04:57
Here's a little example of what the output looks like. It should be quite familiar to people who use ESLint already. In this example we've got an input and a label so on the surface it might all look A-OK, but the linter is telling us that the label and the input haven't been properly associated. It's flagging that up, and as you see there's a quick fix option available. Like many ESLint errors, quite often you can solve them just with a single click, so it's definitely worth doing so.

05:30
By using ESLint in this way we're going to prevent a lot of minor errors making it anywhere near our pull request which is awesome. 

05:40
Once you are ready to do your pull request - you've done your bit of work on your feature, your linter is happy - I'd say before you push up to review think about just doing these couple of key pieces of refactoring to give a bit of an accessibility boost to what you were doing. 

05:58
The first is tolook at where you have used divs and think about if there is a semantic alternative that you could use.

06:04
As W3C say - "authors are strongly encouraged to view the div element as an element of last resort for when there's no other element suitable". And the reason they say that is because unlike almost every other HTML element the div has no semantic value, nothing at all, so it should only be used if there's not a better fit for the job. 

06:32
One way that you can probably refactor out some divs is to think about using landmarks. Landmarks allow screen reader users to see an outline of the page and to quickly jump to the relevant content more easily. Some landmarks that you might use are things like the header and the footer - you probably use and those in your apps already - nav, main, asside, section. You might find these throughout your codebase but you might find that there's some that you're not fully using at the moment.

07:04
I just going to take you on a quick tour through how you would use those and how they are surfaced to screen reader users.  

07:11
First up is the <header>. I think we're probably all familiar with it - it normally sits at top of the page, it's at the top level of your structure (there should only be one of them at the top level). <header> maps to the area landmark of 'banner' the name doesn't matter too much but it's just to make you aware that if you start using the screen reader, testing with it or seeing its output, you're going to see the word 'banner' instead of 'header' but it's the same thing. 

07:41
The <footer> is at the bottom of the page, there should only be one at the top level of your page structure. It maps to the aria landmark of 'contentinfo', which when you think about it makes a bit of sense because quite often we put in the footer things like a privacy policy or a copyright statement, that sort of information about the overall content of our app.

08:05
<nav> maps to 'navigation', we can use it to wrap lists of links to help users navigate around our app and you can have more than one nav element. You can have as many as you like - you might find that in your site you have some general links up in the header, but maybe you've got some breadcrumb navigation elsewhere. You can have more than one; if you do have more than one give them a label because by doing so when a user hears or sees the outline of your page instead of seeing 'navigation, navigation, navigation', you can give them a name so they see 'global navigation, breadcrumb navigation' and that's going to help them get to the content they want a lot more easily. 

08:52
Now the <main> element is one that I think is sorely underused in most sites I see. It should wrap the main content of your page and what that does is it allows the user to go directly to your main content, skipping over any amount of links or whatever you have in your header and just get straight to what you're trying to surface to them. So it's a bit of a win-win situation. It maps to the aria landmark of 'main'. 

09:21
And then we have the <aside> which maps to the aria landmark of 'complementary', which I think is a much better name for what it is. It sits outside of your main content but it complements it, so for example it might be used for "here's some links out to other resources that you might find relevant" or "here's some similar stories about this topic". It's something that does relate to the main content but isn't actually part of the main content. And like the <nav>, you can have as many asides as you want, but if you do have more than one just give them a label so that users can tell them apart. 

10:00
Lastly I wanted to mention <section> which maps to the aria landmark of 'region' but only if you do give it a label - so just to be aware you would need to label it. That would be a part of your main content, and you should use section if that part of your main content really is standalone; so a user could go directly to it and could understand it and consume it without taking in any of the rest of your main content or anything else on the page. So you might not want to use this very often, but if you do have a section of content that you want to surface as sort of unique and individual on its own, section is a way to do it.

10:42
Another way that we can refactor out some divs is to take a minute and consider if we have any lists on the page that maybe we haven't made the connection that they are lists, and we haven't used a list element.

10:56
Marking up lists with <ul> and <li> gives screenreader users context. It lets them know that there is more than one of this thing, it lets them know exactly how many there are, lets them know how many are in the list and what position they're at. One of a hundred is much different than one of three - it's useful for a user to know so they know whether to continue reading or to skip over it. 

11:24
And I think we're quite guilty of only using lists when we want that pre-packaged CSS style that we get with  the little bullet points. So just take a minute and think: is this actually a list, do have a lot of similar things. 

11:40
One rule that helps me with this is that if you used map() to create a list of elements for display, that's a clue they should probably be a list. 

11:49
Quite often we take chunks of data from an API, we generate a bunch of nice pretty things - could be images, could be links, could be anything - and we don't always recognize it as being a list because they don't have neat little bullet points. So if you use map(), just take a moment and think: hang on, is this a list?

12:11
So the next part of refactoring that I'd encourage you to do is just to have a quick audit of your headings. And the reason for that is when WebaAIM did their last screen reader user survey, a huge number of respondents - 68.8% - said that their first action when they arrived on a web page is to navigate by heading levels; a vast majority. 

12:36
What do I mean by navigate by heading levels? Well what I mean is when you're using a screen reader you can bring up a document outline of the page based on different elements. We talked about landmarks, and you can do it by landmark. You can also do it by heading levels. 

12:56
This example is from the React Edinburgh Meetup page which is where I first gave this talk, and you'll see there's a heading level 1 of 'React Edinburgh' - that tells us what the page is about - and level 2: 'What we're about' heading level 3: 'Upcoming events','Past events', 'Photos' and so on, all the way down. And you start to see that if you were looking for the past events, you can find that heading and you can jump directly to thatcontent. 

13:22
It's really useful for screen reader users, so they don't have to read all this other stuff to get to where they want. It's very similar to how a sighted user skims and scans the page for what they're looking for too.

13:34
And just a quick note to say that if you have been given a design that has no headings - it does happen sometimes - and the designer is really keen that they don't want visually for there to be any headings - it doesn't stop you from adding an invisible one, and that is better than nothing at all. 

13:54
This is a CSS snippet that I find really useful sometimes for when you want some content to be visible only for screen reader users - just position it off-screen, make sure no-one else can see it and then that heading still exists for users who are using the screen reader.  

14:14
When you are adding headings I'd encourage you to think of the heading levels in terms of the structure, not the style. I think we can be a bit guilty sometimes of thinking about heading levels in terms of the pre-packaged CSS that we get for them - so you know "oh it's about this big that looks like an h4", or "it's quite small that's an h6". But heading levels have a semantic value and that's their main purpose. 

14:38
To give you a little bit of an example of how those heading levels create structure, I've a really simplistic example that I've made up. 

14:48
We have page with this h1 saying "Find a pet for adoption" - that's what this page is about - brilliant. Then we have a bunch of h2s - "Meet our dogs", "Meet our cats", "New arrivals". So "Meet our dogs" - I'm gonna guess it's about dogs. "Meet our cats" - I'm gonna guess it's about cats. "New arrivals" - I don't know, maybe it's dogs and it's cats, or maybe it's dogs, cats, and rabbits or maybe it's about staff - I don't know, who can say? 

15:19
But if we change that "New arrivals" header to be an h3, suddenly we've changed the outline of the page and I can understand the "New arrivals" sits underneath "Meet our cats" and so I'm only gonna find cats in this section. 

15:30
I've purposely used indentation to show the different levels here because that's how I think about it. I think about it like a little nested structure, and that's basically what it is - it's a document outline with things nested inside of each other. 

15:48
A couple of golden rules: only one <h1> per page - so it's definitive, it tells you what this page is about, so there should only be one. And increase the heading level by one at a time as you nest inside (if it's related to the heading above).

16:02
So we've done some quick win refactoring - that's all great. The next thing to do is to start to verify our code in the browser, and I'd recommend that you start off with an extension tool like axe or a wave - there are others available, but these are two of the most popular.

16:20
I personally prefer axe, but try a few and see what you like. You can get these for Chrome or Firefox whatever browser you're using - it's just an extension. 

16:32
What they're gonna help you do is again catch common errors. It's very much like linting except now your code is in the browser so there's a lot more than we can pick up. 

16:42
So things like: color contrast, heading levels like we discussed - so now all your components have been rendered together on one page does the heading structure still make sense? It's quite easy for that to get skewed.  Do you have any duplicate or missing landmarks? 

17:00
This is a little example of what it can look like. So this is the axe tool and again I'm looking at the React Edinburgh meetup page. It's flagged up a few errors here with color contrast, some things about IDs, images missing alternative text... and you start to get a little hit list.

17:19
You can filter it by severity, you can click on 'inspect node' and it'll take you to the element that's causing the issue, you can click 'highlight' which will highlight it on the page in a little box, and you can change it by potential issues to critical issues and errors and you can save the results as well. 

17:38
So you can start to see how we're going to learn a lot about accessibility by doing this as well. One good thing that I like about axe - it's probably true of wave as well, I'm not sure - but it does link you out to content that will help you understand the rule and help you fix it as well, so you get pointed to a lot of great learning resources through it, which is awesome. 

18:00
Definitely do that try and pick up any issues you've introduced. If you see something else that you can fix at the same time while you're doing your feature, then great as well! But the minimum, don't introduce any new issues.

18:14
The next step would be to check that your work is operable by a keyboard alone. Keyboard navigation is essential for accessibility and it's something that as developers I think we do a lot of keyboard navigation anyway, to make things quicker and use shortcuts and stuff, so hopefully it can become a normal part of your workflow to do these checks. 

18:38
But what are we checking for? We want to verify that you can tab to every interactive element (and just FYI you do shift tab to go backwards). We want to check that we can see where the current focus is if you're a sighted user and you're doing these checks, check that you can see where the focus is. 

18:56
Here's a little example of that - I'm going to hit play and you'll see the blue focus outline following along the page and eventually what's going to happen here when we get to the 'Join this group' button, we're going to lose that focus indicator and we'll lose it for a few buttons and then it's going to reappear again. 

19:22
There is a very subtle focus style on those buttons that look like they're being skipped but it's so subtle that if you're not looking for it you probably won't see it. And the reason that that's happened is because the developer has overridden that default focus style that we're seeing elsewhere with the nice blue focus outline, and they haven't replaced it with something that's still clearly visible. 

19:43
You can imagine it's quite disorientating and maybe just even watching this little clip maybe you got a bit disorientated and you couldn't see where the focus was, so just always do a quick check with the tab key just to make sure that you can see. 

19:57
Ensure that that tab order is logical as you go along and by logical I tend to mean the order which you would probably read it. Which is normally left to right top to bottom - depending on your country. 

20:16
Here's a little example of how it can go wrong. We're going to see that focus indicator go to the header, then the footer, all the links of the aside, and then finally to the main content.

20:26
Which is a bit silly, because the main content I would expect to come after the header. And the reason that's happened is because I literally declared the elements that way. That's just an example I made up and when you see it written there it looks very very silly, I know, but a skewed tab order can easily happen especially when we're working with laying our items in CSS Grid or in flexbox and multiple directions, or if we're pulling in a lot of components and then rendering them all together, or we're doing different layouts for responsive design with components moving around. It's very very easy for the tab order to go wrong and you can do this check just by hitting the tab key, just to make sure it's in the right place, and to fix it it's almost as simple as just moving the components around. 

21:22
And then test that you can interact with elements when you get to them. So you've been able to tab to your button - if you hit enter, does it work? You might have some problems if you have used any divs, for example. Hopefully your linting tools will have picked this up, but if you haven't used something that's semantically interactive like a link or a button, you might find that although you've made it focusable - have you made it actually clickable? So it's good to double-check. 

21:53
And finally, check your code works for screen reader users... and at this point you might be thinking "oh god Suzanne like this sounds like a lot of work - I'm going to do this keyboard check, and I'm going to do this axe assessment in the browser and do I really need to switch on the screen reader each and every time I'm gonna push up something for code review?".

22:12
And I kind of agree with you. It maybe is a little bit much, but I have one golden rule and that's if you use an aria attribute anywhere in the code you've written, you should be checking it with a screen reader. 

22:26
The reason I say that is because aria attributes have the power to override the other semantics of the page and also aria attributes are pretty much only surfaced to screen reader users, so if you're not switching on your screen reader how are you checking that your code works?

22:42
So yeah, I'd say a reasonable minimum is if you've used aria, you need to turn on the screen reader and just do a quick check.

22:51
If you're getting started for the first time with screen reader testing it's good to pick up a screen reader / browser combination that your users are likely to be using. 

23:03
If you're on Windows, NVDA and Firefox is a good combination to go for. If you're on Mac you get VoiceOver and Safari installed by default.

23:13
NVDA by the way is a free download - you will need to download it for Windows but it's free. VoiceOver and Safari come pre-installed on your Mac. That's based on user behavior reported in this screen reader user survey, so if you're checking in these combos you're probably going to get the results like a true reflection of how your code is working for users. If you use VoiceOver, for example with Chrome, you might get some slightly odd findings, so it's definitely good to stick to these combos as much as you can.

23:43
And just learn a few key skills with your screen reader, just to get comfortable. These commands that I'm putting up here are for VoiceOver on Mac, but I'll link in the resources to NVDA commands that do the same. 

23:59
Learn how to switch it on and off. In my experience nothing puts developers off using the screen reader more than the fear that they're going to leave it on and they're not going to be able to switch it off, and you're going to be in the middle of the office and it's going to be, like, really loudly announcing all your failed attempts to switch off and it's going to be embarrassing or whatever. But it's command F5 on Mac to switch on and it's command F5 on Mac to switch off, so I promise you, if you can switch it on you can switch it off. So don't worry. 

24:34
Get comfortable switching it on and off, get comfortable reading parts of the page. On VoiceOver that's going to be ctrl + option + right and left arrows: right to go forward and left to go back. Just go and read it section by section, and then just get comfortable interacting with items once you get to them. Control + option + spacebar will execute the default action, so that's clicking on a link or a button. 

24:59
That's really it - with those key basics you're going to be able to just check that your code is being announced as you expect. You're going to be able to check that you can get to and click on it, and you'll be able to do a good sweep.

25:11
These are the basics I'm talking about for developers getting ready to push to review. If you are a tester I'd say you need to learn a lot more about screen readers - you need to be doing more thorough passes, and certainly every regression pass should include a thorough screen reader check as well from different browsers. 

25:37
But these tips are just really for developers getting ready to just make sure that their code is good code before we push out to review, and I honestly think just being able to read it and interact with it and everything sounds and works as expected - that's going to set you ahead of a lot of developers, honestly. 

25:59
So, your new pre-push checklist: We're going to take a step back and refactor for semantics and for heading structure; we're going to just verify our work in the browser with an extension like axe or wave; we're going to double check our work works with the keyboard alone; we're going to check with the screen reader if we have used an aria attribute, or ideally all the time, but at a minimum if we've used an aria attribute. 

26:29
If you do these things it will eventually become just a normal part of your workflow. You won't need to think about it as a refactoring step anymore because you're going to be thinking more and more about what is the most semantic element to use for what I'm trying to create; you're going to naturally nest your heading levels properly because you're going to be thinking in that way. And checking your work with a keyboard - it's all going to become second nature eventually. 

26:53
And to be honest the more that you do this the more that you'll learn about accessibility, the more you'll identify your own bugs and your own gaps in knowledge, so you can go find the solutions. 

27:05
And the more that you're thinking about this, the more that your code reviews are going to influence other developers in your team, because you're going to say "hey, I don't think this is keyboard accessible - just have a quick check". 

27:18
And the more that you're doing this you're also going to influence conversations with your design team, and with your business analysts... and so on. And honestly there will be a ripple-out effect. 

27:28
I talked at the start about how it's a lot of people to get on board - at the end of the day if you get yourself on board and you get your head in the space of thinking about accessibility as an integral part of your work, that is going to naturally rub off on other people and there will be a little ripple-out effect that will benefit your users. 

27:49
So that's it! A link to the slides and the resources like I mentioned, I'll put it in the description below but bit.ly/a11y-focused-developer - all the sites and resources I've talked about and some more besides. And then there's a link there to my site: upyoura11y.com, and that is full of tutorials and resources for creating accessible web experiences. It does have a section specifically about React but the rest of it is broadly applicable to all frameworks.  

28:28
I hope you found this useful, and if you did please do feel free to comment or to share it with colleagues or to pass on any feedback. Thanks!

