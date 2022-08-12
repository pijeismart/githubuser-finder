(function () {
  "use strict";

  const themeSwitcherCheckbox = document.querySelector(
    ".js-theme-switcher-checkbox"
  );
  const themeSwitcherLabel = document.querySelector(".js-theme-switcher-label");
  const themeSwitcherIcon = document.querySelector(".js-theme-switcher-icon");
  const root = document.querySelector("html");
  const searchForm = document.querySelector(".js-search-form");
  const searchInput = document.querySelector(".js-search-input");
  const alertMessage = document.querySelector(".js-alert-message");

  const setThemeSwitcherStateForDarkMode = () => {
    themeSwitcherCheckbox.setAttribute("checked", "");
    themeSwitcherLabel.textContent = "light";
    themeSwitcherIcon.setAttribute("href", "/svg/sprite.svg#sun");
  };

  const setThemeSwitcherStateForLightMode = () => {
    themeSwitcherCheckbox.removeAttribute("checked");
    themeSwitcherLabel.textContent = "dark";
    themeSwitcherIcon.setAttribute("href", "/svg/sprite.svg#moon");
  };

  const toggleDarkTheme = () => {
    root.classList.toggle("is-light");
    const isLightTheme = root.classList.contains("is-light");
    if (isLightTheme) {
      setThemeSwitcherStateForLightMode();
      localStorage.setItem("root-class", "is-light");
    } else {
      setThemeSwitcherStateForDarkMode();
      clearUserThemePreference();
    }
  };

  const toggleLightTheme = () => {
    root.classList.toggle("is-dark");
    const isDarkTheme = root.classList.contains("is-dark");
    if (isDarkTheme) {
      setThemeSwitcherStateForDarkMode();
      localStorage.setItem("root-class", "is-dark");
    } else {
      setThemeSwitcherStateForLightMode();
      clearUserThemePreference();
    }
  };

  const changeTheme = () => {
    const isDarkTheme = matchMedia("(prefers-color-scheme: dark)").matches;

    if (isDarkTheme) {
      toggleDarkTheme();
    } else {
      toggleLightTheme();
    }
  };

  const clearUserThemePreference = () => {
    root.classList.remove("is-light", "is-dark");
    localStorage.clear();
  };

  const setThemeSwitcherState = () => {
    const isDarkTheme = matchMedia("(prefers-color-scheme: dark)").matches;
    const rootClassList = document.querySelector("html").classList[0];

    if (rootClassList) {
      if (rootClassList === "is-dark") {
        setThemeSwitcherStateForDarkMode();
      } else {
        setThemeSwitcherStateForLightMode();
      }
    } else {
      if (isDarkTheme) {
        setThemeSwitcherStateForDarkMode();
      } else {
        setThemeSwitcherStateForLightMode();
      }
    }
  };

  const changeThemeBasedOnSystemSettings = (isDarkTheme) => {
    clearUserThemePreference();

    if (isDarkTheme) {
      setThemeSwitcherStateForDarkMode();
    } else {
      setThemeSwitcherStateForLightMode();
    }
  };

  const showError = (message) => {
    alertMessage.textContent = message;
  };

  const getUserIPAddress = () => {
    const xhr = new XMLHttpRequest();

    const DONE = 4;
    const OK = 200;

    xhr.open("GET", `https://api.ipify.org/`);

    xhr.responseType = "text";

    xhr.onreadystatechange = () => {
      if (xhr.readyState === DONE) {
        if (xhr.status === OK) {
          const ip = xhr.response;
          showError(`API rate limit exceeded for ${ip} (403 Forbidden)`);
        }
      }
    };

    xhr.onerror = () => {
      showError("Something went wrong");
      console.error("Can't get the user's IP address");
    };

    xhr.send();
  };

  const fetchUserData = (username) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", `https://api.github.com/users/${username}`);

    xhr.responseType = "json";

    xhr.onreadystatechange = () => {
      const DONE = 4;
      const OK = 200;
      const NOT_FOUND = 404;
      const FORBIDDEN = 403;

      if (xhr.readyState === DONE) {
        if (xhr.status === OK) {
          const json = xhr.response;
          showUserData(json);
        } else if (xhr.status === NOT_FOUND) {
          showError("No results");
        } else if (xhr.status === FORBIDDEN) {
          getUserIPAddress();
        }
      }
    };

    xhr.onerror = () => {
      showError("Something went wrong");
    };

    xhr.send();
  };

  const validateData = (data) => {
    if (!data) {
      return "Not Available";
    }

    return data;
  };

  const createAnchorTag = (url, text, className) => {
    const a = document.createElement("a");
    a.href = url;
    a.textContent = text;
    a.classList.add(className);
    return a;
  };

  const removeAnchorTag = (parentElement) => {
    if (parentElement.querySelector("a")) {
      parentElement.removeChild(parentElement.firstElementChild);
    }
  };

  const setElementStateToNotAvailable = (
    elementToStyle,
    elementToHoldValue,
    text,
    classToAdd = "is-not-available"
  ) => {
    elementToStyle.classList.add(classToAdd);
    elementToHoldValue.textContent = text;
  };

  const setLinkToAvailable = (
    elementToStyle,
    childElement,
    anchorTag,
    classToRemove = "is-not-available"
  ) => {
    elementToStyle.classList.remove(classToRemove);
    removeAnchorTag(childElement);
    childElement.appendChild(anchorTag);
  };

  const setTextToAvailable = (
    elementToStyle,
    elementToHoldValue,
    text,
    classToRemove = "is-not-available"
  ) => {
    elementToStyle.classList.remove(classToRemove);
    elementToHoldValue.textContent = text;
  };

  const showAvatar = (url, alternativeText) => {
    const avatar = document.querySelector(".js-avatar");
    avatar.src = url;
    avatar.alt = alternativeText;
  };

  const showName = (nickname) => {
    const name = document.querySelector(".js-name");
    nickname = validateData(nickname);

    if (nickname === "Not Available") {
      setElementStateToNotAvailable(name, name, nickname, "sr-only");
    } else {
      setTextToAvailable(name, name, nickname, "sr-only");
    }
  };

  const showUserName = (username, url) => {
    const userGitHubLink = document.querySelector(".js-user-github-link");
    userGitHubLink.href = url;
    userGitHubLink.textContent = `@${username}`;
  };

  const showJoinDate = (date) => {
    const time = document.querySelector(".js-time");
    const dateRegEx = /\d{2} [A-Z][a-z]{2} \d{4}/;
    const formattedDate = new Date(date).toUTCString().match(dateRegEx)[0];
    time.setAttribute("datetime", date);
    time.textContent = formattedDate;
  };

  const showBio = (description) => {
    const bio = document.querySelector(".js-bio");
    description = validateData(description);

    if (description === "Not Available") {
      setElementStateToNotAvailable(bio, bio, "This profile has no bio");
    } else {
      setTextToAvailable(bio, bio, description);
    }
  };

  const showRepositories = (totalPublicRepositories) => {
    const repository = document.querySelector(".js-repository");
    repository.textContent = totalPublicRepositories;
  };

  const showFollowers = (totalFollowers) => {
    const followers = document.querySelector(".js-followers");
    followers.textContent = totalFollowers;
  };

  const showFollowing = (totalFollowing) => {
    const following = document.querySelector(".js-following");
    following.textContent = totalFollowing;
  };

  const showLocation = (locationData) => {
    const location = document.querySelector(".js-location");
    const element = location.querySelector(".js-value");
    locationData = validateData(locationData);

    if (locationData === "Not Available") {
      setElementStateToNotAvailable(location, element, locationData);
    } else {
      setTextToAvailable(location, element, locationData);
    }
  };

  const showWebsite = (url) => {
    const website = document.querySelector(".js-website");
    const element = website.querySelector(".js-value");
    element.textContent = "";
    url = validateData(url);
    const HTTPRegEx = /^https?:\/\//;
    const isContainHTTP = url.match(HTTPRegEx);

    if (url === "Not Available") {
      setElementStateToNotAvailable(website, element, url);
    } else if (!isContainHTTP) {
      const anchorTag = createAnchorTag(`http://${url}`, url, "result__link");
      setLinkToAvailable(website, element, anchorTag);
    } else {
      const anchorTag = createAnchorTag(url, url, "result__link");
      setLinkToAvailable(website, element, anchorTag);
    }
  };

  const showTwitter = (username) => {
    const twitter = document.querySelector(".js-twitter");
    const element = twitter.querySelector(".js-value");
    element.textContent = "";
    username = validateData(username);

    if (username === "Not Available") {
      setElementStateToNotAvailable(twitter, element, username);
    } else {
      const anchorTag = createAnchorTag(
        `https://twitter.com/${username}`,
        `@${username}`,
        "result__link"
      );
      setLinkToAvailable(twitter, element, anchorTag);
    }
  };

  const showCompany = (company) => {
    const office = document.querySelector(".js-office");
    const element = office.querySelector(".js-value");
    element.textContent = "";
    company = validateData(company);
    const companyRegEx = /@/;
    const isCompanyOnGitHub = company.match(companyRegEx);

    if (company === "Not Available") {
      setElementStateToNotAvailable(office, element, company);
    } else if (isCompanyOnGitHub) {
      company = company.substring(1);
      const anchorTag = createAnchorTag(
        `https://github.com/${company}`,
        `@${company}`,
        "result__link"
      );
      setLinkToAvailable(office, element, anchorTag);
    } else {
      setTextToAvailable(office, element, company);
    }
  };

  const showUserData = async (data) => {
    try {
      const {
        avatar_url: avatar,
        name,
        login: username,
        html_url: githubProfileURL,
        created_at: joinDate,
        bio,
        public_repos: publicRepositories,
        followers,
        following,
        location,
        blog,
        twitter_username: twitter,
        company
      } = await data;
      showAvatar(avatar, username);
      showName(name);
      showUserName(username, githubProfileURL);
      showJoinDate(joinDate);
      showBio(bio);
      showRepositories(publicRepositories);
      showFollowers(followers);
      showFollowing(following);
      showLocation(location);
      showWebsite(blog);
      showTwitter(twitter);
      showCompany(company);
      document.title = `devfinder | ${username}`;
    } catch (error) {
      console.error(error);
    }
  };

  const validateUserInput = (value) => {
    const githubUserNameRegEx = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
    return value.match(githubUserNameRegEx);
  };

  const setURLParameter = (query) => {
    const url = new URL(document.location);
    url.searchParams.set("user", query);
    window.history.pushState({}, "", url);
  };

  const getUserDataBasedOnURL = async () => {
    try {
      const params = new URLSearchParams(document.location.search);
      let username = params.get("user");

      if (username) {
        username = username.trim();
        const isUserNameValid = validateUserInput(username);
        searchInput.value = username;
        if (isUserNameValid) {
          fetchUserData(username);
        } else {
          showError("Invalid username");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const searchGitHubUser = async (event) => {
    try {
      event.preventDefault();
      alertMessage.textContent = "";
      const username = searchInput.value.trim();
      const isUserNameValid = validateUserInput(username);
      if (isUserNameValid) {
        setURLParameter(username);
        fetchUserData(username);
      } else {
        showError("Invalid username");
      }
    } catch (error) {
      console.error(error);
    }
  };

  themeSwitcherCheckbox.addEventListener("change", changeTheme);
  document.addEventListener("DOMContentLoaded", setThemeSwitcherState);
  document.addEventListener("DOMContentLoaded", getUserDataBasedOnURL);
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", ({ matches }) => {
      changeThemeBasedOnSystemSettings(matches);
    });
  searchForm.addEventListener("submit", searchGitHubUser);
})();