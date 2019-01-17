'use strict';

let oReq = new XMLHttpRequest();

let url = 'https://www.reddit.com/r/aww/.json';

let mainWrapper = document.querySelector('#main-wrapper');
let contentWrapper = document.querySelector('#content-wrapper');

function requestRedditInfo() {
  let requestData = JSON.parse(this.responseText);
  console.log('requestData', requestData);

  for (let i = 1; i < requestData.data.children.length; i++) {
    let contentArea = document.createElement('div');
    contentArea.className = 'content-area';
    contentWrapper.appendChild(contentArea);

    let innerContainer = document.createElement('div');
    innerContainer.className = 'inner-container';
    contentArea.appendChild(innerContainer);

    let articlePicture = document.createElement('IMG');
    articlePicture.className = 'article-picture';
    articlePicture.src = requestData.data.children[i].data.thumbnail;
    innerContainer.appendChild(articlePicture);

    let articleHeader = document.createElement('div');
    articleHeader.className = 'article-header';
    articleHeader.innerHTML = requestData.data.children[i].data.title;
    innerContainer.appendChild(articleHeader);

    let articleInfo = document.createElement('div');
    articleInfo.className = 'article-info';
    innerContainer.appendChild(articleInfo);

    let author = document.createElement('span');
    author.className = 'author';
    author.innerHTML = 'by ' + requestData.data.children[i].data.author;
    articleInfo.appendChild(author);

    let bullet1 = document.createElement('span');
    bullet1.className = 'bullet1';
    bullet1.innerHTML = '&#8226';
    articleInfo.appendChild(bullet1);

    let ageOfArticle = document.createElement('span');
    ageOfArticle.className = 'article-age';
    ageOfArticle.innerHTML = moment
      .unix(requestData.data.children[i].data.created_utc)
      .fromNow();
    articleInfo.appendChild(ageOfArticle);

    let bullet2 = document.createElement('span');
    bullet2.className = 'bullet2';
    bullet2.innerHTML = '&#8226';
    articleInfo.appendChild(bullet2);

    let articleViews = document.createElement('span');
    articleViews.className = 'views';
    articleViews.innerHTML = requestData.data.children[i].data.ups + ' Views';
    articleInfo.appendChild(articleViews);

    let article = document.createElement('div');
    article.className = 'article';
    article.innerHTML = requestData.data.children[i].data.selfText;
    innerContainer.appendChild(article);

    if (requestData.data.children[i].data.selfText) {
      article.innerHTML = requestData.data.children[i].data.selfText;
    } else {
      article.innerHTML = 'No subtext ';
    }
  }
}

oReq.addEventListener('load', requestRedditInfo);
oReq.open('GET', 'https://www.reddit.com/r/aww/.json');
oReq.send();

let rsReq = new XMLHttpRequest();

let rsButton = document.querySelector('#nav-runescape');
rsButton.addEventListener('click', function() {
  contentWrapper.innerHTML = '';
  rsReq.addEventListener('load', requestRedditInfo);
  rsReq.open('GET', 'https://www.reddit.com/r/2007scape.json');
  rsReq.send();
});

let ogReq = new XMLHttpRequest();

let ogButton = document.querySelector('#nav-original');
ogButton.addEventListener('click', function() {
  contentWrapper.innerHTML = '';
  ogReq.addEventListener('load', requestRedditInfo);
  ogReq.open('GET', 'https://www.reddit.com/original.json');
  ogReq.send();
});

let shroudReq = new XMLHttpRequest();

let shroudButton = document.querySelector('#nav-shroud');
shroudButton.addEventListener('click', function() {
  contentWrapper.innerHTML = '';
  shroudReq.addEventListener('load', requestRedditInfo);
  shroudReq.open('GET', 'https://www.reddit.com/r/Shroud/.json');
  shroudReq.send();
});

let randomUrls = [
  'https://www.reddit.com/r/pics.json',
  'https://www.reddit.com/r/PhotoshopBattles.json',
  'https://www.reddit.com/r/perfecttiming.json',
  'https://www.reddit.com/r/Pareidolia.json',
  'https://www.reddit.com/r/ExpectationVSReality.json',
  'https://www.reddit.com/r/dogpictures.json',
  'https://www.reddit.com/r/misleadingthumbnails.json'
];

