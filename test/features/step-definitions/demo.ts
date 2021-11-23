import { When,Then,Given } from "@cucumber/cucumber";
import chai from "chai";

Given(/^Google page is opened$/,async function(){
console.log("open url in google");
await browser.url("https://www.google.com");
await browser.pause(3000);
})

When(/^Search with (.*)$/,async function(searchItem : string) {
console.log(`Search WorkItem ${searchItem}`);
let element = await $(`[name=q]`);
await element.setValue(searchItem);
await element.keys("Enter");
await browser.pause(2000);
})

Then(/^Click on the first result$/,async function(){
let element = await $(`<h3>`);
await element.click();
await browser.pause(2000);
})

Then(/^URL should be match (.*)$/, async function(expectedURL : string) {
  console.log(`>> expectedURL : ${expectedURL}`);
  let currentURL = await browser.getUrl();
  chai.expect(currentURL).to.equal(expectedURL);
})