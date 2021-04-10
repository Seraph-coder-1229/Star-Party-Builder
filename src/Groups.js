import { GroupTypeComposition } from "./Data.js";
import { templates } from "./templates.js";
import $ from "jquery";
class Groups {
  constructor() {
    this.groupOneName = "DD";
    this.groupOne = new Array(6).fill(null);

    this.groupTwoName = "Ranged";
    this.groupTwo = new Array(6).fill(null);

    this.groupThreeName = "Tank";
    this.groupThree = new Array(6).fill(null);

    this.storage = window.localStorage;
  }

  get data() {
    return {
      1: [this.groupOneName, this.groupOne],
      2: [this.groupTwoName, this.groupTwoName],
      3: [this.groupThreeName, this.groupThree],
    };
  }

  addMember(group, index, value) {
    switch (group) {
      case 1:
        this.groupOne[index] = value;
        return this._checkGroupComp("groupOne");
        break;
      case 2:
        this.groupTwo[index] = value;
        return this._checkGroupComp("groupTwo");
        break;
      case 3:
        this.groupThree[index] = value;
        return this._checkGroupComp("groupThree");
        break;
      default:
        throw new Error(
          "It looks like you are passing me a group number I do not know. \n",
          group
        );
    }
  }

  changeGroupName(group, name) {
    let availableGroups = ["DD", "Ranged", "Tank"];
    if (!availableGroups.indexOf(name)) {
      throw new Error(
        "The group you provided does not exist in my logic, please try a new group name or adjust my logic",
        name
      );
    }
    switch (group) {
      case 1:
        this.groupOneName = name;
        return this._checkGroupComp("groupOne");
        break;
      case 2:
        this.groupTwoName = name;
        return this._checkGroupComp("groupTwo");
        break;
      case 3:
        this.groupThreeName = name;
        return this._checkGroupComp("groupThree");
        break;
      default:
        throw new Error(
          "It looks like you are passing me a group number I do not know. \n",
          group
        );
    }
  }

  storeCurrent(group) {
    switch (group) {
      case 1:
        this.storage.setItem(this.groupOneName, this.groupOne);
        break;
      case 2:
        this.storage.setItem(this.groupTwoName, this.groupTwo);
        break;
      case 3:
        this.storage.setItem(this.groupThreeName, this.groupThree);
        break;
      default:
        throw new Error(
          "It looks like you are passing me a group number I do not know. \n",
          group
        );
    }
  }

  _checkGroupComp(group) {
    console.log(group);
    console.log(this[group]);
    let checkerArr = GroupTypeComposition[this[group + "Name"]];
    let results = []; // an array of objects that are at the index what there
    let score = 0; // this score will be return if it is less than 3 you are thin, if it is greater than three you are fat.
    let arr = [...this[group]]; // this is to avoid any data bleeding, not strictly needed
    console.log(checkerArr);
    arr.forEach((entry) => {
      let flag = 0;
      for (let val of checkerArr) {
        if (val.includes(entry)) {
          flag = score > 3 ? -1 : 1;
          score++;
        }
      }
      results.push(flag);
    });
    console.log(results);
    return [results, score];
  }

  drawTable(element) {
    let self = this;
    let html = `
         <table class="table">
            <thead>
              <tr>
                <th scope="col">Type:</th>
                <th scope="col">P: #1</th>
                <th scope="col">P: #2</th>
                <th scope="col">P: #3</th>
                <th scope="col">P: #4</th>
                <th scope="col">P: #5</th>
                <th scope="col">P: #6</th>
                <th scope="col">Checks</th>
              </tr>
              <tr data-gType = ${this.groupOneName} id=${"groupOne"}>
                <td>
                ${this.groupOneName} 
                </td>
              </tr>
              <tr data-gType = ${this.groupTwoName} id=${"groupTwo"}>
                <td>${this.groupTwoName}</td>
              </tr>
              <tr data-gType = ${this.groupThreeName} id=${"groupThree"}>
                <td>${this.groupThreeName}</td>
              </tr>
            </thead>
          </table>  
    `;

    $("#" + element).html(html);
    $("[data-gType]").each((i, row) => {
      for (let ii = 0; ii < 7; ii++) {
        let id = i + "-" + ii;
        if (ii < 6) {
          $(row).append(
            "<td data-type>" + templates.select(id, i, ii) + "</td>"
          ); // creates the cells with data attributes for row and column
          $("#" + id).append(templates.options1);

          $("#" + id).on("change", (e) => {
            e.preventDefault();
            let select = $("#" + id); // get the select again
            let val = $("#" + id).val(); // gets the value of the select box
            let td = select.parent()[0]; // get the cell surrounding the select
            td.dataset.type = val; // set the data attr type to the value, CSS changes the background
            select[0].dataset.type = val;
            console.log(select.data("type")); // LOL have fun with that in the future lol dumbass
          });
        } else {
          $(row).append(`<td id=${id}></td>`);
        } // creates the cells with data attributes for row and column
      }
    });
  }
}

const GROUPS = new Groups();

export { GROUPS };
