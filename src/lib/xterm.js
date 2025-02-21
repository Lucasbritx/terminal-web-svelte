import xTerm from '@xterm/xterm';
import 'xterm/css/xterm.css';
// import { Terminal } from 'xterm'; // Breaks in REPL, but should work in prod.

export function xterm(node, data) {
    let term = new xTerm.Terminal();

    term.open(node);
    term.write(data);
}