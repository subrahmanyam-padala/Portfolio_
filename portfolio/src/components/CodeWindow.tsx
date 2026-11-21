/**
 * Decorative code-editor visual for the hero. It only restates facts from the profile
 * (name, role, stack, availability); it makes no claims about experience or results.
 */
const kw = 'text-accent-violet';
const ty = 'text-sky-300';
const st = 'text-emerald-300';
const cm = 'text-slate-500';

export default function CodeWindow() {
  return (
    <figure
      role="img"
      aria-label="Decorative code editor showing a Java class that describes the developer"
      className="overflow-hidden rounded-xl border border-white/10 bg-ink-900 shadow-2xl shadow-black/40"
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-ink-850 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
        <span className="ml-3 font-mono text-xs text-slate-400">Developer.java</span>
      </div>
      <pre
        aria-hidden="true"
        className="overflow-x-auto p-5 font-mono text-[12.5px] leading-6 text-slate-300 sm:text-[13px]"
      >
        <code>
          <span className={cm}>{'// Who I am, in code'}</span>
          {'\n'}
          <span className={kw}>public class</span> <span className={ty}>Developer</span> {'{'}
          {'\n'}
          {'  '}
          <span className={kw}>private final</span> <span className={ty}>String</span> name ={' '}
          <span className={st}>"Naga Subrahmanyam"</span>;{'\n'}
          {'  '}
          <span className={kw}>private final</span> <span className={ty}>String</span> role ={' '}
          <span className={st}>"Software Engineer"</span>;{'\n'}
          {'  '}
          <span className={kw}>private final</span> <span className={ty}>List</span>
          {'<'}
          <span className={ty}>String</span>
          {'>'} stack = <span className={ty}>List</span>.of(
          {'\n'}
          {'      '}
          <span className={st}>"Java"</span>, <span className={st}>"Spring Boot"</span>,{'\n'}
          {'      '}
          <span className={st}>"React"</span>, <span className={st}>"Python"</span>,{' '}
          <span className={st}>"SQL"</span>);{'\n'}
          {'  '}
          <span className={kw}>private final boolean</span> openToWork = <span className={kw}>true</span>;
          {'\n\n'}
          {'  '}
          <span className={kw}>public</span> <span className={ty}>String</span> focus() {'{'}
          {'\n'}
          {'    '}
          <span className={kw}>return</span> <span className={st}>"Backend &amp; full-stack"</span>;
          {'\n'}
          {'  }'}
          {'\n'}
          {'}'}
        </code>
      </pre>
    </figure>
  );
}
