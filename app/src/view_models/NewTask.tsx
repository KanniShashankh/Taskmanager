function NewTask() {
    return (
      <div className="App">
              <nav className="flex sm:justify-left space-x-4">
        {[
          ['Home', '/'],
        ].map(([title, url]) => (
          <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
        ))}
      </nav>
        <p> Here you can add tasks into your list. </p>
        <div>
              <form>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">Social Security Number</span>
          <input className="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"/>
          <p className="mt-2 opacity-10 contrast-more:opacity-100 text-slate-600 text-sm">
            We need this to steal your identity.
          </p>
        </label>
      </form>
        </div>
      </div>
    );
  }
  
  export default NewTask;