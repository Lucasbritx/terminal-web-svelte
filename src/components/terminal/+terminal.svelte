<script>
	import { Terminal } from 'xterm';
	import 'xterm/css/xterm.css';

	let terminal;

	onMount(() => {
		terminal = new Terminal({
			rows: 24, // Number of rows in the terminal
			cols: 80, // Number of columns
			cursorBlink: true, // Cursor animation
			theme: {
				background: '#1e1e1e',
				foreground: '#ffffff'
			}
		});

		// Attach the terminal to a container
		const terminalContainer = document.getElementById('terminal');
		terminal.open(terminalContainer);

		// Simulate some output
		terminal.writeln('Welcome to your simulated terminal!');
		terminal.prompt = () => {
			terminal.write('\r\n> ');
		};
		terminal.prompt();

		// Handle user input
		terminal.onData((data) => {
			if (data.charCodeAt(0) === 13) {
				// Enter key
				terminal.write('\r\n');
				terminal.prompt();
			} else {
				terminal.write(data);
			}
		});
	});
</script>

<div id="terminal"></div>

<style>
	#terminal {
		width: 100 %;
		height: 100 %;
		overflow: hidden;
	}
</style>
