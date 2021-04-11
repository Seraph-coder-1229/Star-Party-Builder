import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import { GROUPS } from "./Groups.js";
import "./styles.css";

GROUPS.drawTable("table_area");

setInterval(() => {
  GROUPS.storeCurrent();
}, 2 * 60 * 60 * 1000);
