![It's finally done! GitHub User Search App. Challenge by Frontend Mentor. Coded by Vanza Setia](./images/banner.jpg)

<p align="left">
  <a href="https://www.frontendmentor.io/challenges?difficulties=2"><img src="https://img.shields.io/badge/Difficulty-Junior-91BD28?style=for-the-badge&logo=frontendmentor" alt="Challenge Difficulty - Junior"></a>
  <img alt="Repo size" src="https://img.shields.io/github/repo-size/vanzasetia/github-user-search-app?style=for-the-badge&logo=github">
  <a href="https://twitter.com/vanzasetia"><img src="https://img.shields.io/twitter/follow/vanzasetia?logo=twitter&style=for-the-badge" alt="Twitter followers." /></a>
  <img alt="Last commit" src="https://img.shields.io/github/last-commit/vanzasetia/github-user-search-app?style=for-the-badge&logo=git">
  <img alt="Netlify" src="https://img.shields.io/netlify/b6cfb4ab-d176-43b9-a5fa-9fcf256608ff?style=for-the-badge&logo=netlify">
  <img alt="License" src="https://img.shields.io/github/license/vanzasetia/github-user-search-app?color=green&style=for-the-badge&logo=github">
</p>

<p>
  <a href="https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fofficialdevfinder.netlify.app&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en">
    <img style="border:0;width:88px;height:31px"
        src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
        alt="Valid CSS!" />
    </a>
    <a href="https://github.com/standard/semistandard">
      <img style="border:0;height:31px"
        src="https://raw.githubusercontent.com/standard/semistandard/master/badge.svg"
        alt="JavaScript Semistandard Code Style" />
    </a>
</p>

# GitHub User Search App

## Table of contents
- [Overview](#overview)
  - [Introduction](#introduction)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Screenshots](#screenshots)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgements](#acknowledgements)
- [License](#license)
- [References](#references)

## Overview
[(Back to top)](#table-of-contents)

### Introduction
Welcome to the `README.md` of this repo! The purpose of creating this project is to sharpen my coding skill.

In this file I'm going to tell you everything, starting from the tools that I used, and much more.

That's it for the introduction and **happy reading!**
### The Challenge

My challenge is to build out this GitHub user search app using the [GitHub users API](https://docs.github.com/en/rest/users/users#get-a-user) and get it looking as close to the design as possible.

My users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- See visible focus states for interactive elements when navigating by keyboard
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes
- Understand and be able to navigate page content while using assistive technology
- Have the correct color scheme chosen for them based on their computer preferences.

### Links
- [Live Review](https://officialdevfinder.netlify.app/)
- [Frontend Mentor Solution Page](https://www.frontendmentor.io/solutions/github-user-search-app-html-css-sass-javascript-async-await-nBt6_lQS5M)

### Screenshots

![Desktop light theme](./screenshots/desktop-light.jpg)

![Desktop dark theme](./screenshots/desktop-dark.jpg)

## My Process
[(Back to top)](#table-of-contents)

### Built With
- **Following best practices**\* 
- HTML Semantic Tags
- [BEM (Block, Element, Modifier)](https://sparkbox.com/foundry/bem_by_example) Class *Naming Convention*
- [Sass](https://sass-lang.com/)
- JavaScript Async Await
- JavaScript Fetch API
- CSS Flexbox
- CSS Grid
- [GitHub user API](https://docs.github.com/en/rest/users/users#get-a-user)
- [ipify - A Simple Public IP Address API](https://www.ipify.org/)
- Mobile-first workflow

> \* I follow guidelines. [See what guidelines that I follow.](./docs/README.md#guidelines)

### What I Learned

#### GitHub User API
[(Back to top)](#table-of-contents)

Here is the URL.

```
https://api.github.com/users/{username}
```

The [documentation](https://docs.github.com/en/rest/users/users#get-a-user) shows it clearly that we will get:
- User's data in JSON format
- For the HTTP response status code, we can get either `200` or `404`

Now, for the status code, there is a chance that we can get `403`. This will happen if you do a lot of requests. As a result, you will not allow to do any request with that IP address.

![](./images/api-rate-limit-exceeded.png)

Now, we have a good understanding of what can we possibly get when making a request to the API. It's time to talk about asynchronous programming!

#### Asynchronous Programming
[(Back to top)](#table-of-contents)

Based on my understanding, asynchronous programming is a program that doesn't block the main process of executing JavaScript. Simple, right? Well, try to take a look yourself at the [Wikipedia definition for asynchronous programming](https://en.wikipedia.org/wiki/Asynchrony_(computer_programming)) for the complete definition. (It's confusing for me. 😅)

The easiest example of asynchronous programming that I could think of is the `setTimeout()` function.

```javascript
setTimeout(() => {
  console.log("What did I miss?");
}, 3000)
console.log("I don't get blocked by the setTimeout() function");
console.log("Me too!");

// Expected output:
// > I don't get blocked by the setTimeout() function
// > Me too!
// > What did I miss?
```

The example above reminds me of the Internet Explorer meme.

![](./images/internet-explorer-meme.jpg)

#### Multiple Ways to Make a Request to the Server
[(Back to top)](#table-of-contents)

There are two ways that I learned.
- First, an old-school way of doing it is by using [`XMLHttpRequest()`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest).
- Second, the new way of doing it is by using [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

I was using both of them. I found that both of them were confusing to me (bad first impression). 😆

When using `XMLHttpRequest`, there are things that I love and I hate. 

I love it because it has everything. For example, if you want to specify the data type that you will get then you can do, [`XMLHttpRequest.type`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType). 

I hate it because it can't return the data. So, if you want to access the data then you have to use it inside the `function`. The reason is simply that it is an asynchronous process. Also, I have to keep creating a new `XMLHttpRequest` object. Otherwise, it will be impossible to use it.

By the way, this is the way I used it. (it's not a complete code if you want to see the full code, [view xmlhttprequest.js file](./js/xmlhttprequest.js))

```javascript
const fetchUserData = (username) => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", `https://api.github.com/users/${username}`);

  xhr.responseType = "json";

  xhr.onreadystatechange = () => {
    const DONE = 4;
    const OK = 200;

    if (xhr.readyState === DONE) {
      if (xhr.status === OK) {
        const json = xhr.response;
        showUserData(json);
      }
    }
  };
};
```

Maybe, I should use the callback approach (?).

```javascript
// set a second parameter called "callback" 
// which will be a function (or callback function).
const fetchUserData = (username, callback) => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", `https://api.github.com/users/${username}`);

  xhr.responseType = "json";

  xhr.onreadystatechange = () => {
    const DONE = 4;
    const OK = 200;

    if (xhr.readyState === DONE) {
      if (xhr.status === OK) {
        const json = xhr.response;
        // call the callback to access the data
        callback(json);
      }
    }
  };
};
```

**Next!** It is the Fetch API!

It is much simpler though and also it can return data (unlike `XMLHttpRequest`). It is also globally available (or available in global scope). It means that I don't have to keep creating a new fetch object.

So, it is very simple!

If I want to simply fetch user data then this code will work.

```javascript
fetch(`https://api.github.com/users/${username}`)
  .then((response) => response.json())
  .then((json) => /* do whatever I like */)
```

To handle error, I used the `.catch()`.

```javascript
fetch(`https://api.github.com/users/${username}`)
  .then((response) => response.json())
  .then((json) => /* do whatever I like */)
  .catch((error) => /* handle error */)
```

#### Elegant Way to Work with Promises
[(Back to top)](#table-of-contents)

There is a better way to deal with `Promise` which is by using `async` and `await` keywords. So, instead of keeping doing `.then()` or even worse a lot of `callback` functions we can deal with it more elegantly.

So, in async/await the code will be something like this.

```javascript
const fetchUserData = async (username) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const json = await response.json();
    /* do something with the json */
  } catch (error) {
    /* handle error */
  }
}
```

#### Dark Mode in Hard Mode
[(Back to top)](#table-of-contents)

Enough with API! Now, let's talk about another important feature of the application which is switching between light mode and dark mode.

I love dark mode. So, this is something that I have to be able to do. But, it is not as simple as toggling a CSS class because there are things that I need to keep in mind.

- First, I need to make sure that the app follows the user's color scheme preference.
- Second, the app should be able to remember the user's latest selected color scheme.
- Third, there should not be [*flashing*](#flashing).

Now, let me explain how I managed to keep these three things working together.

The first one is pretty straightforward. All I need to do was to use the `prefers-color-scheme` media query. But, it was not just like that. I used CSS custom properties to control all the colors for the element.

For example for the `body` background color and text color:

```css
:root {
  /* color variables */
  --very-light-blue: hsl(227, 100%, 98%);
  --dark-blue-100: hsl(217, 35%, 45%);
  --very-dark-blue-300: hsl(220, 40%, 13%);
  --white: hsl(0, 0%, 100%);

  /* variables that handle the color for each element */
  --body-background-color: var(--very-light-blue);
  --body-font-color: var(--dark-blue-100);
}

@media screen and (prefers-color-scheme: dark) {
  :root {
    --body-background-color: var(--very-dark-blue-300);
    --body-font-color: var(--white);
  }
}
```

For the rest of the other elements, I did the same thing.

Next, to make the app remembers the latest user's color scheme preference, I used `localStorage`. But, the way I did it might be interesting for you.

There are two possible ways for the user to change the color scheme of the website.

- First, the user can click the theme switcher.
- Second, the user can change the color scheme preference from the user's system setting.

Here is what I was doing.

So, when the user changes the color scheme through the user's system setting then, the website would follow it and also removes the latest user's color scheme. By doing this, the app can adapt to different situations.

(Make sure you drink enough water before reading the next section. I am telling you this because it can be confusing.)

There are two scenarios:
- First scenario, the user visits the site with light mode because the user's color scheme preference is light. Then, the user decides to switch to dark mode by clicking the theme switcher. After that, the user clicks the theme switcher again, so the color scheme of the website would be light. Then, the user changes the color scheme preference to dark. Then, the app will change to dark mode as well.
- Second scenario, the user visits the site with light mode because the user's color scheme preference is light. Then, the user decides to switch to dark mode by clicking the theme switcher. After that, the user changes the user's color scheme preference to dark. The website is still in dark mode. But, what happens in the background, the app will remove the user's latest selected color scheme. Then, the user switches the color scheme to dark by clicking the theme switcher. After that, if the user closes the browser and then opens the website again, the website will be still in dark mode.

So, the conclusion is that the app can adapt. As simple as that.

> You might be wondering. Who is the one who will be doing this? And the answer is **me**. I don't how other users would use the website. But, since it is a possible thing to happen so I think it's best to be prepared. 😅

Next! How did I prevent the app from *flashing*?

I had this JavaScript code to check the user's latest selected color scheme.

```javascript
const persistedColorPreference = localStorage.getItem("color-mode");
const hasPersistedPreference = typeof persistedColorPreference === "string";
if (hasPersistedPreference) {
  const rootElement = document.documentElement;
  rootElement.classList.add(persistedColorPreference);
}
```

I put the JavaScript code inside a file called [`user-preference.js`](./js/user-preference.js). Then, the magic trick is to make the `script` as a synchronous script (instead of using `defer` attribute). It means that the `script` will be executed as soon as the browsers find it. This way, I can set the user's preference ahead of time before the `DOMContentLoaded` event fired.

About the code snippet, it is checking if the `localStorage` saved the latest user's selected color scheme. If it has, then apply the color scheme by adding the class to the `html` element.

#### Flashing
[(Back to top)](#table-of-contents)

Flashing or *color flashing* can be happening when the user's latest selected color scheme is the opposite color scheme of the system's preference.

For example, the user's system's color scheme preference is light. Then, the user changes the color scheme to dark by clicking the theme switcher. After that, the user closes the browser's window to eat breakfast. After the user finishes breakfast, the user comes back to the site. The user will notice that the first time the user visits the page, the user can see light mode for a short amount of time. Lastly, the page changes back to dark mode.

I have created a GIF that demonstrates the flashing.

<details>
<summary>Expand to see the GIF</summary>

![Initial color scheme is light. Then, I switch the color scheme to dark by clicking the theme switcher button. After that, I refresh the page. The flashing is happening. For several milliseconds the page has a light color scheme before changing back to the saved color scheme.](./images/flashing.gif)

</details>

It is happening because the JavaScript will only be downloaded after the document (HTML) has been fully parsed (`defer` attribute). That's why there are some milliseconds (in my case) where the page will be using the default color scheme and then applying the user's latest selected color scheme.

> For your information: I hide the GIF by default. But, you can still see it if you want. It is useful because not all people can deal with animation. For more information, I recommend reading these articles [*"Your Interactive Is Making Me Sick"*](https://source.opennews.org/articles/motion-sick/) and [*"Accessibility For Vestibular Disorders"*](https://alistapart.com/article/accessibility-for-vestibular/).

#### Regular Expressions
[(Back to top)](#table-of-contents)

I used some regular expressions to validate the user's data. So, here are all the regular expressions with some explanations.

The first RegEx is the date RegEx. It is used to get the value from the `new Date(date).toUTCString()`. The return value of the `toUTCString()` is the same format that I need to render the joined date.

```javascript
/**
 * 
 * Date
 * - Must have two digits for the day of the month
 * - For the Month:
 *   - Must be three letters
 *   - The first letter must be capitalized
 * - Must have four digits for the year
 * 
 * @author Vanza Setia <https://github.com/vanzasetia>
 */

const dateRegEx = /\d{2} [A-Z][a-z]{2} \d{4}/;
```

The second RegEx is the whitespace RegEx. I used this RegEx to check if the value of the `website_url` contains whitespace. If it does contain whitespace then I will just render it as a plain text.

```javascript
const whitespaceRegEx = /\s/;
```

The third RegEx is the HTTP RegEx. It is used to check whether the link contains `http` or `https`. The reason for doing this is because if the `website_url` doesn't contain the `http` or `https` then the script has to add it.

If I don't add it, for example, the value that I get for the website URL is [example.com](example.com) then it will navigate to [https://officialdevfinder.netlify.app/example.com](https://officialdevfinder.netlify.app/example.com).

```javascript
/**
 * 
 * HTTP
 * - Must be started with "http"
 * - Optionally to be "https"
 * - Must be followed by "://"
 * 
 * @example
 * // return false
 * const HTTPRegEx = /^https?:\/\//;
 * HTTPRegEx.test("example.com")
 * 
 */
const HTTPRegEx = /^https?:\/\//;
```

The fourth RegEx is the company RegEx. It is used to check for the `company` value. So, if the `company` value has `@` character then I want to make it a link. Otherwise, I would just show it as it is (as normal text). For example, if the value of the `company` is `@github` then the script will make wrap it with an anchor tag and also provide the link to the company profile, [@github](https://github.com/github). But, if the value of the `company` is `Example Company` then it will be rendered as plain text.

```javascript
const companyRegEx = /@/;
```

But, there is an issue that I don't know how to solve. If the user puts a fake company with `@` character then it will get converted to a link even though the company has no GitHub account. For example, if the value of the `company` is `@randomcompany` then the script will make wrap it with an anchor tag and also provide the link to the company profile, [@randomcompanywhichdoesntexist](https://github.com/randomcompanywhichdoesntexist).

I actually have an idea. The idea is to check whether the link exists or not. But, it is not possible to check it with `fetch()`. I did some research and it looks like I have to use PHP. (I don't understand PHP)

Last but an important one is a RegEx that is used to check the user's input. So, if the user's input is valid then start searching for the user. If it is not valid then, the app will just give an alert.

```javascript
/**
 * source: https://github.com/shinnn/github-username-regex
 */
const githubUserNameRegEx = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
```

It is not created by me. It is created by a GitHub user called [shinnn](https://github.com/shinnn). This person is creating the RegEx based on the official GitHub valid username.

![Alert. Username is too long (maximum is 39 characters). Username may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen.](./images/github-username-complete-criteria.png)

#### Inclusively Hidden Label
[(Back to top)](#table-of-contents)

Now, let's talk about accessibility.

I notice there is something not quite right. For example, in my HTML markup, the `p` was visually hidden.

```html
<p id="username-input-label" class="sr-only">Search GitHub username</p>
<input
  type="search"
  aria-labelledby="username-input-label"
/>
```

The reason, why I chose this approach is discussed in the [next section](#placeholder-and-label). For now, let's focus on the problem of the above code.

The problem with this is that some assistive technologies can't focus on the text. For example, I use Narrator as my screenreader and it can read the visually hidden text, but it can't focus on the text.

![](./images/narrator-when-trying-to-read-the-visually-hidden-label.png)

So, the better way of solving this issue is to **completely hide the element.**

But, the problem is if I completely hide the element then there's no way assistive technology can access the element. It turned out that I was wrong.

`aria-labelledby` can be used for this situation. (How did I know about this? Research!)

I found that Sara Soueidan has an article called ["*Accessible Icon Buttons*"](https://www.sarasoueidan.com/blog/accessible-icon-buttons/https://www.sarasoueidan.com/blog/accessible-icon-buttons/#technique-%232%3A-accessible-visually-hidden-text-with-hidden-and-aria-labelledby). She saus it clearly that `aria-labelledby` can be used to reference hidden elements.

![That said, the ARIA specification allows the aria-describedby and aria-labelledby attributes to reference hidden elements. This means that those hidden elements can and will then be discoverable and used by screen readers. Great! Highlighted.](./images/sara-aria-lablledby-can-be-used-to-reference-hidden-elements.png)

Scott O'Hara also says the same thing on his article called [*"Inclusively Hidden"*](https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html#exploiting-a-completely-hidden-content-loophole).

![By attaching an aria-describedby or aria-labelledby attribute to a focusable element, and setting the ARIA attribute’s value to the completely hidden element’s id, screen readers will announce the content of the completely hidden element. Highlighted.](./images/scottohara-aria-lablledby-can-be-used-to-reference-hidden-elements.png)

[MDN says the same thing too.](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)

![The aria-labelledby property value can include content from elements that aren't even visible. While you should provide assistive technology users with the same content and all other users, you can include content from elements with the HTML hidden attribute, CSS display: none, and CSS visibility: hidden in the calculated name string.](./images/mdn-documentation-aria-labelledby.png)

So, I decided to replace the `class="sr-only"` with `hidden` attribute.

```html
<p id="username-input-label" hidden>Search GitHub username</p>
<input
  type="search"
  aria-labelledby="username-input-label"
/>
```

The result is as expected! Narrator is still able to read the label when I `Tab` to the input element. Not only that but also [TalkBack (Android screenreader)](https://en.wikipedia.org/wiki/Google_Talkback) is also able to read the label by saying, *"Search text field. Search GitHub username."*

But, I think this should not always be the way to label an input. If it is possible then a visible label would be the solution. In this case, it is not possible to have a visible label (because of the design) then this approach is valid.

Anyway, I want to let you know that the specification of the `aria-labelledby` says that we should use `aria-label` instead of `aria-labelledby`.

![If the interface is such that it is not possible to have a visible label on the screen, authors SHOULD use aria-label and SHOULD NOT use aria-labelledby. Underlined.](./images/aria-specification-for-aria-labelledby.png)

I just want to share this (nothing more).

#### Placeholder and Label

Take a look at this HTML markup.

```html
<p id="username-input-label" hidden>Search GitHub username</p>
<input
  type="search"
  id="username-input"
  placeholder=" "
  aria-labelledby="username-input-label"
/>
<label
  for="username-input"
  class="search-form__placeholder"
  aria-hidden="true"
>
  Search GitHub username...
</label>
```

You might be wondering, *"Why are you doing such a thing?"*

So, the plan was to make the `label` a placeholder for the search input but at the same time, it is also the `placeholder` of search input.

Sometimes users might forget what the input is about. For example, there was a moment when I need to fill a lot of input fields. Then, I forgot what data I should input. It is because there's no visible label. The hint that told about what the input for is in the placeholder. So, how did I solve the problem (as a user)? Unfortunately, I had to "cut" all the text first, and only then I could see the placeholder or the label of the input.

That was a bad user experience! It is important to know that [placeholders aren’t a replacement for labels](https://html.spec.whatwg.org/multipage/input.html#the-placeholder-attribute).

As a developer, I didn't want my user to have the same experience as I was. So, I made the `label` as a placeholder. It is known as the [*"float label pattern"*](https://uxplanet.org/float-label-pattern-in-ux-form-design-7ab5e33010ab).

So, at first, the `label` is positioned inside the `input`.

![](./images/initial-state-of-the-placeholder.png)

Then, when the user fills the search input, instead of going away (like a normal placeholder), the placeholder moves above the search input.

![](./images/last-state-of-the-placeholder.png)

This is a good approach if there is no visible label. But, if it is possible to have a visible label for the search input then it would be the way I would do it. It is because [the floating label has a lot of problems](https://medium.com/simple-human/floating-labels-are-a-bad-idea-82edb64220f6). For example, one of the problems that I notice is that it takes some space for the label. As a result, the logo and the label are really close (not having enough whitespace in between them).

![](./images/float-label-pattern-issue.png)

The [floating label has pros and cons](https://bradfrost.com/blog/post/float-label-pattern/). So, it is not like it is just "bad" or a pattern that should be avoided at all costs. The point is to *use whatever is appropriate at the time*. In this case, a floating label is a good approach in my opinion.

#### Hide Checkbox Inclusively
[(Back to top)](#table-of-contents)

I was hiding the checkbox visually by using the `sr-only` class which did make the checkbox visually hidden but it is still accessible by assistive technology.

```html
<input
  type="checkbox"
  class="sr-only"
/>
```

But, there is a problem with that approach. When Narrator is focusing or trying to highlight the checkbox, it is just a tiny square.

![](./images/narrator-when-focus-on-the-old-checkbox.png)

Also, Sara Soueidan says that in her article called [*"Inclusively Hiding & Styling Checkboxes and Radio Buttons"*](https://www.sarasoueidan.com/blog/inclusively-hiding-and-styling-checkboxes-and-radio-buttons/#hiding-the-checkboxes-inclusively) that, *"[...] **while the `sr-only` utility class is great for visually-hiding static content (e.g. text), it should not be used to hide interactive elements.**"*

![](./images/sara-sr-only-should-not-be-used-to-hide-interactive-elements.png)

So, I need to find another way to hide it visually but it is there "physically".

As you may already guess, I would follow what Sara has suggested in that article which is by using absolute positioning. Then, I made the checkbox fill the entire container of the theme switcher element. Lastly, to hide it visually, `opacity: 0;` on the checkbox.

Here is the HTML.

```html
<div class="theme-switcher">
  <input
    type="checkbox"
    class="theme-switcher__checkbox"
  />
</div>
```

Here is the styling.

```css
.theme-switcher {
  position: relative;
}

.theme-switcher__checkbox {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
}
```

Now, when I try using Narrator again, the checkbox is no longer a tiny square.

![](./images/narrator-when-focus-on-the-new-checkbox.png)

#### Overflowing Text
[(Back to top)](#table-of-contents)

At this moment, I thought that I had done with the challenge. Then, [Yazdun](https://www.frontendmentor.io/profile/Yazdun) came in and said that there is an overflowing issue when he searched **mseidel819**.

![Yazdun said, "hi Vanza, Great job on the challenge, I specially love the fact that you added a query in the url for the searched user, that's a really nice touch. Here is quick issue that Matt Seidel noticed on my solution and then I could fix it. Try searching mseidel819 in your app and you will see a weird overflow which doesn't look nice, you may wanna take care of that."](./images/yazdun-comment.png)

Then, my brain said to me, *"let's fix the bug!"*

So, now let's take a look at the overflowing issue!

![](./images/devfinder-mseidel819-overflowing-issue.png)

Okay, it's not looking good. So, I have to do something.

As a developer, the first thing I did was do some research on the internet. I found the [MDN documentation page that explains how to deal with the overflowing text](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Text/Wrapping_Text).

![](./images/mdn-documentation-overflowing-text.png)

I didn't manage to find the answer on the website. But, I got some information about some CSS properties that deal with text wrappings such as `word-break` and `overflow` properties. 

I had used `word-break` earlier to fix the long URL issue.

![](./images/devfinder-vanzasetia-link-issue.png)

After applying `word-break: break-all`.

![](./images/devfinder-vanzasetia-overflowing-issue.png)

Anyway, let's continue the research! 

I was thinking, *"How does GitHub handle this problem?"*. Then, I took a look at the [mseidel819 profile on GitHub](https://github.com/mseidel819). After that, I inspected the styling of the element that holds value for the company.

![](./images/how-github-handle-overflowing-text-1.png)

At this time, I knew that GitHub handle the overflowing text issue with three lines of code.

```css
.css-truncate.css-truncate-target {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

So, what did I do? Copy-paste the code! 😆

Now, the problem is solved!

![](./images/devfinder-mseidel819-overflowing-issue-solved.png)

You might be wondering that if the text content is not visible then how the users would access the content? The text content is still 100% available. You can [try to copy-paste the text](https://officialdevfinder.netlify.app/?user=mseidel819&ref=overflowing-text) and you will get the full value. Also, I tested the site with Narrator and it can read the whole text.

But, I had a better solution for this problem.

So, instead of trying to keep forcing myself to follow the design. I tried to make the list into a one-column layout.

![](./images/devfinder-mseidel819-new-design.png)

I think this is a good solution because not only does it fix the overflowing issue but also there's no visually hidden text. Everything can be seen clearly and nicely!

But, I still use GitHub's approach on how to solve the issue. The reason is that the challenge is trying to create the website looking as close to the design as possible.

#### Focus Visible Styling Issue
[(Back to top)](#table-of-contents)

Finally! I can completely forget about this project!

But... Wait a minute! What is going on with the `:focus-visible` styling?

![Focused on the https://github.blog link. There is only a dotted outline on the right side of the text content.](./images/focus-visible-styling-issue.png)

It was okay though.

![Focused on the https://github.blog link. There is a dotted outline around the link.](./images/focus-visible-styling-before-fixing-overflowing-text-issue.png)

After a little bit of investigation, the issue is happening because of the `overflow: hidden` on the parent element of the link, which is the `li` element.

So, how to fix this issue?

Well, let's see how GitHub solves this issue! (Or I should say, let me copy-paste more code from GitHub 🤣)

![](./images/github-link-focus-visible-styling.png)

The way GitHub solves the issue is by setting the `outline-offset` with a negative value. This way the outline will no longer be overflowing. So, the outline is inside the link element. That's why it can show everything.

While my code was to give some whitespace between the outlines so that it looks nice.

```css
.result__link:focus-visible {
  outline: 0.1875rem dotted var(--focus-visible-outline-color);
  outline-offset: 0.3125rem;
}
```

But, it is not the case now. Now, all I need to do is to change the `outline-offset` with a negative value. I also changed the `outline-style` from `dotted` to `dashed` and reduced the amount of the `outline-width`.

```css
.result__link:focus-visible {
  outline: 0.125rem dashed var(--focus-visible-outline-color);
  outline-offset: -0.125rem;
}
```

**Here is the final result.**

![Focused on the https://github.blog link. There is a dashed outline around the link.](./images/solution-for-the-focus-visible-styling-issue.png)

### Feedback and Suggestions
[(Back to top)](#table-of-contents)

I am still new at asynchronous programming. So, if you notice some mistakes or spot some bad practices then feel free to let me know. I will update the code as well as the `README`! Also, I will add your name to the **Acknowledgements**.

### Useful Resources
[(Back to top)](#table-of-contents)

- [*"A Theme Switcher | Inclusive Components"*](https://inclusive-components.design/a-theme-switcher/) and [*"Toggle Buttons | Inclusive Components"*](https://inclusive-components.design/toggle-button/) articles are helping me to create accessible theme switcher. I would recommend everyone that doing this challenge read both articles!
- [ryanmcdermott/clean-code-javascript: Clean Code concepts adapted for JavaScript](https://github.com/ryanmcdermott/clean-code-javascript) - I wish that I know this repository when I was writing the JavaScript. This repository contains a lot of best practices on how to write clean JavaScript code. I highly recommend taking some time to read it!
- [RegExr](https://regexr.com/) - This is the tool that I used when I was crafting my RegEx or testing the RegEx that I want to use. It has a handy cheatsheet and is also easy to use. I'd recommend it to anyone that wants to create or test some RegEx!

## Author
[(Back to top)](#table-of-contents)

- Frontend Mentor - [@vanzasetia](https://frontendmentor.io/profile/vanzasetia)
- Twitter - [@vanzasetia](https://twitter.com/vanzasetia)
- Code Newbie - [@vanzasetia](https://community.codenewbie.org/vanzasetia)
- Want to see me on other platforms? [Check my linktree!](https://linktr.ee/vanzasetia)

## Acknowledgements
[(Back to top)](#table-of-contents)

Thanks to [@shinnn](https://officialdevfinder.netlify.app/?user=shinnn) for the Regular Expression to validate the user's input! It saves a lot of my time and energy for sure! 👍

Thanks to [@grace-snow](https://www.frontendmentor.io/profile/grace-snow) for helping me improve the accessibility of the site! She has been really helpful in helping to learn about web accessibility (and much more!). I can’t thank her enough!

## License
[(Back to top)](#table-of-contents)

>You can check out [the full license](./LICENSE)

This project is licensed under the terms of the MIT license.

## References

[(Back to top)](#table-of-contents)

> See the [documentation.](./docs/README.md)
