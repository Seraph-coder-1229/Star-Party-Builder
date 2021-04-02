import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import { GROUPS } from "./Groups.js";
import "./styles.css";

const groupOne = $("#group_1");
const groupTwo = $("#group_2");
const groupThree = $("#group_3");

const tableRowOne = $("#group_1_row");
const tableRowTwo = $("#group_2_row");
const tableRowThree = $("#group_3_row");

(function generateSelectBoxes() {
  let groups = [groupOne, groupTwo, groupThree]; // This is not the best way of doing this but o the fuck well lol

  groups.forEach((group, j) => {
    // I hope you are using a modern browser
    for (let i = 0; i < 6; i++) {
      //creates 6 selects per group

      let id = group.attr("id") + "_" + i; // used to make a unique id for each select
      let html = `
            <select class="form-select m-1" id=${id} data-row = ${j} data-column=${i} aria-label="Default select example">
                
            </select>
            `;
      group.append(html); // Add it to the DOM
      $("#" + id).html(`
                <option value=""></option>
                <option value="Buyer">Buyer</option>
                <option value="PLD">PLD</option>
                <option value="RUN">RUN</option>
                <option value="WHM">WHM</option>
                <option value="RDM">RDM</option>
                <option value="SCH">SCH</option>
                <option value="COR">COR</option>
                <option value="BRD">BRD</option>
                <option value="GEO">GEO</option>
                <option value="DNC">DNC</option>
                <option value="SAM">SAM</option>
                <option value="DRK">DRK</option>
                <option value="WAR">WAR</option>
                <option value="MNK">MNK</option>
                <option value="DRG">DRG</option>
                <option value="BLU">BLU</option>
                <option value="BST">BST</option>
                <option value="RNG">RNG</option>
                <option value="NIN">NIN</option>
                <option value="THF">THF</option>
                <option value="BLM">BLM</option>
                <option value="SMN">SMN</option>
                <option value="PUP">PUP</option>
            `); // Add the options tags

      //Add the event listen for the select box
      $("#" + id).on("change", (e) => {
        e.preventDefault();
        // console.log(id);
        let self = $("#" + group.attr("id") + "_" + i);

        let value = self[0].value;
        let row = self.data("row");
        let col = self.data("column");
        let id = row + "-" + col;
        console.log(GROUPS.addMember(row + 1, col, value)); // This stores the new value in a class.
        $("#" + id)
          .html(value)
          .attr("data-type", value); // change the data selector to automatically update the color. To change the colors it is in the .css file
      });
    }
  });
})();

GROUPS.drawTable("table_area");
