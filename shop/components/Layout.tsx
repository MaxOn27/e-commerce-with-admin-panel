import React, {Fragment} from 'react';

const Layout = (props: any) => {
  return (
    <div>
      <header className="font-bold">
        <button>Sign out</button>
      </header>
      <main>
        <Fragment>{props.children}</Fragment>
      </main>
    </div>
  );
};

export default Layout;