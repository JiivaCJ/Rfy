import BaseUtils from'../pageobjects/baseUtils';
import LoginData from '../pageobjects/data';
import Url from '../pageobjects/url';
import Element from './in_elements';
//import {expect} from "chai";


class Rlogin {

    get EMAIL() {
        return $(Element.Login);
    }

    get PASSWORD() {
        return $(Element.password);
    }

    get LOGINBTN() {
        return $(Element.loginBtn);
    }
    get PASSWORDBTN() {
        return $(Element.passwordbtn);
    }
    get verifyName() {
        return $(Element.profileName);
    }
    get AdminBtn() {
        return $(Element.DataSearch);
    }
    get SelectIphone() {
        return $(Element.Selected);
    }
    get SelectBuyIphone() {
        return $(Element.BuyNow);
    }
    get SelectBuyIphone() {
        return $(Element.BuyNow);
    }
    get INPUTIINBOX() {
        return $(Element.BuyNow);
    }
    get SEARCHINBTN() {
        return $(Element.BUTTON);
    }
    get SIGNOUTBTN1() {
        return $(Element.allbtn);
    }
    get SIGNOUTBTN3() {
        return $(amazon.SIGNOUTBTN0);
    }
    get SIGNOUTBTNin() {
        return $(amazon.signoutnav);
    }
    get SIGNOUTBTN2() {
        return $(amazon.SIGNOUTBTN00);
    }
    get findSEARCHINPUT() {
        return $(amazon.findSEARCHINPUTvl);
    }
    get BUYNOWINPUT() {
        return $(amazon.buynowbtn);
    }
    
    





    RYlogin() {
         browser.url(Url.loginurl);
         //browser.pause (5000)
         BaseUtils.toaddValue(this.EMAIL,LoginData.userData0);
         BaseUtils.CliBtn(this.LOGINBTN);
         BaseUtils.toaddValue(this.PASSWORD,LoginData.passData0);
         BaseUtils.CliBtn(this.PASSWORDBTN);
         browser.pause (15000)
        BaseUtils.CliBtn(this.AdminBtn);
        
        const classNameAndText = $(this.verifyName);
        console.log(classNameAndText.getText());
        browser.pause (5000)









    }






}
module.exports = new Rlogin();