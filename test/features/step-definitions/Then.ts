import { Then } from "@cucumber/cucumber";
import chai from "chai";



Then(/^inventory page should list (.*)$/,async function(numberOfProducts ){
 if (!numberOfProducts) throw new Error(`invalid number ${numberOfProducts}`);
let eleArr =await $$('.inventory_item_name');
console.log(`test debug : ${eleArr.length}`);
chai.expect(eleArr.length).to.equal(parseInt(numberOfProducts));
});


Then (/^validate all products have valid price$/,async function() {

  let eleArr = await $$('.inventory_item_price');
  let elePrise= []
  for (let i = 0; i < eleArr.length; i++)
  {
    let itemPriceStr = await eleArr[i].getText();
    elePrise.push(itemPriceStr);
  }
  let price =elePrise.map(prise => parseInt(prise.replace("$","")));
  console.log(`>> item price >> ${price}`)
  
let beloweZero = price.filter(ele =>ele<=0);
chai.expect(beloweZero.length).to.equal(0);
});