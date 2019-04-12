/*
We have some clickstream data that we gathered on our client's website. Using cookies, we collected snippets of users' anonymized URL histories while they browsed the site. The histories are in chronological order and no URL was visited more than once per person.

Write a function that takes two users' browsing histories as input and returns the longest contiguous sequence of URLs that appears in both.

Sample input:

user0 = ["/start.html", "/pink.php", "/register.asp", "/orange.html", "/red.html"]
user1 = ["/start.html", "/green.html", "/blue.html", "/pink.php", "/register.asp", "/orange.html"]
user2 = ["/red.html", "/green.html", "/blue.html", "/pink.php", "/register.asp"]
user3 = ["/blue.html", "/logout.php"]

Sample output:

findContiguousHistory(user0, user1)
   /pink.php
   /register.asp
   /orange.html

findContiguousHistory(user1, user2)
   /green.html
   /blue.html
   /pink.php
   /register.asp

findContiguousHistory(user0, user3)
   (empty)

findContiguousHistory(user2, user3)
   /blue.html

findContiguousHistory(user3, user3)
   /blue.html
   /logout.php



Identify the type of issue represented by this diagram. Once you had identified the issue, how would you find its source?

![](https://karat-production-base-public.s3-us-west-2.amazonaws.com/content/q084/production_issues_1.jpg)

(The top line represents RAM usage and the bottom one represents CPU usage.)



What are some typical symptoms of thread exhaustion in a production service (that is, a service that is bottlenecked by the number of available threads)? How can you alleviate the problem?


We have developed a web service for looking up the postal code of a given address. The service normalizes the address using a geographic database, then makes calls to third-party APIs to find the postal code to return to the user.

This service is currently handling about 1 request per second. We are launching it to a new client who plans to send 1000 requests per second. How do we test whether our service can scale?




You are in charge of a display advertising program. Your ads are displayed on websites all over the internet. You have some CSV input data that counts how many times that users have clicked on an ad on each individual domain. Every line consists of a count and a domain name. It looks like this:

counts = [ "900,google.com",
     "60,mail.yahoo.com",
     "10,mobile.sports.yahoo.com",
     "40,sports.yahoo.com",
     "300,yahoo.com",
     "10,stackoverflow.com",
     "2,en.wikipedia.org",
     "1,es.wikipedia.org",
     "1,mobile.sports" ]

Write a function that takes this input as a parameter and returns a data structure containing the number of hits that were recorded on each domain AND each domain under it. For example, an impression on "mail.yahoo.com" counts for "mail.yahoo.com", "yahoo.com", and "com". (Subdomains are added to the left of their parent domain. So "mail" and "mail.yahoo" are not valid domains. Note that "mobile.sports" appears as a separate domain as the last item of the input.)

Sample output (in any order/format):

getTotalsByDomain(counts)
1320    com
 900    google.com
 410    yahoo.com
  60    mail.yahoo.com
  10    mobile.sports.yahoo.com
  50    sports.yahoo.com
  10    stackoverflow.com
   3    org
   3    wikipedia.org
   2    en.wikipedia.org
   1    es.wikipedia.org
   1    mobile.sports
   1    sports

*/

function getTotalByDomain (array) {
  // object to store 
  const domains = {};
  // loop through the array
    // each element, first split by the comma to get number and domain
    // split the domain by '.' to turn into an array of strings with each element losing the first part of the url
    // after splitting, adding each of the element to object, adding or updating based on if it exists in object
  for (let i = 0; i < array.length; i += 1) {
    // number of clicks
    let clicks = Number(array[i].split(',')[0]);
    // url
    const url = array[i].split(',')[1];
    // separate url into array of sub urls
    const urlArray = url.split('.').reverse();
    let newUrl = [];
    for (let j = 0; j < urlArray.length; j += 1) {
      newUrl.unshift(urlArray[j]);
      const newUrlReversed = newUrl.join('.');
      // check if it exists in the object
      if (domains.hasOwnProperty(newUrlReversed)) {
        domains[newUrlReversed] += clicks;
      } else {
        domains[newUrlReversed] = clicks;
      }  
    }
  }
  return domains;
}

console.log(getTotalByDomain(counts));