// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Pablo Fiallos
// Created on: Sep 2020
// This file contains the JS functions for index.html
function enterClicked() {
  // input
  const radius = parseInt(document.getElementById("radius").value)

  // output
  document.getElementById("user-info").innerHTML =
    "V = " + (4/3 * Math.PI * radius**3).toFixed(2) + "u<sup> 3</sup>"
}
