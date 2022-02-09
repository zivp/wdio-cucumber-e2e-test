import { When,Then,Given } from "@cucumber/cucumber";
import chai from "chai";

Given(/^Google page is opened$/,async function(){
console.log("open url in google");
await browser.url("https://www.google.com");
await browser.pause(3000);
console.log(JSON.stringify(browser));
})

When(/^Search with (.*)$/,async function(searchItem : string) {
console.log(`Search WorkItem ${searchItem}`);
let element = await $(`[name=q]`);
await element.setValue(searchItem);
await element.keys("Enter");
await browser.pause(2000);
console.log(JSON.stringify(element));
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

/**
 * Web Inateractions
 */
 Given (/^A web page is opened$/,async function(){
  await browser.url("https://www.amazon.com/");
  await browser.setTimeout({implicit:15000, pageLoad:1000});
  await browser.maximizeWindow();
 })

 When(/^Perform web interactions$/, async function(){
/*Input number 

let number ='12345';
let ele = await $('input[type="number"]');
//await ele.setValue(number);
//await browser.pause(2000);
await ele.click();

for(let i = 0; i <number.length;i++){
 let character = number.charAt(i);
 await ele.addValue(character);
 await browser.pause(2000);
}
*/

/*
Dropdown
*/

//*Assert on selected text*// 
// let dropdownEle= await $('//select/option[@selected="selected"]');
// let valueEle =await dropdownEle.getText();
// chai.expect(valueEle).to.equal("Please select an option");

//*Select By Spasipic value*//
// let ddelement :  WebdriverIO.Element;
// ddelement = await $('//*[@id="dropdown"]');
// //await ddelement.selectByVisibleText("Option 2")
// await ddelement.selectByAttribute("value","1")
// await browser.pause(3000)

//*Get list of options*//
// let optionsArray : WebdriverIO.ElementArray =await $$('//*[@id="dropdown"]/option');
// let arr = [];
// for(let i = 0; i < optionsArray.length; i++)
// {
// let optionText : string = await optionsArray[i].getText();
// console.log(`>> iterasion ${i}: ${optionText} >>`);
// arr.push(optionText);
// }

// console.log(`>> Options : ${arr} >>`);
// await browser.pause(2500)



//*CheckBoxess*/
// let checkboxArr : WebdriverIO.ElementArray = await $$('//*[@id="checkboxes"]/input');
// let checkboxEle : WebdriverIO.Element = await $('//*[@id="checkboxes"]/input[2]');
// let isSelected : boolean = await checkboxEle.isSelected();

// chai.expect(isSelected).to.be.true;

// for (let i = 0; i < checkboxArr.length; i++)
// {
//   let element = await checkboxArr[i]
//   if (!await element.isSelected())
//       await element.click()
// }


/*Handling Windows*/
// await $(`=Click Here`).click();
// await $(`=Elemental Selenium`).click();

// let windowTitle = await browser.getTitle();
// console.log(`>> Title : ${windowTitle}`);
// let windowHandle = await browser.getWindowHandle();
// let windowHandles = await browser.getWindowHandles();
// for (let i = 0; i < windowHandles.length;i++)
// {
//    console.log(`>> window handle : ${windowHandles[i]}`)
//    await browser.switchToWindow(windowHandles[i])
//    windowTitle = await browser.getTitle();
//    if (await windowTitle === "Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro")
//    {
//      await browser.switchToWindow(windowHandles[i]);
//      console.log(`>> in chiled window : ${await $('<h1>').getText()}`)
//      break;
//    }
// }
// await browser.switchToWindow(windowHandle)
// console.log(`>> window handle : ${await $('<h3>').getText()}`)
//await browser.debug()



/*Handling Alerts*/

// await $('button=Click for JS Prompt').click();
// if (await browser.isAlertOpen())
// {
//   let alertText = await browser.getAlertText();
//   console.log(`>> alert : ${alertText}`)

   
//    await browser.sendAlertText('test alert ...');
//    await browser.acceptAlert();
// }


/*File upload*/ 

// await $("#file-upload").addValue(`${process.cwd()}/data/files/file-text.txt`);
// await $("#file-submit").click();

/*Frames*/

// await $('=iFrame').click();
// let frame = await $('#mce_0_ifr');
// await browser.switchToFrame(frame);
// await browser.pause(3000)
// await $('#tinymce').click()
// await browser.keys('Delete')
// await $('#tinymce').addValue(`text example...`)
// await browser.switchToParentFrame()


/*Basic Scrooling*/

//await $('=WYSIWYG Editor').scrollIntoView()



/*table handle*/

// let eleArrlength = await $$('//table[@id="table1"]/tbody/tr').length;
// chai.expect(eleArrlength).to.equal(4);
// console.log(`number od rows :  ${eleArrlength}`);


// let eleArrRowlength = await $$('//table[@id="table1"]/thead/tr/th').length;
// chai.expect(eleArrRowlength).to.equal(6);
// console.log(`number od cols :  ${eleArrRowlength}`);


// for (let i = 1; i <eleArrlength ;i++)
// {
//   for (let j = 1; j <eleArrRowlength;j++)
//   {
//   let eleCell = await $(`//*[@id="table1"]/tbody/tr[${i}]/td[${j}]`).getText();
//   console.log(eleCell + "\n");
//   }
// }

/*Advance Scrolling*/

await browser.pause(3000)
await browser.execute(()=> {

  window.scrollBy(0, window.innerHeight);

});

await browser.pause(3000)
await browser.execute(()=> {

  window.scrollBy(0, -window.innerHeight);
  window.scrollBy(0, document.body.scrollTop);
});
//await browser.debug()
 })