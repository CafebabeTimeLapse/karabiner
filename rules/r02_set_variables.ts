import {
  ifVar,
  map,
  mapPointingButton,
  mouseMotionToScroll,
  rule,
} from "karabiner.ts";

export const create_rules_02_set_variables = () => {
  const fKeyPressedVarName = "pressed-f";
  const gKeyPressedVarName = "pressed-g";
  const capsLockPressedVarName = "pressed-caps_lock";
  return [
    rule("variables").manipulators([
      map("caps_lock").toVar(capsLockPressedVarName, true, false),
      map("f").toVar(fKeyPressedVarName, true, false),
      map("g").toVar(gKeyPressedVarName, true, false),
    ]),
    rule("f⇪-layer")
      .condition(ifVar(fKeyPressedVarName), ifVar(capsLockPressedVarName))
      .manipulators([
        map("m").to("1", "shift"),
        map(",").to("2", "shift"),
        map(".").to("3", "shift"),
        map("j").to("4", "shift"),
        map("k").to("5", "shift"),
        map("l").to("6", "shift"),
        map("u").to("7", "shift"),
        map("i").to("8", "shift"),
        map("o").to("9", "shift"),
        map("p").to("0", "shift"),
        map("/").to("="),
        map(";").to("-", "shift"),
      ]),
    rule("g⇪-layer")
      .condition(ifVar(gKeyPressedVarName), ifVar(capsLockPressedVarName))
      .manipulators([
        map("␣").to("0"),
        map("m").to("1"),
        map(",").to("2"),
        map(".").to("3"),
        map("j").to("4"),
        map("k").to("5"),
        map("l").to("6"),
        map("u").to("7"),
        map("i").to("8"),
        map("o").to("9"),
        map("p").to("0"),
        map("/").to("=", "shift"),
        map(";").to("-"),
        map("p").to("8", "shift"),
      ]),
    rule("⇪-layer")
      .condition(ifVar(capsLockPressedVarName))
      .manipulators([
        map("q").to("`", "shift"),
        map("a").to("\\"),
        map("y").to("`"),
        map("u").to("[", "shift"),
        map("i").to("]", "shift"),
        map("o").to("9", "shift"),
        map("p").to("0", "shift"),
        map("h").to("←"),
        map("j").to("↓"),
        map("k").to("↑"),
        map("l").to("→"),
        map(";").to("-"),
        map("'").to("="),
        map("n").to("\\", "shift"),
        map("m").to("["),
        map(",").to("]"),
        map(".").to("-", "shift"),
        map("/").to("=", "shift"),
        mapPointingButton("button1").to("←", "command"),
        mapPointingButton("button2").to("→", "command"),
      ]),
    rule("Trackball mouse motion").manipulators([
      mouseMotionToScroll()
        .options({
          momentum_scroll_enabled: false,
        })
        .condition(ifVar(capsLockPressedVarName)),
    ]),
    rule("capslock to escape").manipulators([map("caps_lock").to("escape")]),
  ];
};