let randomReq = new XMLHttpRequest();
let randomButton = document.querySelector('#nav-random');
randomButton.addEventListener('click', function() {
  contentWrapper.innerHTML = '';
  randomReq.addEventListener('load', requestRedditInfo);
  randomReq.open(
    'GET',
    randomUrls[Math.floor(Math.random() * randomUrls.length)]
  );
  randomReq.send();
});
// change url to new url so that it loads into new data
// random button shows randomly picked url
// have inner html blank when clicked on different button

// let rsReq = new XMLHttpRequest();

// function getRunescape() {
//   let runescapeData = JSON.parse(this.responseText);
//   let mainWrapper = document.querySelector('#main-wrapper');
//   mainWrapper.innerHTML = '';
//   for (let i = 1; i < runescapeData.data.children.length; i++) {
//     let contentArea = document.createElement('div');
//     contentArea.className = 'content-area';
//     mainWrapper.appendChild(contentArea);

//     let innerContainer = document.createElement('div');
//     innerContainer.className = 'inner-container';
//     contentArea.appendChild(innerContainer);

//     let articlePicture = document.createElement('IMG');
//     articlePicture.className = 'article-picture';
//     articlePicture.src = runescapeData.data.children[i].data.thumbnail;
//     innerContainer.appendChild(articlePicture);

//     let articleHeader = document.createElement('div');
//     articleHeader.className = 'article-header';
//     articleHeader.innerHTML = runescapeData.data.children[i].data.title;
//     innerContainer.appendChild(articleHeader);

//     let articleInfo = document.createElement('div');
//     articleInfo.className = 'article-info';
//     innerContainer.appendChild(articleInfo);

//     let author = document.createElement('span');
//     author.className = 'author';
//     author.innerHTML = 'by ' + runescapeData.data.children[i].data.author;
//     articleInfo.appendChild(author);

//     let bullet1 = document.createElement('span');
//     bullet1.className = 'bullet1';
//     bullet1.innerHTML = '&#8226';
//     articleInfo.appendChild(bullet1);

//     let ageOfArticle = document.createElement('span');
//     ageOfArticle.className = 'article-age';
//     ageOfArticle.innerHTML = moment
//       .unix(runescapeData.data.children[i].data.created_utc)
//       .fromNow();
//     articleInfo.appendChild(ageOfArticle);

//     let bullet2 = document.createElement('span');
//     bullet2.className = 'bullet2';
//     bullet2.innerHTML = '&#8226';
//     articleInfo.appendChild(bullet2);

//     let articleViews = document.createElement('span');
//     articleViews.className = 'views';
//     articleViews.innerHTML = runescapeData.data.children[i].data.ups + ' Views';
//     articleInfo.appendChild(articleViews);

//     let article = document.createElement('div');
//     article.className = 'article';
//     article.innerHTML = runescapeData.data.children[i].data.selfText;
//     innerContainer.appendChild(article);

//     if (runescapeData.data.children[i].data.selfText) {
//       article.innerHTML = runescapeData.data.children[i].data.selfText;
//     } else {
//       article.innerHTML = 'No subtext ';
//     }
//   }
// }

// rsReq.addEventListener('click', getRunescape);
// rsReq.open('GET', 'https://www.reddit.com/r/2007scape.json');
// rsReq.send();

// let originalReq = new XMLHttpRequest();

// function getOriginalReq() {
//   let originalData = JSON.parse(this.responseText);
//   let mainWrapper = document.querySelector('#main-wrapper');
//   mainWrapper.innerHTML = '';
//   for (let i = 1; i < originalData.data.children.length; i++) {
//     let contentArea = document.createElement('div');
//     contentArea.className = 'content-area';
//     mainWrapper.appendChild(contentArea);

//     let innerContainer = document.createElement('div');
//     innerContainer.className = 'inner-container';
//     contentArea.appendChild(innerContainer);

//     let articlePicture = document.createElement('IMG');
//     articlePicture.className = 'article-picture';
//     articlePicture.src = originalData.data.children[i].data.thumbnail;
//     innerContainer.appendChild(articlePicture);

//     let articleHeader = document.createElement('div');
//     articleHeader.className = 'article-header';
//     articleHeader.innerHTML = originalData.data.children[i].data.title;
//     innerContainer.appendChild(articleHeader);

//     let articleInfo = document.createElement('div');
//     articleInfo.className = 'article-info';
//     innerContainer.appendChild(articleInfo);

//     let author = document.createElement('span');
//     author.className = 'author';
//     author.innerHTML = 'by ' + originalData.data.children[i].data.author;
//     articleInfo.appendChild(author);

