declare global { interface Window { p5: any; } }
let loading: Promise<void> | undefined;
const instances = new Map<HTMLElement, { remove(): void }>();
const pending = new WeakSet<HTMLElement>();

function loadP5() {
  if (window.p5) return Promise.resolve();
  return loading ??= new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js';
    script.onload = () => resolve();
    script.onerror = () => {
      loading = undefined;
      script.remove();
      reject(new Error('Could not load p5.js'));
    };
    document.head.appendChild(script);
  });
}

export async function mountSketch(container: HTMLElement, sketch: (p: any) => void) {
  if (instances.has(container) || pending.has(container)) return;
  pending.add(container);
  try {
    await loadP5();
    if (!container.isConnected) return;
    instances.set(container, new window.p5(sketch, container));
  } catch (error) {
    console.warn('Sketch unavailable:', error);
  } finally {
    pending.delete(container);
  }
}

document.addEventListener('astro:before-swap', () => {
  for (const instance of instances.values()) instance.remove();
  instances.clear();
});
