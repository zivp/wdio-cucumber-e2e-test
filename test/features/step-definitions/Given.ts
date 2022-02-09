import { Given } from "@cucumber/cucumber";
import chai from "chai";


Given (/^Login to Inventory web app/,async function () {
/* 1. Lunch Browser */
  await browser.url("https://www.saucedemo.com/");
  await browser.setTimeout({implicit:15000, pageLoad:1000});
  await browser.maximizeWindow();
/* 2. login action */
await $('#user-name').setValue('standard_user');
await $('#password').setValue('secret_sauce');
await $('#login-button').click();
});
