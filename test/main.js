/**
 * Created by garusis on 4/12/17.
 */
/**
 * Created by garusis on 20/11/17.
 */
const chai = require("chai");
const app = require("../server/src/index");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

global.should = chai.should();
global.expect = chai.expect;
global.assert = chai.assert;
global.app = app;
global.chai = chai;
