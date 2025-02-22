<script>
	import { onMount } from 'svelte';
	import { Terminal } from 'xterm';
	import 'xterm/css/xterm.css';
	export const ssr = false;

	let terminal;

	onMount(() => {
		if (typeof window !== 'undefined') {
			terminal = new Terminal({
				rows: 24,
				cols: 80,
				cursorBlink: true,
				theme: {
					background: '#1e1e1e',
					foreground: '#ffffff'
				}
			});

			const terminalContainer = document.getElementById('terminal');
			terminal.open(terminalContainer);

			terminal.writeln('Welcome to your simulated terminal!');
			terminal.prompt = () => {
				terminal.write('\r\n> ');
			};
			terminal.prompt();

			terminal.onData((data) => {
				if (data.charCodeAt(0) === 13) {
					terminal.write('\r\n');
					terminal.prompt();
				} else {
					terminal.write(data);
				}
			});
		}
	});
</script>

<div id="terminal"></div>

<style>
	#terminal {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
</style>