//     let bullet1 = document.createElement('span');
//     bullet1.className = 'bullet1';
//     bullet1.innerHTML = '&#8226';
//     articleInfo.appendChild(bullet1);

//     let ageOfArticle = document.createElement('span');
//     ageOfArticle.className = 'article-age';
//     ageOfArticle.innerHTML = moment
//       .unix(originalData.data.children[i].data.created_utc)
//       .fromNow();
//     articleInfo.appendChild(ageOfArticle);

//     let bullet2 = document.createElement('span');
//     bullet2.className = 'bullet2';
//     bullet2.innerHTML = '&#8226';
//     articleInfo.appendChild(bullet2);

//     let articleViews = document.createElement('span');
//     articleViews.className = 'views';
//     articleViews.innerHTML = originalData.data.children[i].data.ups + ' Views';
//     articleInfo.appendChild(articleViews);

//     let article = document.createElement('div');
//     article.className = 'article';
//     article.innerHTML = originalData.data.children[i].data.selfText;
//     innerContainer.appendChild(article);

//     if (originalData.data.children[i].data.selfText) {
//       article.innerHTML = originalData.data.children[i].data.selfText;
//     } else {
//       article.innerHTML = 'No subtext ';
//     }
//   }
// }
// originalReq.addEventListener('click', getOriginalReq);
// originalReq.open('GET', 'https://www.reddit.com/original.json');
// originalReq.send();

// let shroudReq = new XMLHttpRequest();
// function getShroudReq() {
//   let shroudData = JSON.parse(this.responseText);
//   let mainWrapper = document.querySelector('#main-wrapper');
//   mainWrapper.innerHTML = '';

//   for (let i = 1; i < requestData.data.children.length; i++) {
//     let contentArea = document.createElement('div');
//     contentArea.className = 'content-area';
//     mainWrapper.appendChild(contentArea);

//     let innerContainer = document.createElement('div');
//     innerContainer.className = 'inner-container';
//     contentArea.appendChild(innerContainer);

//     let articlePicture = document.createElement('IMG');
//     articlePicture.className = 'article-picture';
//     articlePicture.src = shroudData.data.children[i].data.thumbnail;
//     innerContainer.appendChild(articlePicture);

//     let articleHeader = document.createElement('div');
//     articleHeader.className = 'article-header';
//     articleHeader.innerHTML = shroudData.data.children[i].data.title;
//     innerContainer.appendChild(articleHeader);

//     let articleInfo = document.createElement('div');
//     articleInfo.className = 'article-info';
//     innerContainer.appendChild(articleInfo);

//     let author = document.createElement('span');
//     author.className = 'author';
//     author.innerHTML = 'by ' + shroudData.data.children[i].data.author;
//     articleInfo.appendChild(author);

//     let bullet1 = document.createElement('span');
//     bullet1.className = 'bullet1';
//     bullet1.innerHTML = '&#8226';
//     articleInfo.appendChild(bullet1);

//     let ageOfArticle = document.createElement('span');
//     ageOfArticle.className = 'article-age';
//     ageOfArticle.innerHTML = moment
//       .unix(shroudData.data.children[i].data.created_utc)
//       .fromNow();
//     articleInfo.appendChild(ageOfArticle);

//     let bullet2 = document.createElement('span');
//     bullet2.className = 'bullet2';
//     bullet2.innerHTML = '&#8226';
//     articleInfo.appendChild(bullet2);

//     let articleViews = document.createElement('span');
//     articleViews.className = 'views';
//     articleViews.innerHTML = shroudData.data.children[i].data.ups + ' Views';
//     articleInfo.appendChild(articleViews);

//     let article = document.createElement('div');
//     article.className = 'article';
//     article.innerHTML = shroudData.data.children[i].data.selfText;
//     innerContainer.appendChild(article);

//     if (shroudData.data.children[i].data.selfText) {
//       article.innerHTML = shroudData.data.children[i].data.selfText;
//     } else {
//       article.innerHTML = 'No subtext ';
//     }
//   }
// }
// shroudReq.addEventListener('click', getShroudReq);
// shroudReq.open('GET', 'https://www.reddit.com/r/Shroud/.json');
// shroudReq.send();

//https://www.reddit.com/original
//https://www.reddit.com/r/2007scape
// https://www.reddit.com/r/Shroud/

/* create function to reload information with new page
 */
