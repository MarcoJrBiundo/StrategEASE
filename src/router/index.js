import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index";
import DTIdescription from "@/components/DTIdescription";
import DTIevidence from "@/components/DTIevidence";
import DTIwhowillchange from "@/components/DTIwhowillchange";
import SISbehaviours from "@/components/SISbehaviours";
import behaviour from "@/components/behaviour";
import SISdomains from "@/components/SISdomains";

//our main json object containing everything
var dbObject;
var strategyMap = require("@/assets/strategyMap.json");
var caseObject = require("@/assets/CaseObject.json");

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/dti-description",
      name: "DTIdescription",
      component: DTIdescription,
      props: { caseObject: caseObject }
    },
    {
      path: "/dti-evidence",
      name: "DTIevidence",
      component: DTIevidence,
      props: { caseObject: caseObject }
    },
    {
      path: "/dti-whowillchange",
      name: "DTIwhowillchange",
      component: DTIwhowillchange,
      props: { caseObject: caseObject }
    },
    {
      path: "/sis-behaviours",
      name: "SISbehaviours",
      component: SISbehaviours,
      props: { caseObject: caseObject }
    },
    {
      path: "/sis-domains",
      name: "SISdomains",
      component: SISdomains,
      props: { map: strategyMap, caseObject: caseObject }
    }
  ]
});

window.addEventListener("load", startFunction);

function saveData() {
  //OVERWRITES THE firebase logical? database with the local data
  //DATABASE=data;
  alert("saved in root");
}

function startFunction() {
  var listGroups = document.getElementsByClassName("listControl");
  for (var i = 0; i < listGroups.length; i++) {
    listGroups[i].addEventListener("click", toggleListVisibility);
  }

  //console.log(listGroups[0]);

  //lists.display = "block";
  //console.log(groups);
  //console.log("CONTENT LOADED");
}

function toggleListVisibility(e) {
  //get the <A> parent so we can select the sublist
  var parent = e.target.parentElement;

  var lists = parent.getElementsByClassName("sublists")[0];
  //simple toggle, when the display is hidden and the item was clicked, expand
  //otherwise hide it
  lists.style["display"] = lists.style["display"] == "" ? "block" : "";

  //hide all other lists
  var listGroups = document.getElementsByClassName("listControl");
  for (var i = 0; i < listGroups.length; i++) {
    if (listGroups[i] !== e.target) {
      //toggle the display of the accompanying sublist in the clicked <LI>
      //the targets parents child sublist
      listGroups[i].parentElement.getElementsByClassName("sublists")[0].style[
        "display"
      ] = "";
    }
  }
}
