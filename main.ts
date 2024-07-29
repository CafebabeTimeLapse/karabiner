import { writeToProfile } from "karabiner.ts";
import { create_rules_01_duolayer } from "./rules/r01_duolayer";
import { exit } from "process";
import { create_rules_02_set_variables } from "./rules/r02_set_variables";

const profileName = process.argv[2];

if (!profileName) {
  console.info("Profile name not set. \nSee README.md for the usage.\n");
  exit(1);
}

writeToProfile(profileName, create_rules_01_duolayer());
// writeToProfile(profileName, create_rules_02_set_variables());
