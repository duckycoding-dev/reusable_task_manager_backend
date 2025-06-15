// script to run both bun and tsc in parallel (probably not the best way to do it and `bun run dev:tsc & bun run dev:bun` would be the same thing)
import type { SpawnOptions } from 'bun';

const spawnOptions: SpawnOptions.OptionsObject<
  'inherit',
  'inherit',
  'inherit'
> = {
  stdin: 'inherit',
  stdout: 'inherit',
  stderr: 'inherit',
};

const run = async () => {
  Bun.spawn(['bun', 'run', 'bun:dev'], spawnOptions);
  Bun.spawn(['bun', 'run', 'tsc:dev'], spawnOptions);

  process.on('SIGINT', async () => {
    console.log('Cleaning up...');
  });
};

run();
